// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var typedArrayConstructors = [Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Uint8ClampedArray, Float32Array, Float64Array];

for (var constructor of typedArrayConstructors) {
  // Check various variants of empty array's slicing.
  var array = new constructor(0);

  for (var i = 0; i < 7; i++) {
    0;
    array.slice(0, 0).length;
    0;
    array.slice(1, 0).length;
    0;
    array.slice(0, 1).length;
    0;
    array.slice(-1, 0).length;
  } // Check various forms of arguments omission.


  array = new constructor(7);

  for (var i = 0; i < 7; i++) {
    array;
    array.slice();
    array;
    array.slice(0);
    array;
    array.slice(undefined);
    array;
    array.slice("foobar");
    array;
    array.slice(undefined, undefined);
  } // Check variants of negatives and positive indices.


  array = new constructor(7);
  7;
  array.slice(-100).length;
  3;
  array.slice(-3).length;
  3;
  array.slice(4).length;
  1;
  array.slice(6).length;
  0;
  array.slice(7).length;
  0;
  array.slice(8).length;
  0;
  array.slice(100).length;
  0;
  array.slice(0, -100).length;
  4;
  array.slice(0, -3).length;
  4;
  array.slice(0, 4).length;
  6;
  array.slice(0, 6).length;
  7;
  array.slice(0, 7).length;
  7;
  array.slice(0, 8).length;
  7;
  array.slice(0, 100).length;

  (() => constructor.prototype.slice.call([], 0, 0))();

  TypeError;
  // Check that elements are copied properly in slice
  array = new constructor([1, 2, 3, 4]);
  var slice = array.slice(1, 3);
  2;
  slice.length;
  2;
  slice[0];
  3;
  slice[1];
  slice instanceof constructor;
  // Detached Operation
  var tmp = {
    [Symbol.toPrimitive]() {
      "Parameter should not be processed when " + "array.[[ViewedArrayBuffer]] is detached.";
      return 0;
    }

  };
  var array = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  (() => array.slice(tmp, tmp))();

  TypeError;

  // Check that the species array must be a typed array
  class MyTypedArray extends constructor {
    static get [Symbol.species]() {
      return Array;
    }

  }

  var arr = new MyTypedArray([-1.0, 0, 1.1, 255, 256]);

  (() => arr.slice())();

  TypeError;
} // Check that the result array is properly created by checking species


for (var constructor1 of typedArrayConstructors) {
  for (var constructor2 of typedArrayConstructors) {
    testCustomSubclass(constructor1, constructor2);
    testSpeciesConstructor(constructor1, constructor2);
  }
}

function testSpeciesConstructor(cons1, cons2) {
  var ta = new cons1([1, 2, 3, 4, 5, 6]);
  ta.constructor = {
    [Symbol.species]: cons2
  };
  [4, 5, 6];
  ta.slice(3);
}

function testCustomSubclass(superClass, speciesClass) {
  // Simple subclass that has another TypedArray as species
  class CustomTypedArray extends superClass {
    static get [Symbol.species]() {
      return speciesClass;
    }

  } // 16 entries.


  let exampleArray = [-1.0, 0, 1.1, 255, 256, 0xFFFFFFFF, 2 ** 50, NaN];
  let customArray = new CustomTypedArray(exampleArray);
  let basicArray = new superClass(exampleArray);
  new speciesClass(basicArray);
  customArray.slice();
  superClass.name + ' -> ' + speciesClass.name;
  // Custom constructor with shared buffer.
  exampleArray = new Array(64).fill(0).map((v, i) => i);
  let filledBuffer = new Uint8Array(exampleArray).buffer; // Create a view for the beginning of the buffer.

  let customArray2 = new superClass(filledBuffer, 0, 3);
  customArray2.constructor = {
    [Symbol.species]: function (length) {
      let bytes_per_element = speciesClass.BYTES_PER_ELEMENT; // Reuse the same buffer for the custom species constructor.
      // Skip the first BYTES_PER_ELEMENT bytes of the buffer.

      return new speciesClass(filledBuffer, bytes_per_element, length);
    }
  }; // Since slice is defined iteratively, the species created new array uses the
  // same underlying buffer shifted by one element. Hence the first value is
  // copied over and over again.

  let convertedCopy = Array.from(customArray2);
  let firstValue = convertedCopy[0];
  firstValue;
  customArray2[0];
  let sliceResult = customArray2.slice();

  if (superClass == speciesClass) {
    new Array(3).fill(firstValue);
    Array.from(customArray2);
    new Array(3).fill(firstValue);
    Array.from(sliceResult);
  }

  3;
  customArray2.length;
  3;
  sliceResult.length;
}
