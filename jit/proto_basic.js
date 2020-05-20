//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var helpers = function helpers() {
  //private
  return {
    isInBrowser: function isInBrowser() {
      return false;
    },

    // TODO: instead of this hack consider exposing this/ScriptConfiguration through WScript.
    get isCompatVersion9() {
      return false;
    },

    get isVersion10OrLater() {
      return true;
    },

    // If propName is provided, thedummy object would have 1 property with name = propName, value = 0.
    getDummyObject: function getDummyObject(propName) {
      var dummy = this.isInBrowser() ? document : {}; //var dummy = {};

      if (propName != undefined) {
        dummy[propName] = 0;
      }

      return dummy;
    },
    writeln: function writeln() {
      var line = "",
          i;

      for (i = 0; i < arguments.length; i += 1) {
        line = line.concat(arguments[i]);
      }

      console.log(line);
    },
    printObject: function printObject(o) {
      var name;

      for (name in o) {
        this.writeln(name, o.hasOwnProperty(name) ? "" : " (inherited)", ": ", o[name]);
      }
    },
    withPropertyDeleted: function withPropertyDeleted(object, propertyName, callback) {
      var descriptor = Object.getOwnPropertyDescriptor(object, propertyName);

      try {
        delete object[propertyName];
        callback();
      } finally {
        Object.defineProperty(object, propertyName, descriptor);
      }
    },
    getTypeOf: function getTypeOf(object) {
      return Object.prototype.toString.call(object);
    },
    getFileAndLineInfo: function getFileAndLineInfo() {
      return new Error().stack.toString().replace(/[\w\W]*at body\s*/, "").replace(/\n[\w\W]*/, "");
    }
  };
}();

function printProtoChain(obj) {
  var known = [Number.prototype, Boolean.prototype, String.prototype, Object.prototype, Array.prototype, Function.prototype];
  var names = ["Number.prototype", "Boolean.prototype", "String.prototype", "Object.prototype", "Array.prototype", "Function.prototype"];
  var s = "";

  while (obj) {
    var i = known.indexOf(obj);
    var name = i >= 0 ? names[i] : JSON.stringify(obj);

    if (s == "") {
      s = name;
    } else {
      s += " -> " + name;
    }

    obj = Object.getPrototypeOf(obj);
  }

  helpers.writeln(s);
}

function make_point(_x, _y) {
  return {
    x: _x,
    y: _y
  };
}

function t1() {
  var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
  helpers.printObject(desc);
}

t1();

function t2() {
  console.log(12["__proto__"] === Number.prototype);
  console.log(12.3["__proto__"] === Number.prototype);
  console.log(new Number(12).__proto__ === Number.prototype);
  console.log(true.__proto__ === Boolean.prototype);
  console.log(false.__proto__ === Boolean.prototype);
  console.log(new Boolean(true).__proto__ === Boolean.prototype);
  console.log(new Boolean(false).__proto__ === Boolean.prototype);
  console.log("hello".__proto__ === String.prototype);
  console.log(new String("hello").__proto__ === String.prototype);
  console.log({}.__proto__ === Object.prototype);
  console.log([].__proto__ === Array.prototype);
  console.log(Array.prototype.__proto__ === Object.prototype);
  console.log(Object.prototype.__proto__ === null);
  console.log(Array.__proto__ === Function.prototype);
  console.log(Function.__proto__ === Function.prototype);
  console.log(Function.prototype.__proto__ === Object.prototype);
  var o = {
    a: 0
  };
  console.log(o.__proto__ === Object.prototype);
  console.log(o.__proto__.__proto__ === null);
}

t2();

function t3() {
  function changeProtoAndTest(obj, newProto, test) {
    var oldProto = obj.__proto__;
    obj.__proto__ = newProto;
    printProtoChain(obj);

    try {
      test();
    } finally {
      obj.__proto__ = oldProto; // Restore old __proto__
    }
  } // Number doesn't have sort method, should throw


  try {
    12["sort"]();
  } catch (e) {
    ;
  } // Number gets Array methods from new prototype in the chain


  changeProtoAndTest(Number.prototype, Array.prototype, function () {
    12["sort"]();
    var o = new Number(34);
    o[0] = 8;
    o[1] = 3;
    o[2] = 9;
    o[3] = 5;
    o.length = 4;
    console.log("8 3 9 5");
    o.sort();
    console.log("3 5 8 9");
  }); // Boolean doesn't have String methods

  try {
    true.toUpperCase();
  } catch (e) {
    ;
  } // Boolean gets String methods from new prototype in the chain


  changeProtoAndTest(Boolean.prototype, new String("abc"), function () {
    true.toUpperCase();
    false.toUpperCase();
    new Boolean(true).toUpperCase();
    new Boolean(false).toUpperCase();
  });
}

t3();

function t4() {
  var a = {}; // Set an object's prototype to undefined

  {
    var a = {};
    console.log(a.__proto__ === Object.prototype);
    console.log(!a.isPrototypeOf(a));
    a.__proto__ = undefined;
    console.log(a.__proto__ === Object.prototype);
    console.log(!a.isPrototypeOf(a));

    try {
      Object.setPrototypeOf(a, undefined);
    } catch (e) {
      ;
    }
  } // Set an object's prototype to null

  function f1(O, P) {
    O.__proto__ = P;
  }

  function f2(O, P) {
    Object.setPrototypeOf(O, P);
  }

  [f1, f2].forEach(function (f) {
    var a = {};
    console.log(a.__proto__ === Object.prototype);
    console.log(!a.isPrototypeOf(a));
    f(a, null);
    console.log(Object.getPrototypeOf(a) === null);
    console.log(a.__proto__ === undefined);
    console.log(a.isPrototypeOf === undefined);
  }); // side test -- try to change null/undefined's __proto__ should throw

  var __proto__setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
  [null, undefined].forEach(function (o) {
    try {
      __proto__setter.apply(o, [{}]);
    } catch (e) {
      ;
    }

    try {
      Object.setPrototypeOf(o, {});
    } catch (e) {
      ;
    }
  });
}

t4();

function t5() {
  function assertThrowAndNoChange(proto) {
    var a = {};
    a.__proto__ = proto;
    console.log(Object.getPrototypeOf(a) === Object.prototype);

    try {
      Object.setPrototypeOf(a, proto);
    } catch (e) {
      ;
    }

    console.log(Object.getPrototypeOf(a) === Object.prototype);
  }

  var __proto__setter = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set;
  [undefined, 0, 123, -12.3, NaN, Infinity, true, false, "str"].forEach(function (proto) {
    proto;

    // side test -- try to change these primitive's __proto__ should pass (but has no effect)
    if (proto !== undefined) {
      proto.__proto__ = {}; // This is ok

      __proto__setter.apply(proto, [{}]); // This is ok


      Object.setPrototypeOf(proto, {});
    }
  });
}

t5();

function t6() {
  var a = {
    a: 100,
    b: 100
  };
  var b = {
    b: 200,
    c: 200
  };
  b.__proto__ = a;
  helpers.printObject(b);
  helpers.writeln("\n-- delete b.b --");
  delete b.b;
  helpers.printObject(b);
}

t6();

function t7() {
  var a = [8, 3, 9, 5];
  var b = {
    b: 200
  }; // b.sort not available

  try {
    b.sort();
  } catch (e) {
    ;
  }

  ;
  b.__proto__ = a;
  console.log(!Array.isArray(b));
  helpers.printObject(b);
  helpers.writeln("\n-- a.sort --");
  a.sort();
  helpers.printObject(b);
  helpers.writeln("\n-- b.sort --");
  b.sort();
  helpers.printObject(b);
}

t7();

function t8() {
  var a = {
    a: 100
  };
  var b = [8, 3, 9, 5];
  b.__proto__ = a;
  console.log(Array.isArray(b));
  helpers.printObject(b); // But now b.sort is gone

  try {
    b.sort();
  } catch (e) {
    ;
  }

  ; // We can sort by apply

  helpers.writeln("\n-- sort.apply --");
  Array.prototype.sort.apply(b);
  helpers.printObject(b);
}

t8();

function t9() {
  function test(domObj, expected) {
    var p0 = Object.getPrototypeOf(domObj);
    console.log(p0 === domObj.__proto__);
    var p1 = {
      __proto__: p0
    };
    domObj.__proto__ = p1;
    console.log(expected, Object.getPrototypeOf(domObj) === p1);
    console.log(expected || domObj.document !== null); // expected succeed or otherwise window
  }

  if (helpers.isInBrowser()) {
    test(this, false);
    test(window, false);
    test(window.frames[0], false);
    test(document, true);
    test(document.body, true);
    test(document.createElement("div"), true); // test form scope

    var f = document.getElementById("form1");
    var p0 = f.__proto__;
    f.__proto__ = {
      form1_injected: "form1_injected_value",
      __proto__: p0
    };
    var button1 = document.getElementById("button1");
    button1.click();
    button1.form1_injected_copy;
  }
}

t9();

function t10() {
  function A() {
    ;
  }

  function B() {
    ;
  }

  var a = new A();
  var b = new B();
  console.log(!(b instanceof A));
  console.log(!A.prototype.isPrototypeOf(b));
  console.log(b instanceof B);
  console.log(B.prototype.isPrototypeOf(b));
  b.__proto__ = A.prototype;
  console.log(b instanceof A);
  console.log(A.prototype.isPrototypeOf(b));
  console.log(!(b instanceof B));
  console.log(!B.prototype.isPrototypeOf(b));
  b.__proto__ = a;
  console.log(b instanceof A);
  console.log(A.prototype.isPrototypeOf(b));
  console.log(!(b instanceof B));
  console.log(!B.prototype.isPrototypeOf(b));
  b.__proto__ = B.prototype;
  console.log(!(b instanceof A));
  console.log(!A.prototype.isPrototypeOf(b));
  console.log(b instanceof B);
  console.log(B.prototype.isPrototypeOf(b));
}

t10();

function t11() {
  var a = {};
  var b = {};
  var c = {};
  a.__proto__ = b;
  b.__proto__ = c;

  try {
    c.__proto__ = a;
  } catch (e) {
    ;
  }

  try {
    a.__proto__ = a;
  } catch (e) {
    ;
  }

  try {
    Array.prototype.__proto__ = [];
  } catch (e) {
    ;
  }
}

t11();

function t12() {
  var a = make_point(1, 2);
  var b = make_point(3, 4); //
  // Create prototype chain:
  //      x -> y -> a
  // where x inherits properties from prototype a.
  //

  var y = Object.create(a);
  var x = Object.create(y);

  function print(o) {
    helpers.writeln(o.x + ", " + o.y);
  }

  helpers.writeln("Before change");
  print(x); //
  // Now change prototype chain:
  //    x -> y -> b
  // While changing y.__proto__, we should discard inline proto cache in original chain.
  // x should now get changed properties from prototype b.
  //

  helpers.writeln("After change");
  y.__proto__ = b;
  print(x);
}

t12(); // Copy of above proto cache test and change a getter

function t13() {
  var a = make_point(1, 2);
  var b = make_point(3, 4);
  Object.defineProperty(a, "y", {
    get: function () {
      return 7;
    },
    enumerable: true,
    configurable: true
  });
  var y = Object.create(a);
  var x = Object.create(y);

  function print(o) {
    helpers.writeln(o.x + ", " + o.y);
  }

  helpers.writeln("Before change");
  print(x);
  helpers.writeln("After change");
  y.__proto__ = b;
  print(x);
}

t13();

function t14() {
  var b = make_point(3, 4);

  function print(o) {
    helpers.writeln(o.x + ", " + o.y);
  }

  var x = {};
  helpers.writeln("Before change");
  print(x);
  helpers.writeln("After change");
  x.__proto__ = b; // This should mark "b" as a prototype object

  print(x);
  helpers.writeln("After change proto property");
  Object.defineProperty(b, "x", {
    get: function () {
      return 9;
    },
    enumerable: true,
    configurable: true
  });
  print(x);
}

t14();

function t15() {
  function f(o, a) {
    var m = o.x;

    if (a > 0) {
      o.__proto__ = {}; // ObjTypeSpec won't generate 2nd type check for the next "o.x" load. But implicit call bailout should bailout right here.
    }

    var n = o.x;
    console.log(1, m);
    console.log(a > 0 ? undefined : 1, n);
  }

  var p = {
    x: 1
  };
  var o = Object.create(p);
  f(o, 0); // no __proto__ change in interpreter.

  f(o, 0); // -maxInterpretCount:1, still no __proto__ change in jit.

  f(o, 1); // -maxInterpretCount:1, now with __proto__ change in jit.
}

t15();

function t16() {
  function f() {
    return {
      x_100: 1
    }; // Use x_100 to start a unique path
  }

  var o1 = f();
  o1.__proto__ = {
    a: 2
  };
  o1.y = 1; // This has path "x" -> "x, y"

  var o2 = f();
  o2.y = 1; // This also has path "x" -> "x, y"
  // But o1 and o2 can't go to the same Type. If they do, they have the same [[prototype]], which is wrong.

  console.log(2, o1.a);
  console.log(undefined, o2.a);
}

t16();

function t17() {
  function f() {
    return {
      x_101: 1
    }; // Use x_101 to start a unique path
  }

  var o1 = f();
  o1.y = 1; // This has path "x" -> "x, y"

  var o2 = f();
  o2.__proto__ = {
    a: 2
  };
  o2.y = 1; // This also has path "x" -> "x, y"
  // But o1 and o2 can't go to the same Type. If they do, they have the same [[prototype]], which is wrong.

  console.log(undefined, o1.a);
  console.log(2, o2.a);
}

t17();

function t18() {
  var p = {};
  var o = {};
  o.__proto__ = p;
  Object.defineProperty(p, "__proto__", {
    value: 10,
    writable: true,
    enumerable: true,
    configurable: true
  });
  console.log(10, o.__proto__);
  o.__proto__ = -100;
  console.log(-100, o.__proto__);
  delete o.__proto__;
  console.log(10, o.__proto__);
  delete p.__proto__;
  console.log(p, o.__proto__);
  console.log(Object.prototype, p.__proto__);
  o.__proto__ = {
    a: 123
  };
  console.log(123, o.a);
}

t18();

function t19() {
  var o = [];
  o.length = 10;
  var p = [123];
  o.__proto__ = p; // Now o's prototype != Array.prototype

  console.log(123, o[0]);
  var p0 = {
    "1": 4
  };
  p.__proto__ = p0; // Now p's prototype != Object.prototype

  console.log(4, o[1]);
  p0.__proto__ = null;
  console.log(undefined, o[2]);
}

t19();

function t20() {
  var o = [];
  o.__proto__ = null;
  console.log(undefined, o[1]);
}

t20();

function t21() {
  var o = [];
  o.__proto__ = [12, 34];
  o.__proto__.__proto__ = null;
  console.log(undefined, o[5]);
}

t21();

function t22() {
  function make_array() {
    var arr = [];

    for (var p in arguments) {
      var i = arguments[p];
      arr[i] = i;
    }

    return arr;
  }

  var o = [];
  o.length = 10;
  o.__proto__ = make_array(0, 1, 2);
  o.__proto__.__proto__ = make_array(3, 4);
  o.__proto__.__proto__.__proto__ = {
    "5": 5,
    "6": 6
  };
  o.__proto__.__proto__.__proto__.__proto__ = Array.prototype;
  var a = o.slice();
  a.toString();
  a.__proto__ = make_array(8, 9);
  a.toString();
}

t22();

function t24() {
  function test(x) {
    var p = {
      a: 1
    }; // Should go through general change prototype code path and mark "p" as prototype. Then changes to "p" should invalidate proto cache.

    x.__proto__ = p;
    console.log(1, x.a);
    Object.defineProperty(p, "a", {
      get: function () {
        return 2;
      },
      configurable: true
    });
    console.log(2, x.a);
  }

  console.log(__proto__ === Object.prototype); // default binds to global this.__proto__

  test(this);
  __proto__ = {
    b: 3,
    __proto__: __proto__
  };
  console.log(2, a);
  console.log(3, b);
}

t24();

function t25() {
  var a = new String();
  a[1] = "a1";
  a[2] = "a2";
  a.__proto__ = [];
  var b = [0];
  b.__proto__ = a;
  b.length = 5;
  b = b.concat([]);
  JSON.stringify(b);
}

t25();

function t26() {
  var a = {};
  Object.preventExtensions(a);

  try {
    a.__proto__ = {
      x: 1
    };
  } catch (e) {
    ;
  }

  console.log(a.__proto__ === Object.prototype);
}

t26();

function t27() {
  var a = {
    __proto__: {}
  };
  a.x = 0; // populate cache -- whole prototype chain has only writable data properties

  a.__proto__.__proto__ = /a_regex/;
  a.source = 1;
}

t27();

function t28() {
  var other = {
    b: 1
  };
  var a = {
    __proto__: other
  };
  console.log(1, a.b);
  a.x = 0; // try to populate cache -- prototype chain has only writable data properties -- our code actually would not cache cross-context

  Object.defineProperty(other, "y", {
    value: 2,
    enumerable: true,
    writable: false
  });
  a.y = 1234;
  console.log(2, a.y);
}

t28();

function fx() {
  console.log(Object.prototype.__proto__ === undefined);
  console.log(Object.hasOwnProperty("getPrototypeOf") && !Object.hasOwnProperty("setPrototypeOf"));
  var o = {
    __proto__: {
      pp: 123
    }
  }; // compat mode: not working in object literal

  console.log(undefined, o.pp);
}

fx();
