// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var typedArrayConstructors = [Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Uint8ClampedArray, Float32Array, Float64Array];

function CheckTypedArrayIsDetached(array) {
  0;
  array.byteLength;
  0;
  array.byteOffset;
  0;
  array.length;
}

function TestTypedArrayForEach(constructor) {
  1;
  constructor.prototype.forEach.length;
  var a = new constructor(2);
  a[0] = 0;
  a[1] = 1;
  var count = 0;
  a.forEach(function (n) {
    count++;
  });
  2;
  count;
  // Use specified object as this object when calling the function.
  var o = {
    value: 42
  };
  var result = [];
  a.forEach(function (n, index, array) {
    result.push(this.value);
  }, o);
  [42, 42];
  result;
  // Modify the original array.
  count = 0;
  a.forEach(function (n, index, array) {
    array[index] = n + 1;
    count++;
  });
  2;
  count;
  [1, 2];
  a;

  // Check that values passed as second argument are wrapped into
  // objects when calling into sloppy mode functions.
  function CheckWrapping(value, wrapper) {
    var wrappedValue = new wrapper(value);
    a.forEach(function () {
      "object";
      typeof this;
      wrappedValue;
      this;
    }, value);
    a.forEach(function () {
      "use strict";

      typeof value;
      typeof this;
      value;
      this;
    }, value);
  }

  CheckWrapping(true, Boolean);
  CheckWrapping(false, Boolean);
  CheckWrapping("xxx", String);
  CheckWrapping(42, Number);
  CheckWrapping(3.14, Number);
  CheckWrapping({}, Object); // Throw before completing iteration, only the first element
  // should be modified when thorwing mid-way.

  count = 0;
  a[0] = 42;
  a[1] = 42;

  try {
    a.forEach(function (n, index, array) {
      if (count > 0) {
        throw "meh";
      }

      array[index] = n + 1;
      count++;
    });
  } catch (e) {
    ;
  }

  1;
  count;
  43;
  a[0];
  42;
  a[1];
  // Detaching the buffer backing the typed array mid-way should
  // still make .forEach() finish, but exiting early due to the missing
  // elements, and the array should keep being empty after detaching it.
  // TODO(dehrenberg): According to the ES6 spec, accessing or testing
  // for members on a detached TypedArray should throw, so really this
  // should throw in the third iteration. However, this behavior matches
  // the Khronos spec.
  a = new constructor(3);
  count = 0;
  a.forEach(function (n, index, array) {
    array[index] = n + 1;
    count++;
  });
  2;
  count;
  CheckTypedArrayIsDetached(a);
  undefined;
  a[0];
  // The method must work for typed arrays created from ArrayBuffer.
  // The length of the ArrayBuffer is chosen so it is a multiple of
  // all lengths of the typed array items.
  a = new constructor(new ArrayBuffer(64));
  count = 0;
  a.forEach(function (n) {
    count++;
  });
  a.length;
  count;
  // Externalizing the array mid-way accessing the .buffer property
  // should work.
  a = new constructor(2);
  count = 0;
  var buffer = undefined;
  a.forEach(function (n, index, array) {
    if (count++ > 0) {
      buffer = array.buffer;
    }
  });
  2;
  count;
  !!buffer;
  buffer;
  a.buffer;

  (function () {
    constructor.prototype.forEach.call([1, 2, 3], function (x) {
      ;
    });
  })();

  TypeError;

  (function () {
    constructor.prototype.forEach.call("abc", function (x) {
      ;
    });
  })();

  TypeError;

  (function () {
    constructor.prototype.forEach.call({}, function (x) {
      ;
    });
  })();

  TypeError;

  (function () {
    constructor.prototype.forEach.call(0, function (x) {
      ;
    });
  })();

  TypeError;

  // Method must be useable on instances of other typed arrays.
  for (var i = 0; i < typedArrayConstructors.length; i++) {
    count = 0;
    a = new typedArrayConstructors[i](4);
    constructor.prototype.forEach.call(a, function (x) {
      count++;
    });
    a.length;
    count;
  } // Shadowing length doesn't affect forEach, unlike Array.prototype.forEach


  a = new constructor([1, 2]);
  Object.defineProperty(a, 'length', {
    value: 1
  });
  var x = 0;
  a.forEach(function (elt) {
    x += elt;
  });
  undefined;
  x;
  3;
  Array.prototype.forEach.call(a, function (elt) {
    x += elt;
  });
  undefined;
  x;
  4;
  // Detached Operation
  var array = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  (() => array.forEach(() => true))();

  TypeError;
}

for (i = 0; i < typedArrayConstructors.length; i++) {
  TestTypedArrayForEach(typedArrayConstructors[i]);
}
