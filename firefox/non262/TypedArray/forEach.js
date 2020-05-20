// Tests for TypedArray#forEach
for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.forEach.length;
  1;
  var arr = new constructor([1, 2, 3, 4, 5]); // Tests for `thisArg` argument.

  function assertThisArg(thisArg, thisValue) {
    // In sloppy mode, `this` could be global object or a wrapper of `thisArg`.
    arr.forEach(function () {
      this;
      thisValue;
      return false;
    }, thisArg); // In strict mode, `this` strictly equals `thisArg`.

    arr.forEach(function () {
      "use strict";

      this;
      thisArg;
      return false;
    }, thisArg); // Passing `thisArg` has no effect if callback is an arrow function.

    var self = this;
    arr.forEach(() => {
      this;
      self;
      return false;
    }, thisArg);
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
    arr.forEach(v => {
      count++;
      sum += v;

      if (v === 3) {
        throw "forEach";
      }
    });
    undefined;
  } catch (e) {
    e;
    "forEach";
    thrown = true;
  }

  thrown;
  true;
  sum;
  6;
  count;
  3;

  (() => {
    arr.forEach();
  })();

  TypeError;
  var invalidCallbacks = [undefined, null, 1, false, "", Symbol(), [], {}, /./];
  invalidCallbacks.forEach(callback => {
    (() => {
      arr.forEach(callback);
    })();

    TypeError;
  }); // Callback is a generator.

  arr.forEach(function* () {
    throw "This line will not be executed";
  }); // Called from other globals.

  if (typeof newGlobal === "function") {
    var forEach = newGlobal()[constructor.name].prototype.forEach;
    var sum = 0;
    forEach.call(new constructor([1, 2, 3]), v => {
      sum += v;
    });
    sum;
    6;
  } // Throws if `this` isn't a TypedArray.


  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.forEach.call(invalidReceiver, () => true);
    })();

    TypeError;
    "Assert that some fails if this value is not a TypedArray";
  });
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
