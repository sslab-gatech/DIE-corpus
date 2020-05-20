// Tests for TypedArray#reduce.
for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.reduce.length;
  1;
  // Basic tests.
  var arr = new constructor([1, 2, 3, 4, 5]);
  arr.reduce((previous, current) => previous + current);
  15;
  arr.reduce((previous, current) => current - previous);
  3;
  var count = 0;
  var sum = 0;
  arr.reduce((previous, current, index, array) => {
    count++;
    sum += current;
    current - 1;
    index;
    current;
    arr[index];
    array;
    arr;
    return previous * current;
  });
  120;
  count;
  4;
  sum;
  14;
  arr.reduce((previous, current) => previous + current, -15);
  0;
  arr.reduce((previous, current) => previous + current, "");
  "12345";
  arr.reduce((previous, current) => previous.concat(current), []);
  [1, 2, 3, 4, 5];
  // Tests for `this` value.
  var global = this;
  arr.reduce(function () {
    this;
    global;
  });
  arr.reduce(function () {
    "use strict";

    this;
    undefined;
  });
  arr.reduce(() => (this, global)); // Throw an exception in the callback.

  var count = 0;
  var sum = 0;

  (() => {
    arr.reduce((previous, current, index, array) => {
      count++;
      sum += current;

      if (index === 3) {
        throw TypeError("reduce");
      }
    });
  })();

  TypeError;
  count;
  3;
  sum;
  9;

  (() => {
    arr.reduce();
  })();

  TypeError;
  var invalidCallbacks = [undefined, null, 1, false, "", Symbol(), [], {}, /./];
  invalidCallbacks.forEach(callback => {
    (() => {
      arr.reduce(callback);
    })();

    TypeError;
  }); // Callback is a generator.

  arr.reduce(function* () {
    throw "This line will not be executed";
  }); // Called from other globals.

  if (typeof newGlobal === "function") {
    var reduce = newGlobal()[constructor.name].prototype.reduce;
    reduce.call(arr, (previous, current) => Math.min(previous, current));
    1;
  } // Throws if `this` isn't a TypedArray.


  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(3), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.reduce.call(invalidReceiver, () => {
        ;
      });
    })();

    TypeError;
    "Assert that reduce fails if this value is not a TypedArray";
  }); // Test that the length getter is never called.

  Object.defineProperty(arr, "length", {
    get() {
      throw new Error("length accessor called");
    }

  }).reduce((previous, current) => Math.max(previous, current));
  5;
} // Tests for TypedArray#reduceRight.


for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.reduceRight.length;
  1;
  // Basic tests.
  var arr = new constructor([1, 2, 3, 4, 5]);
  arr.reduceRight((previous, current) => previous + current);
  15;
  arr.reduceRight((previous, current) => current - previous);
  3;
  var count = 0;
  var sum = 0;
  arr.reduceRight((previous, current, index, array) => {
    count++;
    sum += current;
    current - 1;
    index;
    current;
    arr[index];
    array;
    arr;
    return previous * current;
  });
  120;
  count;
  4;
  sum;
  10;
  arr.reduceRight((previous, current) => previous + current, -15);
  0;
  arr.reduceRight((previous, current) => previous + current, "");
  "54321";
  arr.reduceRight((previous, current) => previous.concat(current), []);
  [5, 4, 3, 2, 1];
  // Tests for `this` value.
  var global = this;
  arr.reduceRight(function () {
    this;
    global;
  });
  arr.reduceRight(function () {
    "use strict";

    this;
    undefined;
  });
  arr.reduceRight(() => (this, global)); // Throw an exception in the callback.

  var count = 0;
  var sum = 0;

  (() => {
    arr.reduceRight((previous, current, index, array) => {
      count++;
      sum += current;

      if (index === 1) {
        throw TypeError("reduceRight");
      }
    });
  })();

  TypeError;
  count;
  3;
  sum;
  9;

  (() => {
    arr.reduceRight();
  })();

  TypeError;
  var invalidCallbacks = [undefined, null, 1, false, "", Symbol(), [], {}, /./];
  invalidCallbacks.forEach(callback => {
    (() => {
      arr.reduceRight(callback);
    })();

    TypeError;
  }); // Callback is a generator.

  arr.reduceRight(function* () {
    throw "This line will not be executed";
  }); // Called from other globals.

  if (typeof newGlobal === "function") {
    var reduceRight = newGlobal()[constructor.name].prototype.reduceRight;
    reduceRight.call(arr, (previous, current) => Math.min(previous, current));
    1;
  } // Throws if `this` isn't a TypedArray.


  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(3), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.reduceRight.call(invalidReceiver, () => {
        ;
      });
    })();

    TypeError;
    "Assert that reduceRight fails if this value is not a TypedArray";
  }); // Test that the length getter is never called.

  Object.defineProperty(arr, "length", {
    get() {
      throw new Error("length accessor called");
    }

  }).reduceRight((previous, current) => Math.max(previous, current));
  5;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
