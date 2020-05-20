//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Array extension tests -- verifies the API shape and basic functionality
var getCount = 0;
var hasCount = 0;
var proxyHandler = {
  get: function (oTarget, sKey) {
    if (sKey == "constructor") {
      return Reflect.get(oTarget, sKey);
    } else {
      if (Number(sKey.toString()) != NaN) {
        getCount++;
        return 2222;
      }
    }

    return Reflect.get(oTarget, sKey);
  },
  has: function (oTarget, sKey) {
    hasCount++;
    return Reflect.has(oTarget, sKey);
  }
};

function t1() {
  console.log(Array.hasOwnProperty('from'));
  console.log('function', typeof Array.from);
  console.log(1, Array.from.length);
  console.log(Array.hasOwnProperty('of'));
  console.log('function', typeof Array.of);
  console.log(0, Array.of.length);
}

t1();

function t2() {
  console.log(0, [0].indexOf(-0.0));
}

t2();

function t3() {
  console.log([], Array.from([]));
  console.log([], Array.from([], undefined));
  console.log([0, 1, 2, 3], Array.from([0, 1, 2, 3]));
  console.log([0, 1, 2, 3], Array.from({
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 4
  }));
}

t3();

function t4() {
  var fromFnc = Array.from;
  var b = fromFnc.call(Array, "string");
  console.log('object', typeof b);
  console.log(['s', 't', 'r', 'i', 'n', 'g'], b);
  console.log(6, b.length);
  console.log(ArrayBuffer.isView(b));

  try {
    var b = fromFnc.call(String, [0, 1, 2, 3]);
    console.log('object', typeof b);
    console.log('', b.toString());
    console.log(0, b.length);
    console.log(ArrayBuffer.isView(b));
    console.log(0, b[0]);
    console.log(1, b[1]);
    console.log(2, b[2]);
    console.log(3, b[3]);
  } catch (e) {
    ;
  }

  var a = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 4
  };

  try {
    fromFnc.call(String, a);
  } catch (e) {
    ;
  }

  try {
    fromFnc.call(Uint8Array, {
      0: 0,
      1: 1,
      2: 2,
      length: 5
    });
  } catch (e) {
    ;
  }

  var a = {
    0: 0,
    1: 1,
    3: 3,
    length: 5
  };
  var b = fromFnc.call(Array, a);
  console.log('object', typeof b);
  console.log('0,1,,3,', b.toString());
  console.log(5, b.length);
  console.log(ArrayBuffer.isView(b));
  console.log([0, 1, undefined, 3, undefined], b);
  var a = {
    0: 0,
    1: 1
  };
  var b = fromFnc.call(Array, a);
  console.log('object', typeof b);
  console.log(0, b.length);
  console.log(ArrayBuffer.isView(b));
  console.log([], b);
  console.log([0, 1, 2], fromFnc.call(undefined, [0, 1, 2]));
  console.log([0, 1, 2], fromFnc.call(null, [0, 1, 2]));
  console.log([0, 1, 2], fromFnc.call({}, [0, 1, 2]));
  console.log([0, 1, 2], fromFnc.call(Math.sin, [0, 1, 2]));
}

t4();

function t5() {
  try {
    Array.from();
  } catch (e) {
    ;
  }

  try {
    Array.from(undefined);
  } catch (e) {
    ;
  }

  try {
    Array.from(null);
  } catch (e) {
    ;
  }

  try {
    Array.from({}, null);
  } catch (e) {
    ;
  }

  try {
    Array.from({}, 'string');
  } catch (e) {
    ;
  }

  try {
    Array.from({}, {});
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  var i = 0;

  function mapFunction(val, k) {
    console.log(i, k);
    console.log(val, k);
    console.log(2, arguments.length); // increment expected index

    i++;
  }

  var objectWithoutIterator = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 4
  }; // Verify mapFunction gets called with correct arguments

  Array.from(objectWithoutIterator, mapFunction);
}

t6();

function t7() {
  var thisArg = 'thisArg';

  function mapFunction(val, k) {
    // this will be wrapped as an Object
    console.log(Object(thisArg), this);
  }

  var objectWithoutIterator = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 4
  }; // Verify mapFunction gets called with thisArg passed as this

  Array.from(objectWithoutIterator, mapFunction, thisArg);
}

t7();

function t8() {
  var objectWithoutIterator = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    length: 5
  };

  function mapFunction(val, k) {
    switch (k) {
      case 0:
        // change the objectWithoutIterator length value - we should still fetch the rest of the indexed-elements anyway
        objectWithoutIterator.length = 0;
        return val;

      case 1:
        // change the value of the next indexed value - the new value should end up in the return object
        objectWithoutIterator[2] = 200;
        return val;

      case 2:
        // change the value of a previous indexed value - the old value should end up in the return object
        objectWithoutIterator[0] = -100;
        return val;

      case 3:
        // delete the next indexed value - return object should have undefined there
        delete objectWithoutIterator[4];
        return val;
    } // otherwise


    return val;
  }

  console.log([0, 1, 200, 3, undefined], Array.from(objectWithoutIterator, mapFunction));
}

t8();

function t9() {
  var j = 0;
  var checkThisArg = false;
  var thisArg = 'string';
  var objectWithIterator = {
    [Symbol.iterator]: function () {
      return {
        i: 0,
        next: function () {
          return {
            done: this.i == 5,
            value: this.i++
          };
        }
      };
    }
  };

  function mapFunction(val, k) {
    console.log(j, val);
    console.log(val, k);
    console.log(2, arguments.length); // increment expected value

    j++;

    if (checkThisArg) {
      // this will be wrapped as an Object
      console.log(Object(thisArg), this);
    }
  } // Verify mapFunction gets called with correct arguments


  Array.from(objectWithIterator, mapFunction);
  j = 0;
  checkThisArg = true; // Verify mapFunction gets called with thisArg passed as this

  Array.from(objectWithIterator, mapFunction, thisArg);
}

t9();

function t10() {
  var iterator_val = 0;
  var objectWithIterator = {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          return {
            done: iterator_val == 5,
            value: iterator_val++
          };
        }
      };
    }
  };
  var reset = false;

  function mapFunction(val, k) {
    if (val == 2 && !reset) {
      reset = true;
      iterator_val = 0;
    }

    return val;
  }

  console.log([0, 1, 2, 0, 1, 2, 3, 4], Array.from(objectWithIterator, mapFunction));
}

t10();

function t11() {
  var objectWithIteratorThatIsNotAFunction = {
    [Symbol.iterator]: 'a string'
  };
  var objectWithIteratorWhichDoesNotReturnObjects = {
    [Symbol.iterator]: function () {
      return undefined;
    }
  };
  var objectWithIteratorNextIsNotAFunction = {
    [Symbol.iterator]: function () {
      return {
        next: undefined
      };
    }
  };
  var objectWithIteratorNextDoesNotReturnObjects = {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          return undefined;
        }
      };
    }
  };

  try {
    Array.from(objectWithIteratorThatIsNotAFunction);
  } catch (e) {
    ;
  }

  try {
    Array.from(objectWithIteratorWhichDoesNotReturnObjects);
  } catch (e) {
    ;
  }

  try {
    Array.from(objectWithIteratorNextIsNotAFunction);
  } catch (e) {
    ;
  }

  try {
    Array.from(objectWithIteratorNextDoesNotReturnObjects);
  } catch (e) {
    ;
  }

  var objectWithUndefinedIterator = {
    0: "a",
    1: "b",
    length: 2,
    [Symbol.iterator]: undefined
  };
  var objectWithNullIterator = {
    0: "a",
    1: "b",
    length: 2,
    [Symbol.iterator]: null
  };
  console.log(["a", "b"], Array.from(objectWithUndefinedIterator));
  console.log(["a", "b"], Array.from(objectWithNullIterator));
}

t11();

function t12() {
  console.log([], Array.of());
  console.log([3], Array.of(3));
  console.log([0, 1, 2, 3], Array.of(0, 1, 2, 3));
}

t12();

function t13() {
  var ofFnc = Array.of;

  try {
    ofFnc.call(Uint8ClampedArray, 0, -1, 2, 300, 4);
  } catch (e) {
    ;
  }

  var b = ofFnc.call(Array, 'string', 'other string', 5, {
    0: 'string val',
    length: 10
  });
  console.log('object', typeof b);
  console.log(['string', 'other string', 5, {
    0: 'string val',
    length: 10
  }], b);
  console.log(4, b.length);
  console.log(ArrayBuffer.isView(b));

  try {
    ofFnc.call(String, 0, 1, 2, 3);
  } catch (e) {
    ;
  }

  console.log([], ofFnc.call(Array));
  console.log([], ofFnc.call());
}

t13();

function t14() {
  // ToLength(-1) should be 0 which means we won't execute any iterations in the below calls.
  Array.from({
    length: -1
  });
  Array.prototype.fill.call({
    length: -1
  }, 'a');
  Array.prototype.lastIndexOf.call({
    length: -1
  }, 'a');
}

t14();

function t15() {
  var o = {
    length: 4294967301
  };

  try {
    Array.from(o);
  } catch (e) {
    ;
  }
}

t15();

function t16() {
  let count = 0;
  Array.from({
    get [Symbol.iterator]() {
      count++;
      return [][Symbol.iterator];
    }

  });
  console.log(count, 1);
  count = 0;
  Array.from(new Proxy({}, {
    get(target, property) {
      if (property === Symbol.iterator) {
        count++;
        return [][Symbol.iterator];
      }

      return Reflect.get(target, property);
    }

  }));
  console.log(count, 1);
}

t16();

function t17() {
  var e = {
    length: 4294967301,
    4294967297: 1234
  };
  Array.prototype.fill.call(e, 5678, 4294967298, 4294967300);
  console.log(1234, e[4294967297]);
  console.log(5678, e[4294967298]);
  console.log(5678, e[4294967299]);
  console.log(undefined, e[4294967300]);
  var e = {
    length: 4294967301,
    4294967292: 1234
  };
  Array.prototype.fill.call(e, 5678, 4294967293, 4294967300);
  console.log(1234, e[4294967292]);
  console.log(5678, e[4294967293]);
  console.log(5678, e[4294967294]);
  console.log(5678, e[4294967295]);
  console.log(5678, e[4294967299]);
  console.log(undefined, e[4294967300]);
}

t17();

function t18() {
  var e = {
    length: 4294967301,
    4294967291: 1234,
    4294967294: 5678,
    4294967295: 5678,
    4294967296: 5678,
    4294967297: 9
  };
  console.log(4294967291, Array.prototype.lastIndexOf.call(e, 1234, 4294967300));
  console.log(4294967296, Array.prototype.lastIndexOf.call(e, 5678, 4294967300));
  var e = [1, 2, 3, 4];
  console.log(0, Array.prototype.lastIndexOf.call(e, 1, 4294967296));
  console.log(0, Array.prototype.lastIndexOf.call(e, 1));
}

t18();

function t19() {
  var e = {
    length: 4294967301,
    4294967292: 4294967292,
    4294967293: 4294967293,
    4294967294: 4294967294
  };
  Array.prototype.copyWithin.call(e, 5, 4294967292, 4294967294);
  console.log(4294967292, e[5]);
  console.log(4294967293, e[6]);
  var e = {
    length: 4294967304,
    4294967300: 4294967300,
    4294967301: 4294967301,
    4294967302: 4294967302,
    4294967303: 4294967303
  };
  Array.prototype.copyWithin.call(e, 4294967297, 4294967300, 4294967303);
  console.log(4294967300, e[4294967297]);
  console.log(4294967301, e[4294967298]);
  console.log(4294967302, e[4294967299]);
  var e = {
    length: 4294967301,
    4294967297: 4294967297,
    4294967298: 4294967298,
    4294967299: 4294967299
  };
  Array.prototype.copyWithin.call(e, 5, 4294967297, 4294967300);
  console.log(4294967297, e[5]);
  console.log(4294967298, e[6]);
  console.log(4294967299, e[7]);
  var e = {
    length: 4294967301,
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4
  };
  Array.prototype.copyWithin.call(e, 4294967297, 0, 5);
  console.log(0, e[4294967297]);
  console.log(1, e[4294967298]);
  console.log(2, e[4294967299]);
  console.log(3, e[4294967300]);
  var e = {
    length: 4294967301,
    4294967292: 4294967292,
    4294967293: 4294967293,
    4294967294: 4294967294,
    4294967295: 4294967295,
    4294967296: 4294967296,
    4294967297: 4294967297,
    4294967298: 4294967298,
    4294967299: 4294967299,
    4294967300: 4294967300
  };
  Array.prototype.copyWithin.call(e, 5, 4294967292, 4294967301);
  console.log(4294967292, e[5]);
  console.log(4294967293, e[6]);
  console.log(4294967294, e[7]);
  console.log(4294967295, e[8]);
  console.log(4294967296, e[9]);
  console.log(4294967297, e[10]);
  console.log(4294967298, e[11]);
  console.log(4294967299, e[12]);
  console.log(4294967300, e[13]);
  var e = {
    length: 4294967400,
    4294967292: 4294967292,
    4294967293: 4294967293,
    4294967294: 4294967294,
    4294967295: 4294967295,
    4294967296: 4294967296,
    4294967297: 4294967297,
    4294967298: 4294967298,
    4294967299: 4294967299,
    4294967300: 4294967300
  };
  Array.prototype.copyWithin.call(e, 4294967350, 4294967292, 4294967301);
  console.log(4294967292, e[4294967350]);
  console.log(4294967293, e[4294967351]);
  console.log(4294967294, e[4294967352]);
  console.log(4294967295, e[4294967353]);
  console.log(4294967296, e[4294967354]);
  console.log(4294967297, e[4294967355]);
  console.log(4294967298, e[4294967356]);
  console.log(4294967299, e[4294967357]);
  console.log(4294967300, e[4294967358]);
  var e = {
    length: 4294967301,
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4
  };
  Array.prototype.copyWithin.call(e, 4294967293, 0, 5);
  console.log(0, e[4294967293]);
  console.log(1, e[4294967294]);
  console.log(2, e[4294967295]);
  console.log(3, e[4294967296]);
  console.log(4, e[4294967297]);
  var e = {
    length: 4294967420,
    4294967400: 4294967400,
    4294967401: 4294967401,
    4294967402: 4294967402,
    4294967403: 4294967403,
    4294967404: 4294967404
  };
  Array.prototype.copyWithin.call(e, 4294967293, 4294967400, 4294967405);
  console.log(4294967400, e[4294967293]);
  console.log(4294967401, e[4294967294]);
  console.log(4294967402, e[4294967295]);
  console.log(4294967403, e[4294967296]);
  console.log(4294967404, e[4294967297]);
}

t19();

function t20() {
  var a = [0, 1];
  var r = a.lastIndexOf(0, -3);
  console.log(-1, r);
}

t20();

function t21() {
  var val = Math.cos.bind(Math);
  console.log(Array.isArray(Array.of.call(val)));
}

t21();

function t22() {
  function Bag() {
    ;
  }

  Bag.of = Array.of;
  Object.defineProperty(Bag.prototype, "0", {
    set: function (v) {
      /* no-op */
      ;
    }
  });
  console.log(1);
}

t22();

function t23() {
  function Bag() {
    ;
  }

  Bag.from = Array.from;
  Object.defineProperty(Bag.prototype, "0", {
    set: function (v) {
      throw "Fail";
    }
  });
  var a = [1, 2, 3];
  console.log(1);
}

t23();

function t24() {
  function Bag() {
    ;
  }

  Bag.from = Array.from;
  Object.defineProperty(Bag.prototype, "0", {
    set: function (v) {
      throw "Fail";
    }
  });
  var a = {};
  a[0] = 1;
  a[1] = 2;
  a[2] = 3;
  a.length = 3;
  console.log(1);
}

t24();

function t25() {
  var a = [1, 2, 3];

  a.constructor = function () {
    function Bag() {
      ;
    }

    ;
    Object.defineProperty(Bag.prototype, "0", {
      set: function (v) {
        throw "Fail";
      }
    });
    return new Bag();
  };

  console.log(1);
}

t25();

function t26() {
  var a = [1, 2, 3];

  a.constructor = function () {
    function Bag() {
      ;
    }

    ;
    Object.defineProperty(Bag.prototype, "0", {
      set: function (v) {
        throw "Fail";
      }
    });
    return new Bag();
  };

  console.log(1);
}

t26();

function t27() {
  var a = [1, 2, 3];

  a.constructor = function () {
    function Bag() {
      ;
    }

    ;
    Object.defineProperty(Bag.prototype, "0", {
      set: function (v) {
        throw "Fail";
      }
    });
    return new Bag();
  };

  console.log(2, a.slice(1));
}

t27();

function t28() {
  var a = [1, 2, 3];

  a.constructor = function () {
    function Bag() {
      ;
    }

    ;
    Object.defineProperty(Bag.prototype, "0", {
      set: function (v) {
        throw "Fail";
      }
    });
    return new Bag();
  };

  console.log(1, a.splice(0, 1, 'x')[0]);
}

t28();

function t29() {
  var x = [0];
  Object.freeze(x);

  try {
    Array.prototype.fill.call(x);
  } catch (e) {
    ;
  }
}

t29();

function t30() {
  var x = [1, 2, 3, 4, 5];
  Object.freeze(x);

  try {
    Array.prototype.copyWithin.call(x, 1, 2);
  } catch (e) {
    ;
  }
}

t30();

function t31() {
  var ops = [];
  var handlers = {
    get: function (target, name) {
      ops.push(`get:${name}`);
      return target[name];
    },
    has: function (target, name) {
      ops.push(`has:${name}`);
      return name in target;
    }
  }; // Proxy around the array

  var p = new Proxy([1, 2, 3, 4, 5], handlers);
  p.copyWithin(3);
  ops.toString();
  ops.length = 0; // Iterate backward if ranges overlap and we're copying to a later spot

  p.copyWithin(3, 2);
  ops.toString();
  ops.length = 0; // Proxy around the prototype, and put some holes in the array

  var proto = new Proxy({
    "1": 2,
    "3": 4
  }, handlers);
  var a = [,, 3,,,];
  Object.setPrototypeOf(a, proto);
  Array.prototype.copyWithin.call(a, 0, 1);
  ops.toString();
  ops.length = 0;
}

t31();

function t32() {
  console.log(typeof Array.prototype.concat.call(101)[0]);
}

t32();

function t33() {
  try {
    Boolean.prototype[Symbol.isConcatSpreadable] = true;
    Boolean.prototype[0] = 1;
    Boolean.prototype[1] = 2;
    Boolean.prototype[2] = 3;
    Boolean.prototype.length = 3;
    console.log([].concat(true).length === 1);
  } finally {
    delete Boolean.prototype[Symbol.isConcatSpreadable];
    delete Boolean.prototype[0];
    delete Boolean.prototype[1];
    delete Boolean.prototype[2];
    delete Boolean.prototype.length;
  }
}

t33();

function t34() {
  try {
    String.prototype[Symbol.isConcatSpreadable] = true;
    String.prototype[0] = 1;
    String.prototype[1] = 2;
    String.prototype[2] = 3;
    String.prototype.length = 3;
    console.log([].concat);
  } finally {
    delete String.prototype[Symbol.isConcatSpreadable];
    delete String.prototype[0];
    delete String.prototype[1];
    delete String.prototype[2];
    delete String.prototype.length;
  }
}

t34();

function t35() {
  getCount = 0;
  hasCount = 0;
  var arr1 = [11, 22, 33, 44, 55, 66];
  var arr2 = [11, 22, 33, 44, 55, 66];
  var p = new Proxy(arr1, proxyHandler);
  arr2.__proto__ = p;
  arr2.length = 10;
  var ret = [].filter.call(arr2, function (item) {
    return item > 200;
  });
  console.log(0);
  console.log(4, hasCount);
  console.log(0, getCount);
}

t35();

function t36() {
  getCount = 0;
  hasCount = 0;
  var arr1 = [11, 22, 33, 44, 55, 66];
  var arr2 = [11, 22, 33, 44, 55, 66];
  arr2.length = 10;
  var first = true;
  var ret = [].filter.call(arr2, function (item) {
    if (first) {
      first = false;
      var p = new Proxy(arr1, proxyHandler);
      arr2.__proto__ = p;
    }

    return item > 200;
  });
  console.log(0);
  console.log(4, hasCount);
  console.log(0, getCount);
}

t36();

function t37() {
  getCount = 0;
  hasCount = 0;
  var arr1 = [11, 22, 33, 44, 55, 66];
  var arr2 = [11, 22, 33, 44, 55, 66];
  var p = new Proxy(arr1, proxyHandler);
  arr2.__proto__ = p;
  arr2.length = 10;
  [].every.call(arr2, function (item) {
    return true;
  });
  console.log(4, hasCount);
  console.log(0, getCount);
}

t37();

function t38() {
  getCount = 0;
  hasCount = 0;
  var arr1 = [11, 22, 33, 44, 55, 66];
  var arr2 = [11, 22, 33, 44, 55, 66];
  arr2.length = 10;
  var first = true;
  [].every.call(arr2, function (item) {
    if (first) {
      first = false;
      var p = new Proxy(arr1, proxyHandler);
      arr2.__proto__ = p;
    }

    return true;
  });
  console.log(4, hasCount);
  console.log(0, getCount);
}

t38();

function t39() {
  getCount = 0;
  hasCount = 0;
  var arr1 = [11, 22, 33, 44, 55, 66];
  var arr2 = [11, 22, 33, 44, 55, 66];
  var p = new Proxy(arr1, proxyHandler);
  arr2.__proto__ = p;
  arr2.length = 10;
  [].some.call(arr2, function (item) {
    return false;
  });
  console.log(4, hasCount);
  console.log(0, getCount);
}

t39();

function t40() {
  getCount = 0;
  hasCount = 0;
  var arr1 = [11, 22, 33, 44, 55, 66];
  var arr2 = [11, 22, 33, 44, 55, 66];
  arr2.length = 10;
  var first = true;
  [].some.call(arr2, function (item) {
    if (first) {
      first = false;
      var p = new Proxy(arr1, proxyHandler);
      arr2.__proto__ = p;
    }

    return false;
  });
  console.log(4, hasCount);
  console.log(0, getCount);
}

t40();

function t41() {
  getCount = 0;
  hasCount = 0;
  var arr1 = [11, 22, 33, 44, 55, 66];
  var arr2 = [11, 22, 33, 44, 55, 66];
  var p = new Proxy(arr1, proxyHandler);
  arr2.__proto__ = p;
  arr2.length = 10;
  var ret = [].reduce.call(arr2, function (a, c) {
    return a + c;
  });
  console.log(4, hasCount);
  console.log(0, getCount);
  console.log(231);
}

t41();

function t42() {
  getCount = 0;
  hasCount = 0;
  var arr1 = [11, 22, 33, 44, 55, 66];
  var arr2 = [11, 22, 33, 44, 55, 66];
  arr2.length = 10;
  var first = true;
  var ret = [].reduce.call(arr2, function (a, c) {
    if (first) {
      first = false;
      var p = new Proxy(arr1, proxyHandler);
      arr2.__proto__ = p;
    }

    return a + c;
  });
  console.log(4, hasCount);
  console.log(0, getCount);
  console.log(231);
}

t42();

function t43() {
  getCount = 0;
  hasCount = 0;
  var arr1 = [11, 22, 33, 44, 55, 66];
  var arr2 = [11, 22, 33, 44, 55, 66];
  var p = new Proxy(arr1, proxyHandler);
  arr2.__proto__ = p;
  arr2.length = 10;
  var ret = [].reduceRight.call(arr2, function (a, c) {
    return a + c;
  });
  console.log(4, hasCount);
  console.log(0, getCount);
  console.log(231);
}

t43();

function t44() {
  var returnedArr = {};
  Object.defineProperty(returnedArr, '1', {
    configurable: false
  });
  var arr = [11, 21];
  Object.defineProperty(arr.constructor, Symbol.species, {
    get: function () {
      return function () {
        return returnedArr;
      };
    }
  });

  function test(arr, desc) {
    desc = desc + " has species which gives an array with non-config property, validating on ";
    var error = "Cannot redefine property '1'";

    try {
      Array.prototype.map.call(arr, function (a) {
        return a;
      });
    } catch (e) {
      ;
    }

    try {
      Array.prototype.filter.call(arr, function (a) {
        return true;
      });
    } catch (e) {
      ;
    }

    try {
      Array.prototype.slice.call(arr, 0);
    } catch (e) {
      ;
    }

    try {
      Array.prototype.concat.call(arr, [1, 2]);
    } catch (e) {
      ;
    }
  }

  test(arr, "var array");
  var arr2 = [11];
  Object.defineProperty(arr2, '1', {
    get: function () {
      return 33;
    }
  });
  Object.defineProperty(arr2.constructor, Symbol.species, {
    get: function () {
      return function () {
        return returnedArr;
      };
    }
  });
  test(arr2, "es5 var array");

  function Arr() {
    Object.defineProperty(this, "0", {
      configurable: false
    });
  }

  try {
    Array.of.call(Arr, "a");
  } catch (e) {
    ;
  }

  try {
    Array.from.call(Arr, "a");
  } catch (e) {
    ;
  }
}

t44();
