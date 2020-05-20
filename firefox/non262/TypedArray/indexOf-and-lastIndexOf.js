// Tests for TypedArray#indexOf.
for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.indexOf.length;
  1;
  new constructor([1, 2, 3, 4, 5]).indexOf(0);
  -1;
  new constructor([1, 2, 3, 4, 5]).indexOf(1);
  0;
  new constructor([1, 2, 3, 4, 5]).indexOf(5);
  4;
  new constructor([1, 2, 3, 4, 5]).indexOf(6);
  -1;
  new constructor([1, 2, 1, 2, 1]).indexOf(1);
  0;

  if (isFloatConstructor(constructor)) {
    new constructor([NaN, 0, -0]).indexOf(NaN);
    -1;
    new constructor([NaN, 0, -0]).indexOf(0);
    1;
    new constructor([NaN, 0, -0]).indexOf(-0);
    1;
  } else {
    // [NaN, 0, -0] will be coerced to [0, 0, 0]
    new constructor([NaN, 0, -0]).indexOf(NaN);
    -1;
    new constructor([NaN, 0, -0]).indexOf(0);
    0;
    new constructor([NaN, 0, -0]).indexOf(-0);
    0;
  } // Works with two arguments.


  new constructor([1, 2, 3, 4, 5]).indexOf(1, 1);
  -1;
  new constructor([1, 2, 3, 4, 5]).indexOf(1, -100);
  0;
  new constructor([1, 2, 3, 4, 5]).indexOf(3, 100);
  -1;
  new constructor([1, 2, 3, 4, 5]).indexOf(5, -1);
  4;
  new constructor([1, 2, 1, 2, 1]).indexOf(1, 2);
  2;
  new constructor([1, 2, 1, 2, 1]).indexOf(1, -2);
  4;
  // Throws if `this` isn't a TypedArray.
  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.indexOf.call(invalidReceiver);
    })();

    TypeError;
    "Assert that indexOf fails if this value is not a TypedArray";
  }); // test that this.length is never called

  Object.defineProperty(new constructor([0, 1, 2, 3, 5]), "length", {
    get() {
      throw new Error("length accessor called");
    }

  }).indexOf(1);
  1;
}

for (let constructor of anyTypedArrayConstructors.filter(isFloatConstructor)) {
  if (constructor.BYTES_PER_ELEMENT === 4) {
    new constructor([.1, .2, .3]).indexOf(.2);
    -1;
    new constructor([.1, .2, .3]).indexOf(Math.fround(.2));
    1;
  } else {
    constructor.BYTES_PER_ELEMENT;
    8;
    new constructor([.1, .2, .3]).indexOf(.2);
    1;
  }
} // Tests for TypedArray#lastIndexOf.


for (var constructor of anyTypedArrayConstructors) {
  constructor.prototype.lastIndexOf.length;
  1;
  new constructor([1, 2, 3, 4, 5]).lastIndexOf(0);
  -1;
  new constructor([1, 2, 3, 4, 5]).lastIndexOf(1);
  0;
  new constructor([1, 2, 3, 4, 5]).lastIndexOf(5);
  4;
  new constructor([1, 2, 3, 4, 5]).lastIndexOf(6);
  -1;
  new constructor([1, 2, 1, 2, 1]).lastIndexOf(1);
  4;

  if (isFloatConstructor(constructor)) {
    new constructor([NaN, 0, -0]).lastIndexOf(NaN);
    -1;
    new constructor([NaN, 0, -0]).lastIndexOf(0);
    2;
    new constructor([NaN, 0, -0]).lastIndexOf(-0);
    2;
  } else {
    // [NaN, 0, -0] will be coerced to [0, 0, 0].
    new constructor([NaN, 0, -0]).lastIndexOf(NaN);
    -1;
    new constructor([NaN, 0, -0]).lastIndexOf(0);
    2;
    new constructor([NaN, 0, -0]).lastIndexOf(-0);
    2;
  } // Works with two arguments.


  new constructor([1, 2, 3, 4, 5]).lastIndexOf(1, 1);
  0;
  new constructor([1, 2, 3, 4, 5]).lastIndexOf(1, -100);
  -1;
  new constructor([1, 2, 3, 4, 5]).lastIndexOf(3, 100);
  2;
  new constructor([1, 2, 3, 4, 5]).lastIndexOf(5, -1);
  4;
  new constructor([1, 2, 1, 2, 1]).lastIndexOf(1, 2);
  2;
  new constructor([1, 2, 1, 2, 1]).lastIndexOf(1, -2);
  2;
  // Throws if `this` isn't a TypedArray.
  var invalidReceivers = [undefined, null, 1, false, "", Symbol(), [], {}, /./, new Proxy(new constructor(), {})];
  invalidReceivers.forEach(invalidReceiver => {
    (() => {
      constructor.prototype.lastIndexOf.call(invalidReceiver);
    })();

    TypeError;
    "Assert that lastIndexOf fails if this value is not a TypedArray";
  }); // Test that the length getter is never called.

  Object.defineProperty(new constructor([0, 1, 2, 3, 5]), "length", {
    get() {
      throw new Error("length accessor called");
    }

  }).lastIndexOf(1);
  1;
  new constructor([10, 20, 10]).lastIndexOf(10);
  2;
  new constructor([10, 20, 10]).lastIndexOf(10, undefined);
  0;
}

for (let constructor of anyTypedArrayConstructors.filter(isFloatConstructor)) {
  if (constructor.BYTES_PER_ELEMENT === 4) {
    new constructor([.1, .2, .3]).lastIndexOf(.2);
    -1;
    new constructor([.1, .2, .3]).lastIndexOf(Math.fround(.2));
    1;
  } else {
    constructor.BYTES_PER_ELEMENT;
    8;
    new constructor([.1, .2, .3]).lastIndexOf(.2);
    1;
  }
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
