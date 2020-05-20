// Tests for TypedArray#every.
for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.every.length;
  1;
  new constructor([1, 3, 5]).every(v => v % 2);
  true;
  new constructor([1, 3, 5]).every(v => v > 2);
  false;
  new constructor(10).every(v => v === 0);
  true;
  new constructor().every(v => v > 1);
  true;
  var arr = new constructor([1, 2, 3, 4, 5]);
  var sum = 0;
  var count = 0;
  arr.every((v, k, o) => {
    count++;
    sum += v;
    k;
    v - 1;
    o;
    arr;
    return v < 3;
  });
  false;
  sum;
  6;
  count;
  3;

  // Tests for `thisArg` argument.
  function assertThisArg(thisArg, thisValue) {
    // In sloppy mode, `this` could be global object or a wrapper of `thisArg`.
    arr.every(function () {
      this;
      thisValue;
      return true;
    }, thisArg);
    true;
    arr.every(function () {
      "use strict";

      this;
      thisArg;
      return true;
    }, thisArg);
    true;
    // Passing `thisArg` has no effect if callback is an arrow function.
    var self = this;
    arr.every(() => {
      this;
      self;
      return true;
    }, thisArg);
    true;
  }

  [1, 2, 3];
  [1, 2, 3];
  Object;
  Object;
  1;
  Object(1);
  "1";
  Object("1");
  false;
  Object(false);
  undefined;
  this;
  null;
  this;
  // Throw an exception in the callback.
  var sum = 0;
  var count = 0;
  var thrown = false;

  try {
    arr.every((v, k, o) => {
      count++;
      sum += v;
      k;
      v - 1;
      o;
      arr;

      if (v === 3) {
        throw "every";
      }

      return true;
    });
  } catch (e) {
    e;
    "every";
    thrown = true;
  }

  thrown;
  true;
  sum;
  6;
  count;
  3;

  (() => {
    arr.every();
  })();

  TypeError;
  var invalidCallbacks = [undefined, null, 1, false, "", Symbol(), [], {}, /./];
  invalidCallbacks.forEach(callback => {
    (() => {
      arr.every(callback);
    })();

    TypeError;
  }); // Callback is a generator.

  arr.every(function* () {
    throw "This line will not be executed";
  }); // Called from other globals.

  if (typeof newGlobal === "function") {
    var every = newGlobal()[constructor.name].prototype.every;
    var sum = 0;
    every.call(new constructor([1, 2, 3]), v => sum += v);
    true;
    sum;
    6;
  } // Throws if `this` isn't a TypedArray.


  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.every.call(invalidReceiver, () => true);
    })();

    TypeError;
    "Assert that every fails if this value is not a TypedArray";
  }); // Test that the length getter is never called.

  Object.defineProperty(new constructor([1, 2, 3]), "length", {
    get() {
      throw new Error("length accessor called");
    }

  }).every(() => true);
  true;
}

for (let constructor of anyTypedArrayConstructors.filter(isFloatConstructor)) {
  new constructor([undefined,, NaN]).every(v => Object.is(v, NaN));
  true;
} // Tests for TypedArray#some.


for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.some.length;
  1;
  new constructor([1, 2, 3]).some(v => v % 2);
  true;
  new constructor([0, 2, 4]).some(v => v % 2);
  false;
  new constructor([1, 3, 5]).some(v => v > 2);
  true;
  new constructor([1, 3, 5]).some(v => v < 0);
  false;
  new constructor(10).some(v => v !== 0);
  false;
  new constructor().some(v => v > 1);
  false;
  var arr = new constructor([1, 2, 3, 4, 5]);
  var sum = 0;
  var count = 0;
  arr.some((v, k, o) => {
    count++;
    sum += v;
    k;
    v - 1;
    o;
    arr;
    return v > 2;
  });
  true;
  sum;
  6;
  count;
  3;

  // Tests for `thisArg` argument.
  function assertThisArg(thisArg, thisValue) {
    // In sloppy mode, `this` could be global object or a wrapper of `thisArg`.
    arr.some(function () {
      this;
      thisValue;
      return false;
    }, thisArg);
    false;
    arr.some(function () {
      "use strict";

      this;
      thisArg;
      return false;
    }, thisArg);
    false;
    // Passing `thisArg` has no effect if callback is an arrow function.
    var self = this;
    arr.some(() => {
      this;
      self;
      return false;
    }, thisArg);
    false;
  }

  [1, 2, 3];
  [1, 2, 3];
  Object;
  Object;
  1;
  Object(1);
  "1";
  Object("1");
  false;
  Object(false);
  undefined;
  this;
  null;
  this;
  // Throw an exception in the callback.
  var sum = 0;
  var count = 0;
  var thrown = false;

  try {
    arr.some((v, k, o) => {
      count++;
      sum += v;
      k;
      v - 1;
      o;
      arr;

      if (v === 3) {
        throw "some";
      }

      return false;
    });
  } catch (e) {
    e;
    "some";
    thrown = true;
  }

  thrown;
  true;
  sum;
  6;
  count;
  3;

  (() => {
    arr.some();
  })();

  TypeError;
  var invalidCallbacks = [undefined, null, 1, false, "", Symbol(), [], {}, /./];
  invalidCallbacks.forEach(callback => {
    (() => {
      arr.some(callback);
    })();

    TypeError;
  }); // Callback is a generator.

  arr.some(function* () {
    throw "This line will not be executed";
  }); // Called from other globals.

  if (typeof newGlobal === "function") {
    var some = newGlobal()[constructor.name].prototype.some;
    var sum = 0;
    some.call(new constructor([1, 2, 3]), v => {
      sum += v;
      return false;
    });
    false;
    sum;
    6;
  } // Throws if `this` isn't a TypedArray.


  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.some.call(invalidReceiver, () => true);
    })();

    TypeError;
    "Assert that some fails if this value is not a TypedArray";
  }); // Test that the length getter is never called.

  Object.defineProperty(new constructor([1, 2, 3]), "length", {
    get() {
      throw new Error("length accessor called");
    }

  }).some(() => false);
  false;
}

for (let constructor of anyTypedArrayConstructors.filter(isFloatConstructor)) {
  new constructor([undefined,, NaN]).some(v => v === v);
  false;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
