//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var typedArrayList = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Uint8ClampedArray, Float32Array, Float64Array];

function t1() {
  try {
    new SharedArrayBuffer(1);
  } catch (e) {
    ;
  }

  console.log(typeof SharedArrayBuffer.prototype, "object");

  try {
    SharedArrayBuffer(1);
  } catch (e) {
    ;
  }

  var sab = new SharedArrayBuffer(1);
  console.log(sab.byteLength, 1);
  console.log(sab.constructor, SharedArrayBuffer);
  console.log(sab.slice, SharedArrayBuffer.prototype.slice);
  console.log(typeof sab.slice, "function");
  console.log(sab.slice.length, 2);
  console.log(String(sab), "[object SharedArrayBuffer]");

  try {
    new SharedArrayBuffer();
  } catch (e) {
    ;
  }
}

t1();

function t2() {
  try {
    SharedArrayBuffer.prototype.slice.apply('string');
  } catch (e) {
    ;
  }

  try {
    SharedArrayBuffer.prototype.slice.apply();
  } catch (e) {
    ;
  }

  try {
    SharedArrayBuffer.prototype.slice.call();
  } catch (e) {
    ;
  }

  try {
    SharedArrayBuffer.prototype.slice.call(undefined);
  } catch (e) {
    ;
  }

  try {
    SharedArrayBuffer.prototype.slice();
  } catch (e) {
    ;
  }

  try {
    SharedArrayBuffer.prototype.slice(undefined);
  } catch (e) {
    ;
  }
}

t2();

function t3() {
  function validate(size, expectedSize) {
    var sab = new SharedArrayBuffer(size);
    console.log(sab.byteLength, expectedSize, "byteLength should be " + expectedSize);
  }

  validate(0, 0);
  validate(1024, 1024);
  validate(false, 0);
  validate(undefined, 0);
  validate(NaN, 0);
  validate("16", 16);
  validate("hello", 0);
  validate(1.1, 1);
  validate({
    valueOf: () => 10
  }, 10);
  validate({
    toString: () => 10
  }, 10);

  try {
    new SharedArrayBuffer(1, 2, 3);
  } catch (e) {
    ;
  }

  try {
    new SharedArrayBuffer(-1);
  } catch (e) {
    ;
  }
}

t3();

function t4() {
  var sab = new SharedArrayBuffer(1);
  sab.byteLength = 12;
  console.log(sab.byteLength, 1);
}

t4();

function t5() {
  function validate(constructor, elements, range) {
    var sab = new SharedArrayBuffer(elements * constructor.BYTES_PER_ELEMENT);
    var view = new constructor(sab);
    console.log(view.length, elements, constructor.name + " with length " + elements);
    console.log(view.buffer, sab);
    console.log(view.byteOffset, 0, constructor.name + " with byteOffset " + view.byteOffset);
    console.log(view.byteLength, elements * constructor.BYTES_PER_ELEMENT, constructor.name + " with byteLength " + elements * constructor.BYTES_PER_ELEMENT);

    for ([offset, len] of range) {
      var v = new constructor(sab, offset * constructor.BYTES_PER_ELEMENT, len);
      console.log(v.length, len, constructor.name + " with length " + len);
      console.log(v.buffer, sab);
      console.log(v.byteOffset, offset * constructor.BYTES_PER_ELEMENT, constructor.name + " with byteOffset " + view.byteOffset);
      console.log(v.byteLength, len * constructor.BYTES_PER_ELEMENT, constructor.name + " with byteLength " + elements * constructor.BYTES_PER_ELEMENT);

      if (len > 0) {
        v[0] = 10;
        console.log(v[0], view[offset], constructor.name);
      }
    }
  }

  ;

  for (var i of typedArrayList) {
    validate(i, 8, [[0, 0], [0, 1], [6, 0], [6, 2], [0, 8]]);
  }

  function validateThrows(constructor, elements, range) {
    var sab = new SharedArrayBuffer(elements * constructor.BYTES_PER_ELEMENT);

    for ([offset, len] of range) {
      try {
        new constructor(sab, offset * constructor.BYTES_PER_ELEMENT, len);
      } catch (e) {
        ;
      }
    }
  }

  for (var i of typedArrayList) {
    validateThrows(i, 8, [[-1, 0], [20, 1], [6, -1], [6, 5]]);
  }
}

t5();

function t6() {
  function validate(constructor, elements, data) {
    var sab = new SharedArrayBuffer(elements * constructor.BYTES_PER_ELEMENT);
    var view = new constructor(sab);

    for ([index, test, expected] of data) {
      view[index] = test;
      console.log(view[index], expected, constructor.name);
    }
  }

  ;
  validate(Int8Array, 8, [[0, 10, 10], [7, 0x7F, 0x7F], [7, 0x80, -128], [1, 1000, -24]]);
  validate(Uint8Array, 8, [[0, 10, 10], [7, 0xFF, 0xFF], [7, -20, 236], [1, 1000, 232]]);
  validate(Int16Array, 8, [[0, 10, 10], [7, 0x7FFF, 0x7FFF], [7, 0x8000, -0x8000], [1, (0xFFFF + 1) * 2 + 23, 23]]);
  validate(Uint16Array, 8, [[0, 10, 10], [7, 0xFFFF, 0xFFFF], [7, -120, 0x10000 - 120], [1, (0xFFFF + 1) * 2 + 23, 23]]);
  validate(Int32Array, 8, [[0, 10, 10], [7, 0x7FFFFFFF, 0x7FFFFFFF], [7, 0x80000000, -0x80000000], [1, (0xFFFFFFFF + 1) * 2 + 23, 23]]);
  validate(Uint32Array, 8, [[0, 10, 10], [7, 0xFFFFFFFF, 0xFFFFFFFF], [7, -20, 0xFFFFFFFF - 20 + 1], [1, (0xFFFFFFFF + 1) * 2 + 23, 23]]);

  for (var i of typedArrayList) {
    validate(i, 8, [[-1, 20, undefined], ["-1", 20, undefined], [NaN, 20, undefined]]);
  }
}

t6();

function t7() {
  function validate(dataView, setFunc, getFunc, offset, value) {
    dataView[setFunc](offset, value);
    console.log(value, dataView[getFunc](offset));
  }

  [['setInt8', 'getInt8', 0x10], ['setUint8', 'getUint8', 0x9F], ['setInt16', 'getInt16', 0x6FFF], ['setUint16', 'getUint16', 0x9FFF], ['setInt32', 'getInt32', 0x6FFFFFFF], ['setUint32', 'getUint32', 0x9FFFFFFF], ['setFloat32', 'getFloat32', 2], ['setFloat64', 'getFloat64', 4]].forEach(function ([setFunc, getFunc, v]) {
    [[0, 8], [8, 8]].forEach(function ([byteOffset, byteLength]) {
      var sab = new SharedArrayBuffer(16);
      var dv = new DataView(sab, byteOffset, byteLength);
      validate(dv, setFunc, getFunc, 0, v);
    });
  });
}

t7();
