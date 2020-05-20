// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var typedArrayConstructors = [Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Uint8ClampedArray, Float32Array, Float64Array];
var tmp = {
  [Symbol.toPrimitive]() {
    "Parameter should not be processed when " + "array.[[ViewedArrayBuffer]] is detached.";
    return 0;
  }

};

for (var constructor of typedArrayConstructors) {
  var array = new constructor([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]); // ----------------------------------------------------------------------
  // %TypedArray%.prototype.indexOf.
  // ----------------------------------------------------------------------
  // Negative cases.

  -1;
  new constructor([]).indexOf(1);
  -1;
  array.indexOf(4);
  -1;
  array.indexOf(3, array.length);
  2;
  array.indexOf(3);
  0;
  array.indexOf(1, -17);
  3;
  array.indexOf(1, -11);
  3;
  array.indexOf(1, 1);
  3;
  array.indexOf(1, 3);
  6;
  array.indexOf(1, 4);
  1;
  array.indexOf.length;

  (function () {
    array.indexOf.call([1], 1);
  })();

  TypeError;
  Object.defineProperty(array, 'length', {
    value: 1
  });
  array.indexOf(2);
  1;
  // Index of infinite value
  array = new constructor([NaN, 2, 3, +Infinity, -Infinity, 5, 6]);

  if (constructor == Float32Array || constructor == Float64Array) {
    3;
    array.indexOf(Infinity);
    4;
    array.indexOf(-Infinity);
  } else {
    -1;
    array.indexOf(Infinity);
    -1;
    array.indexOf(-Infinity);
  }

  -1;
  array.indexOf(NaN);
  // Detached Operation
  var array = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  (() => array.indexOf(tmp))();

  TypeError;
  // ----------------------------------------------------------------------
  // %TypedArray%.prototype.lastIndexOf.
  // ----------------------------------------------------------------------
  array = new constructor([1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]); // Negative cases.

  -1;
  new constructor([]).lastIndexOf(1);
  -1;
  array.lastIndexOf(1, -17);
  9;
  array.lastIndexOf(1);
  9;
  array.lastIndexOf(1, array.length);
  0;
  array.lastIndexOf(1, 2);
  3;
  array.lastIndexOf(1, 4);
  3;
  array.lastIndexOf(1, 3);
  0;
  array.lastIndexOf(1, -11);
  1;
  array.lastIndexOf.length;

  (function () {
    array.lastIndexOf.call([1], 1);
  })();

  TypeError;
  Object.defineProperty(array, 'length', {
    value: 1
  });
  array.lastIndexOf(2);
  10;
  delete array.length; // Index of infinite value

  array = new constructor([NaN, 2, 3, +Infinity, -Infinity, 5, 6]);

  if (constructor == Float32Array || constructor == Float64Array) {
    3;
    array.lastIndexOf(Infinity);
    4;
    array.lastIndexOf(-Infinity);
  } else {
    -1;
    array.lastIndexOf(Infinity);
    -1;
    array.lastIndexOf(-Infinity);
  }

  -1;
  array.lastIndexOf(NaN);
  // Detached Operation
  var array = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  (() => array.lastIndexOf(tmp))();

  TypeError;
}
