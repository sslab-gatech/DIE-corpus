// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
const constructors = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];

for (constructor of constructors) {
  print("testing non-empty " + constructor.name);
  let a = new constructor(10);
  Object.isExtensible(a);
  true;
  Object.isSealed(a);
  false;
  Object.isFrozen(a);
  false;
  // Should not throw.
  Object.seal(a); // Should complain that it can't change attributes of indexed typed array properties.

  (() => Object.freeze(a))();

  TypeError;
}

print();

for (constructor of constructors) {
  print("testing zero-length " + constructor.name);
  let a = new constructor(0);
  Object.isExtensible(a);
  true;
  Object.isSealed(a);
  false;
  Object.isFrozen(a);
  false;
  // Should not throw.
  Object.seal(a);
  Object.freeze(a);
} // isSealed and isFrozen should not try to build an array of all the
// property names of a typed array, since they're often especially large.
// This should not throw an allocation error.


let a = new Uint8Array(1 << 24);
Object.isSealed(a);
Object.isFrozen(a);

for (constructor of constructors) {
  print("testing extensibility " + constructor.name);
  let a = new constructor(10); // New named properties should show up on typed arrays.

  a.foo = "twelve";
  a.foo;
  "twelve";
  // New indexed properties should not show up on typed arrays.
  a[20] = "twelve";
  a[20];
  undefined;
  // Watch for especially large indexed properties.
  a[-10 >>> 0] = "twelve";
  a[-10 >>> 0];
  undefined;
  // Watch for really large indexed properties too.
  a[Math.pow(2, 53)] = "twelve";
  a[Math.pow(2, 53)];
  undefined;
  // Don't define old properties.
  Object.defineProperty(a, 5, {
    value: 3
  });
  a[5];
  3;
  // Don't define new properties.
  Object.defineProperty(a, 20, {
    value: 3
  });
  a[20];
  undefined;
  // Don't delete indexed properties.
  a[3] = 3;
  delete a[3];
  a[3];
  3;
}
