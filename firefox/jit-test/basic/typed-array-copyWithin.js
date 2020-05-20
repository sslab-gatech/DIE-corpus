// Bug 1021379 - Rename typed arrays' move method to copyWithin,
// fix up to ES6 semantics
// Tests for TypedArray#copyWithin
const constructors = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];

for (var constructor of constructors) {
  constructor.prototype.copyWithin.length;
  2;
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3);
  new constructor([4, 5, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(1, 3);
  new constructor([1, 4, 5, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(1, 2);
  new constructor([1, 3, 4, 5, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(2, 2);
  new constructor([1, 2, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3, 4);
  new constructor([4, 2, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(1, 3, 4);
  new constructor([1, 4, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(1, 2, 4);
  new constructor([1, 3, 4, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, -2);
  new constructor([4, 5, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, -2, -1);
  new constructor([4, 2, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(-4, -3, -2);
  new constructor([1, 3, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(-4, -3, -1);
  new constructor([1, 3, 4, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(-4, -3);
  new constructor([1, 3, 4, 5, 5]);

  (function () {
    constructor.prototype.copyWithin.call(null, 0, 3);
  })();

  TypeError;
  "Assert that copyWithin fails if this value is null";

  (function () {
    var throw42 = {
      valueOf: function () {
        throw 42;
      }
    };
    constructor.prototype.copyWithin.call(null, throw42, throw42, throw42);
  })();

  TypeError;
  "Assert that copyWithin fails if this value is null";

  (function () {
    var throw42 = {
      valueOf: function () {
        throw 42;
      }
    };
    constructor.prototype.copyWithin.call(undefined, throw42, throw42, throw42);
  })();

  TypeError;
  "Assert that copyWithin fails if this value is undefined";

  (function () {
    constructor.prototype.copyWithin.call(undefined, 0, 3);
  })();

  TypeError;
  "Assert that copyWithin fails if this value is undefined";

  (function () {
    constructor.prototype.copyWithin.call("hello world", 0, 3);
  })();

  TypeError;
  "Assert that copyWithin fails if this value is string";

  (function () {
    var throw42 = {
      valueOf: function () {
        throw 42;
      }
    };
    constructor.prototype.copyWithin.call("hello world", throw42, throw42, throw42);
  })();

  TypeError;
  "Assert that copyWithin fails if this value is string";
  new constructor([1, 2, 3, 4, 5]).copyWithin(3, 0);
  new constructor([1, 2, 3, 1, 2]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(3, 0, 4);
  new constructor([1, 2, 3, 1, 2]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(0.2, 3.9);
  new constructor([4, 5, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(-0, 3);
  new constructor([4, 5, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, 7);
  new constructor([1, 2, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(7, 0);
  new constructor([1, 2, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(-7, 0);
  new constructor([1, 2, 3, 4, 5]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(-5, 0);
  new constructor([1, 2, 3, 4, 5]);
  new constructor([]).copyWithin(0, 3);
  new constructor([]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(2, 1, 4);
  new constructor([1, 2, 2, 3, 4]);
  // test overlapping ranges
  arr = new constructor([1, 2, 3, 4, 5]);
  arr.copyWithin(2, 1, 4);
  arr.copyWithin(2, 1, 4);
  new constructor([1, 2, 2, 2, 3]);
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3, undefined);
  new constructor([4, 5, 3, 4, 5]);
  // test that this.length is never called
  arr = new constructor([0, 1, 2, 3, 5]);
  Object.defineProperty(arr, "length", {
    get: function () {
      throw new Error("length accessor called");
    }
  });
  arr.copyWithin(1, 3);
  var large = 10000; // test on a large constructor

  arr = new constructor(large);
  arr.copyWithin(45, 900);
  arr;

  // test on floating point numbers
  for (var i = 0; i < large; i++) {
    arr[i] = Math.random();
  }

  arr.copyWithin(45, 900); // test on constructor of objects

  for (var i = 0; i < large; i++) {
    arr[i] = {
      num: Math.random()
    };
  }

  arr.copyWithin(45, 900); // test constructor length remains same

  arr.length;
  large;
  new constructor([1, 2, 3, 4, 5]).copyWithin(0, 3, null);
  new constructor([1, 2, 3, 4, 5]);
  //Any argument referenced, but not provided, has the value |undefined|
  var tarray = new constructor(8);

  try {
    tarray.copyWithin({
      valueOf: function () {
        throw 42;
      }
    });
    throw new Error("expected to throw");
  } catch (e) {
    e;
    42;
    "should have failed converting target to index";
  }

  function detachAndConvertTo(x) {
    return {
      valueOf() {
        detachArrayBuffer(tarray.buffer);
        return x;
      }

    };
  } // Detaching during argument processing triggers a TypeError.


  tarray = new constructor([1, 2, 3, 4, 5]);

  try {
    tarray.copyWithin(0, 3, detachAndConvertTo(4));
    throw new Error("expected to throw");
  } catch (e) {
    e instanceof TypeError;
    true;
    "expected throw with detached buffer during set";
  } // ...unless no elements are to be copied.


  tarray = new constructor([1, 2, 3, 4, 5]);
  tarray.copyWithin(0, 3, detachAndConvertTo(3));
  new constructor([]);
}
