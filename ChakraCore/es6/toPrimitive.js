//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function AddNumbers(first, second) {
  return first + second;
}

function t1() {
  var a = new Number(1);

  a[Symbol.toPrimitive] = function (hint) {
    if (hint == "string") {
      return "a";
    } else {
      return 10;
    }
  };

  console.log(10 == a);
  console.log(11 == a + 1);
  console.log("a", String(a));
}

t1();

function t2() {
  var o = Object.getOwnPropertyDescriptor(Symbol, "toPrimitive");
  console.log(o.writable);
  console.log(o.enumerable);
  console.log(o.configurable);
  console.log("[Symbol.toPrimitive]", Symbol.prototype[Symbol.toPrimitive].name);
  var o = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toPrimitive);
  console.log(o.writable);
  console.log(o.enumerable);
  console.log(o.configurable);

  try {
    Symbol.prototype[Symbol.toPrimitive]();
  } catch (e) {
    ;
  }

  var s = Symbol();
  console.log(s, Object(s)[Symbol.toPrimitive](), ""); // true

  console.log(s, Symbol.prototype[Symbol.toPrimitive].call(s), ""); // true

  console.log(Symbol.toPrimitive, Symbol.toPrimitive[Symbol.toPrimitive]());
  console.log(Symbol.iterator, Symbol.iterator[Symbol.toPrimitive]());
  console.log(Symbol.hasInstance, Symbol.hasInstance[Symbol.toPrimitive]());
  console.log(Symbol.isConcatSpreadable, Symbol.isConcatSpreadable[Symbol.toPrimitive]());
  console.log(Symbol.match, Symbol.match[Symbol.toPrimitive]());
  console.log(Symbol.replace, Symbol.replace[Symbol.toPrimitive]());
  console.log(Symbol.search, Symbol.search[Symbol.toPrimitive]());
  console.log(Symbol.split, Symbol.split[Symbol.toPrimitive]());
  console.log(Symbol.toStringTag, Symbol.toStringTag[Symbol.toPrimitive]());
  console.log(Symbol.unscopables, Symbol.unscopables[Symbol.toPrimitive]());
}

t2();

function t3() {
  console.log("[Symbol.toPrimitive]", Date.prototype[Symbol.toPrimitive].name);
  var o = Object.getOwnPropertyDescriptor(Date.prototype, Symbol.toPrimitive);
  console.log(o.writable);
  console.log(o.enumerable);
  console.log(o.configurable);
  var d = new Date(2014, 5, 30, 8, 30, 45, 2);
  console.log(d.toString(), d[Symbol.toPrimitive]("string"));
  console.log(d.toString(), d[Symbol.toPrimitive]("default"));
  console.log(d.valueOf(), d[Symbol.toPrimitive]("number"));

  try {
    d[Symbol.toPrimitive]("boolean");
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive]({});
  } catch (e) {
    ;
  }

  console.log(d.toString() + 10, d + 10);
  console.log(d.valueOf(), new Number(d).valueOf());
  delete Date.prototype[Symbol.toPrimitive];
  console.log(Date.prototype.hasOwnProperty(Symbol.toPrimitive));
  console.log(d.toString() + 10, d + 10);
  console.log(d.valueOf(), new Number(d).valueOf());
  Object.defineProperty(Date.prototype, Symbol.toPrimitive, o); // restore deleted [@@toPrimitive] property

  try {
    Date.prototype[Symbol.toPrimitive].call(undefined, "default");
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(null, "default");
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(true, "default");
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(false, "default");
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(0, "default");
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(NaN, "default");
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call('', "default");
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call('abc', "default");
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call();
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(undefined);
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(null);
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(true);
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(false);
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(0);
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(NaN);
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call('');
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call('abc');
  } catch (e) {
    ;
  }

  try {
    Date.prototype[Symbol.toPrimitive].call(function () {
      ;
    });
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive]();
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive](undefined);
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive](null);
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive](true);
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive](false);
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive](0);
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive](NaN);
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive]('');
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive]('abc');
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive](function () {
      ;
    });
  } catch (e) {
    ;
  }

  try {
    d[Symbol.toPrimitive]({});
  } catch (e) {
    ;
  }
}

t3();

function t4() {
  var o = {
    toString: function () {
      return "o";
    },
    valueOf: function () {
      return 0;
    }
  };

  o[Symbol.toPrimitive] = function (hint) {
    if ("string" == hint) {
      return this.toString() + " (hint String)";
    } else {
      if ("number" == hint) {
        return this.valueOf() + 2;
      } else {
        return " (hint default) ";
      }
    }
  };

  console.log(" (hint default) ", o[Symbol.toPrimitive]());
  console.log("o (hint String)", o[Symbol.toPrimitive]("string"));
  console.log(2, o[Symbol.toPrimitive]("number"));
  console.log(2, new Number(o).valueOf(), "toNumber should call toPrimitive which should invoke the user defined behaviour for @@toPrimitive with hint number"); // conversion toNumber -> toPrimitive(hint number)

  console.log("1 (hint default) 1", 1 + o + 1, "add should call toPrimitive which should invoke the user defined behaviour for @@toPrimitive with no hint"); // add -> toPrimitive(hint none)

  console.log("o (hint String)", new String(o).toString(), "toString should call toPrimitive which should invoke the user defined behaviour for @@toPrimitive with hint string"); // conversion toString -> toPrimitive(hint string)
}

t4();

function t5() {
  var o = {
    toString: function () {
      return "o";
    },
    valueOf: function () {
      return 0;
    }
  };
  o[Symbol.toPrimitive] = {}; // can only be a  function else type error

  try {
    var a = o + 1;
  } catch (e) {
    ;
  }

  o[Symbol.toPrimitive] = null;

  try {
    var a = o + 1;
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  var a = new String("a");

  a[Symbol.toPrimitive] = function (hint) {
    if (hint == "string") {
      return "var_a";
    } else {
      return -1;
    }
  };

  console.log(-1 == a);
  console.log("var_a" == String(a));
  console.log(0 == a + 1);
  console.log("var_a1" == String(a) + 1);
  console.log(-1, Number(a));
}

t6();

function t7() {
  var o = {},
      o1 = {},
      o2 = {};
  var retVal, hint;

  o[Symbol.toPrimitive] = function (h) {
    hint.push(h);
    return retVal;
  };

  o1[Symbol.toPrimitive] = function (h) {
    hint.push("o1:" + h);
    return retVal;
  };

  o2[Symbol.toPrimitive] = function (h) {
    hint.push("o2:" + h);
    return retVal;
  }; // Ensuring OrdinaryToPrimitive is not called


  Object.defineProperty(o, "toString", {
    writable: true,
    configurable: true,
    enumerable: true,
    value: function () {
      throw Error("Unexpected toString() call on o");
    }
  });
  Object.defineProperty(o1, "toString", {
    writable: true,
    configurable: true,
    enumerable: true,
    value: function () {
      throw Error("Unexpected toString() call on o1");
    }
  });
  Object.defineProperty(o2, "toString", {
    writable: true,
    configurable: true,
    enumerable: true,
    value: function () {
      throw Error("Unexpected toString() call on o2");
    }
  });
  Object.defineProperty(o, "valueOf", {
    writable: true,
    configurable: true,
    enumerable: true,
    value: function () {
      throw Error("Unexpected valueOf() call on o");
    }
  });
  Object.defineProperty(o1, "valueOf", {
    writable: true,
    configurable: true,
    enumerable: true,
    value: function () {
      throw Error("Unexpected valueOf() call on o1");
    }
  });
  Object.defineProperty(o2, "valueOf", {
    writable: true,
    configurable: true,
    enumerable: true,
    value: function () {
      throw Error("Unexpected valueOf() call on o2");
    }
  });

  var verifyToPrimitive = function (func, expectedResult, expectedHint, description) {
    hint = [];
    console.log(expectedResult, func(), "result:" + description);
    console.log(expectedHint, hint, "hint:" + description);
  }; //
  // ToNumber calls ToPrimitive(input, 'number')
  //


  retVal = NaN;
  verifyToPrimitive(() => Number(o), NaN, ["number"], "Number()");
  verifyToPrimitive(() => new Uint8Array([o]), new Uint8Array([NaN]), ["number"], "TypedArray constructor");
  verifyToPrimitive(() => isFinite(o), false, ["number"], "isFinite()");
  verifyToPrimitive(() => isNaN(o), true, ["number"], "isNaN()");
  retVal = 100;
  verifyToPrimitive(() => 1 - o, -99, ["number"], "1-o");
  verifyToPrimitive(() => o - 2, 98, ["number"], "o-2");
  verifyToPrimitive(() => 1 * o, 100, ["number"], "1*o");
  verifyToPrimitive(() => o * 2, 200, ["number"], "o*2");
  verifyToPrimitive(() => Math.log10(o), 2, ["number"], "Math.log10()");
  verifyToPrimitive(() => o1 - o2, 0, ["o1:number", "o2:number"], "o1-o2");
  verifyToPrimitive(() => o2 / o1, 1, ["o2:number", "o1:number"], "o2/o1");
  retVal = 100;
  var n = o;
  verifyToPrimitive(() => ++n, 101, ["number"], "++n");
  n = o;
  verifyToPrimitive(() => n++, 100, ["number"], "n++");
  n = o;
  verifyToPrimitive(() => --n, 99, ["number"], "--n");
  n = o;
  verifyToPrimitive(() => n--, 100, ["number"], "n--");
  retVal = "abc";
  verifyToPrimitive(() => 1 - o, NaN, ["number"], "1-o ([@@toPrimitive] returns string)");
  verifyToPrimitive(() => o - 2, NaN, ["number"], "o-2 ([@@toPrimitive] returns string)"); //
  // ToString calls ToPrimitive(input, 'string')
  //

  retVal = NaN;
  verifyToPrimitive(() => String(o), "NaN", ["string"], "String()");
  verifyToPrimitive(() => parseFloat(o), NaN, ["string"], "parseFloat()");
  verifyToPrimitive(() => parseInt(o), NaN, ["string"], "parseInt()");
  verifyToPrimitive(() => decodeURI(o), "NaN", ["string"], "decodeURI()"); //
  // ToPropertyKey calls ToPrimitive(input, 'string')
  //

  retVal = NaN;
  var x = {};
  verifyToPrimitive(() => Object.defineProperty(x, o, {
    writable: true,
    enumerable: true,
    configurable: true,
    value: 'abc123'
  }), x, ["string"], "Object.defineProperty()");
  verifyToPrimitive(() => x[o], 'abc123', ["string"], "x[o]");
  verifyToPrimitive(() => x.hasOwnProperty(o), true, ["string"], "Object.prototype.hasOwnProperty()");
  verifyToPrimitive(() => x.propertyIsEnumerable(o), true, ["string"], "Object.prototype.propertyIsEnumerable()");
  verifyToPrimitive(() => o in x, true, ["string"], "o in x"); //
  // + operator calls ToPrimitive(input, 'default')
  //

  retVal = 100;
  verifyToPrimitive(() => o + 1, 101, ["default"], "o+1");
  verifyToPrimitive(() => 2 + o, 102, ["default"], "2+o");
  verifyToPrimitive(() => o + 'abc', '100abc', ["default"], "o+'abc'");
  verifyToPrimitive(() => 'abc' + o, 'abc100', ["default"], "'abc'+o");
  verifyToPrimitive(() => o1 + o2, 200, ["o1:default", "o2:default"], "o1+o2");
  verifyToPrimitive(() => o2 + o1, 200, ["o2:default", "o1:default"], "o2+o1");
  retVal = "abc";
  verifyToPrimitive(() => o + 1, "abc1", ["default"], "o+1 ([@@toPrimitive] returns string)");
  verifyToPrimitive(() => 2 + o, "2abc", ["default"], "2+1 ([@@toPrimitive] returns string)");
  verifyToPrimitive(() => o + 'def', 'abcdef', ["default"], "o+'def'");
  verifyToPrimitive(() => 'def' + o, 'defabc', ["default"], "'def'+o");
  verifyToPrimitive(() => o1 + o2, "abcabc", ["o1:default", "o2:default"], "o1+o2");
  verifyToPrimitive(() => o2 + o1, "abcabc", ["o2:default", "o1:default"], "o2+o1"); //
  // abstract relational comparison calls ToPrimitive(input, "number")
  //

  retVal = 100;
  verifyToPrimitive(() => o < 1, false, ["number"], "o<1");
  verifyToPrimitive(() => 1 < o, true, ["number"], "1<o");
  verifyToPrimitive(() => o <= 25, false, ["number"], "o<=25");
  verifyToPrimitive(() => -9 <= o, true, ["number"], "-9<=o");
  verifyToPrimitive(() => o > 1, true, ["number"], "o>1");
  verifyToPrimitive(() => 1 > o, false, ["number"], "1>o");
  verifyToPrimitive(() => o >= 25, true, ["number"], "o>=25");
  verifyToPrimitive(() => -9 >= o, false, ["number"], "-9>=o");
  verifyToPrimitive(() => o1 < o2, false, ["o1:number", "o2:number"], "o1<o2");
  verifyToPrimitive(() => o2 <= o1, true, ["o2:number", "o1:number"], "o2<=o1");
  verifyToPrimitive(() => o1 > o2, false, ["o1:number", "o2:number"], "o1>o2");
  verifyToPrimitive(() => o2 >= o1, true, ["o2:number", "o1:number"], "o2>=o1"); //
  // abstract equality comparison calls ToPrimitive(input, "default")
  //

  verifyToPrimitive(() => o1 == o2, false, [], ""); // 1. If Type(x) is the same of Type(y) return Strict Equality Comparison x === y

  retVal = 100;
  verifyToPrimitive(() => o == 100, true, ["default"], "o==100");
  verifyToPrimitive(() => 100 == o, true, ["default"], "100==o");
  verifyToPrimitive(() => o == 1, false, ["default"], "o==1");
  verifyToPrimitive(() => 1 == o, false, ["default"], "1==o");
  retVal = true;
  verifyToPrimitive(() => o == true, true, ["default"], "o==true");
  verifyToPrimitive(() => true == o, true, ["default"], "true==o");
  verifyToPrimitive(() => o == false, false, ["default"], "o==false");
  verifyToPrimitive(() => false == o, false, ["default"], "false==o");
  retVal = 'abc';
  verifyToPrimitive(() => o == 'abc', true, ["default"], "o=='abc'");
  verifyToPrimitive(() => 'abc' == o, true, ["default"], "'abc'==o");
  verifyToPrimitive(() => o == 'abc1', false, ["default"], "o=='abc1'");
  verifyToPrimitive(() => 'abc1' == o, false, ["default"], "'abc1'==o");
  retVal = Symbol();
  verifyToPrimitive(() => o == retVal, true, ["default"], "o==retVal (retVal=Symbol())");
  verifyToPrimitive(() => retVal == o, true, ["default"], "retVal==o (retVal=Symbol())");
  verifyToPrimitive(() => o == Symbol(), false, ["default"], "o==Symbol()");
  verifyToPrimitive(() => Symbol() == o, false, ["default"], "Symbol()==o"); //
  // Date constructor calls ToPrimitive(input, "default")
  //

  retVal = 'Jan 1, 2016';
  verifyToPrimitive(() => new Date(o).valueOf(), new Date(retVal).valueOf(), ["default"], "Date() constructor"); //
  // Date.prototype.toJSON calls ToPrimitive(input, "number")
  //

  retVal = NaN;
  verifyToPrimitive(() => Date.prototype.toJSON.call(o), null, ["number"], "Date.prototype.toJSON()"); //
  // Date.prototype[@@toPrimitive] calls ToPrimitive
  //

  Object.defineProperty(o, 'toString', {
    writable: true,
    configurable: true,
    enumerable: true,
    value: function () {
      return 'abc';
    }
  });
  Object.defineProperty(o, 'valueOf', {
    writable: true,
    configurable: true,
    enumerable: true,
    value: function () {
      return 123;
    }
  });
  console.log(123, Date.prototype[Symbol.toPrimitive].call(o, 'number'));
  console.log('abc', Date.prototype[Symbol.toPrimitive].call(o, 'string'));
  console.log('abc', Date.prototype[Symbol.toPrimitive].call(o, 'default'));
}

t7();

function t8() {
  var o = {};
  [{}, new Date(), Error(), new String(), new Boolean(), new Number()].forEach(function (retVal) {
    o[Symbol.toPrimitive] = function (h) {
      return retVal;
    }; //
    // ToNumber
    //


    try {
      Number(o);
    } catch (e) {
      ;
    }

    try {
      new Uint8Array([o]);
    } catch (e) {
      ;
    }

    try {
      isFinite(o);
    } catch (e) {
      ;
    }

    try {
      isNaN(o);
    } catch (e) {
      ;
    }

    try {
      1 - o;
    } catch (e) {
      ;
    }

    try {
      o - 2;
    } catch (e) {
      ;
    }

    try {
      1 * o;
    } catch (e) {
      ;
    }

    try {
      o * 2;
    } catch (e) {
      ;
    }

    try {
      Math.log10(o);
    } catch (e) {
      ;
    }

    var n = o;

    try {
      ++n;
    } catch (e) {
      ;
    }

    n = o;

    try {
      n++;
    } catch (e) {
      ;
    }

    n = o;

    try {
      --n;
    } catch (e) {
      ;
    }

    n = o;

    try {
      n--;
    } catch (e) {
      ;
    } //
    // ToString
    //


    try {
      String(o);
    } catch (e) {
      ;
    }

    try {
      parseFloat(o);
    } catch (e) {
      ;
    }

    try {
      parseInt(o);
    } catch (e) {
      ;
    }

    try {
      decodeURI(o);
    } catch (e) {
      ;
    } //
    // ToPropertyKey
    //


    var x = {};

    try {
      Object.defineProperty(x, o, {});
    } catch (e) {
      ;
    }

    try {
      x[o];
    } catch (e) {
      ;
    }

    try {
      x.hasOwnProperty(o);
    } catch (e) {
      ;
    }

    try {
      x.propertyIsEnumerable(o);
    } catch (e) {
      ;
    }

    try {
      o in x;
    } catch (e) {
      ;
    } //
    // + operator
    //


    try {
      o + 1;
    } catch (e) {
      ;
    }

    try {
      2 + o;
    } catch (e) {
      ;
    }

    try {
      o + 'abc';
    } catch (e) {
      ;
    }

    try {
      'abc' + o;
    } catch (e) {
      ;
    } //
    // abstract relational comparison
    //


    try {
      o < 1;
    } catch (e) {
      ;
    }

    try {
      1 < o;
    } catch (e) {
      ;
    }

    try {
      o <= 25;
    } catch (e) {
      ;
    }

    try {
      -9 <= o;
    } catch (e) {
      ;
    }

    try {
      o > 1;
    } catch (e) {
      ;
    }

    try {
      o >= 25;
    } catch (e) {
      ;
    }

    try {
      -9 >= o;
    } catch (e) {
      ;
    }

    try {
      o < o;
    } catch (e) {
      ;
    }

    try {
      o <= o;
    } catch (e) {
      ;
    }

    try {
      o > o;
    } catch (e) {
      ;
    }

    try {
      o >= o;
    } catch (e) {
      ;
    } //
    // abstract equality comparison
    //


    console.log(o == o);

    try {
      'abc' == o;
    } catch (e) {
      ;
    }

    try {
      o == 'abc';
    } catch (e) {
      ;
    }

    try {
      100 == o;
    } catch (e) {
      ;
    }

    try {
      o == 100;
    } catch (e) {
      ;
    }

    try {
      Symbol() == o;
    } catch (e) {
      ;
    }

    try {
      o == Symbol();
    } catch (e) {
      ;
    }
  });
}

t8();

function t9() {
  var p1 = {
    [Symbol.toPrimitive](hint) {
      Object.defineProperty(a1, "0", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return a1.length;
    }

  };
  var a1 = [1, 2, 3, 4, 5];
  console.log(3, a1.lastIndexOf(4, p1));
  var a1_proto = {};
  Object.defineProperty(a1_proto, "1", {
    get: function () {
      Object.defineProperty(a1_prototest, "0", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 2;
    }
  });
  var a1_prototest = [,, 3, 4, 5];
  a1_prototest.__proto__ = a1_proto;
  var c1_prototest = [].lastIndexOf.call(a1_prototest, 30);
  console.log(0, c1_prototest);
}

t9();

function t10() {
  var p2 = {
    [Symbol.toPrimitive](hint) {
      Object.defineProperty(a2, "0", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 0;
    }

  };
  var a2 = [1, 2, 3, 4, 5];
  console.log(3, a2.indexOf(4, p2));
  var a2_proto = {};
  Object.defineProperty(a2_proto, "0", {
    get: function () {
      Object.defineProperty(a2_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 1;
    }
  });
  var a2_prototest = [,, 3, 4, 5];
  a2_prototest.__proto__ = a2_proto;
  var c2_prototest = [].indexOf.call(a2_prototest, 30);
  console.log(1, c2_prototest);
}

t10();

function t11() {
  var p3 = {
    [Symbol.toPrimitive](hint) {
      Object.defineProperty(a3, "0", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 0;
    }

  };
  var a3 = [1, 2, 3, 4, 5];
  var b3 = a3.splice(p3);
  console.log([30, 2, 3, 4, 5], b3);
  var a3_proto = {};
  Object.defineProperty(a3_proto, "0", {
    get: function () {
      Object.defineProperty(a3_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 1;
    }
  });
  var a3_prototest = [,, 3, 4, 5];
  a3_prototest.__proto__ = a3_proto;
  var c3_prototest = [].splice.call(a3_prototest, 0);
  console.log([1, 30, 3, 4, 5], c3_prototest);

  function a3_constructor(x) {
    ;
  }

  ;

  a3_constructor[Symbol.species] = function () {
    Object.defineProperty(a3_species, "0", {
      configurable: true,
      get: function () {
        return 30;
      }
    });
    return {};
  };

  var a3_species = [1, 2, 3, 4, 5];
  a3_species['constructor'] = a3_constructor;
  var c3_species = a3_species.splice(0);
  console.log(30, c3_species["0"]);
  console.log("30,2,3,4,5", [].join.call(c3_species, ","));
}

t11();

function t12() {
  var p4 = {
    [Symbol.toPrimitive](hint) {
      Object.defineProperty(a4, "0", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 0;
    }

  };
  var a4 = [1, 2, 3, 4, 5];
  var b4 = a4.slice(p4);
  console.log([30, 2, 3, 4, 5], b4);
  var a4_proto = {};
  Object.defineProperty(a4_proto, "0", {
    get: function () {
      Object.defineProperty(a4_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 1;
    }
  });
  var a4_prototest = [,, 3, 4, 5];
  a4_prototest.__proto__ = a4_proto;
  var c4_prototest = [].slice.call(a4_prototest, 0);
  console.log([1, 30, 3, 4, 5], c4_prototest);

  function a4_constructor(x) {
    ;
  }

  ;

  a4_constructor[Symbol.species] = function () {
    Object.defineProperty(a4_species, "0", {
      configurable: true,
      get: function () {
        return 30;
      }
    });
    return {};
  };

  var a4_species = [1, 2, 3, 4, 5];
  a4_species['constructor'] = a4_constructor;
  var c4_species = a4_species.slice(0);
  console.log(30, c4_species["0"]);
  console.log("30,2,3,4,5", [].join.call(c4_species, ","));
}

t12();

function t13() {
  var p5 = {
    [Symbol.toPrimitive](hint) {
      Object.defineProperty(a5, "0", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 0;
    }

  };
  var a5 = [1, 2, 3, 4, 5];
  console.log(a5.includes(30, p5));
  var a5_proto = {};
  Object.defineProperty(a5_proto, "0", {
    get: function () {
      Object.defineProperty(a5_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 1;
    }
  });
  var a5_prototest = [,, 3, 4, 5];
  a5_prototest.__proto__ = a5_proto;
  console.log([].includes.call(a5_prototest, 30));
}

t13();

function t14() {
  var p2 = {
    [Symbol.toPrimitive](hint) {
      // The first element changes during the visit to the first element; so it's side-effect won't be seen by Find method.
      Object.defineProperty(a2, "0", {
        configurable: true,
        get: function () {
          return 20;
        }
      }); // The second element changes during the visit to the first element; so it's side-effect will be seen by Find method.

      Object.defineProperty(a2, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 10;
    }

  };
  var a2 = [1, 2, 3, 4, 5];
  var c2 = a2.find(function (x) {
    return x % p2 == 0;
  });
  console.log(30, c2);
  var a2_prototest = [,, 3, 4, 5];
  var a2_proto = {};
  Object.defineProperty(a2_proto, "0", {
    get: function () {
      Object.defineProperty(a2_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 7;
    }
  });
  a2_prototest.__proto__ = a2_proto;
  var c2_prototest = [].find.call(a2_prototest, function (x) {
    return x % 10 == 0;
  });
  console.log(30, c2_prototest);
  var p3 = {
    [Symbol.toPrimitive](hint) {
      // The first element changes during the visit to the first element; so it's side-effect won't be seen by FindIndex method.
      Object.defineProperty(a3, "0", {
        configurable: true,
        get: function () {
          return 30;
        }
      }); // The second element changes during the visit to the first element; so it's side-effect will be seen by FindIndex method.

      Object.defineProperty(a3, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 30;
    }

  };
  var a3 = [1, 2, 3, 4, 5];
  var c3 = a3.findIndex(function (x) {
    return x == p3;
  });
  console.log(1, c3);
}

t14();

function t15() {
  var p4 = function (x) {
    Object.defineProperty(a4, "1", {
      configurable: true,
      get: function () {
        return 30;
      }
    });
    return x * x;
  };

  var a4 = [1, 2, 3, 4, 5];
  var c4 = a4.map(p4);
  console.log([1, 900, 9, 16, 25], c4);

  var p4_typedarray = function (x) {
    Object.defineProperty(a4_typedarray, "1", {
      configurable: false,
      value: 30
    });
    return x * x;
  };

  var a4_typedarray = new Int32Array([1, 2, 3, 4, 5]);
  var c4_typedarray = a4_typedarray.map(p4_typedarray);
  console.log([1, 900, 9, 16, 25], c4_typedarray);

  function a4_constructor(x) {
    ;
  }

  ;

  a4_constructor[Symbol.species] = function () {
    Object.defineProperty(a4_species, "1", {
      configurable: true,
      get: function () {
        return 30;
      }
    });
    return {};
  };

  var a4_species = [1, 2, 3, 4, 5];
  a4_species['constructor'] = a4_constructor;
  var c4_species = a4_species.map(function (x) {
    return x * x;
  });
  console.log([1, 900, 9, 16, 25], c4_species);
  var a4_proto = {};
  Object.defineProperty(a4_proto, "0", {
    get: function () {
      Object.defineProperty(a4_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 7;
    }
  });

  var SquareNumber = function (x) {
    return x * x;
  };

  var a4_prototest = [,, 3, 4, 5];
  a4_prototest.__proto__ = a4_proto;
  var c4_prototest = [].map.call(a4_prototest, SquareNumber);
  console.log([49, 900, 9, 16, 25], c4_prototest);
}

t15();

function t16() {
  var p6 = {
    [Symbol.toPrimitive](hint) {
      // The first element changes during the visit to the first element; so it's side-effect won't be seen by Reduce method.
      Object.defineProperty(a6, "0", {
        configurable: true,
        get: function () {
          return 30;
        }
      }); // The second element changes during the visit to the first element; so it's side-effect will be seen by Reduce method.

      Object.defineProperty(a6, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 0;
    }

  };
  var a6 = [1, 2, 3, 4, 5];
  var c6 = a6.reduce(AddNumbers, p6);
  console.log(43, c6);
  var a6_proto = {};
  Object.defineProperty(a6_proto, "0", {
    get: function () {
      Object.defineProperty(a6_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 1;
    }
  });
  var a6_prototest = [,, 3, 4, 5];
  a6_prototest.__proto__ = a6_proto;
  var c6_prototest = [].reduce.call(a6_prototest, AddNumbers);
  console.log(43, c6_prototest); // Regression tests

  var a6_es5 = [1, 2, 3, 4, 5];
  Object.defineProperty(a6_es5, "0", {
    configurable: true,
    get: function () {
      return 30;
    }
  });
  var c6_es5 = a6_es5.reduce(AddNumbers);
  console.log(44, c6_es5);
}

t16();

function t17() {
  var p7 = {
    [Symbol.toPrimitive](hint) {
      // The last element changes during the visit to the last element; so it's side-effect won't be seen by ReduceRight method.
      Object.defineProperty(a7, "4", {
        configurable: true,
        get: function () {
          return 30;
        }
      }); // The second element changes during the visit to the first element; so it's side-effect will be seen by ReduceRight method.

      Object.defineProperty(a7, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 0;
    }

  };
  var a7 = [1, 2, 3, 4, 5];
  var c7 = a7.reduceRight(AddNumbers, p7);
  console.log(43, c7);
  var a7_proto = {};
  Object.defineProperty(a7_proto, "4", {
    get: function () {
      Object.defineProperty(a7_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 5;
    }
  });
  var a7_prototest = [1,, 3, 4,,];
  a7_prototest.__proto__ = a7_proto;
  var c7_prototest = [].reduceRight.call(a7_prototest, AddNumbers);
  console.log(43, c7_prototest); // Regression test

  var a7_es5 = [1, 2, 3, 4, 5];
  Object.defineProperty(a7_es5, "0", {
    configurable: true,
    get: function () {
      return 30;
    }
  });
  var c7_es5 = a7_es5.reduceRight(AddNumbers);
  console.log(44, c7_es5);
}

t17();

function t18() {
  var p8 = {
    [Symbol.toPrimitive](hint) {
      Object.defineProperty(a8, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 30;
    }

  };

  function MatchNumber(numberToMatch) {
    return numberToMatch == p8;
  }

  var a8 = [1, 2, 3, 4, 5];
  var c8 = a8.some(MatchNumber);
  console.log(c8);
  var a8_proto = {};
  Object.defineProperty(a8_proto, "0", {
    get: function () {
      Object.defineProperty(a8_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 5;
    }
  });
  var a8_prototest = [,, 3, 4, 5];
  a8_prototest.__proto__ = a8_proto;
  var c8_prototest = [].some.call(a8_prototest, function (elem) {
    return elem == 30;
  });
  console.log(c8_prototest);
}

t18();

function t19() {
  var p9 = {
    [Symbol.toPrimitive](hint) {
      Object.defineProperty(a9, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 30;
    }

  };

  function CompareNumber(numberToMatch) {
    return numberToMatch < p9;
  }

  var a9 = [1, 2, 3, 4, 5];
  var c9 = a9.every(CompareNumber);
  console.log(c9);
  var a9_proto = {};
  Object.defineProperty(a9_proto, "0", {
    get: function () {
      Object.defineProperty(a9_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 1;
    }
  });
  var a9_prototest = [,, 3, 4, 5];
  a9_prototest.__proto__ = a9_proto;
  var c9_prototest = [].every.call(a9_prototest, function (elem) {
    return elem < 30;
  });
  console.log(c9_prototest);
}

t19();

function t20() {
  var temp = 30;
  var p10 = {
    [Symbol.toPrimitive](hint) {
      Object.defineProperty(a10, 1, {
        configurable: true,
        get: function () {
          return temp;
        },
        set: function (value) {
          temp = value;
        }
      });
      return 0;
    }

  };
  var a10 = [1, 2, 3, 4, 5];
  var c10 = a10.fill(0, p10);
  console.log([0, 0, 0, 0, 0], c10);
}

t20();

function t21() {
  var p11 = {
    [Symbol.toPrimitive](hint) {
      // The first element changes during the visit to the first element; so it's side-effect won't be seen by filter method.
      Object.defineProperty(a11, "0", {
        configurable: true,
        get: function () {
          return 30;
        }
      }); // The last element changes during the visit to the first element; so it's side-effect will be seen by filter method.

      Object.defineProperty(a11, "4", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 0;
    }

  };
  var a11 = [1, 2, 3, 4, 5];
  var c11 = a11.filter(function (elem) {
    return elem % 2 == p11;
  });
  console.log([2, 4, 30], c11);
  var a11_proto = {};
  Object.defineProperty(a11_proto, "0", {
    get: function () {
      Object.defineProperty(a11_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 1;
    }
  });
  var a11_prototest = [,, 3, 4, 5];
  a11_prototest.__proto__ = a11_proto;
  var c11_prototest = [].filter.call(a11_prototest, function (elem) {
    return elem % 2 == 0;
  });
  console.log([30, 4], c11_prototest);
  var p11_typedarray = {
    [Symbol.toPrimitive](hint) {
      // The first element changes during the visit to the first element; so it's side-effect won't be seen by filter method.
      Object.defineProperty(a11_typedarray, "0", {
        configurable: false,
        value: 30
      }); // The last element changes during the visit to the first element; so it's side-effect will be seen by filter method.

      Object.defineProperty(a11_typedarray, "4", {
        configurable: false,
        value: 30
      });
      return 0;
    }

  };
  var a11_typedarray = new Int16Array([1, 2, 3, 4, 5]);
  var c11_typedarray = a11_typedarray.filter(function (elem) {
    return elem % 2 == p11_typedarray;
  });
  console.log([2, 4, 30], c11_typedarray);

  function a11_constructor(x) {
    ;
  }

  ;

  a11_constructor[Symbol.species] = function () {
    Object.defineProperty(a11_species, "0", {
      configurable: true,
      get: function () {
        return 30;
      }
    });
    return {};
  };

  var a11_species = [1, 2, 3, 4, 5];
  a11_species['constructor'] = a11_constructor;
  var c11_species = a11_species.filter(function (elem) {
    return elem % 2 == 0;
  });
  console.log([30, 2, 4], c11_species);
}

t21();

function t22() {
  var a18 = [1, 2, 3, 4, 5];
  var c18 = "";
  a18.forEach(function (item, index) {
    if (index == 0) {
      // The first element changes during the visit to the first element; so it's side-effect won't be seen by forEach method.
      Object.defineProperty(a18, "0", {
        configurable: true,
        get: function () {
          return 30;
        }
      }); // The last element changes during the visit to the first element; so it's side-effect will be seen by forEach method.

      Object.defineProperty(a18, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
    } else {
      c18 = c18 + ",";
    }

    c18 = c18 + item * item;
  });
  console.log("1,900,9,16,25", c18);
  var a18_proto = {};
  Object.defineProperty(a18_proto, "0", {
    get: function () {
      Object.defineProperty(a18_prototest, "1", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return 1;
    }
  });
  var a18_prototest = [,, 3, 4, 5];
  a18_prototest.__proto__ = a18_proto;
  var c18_prototest = "";
  [].forEach.call(a18_prototest, function (item, index) {
    if (index > 0) {
      c18_prototest += ",";
    }

    c18_prototest += item * item;
  });
  console.log("1,900,9,16,25", c18_prototest);
  var a18_typedarray = new Int16Array([1, 2, 3, 4, 5]);
  var c18_typedarray = "";
  a18_typedarray.forEach(function (item, index) {
    if (index == 0) {
      // The first element changes during the visit to the first element; so it's side-effect won't be seen by forEach method.
      Object.defineProperty(a18_typedarray, "0", {
        configurable: false,
        value: 30
      }); // The last element changes during the visit to the first element; so it's side-effect will be seen by forEach method.

      Object.defineProperty(a18_typedarray, "1", {
        configurable: false,
        value: 30
      });
    } else {
      c18_typedarray = c18_typedarray + ",";
    }

    c18_typedarray = c18_typedarray + item * item;
  });
  console.log("1,900,9,16,25", c18_typedarray);
}

t22();

function t23() {
  var p21 = {
    [Symbol.toPrimitive](hint) {
      Object.defineProperty(a21, "0", {
        configurable: true,
        get: function () {
          return 30;
        }
      });
      return -2;
    }

  };
  var a21 = [1, 2, 3, 4, 5];
  var c21 = a21.copyWithin(p21);
  console.log([30, 2, 3, 30, 2], c21);
  var a21_proto = {};
  Object.defineProperty(a21_proto, "0", {
    get: function () {
      Object.defineProperty(a21_prototest, "1", {
        configurable: true,
        get: function () {
          return 2;
        }
      });
      return 30;
    }
  });
  var a21_prototest = [,, 3, 4, 5];
  a21_prototest.__proto__ = a21_proto;
  var c21_prototest = [].copyWithin.call(a21_prototest, -2);
  console.log("30,2,3,30,2", [].join.call(c21_prototest, ","));
  var p21_typedarray = {
    [Symbol.toPrimitive](hint) {
      Object.defineProperty(a21_typedarray, "0", {
        configurable: false,
        value: 30
      });
      return -2;
    }

  };
  var a21_typedarray = new Int16Array([1, 2, 3, 4, 5]);
  var c21_typedarray = a21_typedarray.copyWithin(p21_typedarray);
  console.log([30, 2, 3, 30, 2], c21_typedarray);
}

t23();
