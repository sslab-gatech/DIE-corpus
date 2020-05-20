//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function testGetPropertyNames(foo, checkForName) {
  var properties = Object.getOwnPropertyNames(foo);
  var len = properties.length;
  var check = 0;

  for (var i = 0; i < len; i++) {
    var prop = properties[i].toString();

    if (prop == "prototype" || checkForName && prop == "name" || prop == "arguments" || prop == "caller" || prop == "length") {
      check++;
    }

    if (!checkForName && prop == "name") {
      return false;
    }
  }

  return check == len;
}

function t1() {
  function foo() {
    ;
  } //function declaration


  console.log("foo", foo.name);
  foo.name = "bar";
  console.log("foo", foo.name);
  console.log("funcExpr", function funcExpr() {
    ;
  }.name);

  assignment = function () {
    ;
  }; // "assignment"


  console.log("assignment", assignment.name);

  var lambdaDecl = () => {
    ;
  }; // "lambda assignment"


  console.log("lambdaDecl", lambdaDecl.name);

  var a = function bar() {
    ;
  };

  var b = foo;
  console.log("bar", a.name);
  console.log("foo", b.name);
}

t1();

function t2() {
  var f = function () {
    ;
  };

  console.log("f", f.name);
  f.name = "foo";
  console.log("f", f.name);
  console.log(undefined, function () {
    ;
  }.prototype.name);
  console.log(Object.hasOwnProperty.call(function () {
    ;
  }, 'name'));
  (function () {
    ;
  }).name;
  (function () {
    ;
  })["name"]; //lambdas () => {}

  console.log(Object.hasOwnProperty.call(() => {
    ;
  }, 'name'));
  (() => {
    ;
  }).name;
  (() => {
    ;
  })["name"]; //generators

  console.log(Object.hasOwnProperty.call(function* () {
    ;
  }, 'name'));
  (function* () {
    ;
  }).name;
  (function* () {
    ;
  })["name"]; //classes

  console.log(Object.hasOwnProperty.call(class {}, 'name'));
  (class {}).name;
  (class {})['name'];
}

t2();

function t4() {
  //default constructor case
  var qux = class {
    static name() {
      ;
    }

  };
  typeof qux.name;
  console.log("name", qux.name.name);
  console.log(qux.name, qux.prototype.constructor.name, "confirm qux.prototype.constructor.name is the same function as qux.name");
  console.log("Function", qux.constructor.name);
  var qux = class {
    constructor(a, b) {
      ;
    }

    static name() {
      ;
    }

  };
  var quxobj = new qux(1, 2);
  typeof qux.name;
  console.log("name", qux.name.name);
  console.log(qux.name, qux.prototype.constructor.name, "confirm qux.prototype.constructor.name is the same function as qux.name");
  console.log("Function", qux.constructor.name);
}

t4();

function t5() {
  var o = {
    "": function () {
      ;
    },
    "Anonymous function": function () {
      ;
    },
    "Function code": function () {
      ;
    }
  };
  console.log("");
  console.log("Anonymous function", o["Anonymous function"].name);
  console.log("Function code", o["Function code"].name);
}

t5();

function t7() {
  var a = [];
  var b = 1;
  var c = 2;

  a[4] = function () {
    ;
  };

  a[1.2] = function () {
    ;
  };

  function foo() {
    return a;
  }

  foo()[5] = function () {
    ;
  };

  a[4 + 3] = function () {
    ;
  };

  a[b] = function () {
    ;
  };

  a[c] = function () {
    ;
  };

  a[b + c] = function () {
    ;
  };

  var index1 = 4;
  var index2 = 4 + 8;
  var o = {
    index1: function () {
      ;
    },
    index2: function () {
      ;
    },
    [index1 + 1]: function () {
      ;
    }
  };
  o.index1.name;
  o.index2.name;
  console.log("5", o[5].name);
  console.log("b", a[1].name);
  console.log("c", a[2].name);
  console.log("1.2", a[1.2].name);
  var o = {
    1.4: function () {
      ;
    }
  };
  console.log("1.4", o[1.4].name);
  console.log("", a[3].name);
  console.log("4", a[4].name);
  console.log("5", a[5].name);
  console.log("", a[7].name);
}

t7();

function t8() {
  var o = {
    "hello.friend": function () {
      ;
    },
    "[a": function () {
      ;
    },
    "]": function () {
      ;
    },
    "]a": function () {
      ;
    }
  };
  console.log("hello.friend", o["hello.friend"].name);
  console.log("[a", o["[a"].name);
  console.log("]", o["]"].name);
  console.log("]a", o["]a"].name);
  var o = {
    "a[": function () {
      ;
    }
  };
  console.log("a[", o["a["].name);
  var o = {
    ["a["]: function () {
      ;
    }
  };
  console.log("a[", o["a["].name);
  var a = [];

  a["["] = function () {
    ;
  };

  a["]"] = function () {
    ;
  };

  console.log("");
  console.log("");

  a["hello.buddy"] = function () {
    ;
  };

  console.log("");

  class ClassTest {
    static [".f"]() {
      ;
    }

    static ["f."]() {
      ;
    }

    static ["f["]() {
      ;
    }

    static ["f]"]() {
      ;
    }

    static ["]]f]]"]() {
      ;
    }

    static ["[f"]() {
      ;
    }

    static ["[[[[[f"]() {
      ;
    }

    static ["]f"]() {
      ;
    }

  }

  console.log("f.");
  console.log(".f");
  console.log("f[");
  console.log("f]");
  console.log("]]f]]");
  console.log("[f");
  console.log("[[[[[f");
  console.log("]f");
  var a = {
    "\0": {
      f: function () {
        ;
      },
      c: class {}
    }
  };
  console.log("f");
  console.log("c");
}

t8();

function t9() {
  var a = class foo {};
  console.log("foo", a.name);

  class ClassDecl {} // constructor is "ClassDecl"


  var c = class {
    method() {
      ;
    }

  };
  var b = new c();
  console.log("ClassDecl", ClassDecl.name);
  console.log("c", c.name);
  console.log("method", b.method.name);
  ClassDecl.name = "foo";
  console.log("ClassDecl", ClassDecl.name);
  console.log("ClassExpr", class ClassExpr {}.name);
  var classFoo = class {
    constructor() {
      ;
    } // "classFoo "


    static func() {
      ;
    } // "func"


    method() {
      ;
    } // "method"


    get getter() {
      ;
    } // "get getter"


    set setter(v) {
      ;
    } // "set setter"


  };

  class classFoo2 {
    constructor() {
      ;
    }

  }

  console.log("Function", classFoo2.constructor.name);
  console.log("classFoo2", classFoo2.prototype.constructor.name);
  var oGet = Object.getOwnPropertyDescriptor(classFoo.prototype, "getter");
  var oSet = Object.getOwnPropertyDescriptor(classFoo.prototype, "setter");
  console.log("Function", classFoo.constructor.name);
  console.log("classFoo", classFoo.name);
  console.log("classFoo", classFoo.prototype.constructor.name);
  console.log("func", classFoo.func.name);
  console.log("method", classFoo.prototype.method.name);
  console.log("get getter", oGet.get.name);
  console.log("set setter", oSet.set.name);
  var instanceFoo = new classFoo();
  var instanceFoo2 = new classFoo2();
  console.log("classFoo2", instanceFoo2.constructor.name);
  console.log("classFoo", instanceFoo.constructor.name);
  console.log("method", instanceFoo.method.name);
}

t9();

function t10() {
  function* gf() {
    ;
  }

  var gfe = function* () {
    ;
  };

  var obj = {
    gfm: function* () {
      ;
    }
  };
  console.log("gf", gf.name);
  console.log("gfe", gfe.name);
  console.log("gfm", obj.gfm.name);
  var GeneratorFunction = Object.getPrototypeOf(gf).constructor;
  console.log("anonymous", new GeneratorFunction().name);
}

t10();

function t11() {
  let obj = {
    prop: () => {
      ;
    },
    noOverride: function named() {
      ;
    },
    "literal": function () {
      ;
    },
    5: () => {
      ;
    }
  };
  console.log("prop", obj.prop.name);
  console.log("named", obj.noOverride.name);
  console.log("literal", obj.literal.name);
  console.log("5", obj["5"].name);
  var obj2 = {
    method() {
      ;
    }

  };

  obj2.property = function () {
    ;
  };

  console.log("method", obj2.method.name);
  console.log("", obj2.property.name);
}

t11();

function t12() {
  var object = {
    f: function () {
      ;
    }
  };
  console.log("f", object.f.name);
  object.f.name = "foo";
  console.log("f", object.f.name);
}

t12();

function t13() {
  var foo = {
    value: 0,
    get: function () {
      return value;
    },
    set: function (val) {
      value = val;
    }
  };
  console.log("get", foo.get.name);
  console.log("set", foo.set.name);
  var obj3 = {
    get: function foo() {
      ;
    },
    set: function bar(v) {
      ;
    }
  }; //like the var a = function foo() {} case a inherits foo's name

  console.log("foo", obj3.get.name);
  console.log("bar", obj3.set.name);
}

t13();

function t14() {
  var oRuntime = Object.getOwnPropertyDescriptor(Map.prototype, "size");
  console.log("get size", oRuntime.get.name);
  console.log(undefined, oRuntime.set); // Single Property descriptor

  var o = {
    get foo() {
      ;
    },

    set foo(x) {
      ;
    }

  };
  var descriptor = Object.getOwnPropertyDescriptor(o, "foo");
  console.log("get foo", descriptor.get.name);
  console.log("set foo", descriptor.set.name);
  let obj = {
    get getter() {
      return 0;
    },

    set setter(v) {
      ;
    }

  }; // Multiple property descriptors

  var oGet = Object.getOwnPropertyDescriptor(obj, "getter");
  var oSet = Object.getOwnPropertyDescriptor(obj, "setter");
  console.log("get getter", oGet.get.name);
  console.log("set setter", oSet.set.name);
}

t14();

function t15() {
  function foo() {
    ;
  }

  console.log(true, testGetPropertyNames(foo, true));
  console.log(0, Object.keys(foo).length);
  Object.defineProperty(foo, "name", {
    writable: false,
    enumerable: true,
    configurable: true
  });
  var o = Object.getOwnPropertyDescriptor(foo, "name");
  console.log(true, o.enumerable);

  for (i in foo) {
    console.log("name", i);
  }

  console.log(1, Object.keys(foo).length);
  console.log("name", Object.keys(foo).toString());
}

t15();

function t16() {
  function foo() {
    ;
  }

  console.log(true, testGetPropertyNames(foo, true));
  delete foo.name;
  console.log(true, testGetPropertyNames(foo, false));
}

t16();

function t17() {
  console.log("slice", [].slice.name);
  [].slice.name = "bar";
  console.log("slice", [].slice.name);
}

t17();

function t18() {
  console.log(true, testGetPropertyNames([].splice, true));
  delete [].splice.name;
  console.log(true, testGetPropertyNames([].splice, false));
}

t18();

function t19() {
  console.log("anonymous", new Function().name);
  console.log("", Function.prototype.name);
}

t19();

function t20() {
  var obj = {
    x: function () {
      ;
    },
    y: () => {
      ;
    },
    z: class {}
  };
  console.log("x", obj.x.name);
  console.log("y", obj.y.name);
  console.log("z", obj.z.name);
  var obj = {
    innerObj: {
      x: function () {
        ;
      },
      y: () => {
        ;
      },
      z: class {}
    }
  };
  console.log("x", obj.innerObj.x.name);
  console.log("y", obj.innerObj.y.name);
  console.log("z", obj.innerObj.z.name);
  var obj = {};

  obj.x = function () {
    ;
  };

  obj.y = () => {
    ;
  };

  obj.z = class {};
  console.log("", obj.x.name);
  console.log("", obj.y.name);
  console.log("", obj.z.name);
  var obj = {
    innerObj: {}
  };

  obj.innerObj.x = function () {
    ;
  };

  obj.innerObj.y = () => {
    ;
  };

  obj.innerObj.z = class {};
  console.log("", obj.innerObj.x.name);
  console.log("", obj.innerObj.y.name);
  console.log("", obj.innerObj.z.name);
}

t20();

function t21() {
  function foo() {
    ;
  }

  var f = new foo();
  console.log("foo", f.constructor.name);
  console.log(undefined, f.name);
}

t21();

function t22() {
  function foo() {
    ;
  }

  console.log(true, foo.hasOwnProperty("name"));
  var o = Object.getOwnPropertyDescriptor(foo, "name");
  console.log(false, o.writable);
  console.log(false, o.enumerable);
  console.log(true, o.configurable);
  console.log("foo", o.value);
}

t22();

function t23() {
  var sym1 = Symbol("foo");
  var sym2 = Symbol("bar");
  var sym3 = Symbol("baz");
  var sym4 = Symbol();
  var o = {
    [Symbol.toPrimitive]: function () {
      ;
    },
    [sym1]: function () {
      ;
    },
    [sym3]: function bear() {
      ;
    },
    [sym4]: function () {
      ;
    }
  };

  o[Symbol.unscopables] = function () {
    ;
  };

  o[sym2] = function () {
    ;
  };

  o[sym1].name;
  o[Symbol.toPrimitive].name;
  console.log("", o[Symbol.unscopables].name);
  console.log("sym2", o[sym2].name);
  console.log("bear", o[sym3].name);
  console.log("", o[sym4].name);
}

t23();

function t24() {
  function foo() {
    ;
  }

  Object.defineProperty(foo, "name", {
    writable: true,
    enumerable: true,
    configurable: false
  });
  foo.name = "bar";
  var o = Object.getOwnPropertyDescriptor(foo, "name");
  console.log(true, o.writable);
  console.log(true, o.enumerable);
  console.log(false, o.configurable);
  console.log("bar", o.value);
  console.log("bar", foo.name);
}

t24();

function t25() {
  var str = "hello\0 foo";
  var a = [];

  a["hello\0 foo"] = function () {
    ;
  };

  var o = {
    [str]: function () {
      ;
    },
    ["h\0h"]: function () {
      ;
    }
  };
  var b = {};

  b["hello\0 foo"] = function () {
    ;
  };

  var c = {
    "hello\0 foo": function () {
      ;
    }
  };
  console.log(str, o[str].name);
  console.log("h\0h");
  console.log("hello\0 foo");
  console.log("hello\0 foo");
  console.log("hello\0 foo");
  var d = {
    "goo.\0d": function () {
      ;
    }
  };
  var e = {
    "g\0oo\0.d": function () {
      ;
    }
  };
  var f = {
    "fo\0o": class {}
  };
  console.log("goo.\0d");
  console.log("g\0oo\0.d");
  console.log("fo\0o");
}

t25();

function t26() {
  function add(x, y) {
    return x + y;
  }

  var AddZer0 = add.bind(null, 0
  /* x */
  );
  var Add2Nums = add.bind();
  console.log("bound add", AddZer0.name);
  console.log("bound add", Add2Nums.name);
}

t26();

function t27() {
  e = ''['u3 = undefined'] = function () {
    ;
  };

  console.log('', e.name);

  f = ''['[f]o'] = function () {
    ;
  };

  console.log('', f.name);
}

t27();

function t28() {
  var b = {};

  var c = b.x = function Ctor() {
    ;
  };

  var a = new c();
  console.log('Ctor', b.x.name);
  console.log('Ctor', c.name);
  console.log('Ctor', a.constructor.name);
}

t28();

function t29() {
  class B {
    static ["n" + "a" + "me"]() {
      ;
    }

  }

  console.log("function", typeof B.name);
  console.log("name", B.name.name);
  var o = {
    ['A' + 'B']: class extends B {},
    ['C' + 'B']: class {},
    ['a' + 'b']: class extends B {
      foo_ab() {
        ;
      }

    },
    ['c' + 'b']: class {
      foo_cb() {
        ;
      }

    },
    ['d' + 'f']: class extends B {
      static foo_df() {
        ;
      }

    },
    ['f' + 'd']: class {
      static foo_fd() {
        ;
      }

    }
  };
  console.log("AB", o.AB.name);
  console.log("CB", o.CB.name);
  console.log("ab", o.ab.name);
  console.log("cb", o.cb.name);
  console.log("df", o.df.name);
  console.log("fd", o.fd.name);
}

t29();

function t30() {
  var target = Object.defineProperty(function () {
    ;
  }, 'name', {
    value: 'target'
  });
  console.log('bound bound target', target.bind().bind().name);
  d = Object.getOwnPropertyDescriptor(target.bind().bind(), 'name');
  console.log(false, d.writable);
  console.log(false, d.enumerable);
  console.log(true, d.configurable);
}

t30();

function t31() {
  var namedSym = Symbol('test');
  var anonSym = Symbol();

  class A {
    set [namedSym](_) {
      ;
    }

    get [namedSym]() {
      ;
    }

  }

  var classASymbolSet = Object.getOwnPropertyDescriptor(A.prototype, namedSym).set;
  var classASymbolGet = Object.getOwnPropertyDescriptor(A.prototype, namedSym).get;
  console.log("get [test]", classASymbolGet.name);
  console.log("set [test]", classASymbolSet.name);

  class B {
    set [anonSym](_) {
      ;
    }

    get [anonSym]() {
      ;
    }

  }

  var classBSymbolSet = Object.getOwnPropertyDescriptor(B.prototype, anonSym).set;
  var classBSymbolGet = Object.getOwnPropertyDescriptor(B.prototype, anonSym).get;
  console.log("get ", classBSymbolGet.name);
  console.log("set ", classBSymbolSet.name);
}

t31();

function t32() {
  var first = 'a';
  var second = 'b';
  var third = Symbol('c');
  var fourth = Symbol();
  var o;
  o = {
    [first]: class {},
    [second]: class {},
    [third]: class {},
    [fourth]: class {}
  };
  console.log("a", o[first].name);
  console.log("b", o[second].name);
  console.log("[c]", o[third].name);
  console.log("", o[fourth].name);
}

t32();

function t33() {
  var b = "barzee";

  class foo {
    [b]() {
      ;
    }

  }

  ;
  var inst = new foo();
  inst[b].toString();
  inst[b].name;
}

t33();

function t34() {
  class C {
    foo() {
      ;
    }

  }

  ;
  new C().foo.name;
}

t34();

function t35() {
  var obj = {};
  Object.defineProperty(obj, 'test', {
    get: function () {
      ;
    },
    set: function () {
      ;
    }
  });
  var desc = Object.getOwnPropertyDescriptor(obj, 'test');
  desc.get.name;
  desc.set.name;
}

t35();

function t36() {
  var obj = {};

  obj.foo = function () {
    console.log(obj.foo.name);
  };

  obj.foo();
}

t36();
