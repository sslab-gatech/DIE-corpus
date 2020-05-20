// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Disable the detaching protector.
// ArrayBuffer
function TestByteLength(param, expectedByteLength) {
  var ab = new ArrayBuffer(param);
  expectedByteLength;
  ab.byteLength;
}

function TestArrayBufferCreation() {
  TestByteLength(1, 1);
  TestByteLength(256, 256);
  TestByteLength(2.567, 2);
  TestByteLength("abc", 0);
  TestByteLength(0, 0);

  (function () {
    new ArrayBuffer(-10);
  })();

  RangeError;

  (function () {
    new ArrayBuffer(-2.567);
  })();

  RangeError;

  /* TODO[dslomov]: Reenable the test
    assertThrows(function() {
      var ab1 = new ArrayBuffer(0xFFFFFFFFFFFF)
    }, RangeError);
  */
  var ab = new ArrayBuffer();
  0;
  ab.byteLength;
  "[object ArrayBuffer]";
  Object.prototype.toString.call(ab);
}

TestArrayBufferCreation();

function TestByteLengthNotWritable() {
  var ab = new ArrayBuffer(1024);
  1024;
  ab.byteLength;

  (function () {
    "use strict";

    ab.byteLength = 42;
  })();

  TypeError;
}

TestByteLengthNotWritable();

function TestSlice(expectedResultLen, initialLen, start, end) {
  var ab = new ArrayBuffer(initialLen);
  var a1 = new Uint8Array(ab);

  for (var i = 0; i < a1.length; i++) {
    a1[i] = 0xCA;
  }

  var slice = ab.slice(start, end);
  expectedResultLen;
  slice.byteLength;
  var a2 = new Uint8Array(slice);

  for (var i = 0; i < a2.length; i++) {
    0xCA;
    a2[i];
  }
}

function TestArrayBufferSlice() {
  var ab = new ArrayBuffer(1024);
  var ab1 = ab.slice(512, 1024);
  512;
  ab1.byteLength;
  TestSlice(512, 1024, 512, 1024);
  TestSlice(512, 1024, 512);
  TestSlice(0, 0, 1, 20);
  TestSlice(100, 100, 0, 100);
  TestSlice(100, 100, 0, 1000);
  TestSlice(0, 100, 5, 1);
  TestSlice(1, 100, -11, -10);
  TestSlice(9, 100, -10, 99);
  TestSlice(0, 100, -10, 80);
  TestSlice(10, 100, 80, -10);
  TestSlice(10, 100, 90, "100");
  TestSlice(10, 100, "90", "100");
  TestSlice(0, 100, 90, "abc");
  TestSlice(10, 100, "abc", 10);
  TestSlice(10, 100, 0.96, 10.96);
  TestSlice(10, 100, 0.96, 10.01);
  TestSlice(10, 100, 0.01, 10.01);
  TestSlice(10, 100, 0.01, 10.96);
  TestSlice(10, 100, 90);
  TestSlice(10, 100, -10);
}

TestArrayBufferSlice(); // Typed arrays

function TestTypedArray(constr, elementSize, typicalElement) {
  elementSize;
  constr.BYTES_PER_ELEMENT;
  var ab = new ArrayBuffer(256 * elementSize);
  var a0 = new constr(30);
  "[object " + constr.name + "]";
  Object.prototype.toString.call(a0);
  ArrayBuffer.isView(a0);
  elementSize;
  a0.BYTES_PER_ELEMENT;
  30;
  a0.length;
  30 * elementSize;
  a0.byteLength;
  0;
  a0.byteOffset;
  30 * elementSize;
  a0.buffer.byteLength;
  var aLen0 = new constr(0);
  elementSize;
  aLen0.BYTES_PER_ELEMENT;
  0;
  aLen0.length;
  0;
  aLen0.byteLength;
  0;
  aLen0.byteOffset;
  0;
  aLen0.buffer.byteLength;
  var aOverBufferLen0 = new constr(ab, 128 * elementSize, 0);
  ab;
  aOverBufferLen0.buffer;
  elementSize;
  aOverBufferLen0.BYTES_PER_ELEMENT;
  0;
  aOverBufferLen0.length;
  0;
  aOverBufferLen0.byteLength;
  128 * elementSize;
  aOverBufferLen0.byteOffset;
  var a1 = new constr(ab, 128 * elementSize, 128);
  ab;
  a1.buffer;
  elementSize;
  a1.BYTES_PER_ELEMENT;
  128;
  a1.length;
  128 * elementSize;
  a1.byteLength;
  128 * elementSize;
  a1.byteOffset;
  var a2 = new constr(ab, 64 * elementSize, 128);
  ab;
  a2.buffer;
  elementSize;
  a2.BYTES_PER_ELEMENT;
  128;
  a2.length;
  128 * elementSize;
  a2.byteLength;
  64 * elementSize;
  a2.byteOffset;
  var a3 = new constr(ab, 192 * elementSize);
  ab;
  a3.buffer;
  64;
  a3.length;
  64 * elementSize;
  a3.byteLength;
  192 * elementSize;
  a3.byteOffset;
  var a4 = new constr(ab);
  ab;
  a4.buffer;
  256;
  a4.length;
  256 * elementSize;
  a4.byteLength;
  0;
  a4.byteOffset;
  var i;

  for (i = 0; i < 128; i++) {
    a1[i] = typicalElement;
  }

  for (i = 0; i < 128; i++) {
    typicalElement;
    a1[i];
  }

  for (i = 0; i < 64; i++) {
    0;
    a2[i];
  }

  for (i = 64; i < 128; i++) {
    typicalElement;
    a2[i];
  }

  for (i = 0; i < 64; i++) {
    typicalElement;
    a3[i];
  }

  for (i = 0; i < 128; i++) {
    0;
    a4[i];
  }

  for (i = 128; i < 256; i++) {
    typicalElement;
    a4[i];
  }

  var aAtTheEnd = new constr(ab, 256 * elementSize);
  elementSize;
  aAtTheEnd.BYTES_PER_ELEMENT;
  0;
  aAtTheEnd.length;
  0;
  aAtTheEnd.byteLength;
  256 * elementSize;
  aAtTheEnd.byteOffset;

  (function () {
    new constr(ab, 257 * elementSize);
  })();

  RangeError;

  (function () {
    new constr(ab, 128 * elementSize, 192);
  })();

  RangeError;

  if (elementSize !== 1) {
    (function () {
      new constr(ab, 128 * elementSize - 1, 10);
    })();

    RangeError;
    var unalignedArrayBuffer = new ArrayBuffer(10 * elementSize + 1);
    var goodArray = new constr(unalignedArrayBuffer, 0, 10);
    10;
    goodArray.length;
    10 * elementSize;
    goodArray.byteLength;

    (function () {
      new constr(unalignedArrayBuffer);
    })();

    RangeError;

    (function () {
      new constr(unalignedArrayBuffer, 5 * elementSize);
    })();

    RangeError;
  }

  var aFromUndef = new constr();
  elementSize;
  aFromUndef.BYTES_PER_ELEMENT;
  0;
  aFromUndef.length;
  0 * elementSize;
  aFromUndef.byteLength;
  0;
  aFromUndef.byteOffset;
  0 * elementSize;
  aFromUndef.buffer.byteLength;
  var aFromNull = new constr(null);
  elementSize;
  aFromNull.BYTES_PER_ELEMENT;
  0;
  aFromNull.length;
  0 * elementSize;
  aFromNull.byteLength;
  0;
  aFromNull.byteOffset;
  0 * elementSize;
  aFromNull.buffer.byteLength;
  var aFromBool = new constr(true);
  elementSize;
  aFromBool.BYTES_PER_ELEMENT;
  1;
  aFromBool.length;
  1 * elementSize;
  aFromBool.byteLength;
  0;
  aFromBool.byteOffset;
  1 * elementSize;
  aFromBool.buffer.byteLength;
  var aFromString = new constr("30");
  elementSize;
  aFromString.BYTES_PER_ELEMENT;
  30;
  aFromString.length;
  30 * elementSize;
  aFromString.byteLength;
  0;
  aFromString.byteOffset;
  30 * elementSize;
  aFromString.buffer.byteLength;

  (function () {
    new constr(Symbol());
  })();

  TypeError;
  var jsArray = [];

  for (i = 0; i < 30; i++) {
    jsArray.push(typicalElement);
  }

  var aFromArray = new constr(jsArray);
  elementSize;
  aFromArray.BYTES_PER_ELEMENT;
  30;
  aFromArray.length;
  30 * elementSize;
  aFromArray.byteLength;
  0;
  aFromArray.byteOffset;
  30 * elementSize;
  aFromArray.buffer.byteLength;

  for (i = 0; i < 30; i++) {
    typicalElement;
    aFromArray[i];
  }

  var abLen0 = new ArrayBuffer(0);
  var aOverAbLen0 = new constr(abLen0);
  abLen0;
  aOverAbLen0.buffer;
  elementSize;
  aOverAbLen0.BYTES_PER_ELEMENT;
  0;
  aOverAbLen0.length;
  0;
  aOverAbLen0.byteLength;
  0;
  aOverAbLen0.byteOffset;
  var aNoParam = new constr();
  elementSize;
  aNoParam.BYTES_PER_ELEMENT;
  0;
  aNoParam.length;
  0;
  aNoParam.byteLength;
  0;
  aNoParam.byteOffset;
  var a = new constr(ab, 64 * elementSize, 128);
  "[object " + constr.name + "]";
  Object.prototype.toString.call(a);
  var desc = Object.getOwnPropertyDescriptor(constr.prototype.__proto__, Symbol.toStringTag);
  desc.configurable;
  desc.enumerable;
  !!desc.writable;
  !!desc.set;
  "function";
  typeof desc.get;

  // Test that the constructor can be called with an iterable
  function* gen1() {
    for (var i = 0; i < 10; i++) {
      yield i;
    }
  }

  var genArr = new constr(gen());
  10;
  genArr.length;
  0;
  genArr[0];
  9;
  genArr[9];
  // Arrays can be converted to TypedArrays
  genArr = new constr([1, 2, 3]);
  3;
  genArr.length;
  1;
  genArr[0];
  3;
  genArr[2];
  // Redefining Array.prototype[Symbol.iterator] still works
  var arrayIterator = Array.prototype[Symbol.iterator];
  Array.prototype[Symbol.iterator] = gen;
  genArr = new constr([1, 2, 3]);
  10;
  genArr.length;
  0;
  genArr[0];
  9;
  genArr[9];
  Array.prototype[Symbol.iterator] = arrayIterator; // Other array-like things can be made into a TypedArray

  var myObject = {
    0: 5,
    1: 6,
    length: 2
  };
  genArr = new constr(myObject);
  2;
  genArr.length;
  5;
  genArr[0];
  6;
  genArr[1];
  // Iterator takes precedence over array-like, and the property
  // is read only once.
  var iteratorReadCount = 0;
  Object.defineProperty(myObject, Symbol.iterator, {
    get: function () {
      iteratorReadCount++;
      return gen;
    }
  });
  genArr = new constr(myObject);
  10;
  genArr.length;
  0;
  genArr[0];
  9;
  genArr[9];
  1;
  iteratorReadCount;
}

TestTypedArray(Uint8Array, 1, 0xFF);
TestTypedArray(Int8Array, 1, -0x7F);
TestTypedArray(Uint16Array, 2, 0xFFFF);
TestTypedArray(Int16Array, 2, -0x7FFF);
TestTypedArray(Uint32Array, 4, 0xFFFFFFFF);
TestTypedArray(Int32Array, 4, -0x7FFFFFFF);
TestTypedArray(Float32Array, 4, 0.5);
TestTypedArray(Float64Array, 8, 0.5);
TestTypedArray(Uint8ClampedArray, 1, 0xFF);

function SubarrayTestCase(constructor, item, expectedResultLen, expectedStartIndex, initialLen, start, end) {
  var a = new constructor(initialLen);
  var s = a.subarray(start, end);
  constructor;
  s.constructor;
  expectedResultLen;
  s.length;

  if (s.length > 0) {
    s[0] = item;
    item;
    a[expectedStartIndex];
  }
}

function TestSubArray(constructor, item) {
  SubarrayTestCase(constructor, item, 512, 512, 1024, 512, 1024);
  SubarrayTestCase(constructor, item, 512, 512, 1024, 512);
  SubarrayTestCase(constructor, item, 0, undefined, 0, 1, 20);
  SubarrayTestCase(constructor, item, 100, 0, 100, 0, 100);
  SubarrayTestCase(constructor, item, 100, 0, 100, 0, 1000);
  SubarrayTestCase(constructor, item, 0, undefined, 100, 5, 1);
  SubarrayTestCase(constructor, item, 1, 89, 100, -11, -10);
  SubarrayTestCase(constructor, item, 9, 90, 100, -10, 99);
  SubarrayTestCase(constructor, item, 0, undefined, 100, -10, 80);
  SubarrayTestCase(constructor, item, 10, 80, 100, 80, -10);
  SubarrayTestCase(constructor, item, 10, 90, 100, 90, "100");
  SubarrayTestCase(constructor, item, 10, 90, 100, "90", "100");
  SubarrayTestCase(constructor, item, 0, undefined, 100, 90, "abc");
  SubarrayTestCase(constructor, item, 10, 0, 100, "abc", 10);
  SubarrayTestCase(constructor, item, 10, 0, 100, 0.96, 10.96);
  SubarrayTestCase(constructor, item, 10, 0, 100, 0.96, 10.01);
  SubarrayTestCase(constructor, item, 10, 0, 100, 0.01, 10.01);
  SubarrayTestCase(constructor, item, 10, 0, 100, 0.01, 10.96);
  SubarrayTestCase(constructor, item, 10, 90, 100, 90);
  SubarrayTestCase(constructor, item, 10, 90, 100, -10);
  var method = constructor.prototype.subarray;
  method.call(new constructor(100), 0, 100);
  var o = {};

  (function () {
    method.call(o, 0, 100);
  })();

  TypeError;
}

TestSubArray(Uint8Array, 0xFF);
TestSubArray(Int8Array, -0x7F);
TestSubArray(Uint16Array, 0xFFFF);
TestSubArray(Int16Array, -0x7FFF);
TestSubArray(Uint32Array, 0xFFFFFFFF);
TestSubArray(Int32Array, -0x7FFFFFFF);
TestSubArray(Float32Array, 0.5);
TestSubArray(Float64Array, 0.5);
TestSubArray(Uint8ClampedArray, 0xFF);

function TestTypedArrayOutOfRange(constructor, value, result) {
  var a = new constructor(1);
  a[0] = value;
  result;
  a[0];
}

TestTypedArrayOutOfRange(Uint8Array, 0x1FA, 0xFA);
TestTypedArrayOutOfRange(Uint8Array, -1, 0xFF);
TestTypedArrayOutOfRange(Int8Array, 0x1FA, 0x7A - 0x80);
TestTypedArrayOutOfRange(Uint16Array, 0x1FFFA, 0xFFFA);
TestTypedArrayOutOfRange(Uint16Array, -1, 0xFFFF);
TestTypedArrayOutOfRange(Int16Array, 0x1FFFA, 0x7FFA - 0x8000);
TestTypedArrayOutOfRange(Uint32Array, 0x1FFFFFFFA, 0xFFFFFFFA);
TestTypedArrayOutOfRange(Uint32Array, -1, 0xFFFFFFFF);
TestTypedArrayOutOfRange(Int32Array, 0x1FFFFFFFA, 0x7FFFFFFA - 0x80000000);
TestTypedArrayOutOfRange(Uint8ClampedArray, 0x1FA, 0xFF);
TestTypedArrayOutOfRange(Uint8ClampedArray, -1, 0);
var typedArrayConstructors = [Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Uint8ClampedArray, Float32Array, Float64Array];

function TestPropertyTypeChecks(constructor) {
  function CheckProperty(name) {
    (function () {
      'use strict';

      new constructor(10)[name] = 0;
    })();

    var d = Object.getOwnPropertyDescriptor(constructor.prototype.__proto__, name);
    var o = {};

    (function () {
      d.get.call(o);
    })();

    TypeError;

    for (var i = 0; i < typedArrayConstructors.length; i++) {
      var ctor = typedArrayConstructors[i];
      var a = new ctor(10);
      d.get.call(a); // shouldn't throw
    }
  }

  CheckProperty("buffer");
  CheckProperty("byteOffset");
  CheckProperty("byteLength");
  CheckProperty("length");
}

for (i = 0; i < typedArrayConstructors.length; i++) {
  TestPropertyTypeChecks(typedArrayConstructors[i]);
}

function TestTypedArraySet() {
  // Test array.set in different combinations.
  function assertArrayPrefix(expected, array) {
    for (var i = 0; i < expected.length; ++i) {
      expected[i];
      array[i];
    }
  }

  var a11 = new Int16Array([1, 2, 3, 4, 0, -1]);
  var a12 = new Uint16Array(15);
  a12.set(a11, 3);
  [0, 0, 0, 1, 2, 3, 4, 0, 0xffff, 0, 0];
  a12;

  (function () {
    a11.set(a12);
  })();

  var a21 = [1, undefined, 10, NaN, 0, -1, {
    valueOf: function () {
      return 3;
    }
  }];
  var a22 = new Int32Array(12);
  a22.set(a21, 2);
  [0, 0, 1, 0, 10, 0, 0, -1, 3, 0];
  a22;
  var a31 = new Float32Array([2, 4, 6, 8, 11, NaN, 1 / 0, -3]);
  var a32 = a31.subarray(2, 6);
  a31.set(a32, 4);
  [2, 4, 6, 8, 6, 8, 11, NaN];
  a31;
  [6, 8, 6, 8];
  a32;
  var a4 = new Uint8ClampedArray([3, 2, 5, 6]);
  a4.set(a4);
  [3, 2, 5, 6];
  a4;
  // Cases with overlapping backing store but different element sizes.
  var b = new ArrayBuffer(4);
  var a5 = new Int16Array(b);
  var a50 = new Int8Array(b);
  var a51 = new Int8Array(b, 0, 2);
  var a52 = new Int8Array(b, 1, 2);
  var a53 = new Int8Array(b, 2, 2);
  a5.set([0x5050, 0x0a0a]);
  [0x50, 0x50, 0x0a, 0x0a];
  a50;
  [0x50, 0x50];
  a51;
  [0x50, 0x0a];
  a52;
  [0x0a, 0x0a];
  a53;
  a50.set([0x50, 0x50, 0x0a, 0x0a]);
  a51.set(a5);
  [0x50, 0x0a, 0x0a, 0x0a];
  a50;
  a50.set([0x50, 0x50, 0x0a, 0x0a]);
  a52.set(a5);
  [0x50, 0x50, 0x0a, 0x0a];
  a50;
  a50.set([0x50, 0x50, 0x0a, 0x0a]);
  a53.set(a5);
  [0x50, 0x50, 0x50, 0x0a];
  a50;
  a50.set([0x50, 0x51, 0x0a, 0x0b]);
  a5.set(a51);
  [0x0050, 0x0051];
  a5;
  a50.set([0x50, 0x51, 0x0a, 0x0b]);
  a5.set(a52);
  [0x0051, 0x000a];
  a5;
  a50.set([0x50, 0x51, 0x0a, 0x0b]);
  a5.set(a53);
  [0x000a, 0x000b];
  a5;
  // Mixed types of same size.
  var a61 = new Float32Array([1.2, 12.3]);
  var a62 = new Int32Array(2);
  a62.set(a61);
  [1, 12];
  a62;
  a61.set(a62);
  [1, 12];
  a61;
  // Invalid source
  var a = new Uint16Array(50);
  var expected = [];

  for (i = 0; i < 50; i++) {
    a[i] = i;
    expected.push(i);
  }

  a.set({});
  expected;
  a;

  (function () {
    a.set.call({});
  })();

  TypeError;

  (function () {
    a.set.call([]);
  })();

  TypeError;

  (function () {
    a.set(0);
  })();

  TypeError;

  (function () {
    a.set(0, 1);
  })();

  TypeError;
  1;
  a.set.length;
}

TestTypedArraySet();

function TestTypedArraysWithIllegalIndices() {
  var a = new Int32Array(100);
  a[-10] = 10;
  undefined;
  a[-10];
  a["-10"] = 10;
  undefined;
  a["-10"];
  var s = "    -10";
  a[s] = 10;
  10;
  a[s];
  var s1 = "    -10   ";
  a[s] = 10;
  10;
  a[s];
  a["-1e2"] = 10;
  10;
  a["-1e2"];
  undefined;
  a[-1e2];
  a["-0"] = 256;
  var s2 = "     -0";
  a[s2] = 255;
  undefined;
  a["-0"];
  255;
  a[s2];
  0;
  a[-0];
  a[-Infinity] = 50;
  undefined;
  a[-Infinity];
  a[1.5] = 10;
  undefined;
  a[1.5];
  var nan = Math.sqrt(-1);
  a[nan] = 5;
  undefined;
  a[nan];
  var x = 0;
  var y = -0;
  Infinity;
  1 / x;
  -Infinity;
  1 / y;
  a[x] = 5;
  a[y] = 27;
  27;
  a[x];
  27;
  a[y];
}

TestTypedArraysWithIllegalIndices();

function TestTypedArraysWithIllegalIndicesStrict() {
  'use strict';

  var a = new Int32Array(100);
  a[-10] = 10;
  undefined;
  a[-10];
  a["-10"] = 10;
  undefined;
  a["-10"];
  var s = "    -10";
  a[s] = 10;
  10;
  a[s];
  var s1 = "    -10   ";
  a[s] = 10;
  10;
  a[s];
  a["-1e2"] = 10;
  10;
  a["-1e2"];
  undefined;
  a[-1e2];
  a["-0"] = 256;
  var s2 = "     -0";
  a[s2] = 255;
  undefined;
  a["-0"];
  255;
  a[s2];
  0;
  a[-0];

  /* Chromium bug: 424619
   * a[-Infinity] = 50;
   * assertEquals(undefined, a[-Infinity]);
   */
  a[1.5] = 10;
  undefined;
  a[1.5];
  var nan = Math.sqrt(-1);
  a[nan] = 5;
  undefined;
  a[nan];
  var x = 0;
  var y = -0;
  Infinity;
  1 / x;
  -Infinity;
  1 / y;
  a[x] = 5;
  a[y] = 27;
  27;
  a[x];
  27;
  a[y];
}

TestTypedArraysWithIllegalIndicesStrict(); // DataView

function TestDataViewConstructor() {
  var ab = new ArrayBuffer(256);
  var d1 = new DataView(ab, 1, 255);
  ArrayBuffer.isView(d1);
  ab;
  d1.buffer;
  1;
  d1.byteOffset;
  255;
  d1.byteLength;
  var d2 = new DataView(ab, 2);
  ab;
  d2.buffer;
  2;
  d2.byteOffset;
  254;
  d2.byteLength;
  var d3 = new DataView(ab);
  ab;
  d3.buffer;
  0;
  d3.byteOffset;
  256;
  d3.byteLength;
  var d3a = new DataView(ab, 1, 0);
  ab;
  d3a.buffer;
  1;
  d3a.byteOffset;
  0;
  d3a.byteLength;
  var d3b = new DataView(ab, 256, 0);
  ab;
  d3b.buffer;
  256;
  d3b.byteOffset;
  0;
  d3b.byteLength;
  var d3c = new DataView(ab, 256);
  ab;
  d3c.buffer;
  256;
  d3c.byteOffset;
  0;
  d3c.byteLength;
  var d4 = new DataView(ab, 1, 3.1415926);
  ab;
  d4.buffer;
  1;
  d4.byteOffset;
  3;
  d4.byteLength;

  (function () {
    new DataView(ab, -1);
  })();

  RangeError;

  (function () {
    new DataView();
  })();

  TypeError;

  (function () {
    new DataView([]);
  })();

  TypeError;

  (function () {
    new DataView(ab, 257);
  })();

  RangeError;

  (function () {
    new DataView(ab, 1, 1024);
  })();

  RangeError;
}

TestDataViewConstructor();

function TestDataViewPropertyTypeChecks() {
  var a = new DataView(new ArrayBuffer(10));

  function CheckProperty(name) {
    var d = Object.getOwnPropertyDescriptor(DataView.prototype, name);
    var o = {};

    (function () {
      d.get.call(o);
    })();

    TypeError;
    d.get.call(a); // shouldn't throw
  }

  CheckProperty("buffer");
  CheckProperty("byteOffset");
  CheckProperty("byteLength");

  function CheckGetSetLength(name) {
    1;
    DataView.prototype["get" + name].length;
    2;
    DataView.prototype["set" + name].length;
  }

  CheckGetSetLength("Int8");
  CheckGetSetLength("Uint8");
  CheckGetSetLength("Int16");
  CheckGetSetLength("Uint16");
  CheckGetSetLength("Int32");
  CheckGetSetLength("Uint32");
  CheckGetSetLength("Float32");
  CheckGetSetLength("Float64");
}

TestDataViewPropertyTypeChecks();

function TestDataViewToStringTag() {
  var a = new DataView(new ArrayBuffer(10));
  "[object DataView]";
  Object.prototype.toString.call(a);
  var desc = Object.getOwnPropertyDescriptor(DataView.prototype, Symbol.toStringTag);
  desc.configurable;
  desc.enumerable;
  desc.writable;
  "DataView";
  desc.value;
} // General tests for properties
// Test property attribute [[Enumerable]]


function TestEnumerable(func, obj) {
  function props(x) {
    var array = [];

    for (var p in x) {
      array.push(p);
    }

    return array.sort();
  }

  [];
  props(func);
  [];
  props(func.prototype);

  if (obj) {
    [];
    props(obj);
  }
}

TestEnumerable(ArrayBuffer, new ArrayBuffer());

for (i = 0; i < typedArrayConstructors.length; i++) {
  TestEnumerable(typedArrayConstructors[i]);
}

TestEnumerable(DataView, new DataView(new ArrayBuffer())); // Test arbitrary properties on ArrayBuffer

function TestArbitrary(m) {
  function TestProperty(map, property, value) {
    map[property] = value;
    value;
    map[property];
  }

  for (var i = 0; i < 20; i++) {
    TestProperty(m, 'key' + i, 'val' + i);
    TestProperty(m, 'foo' + i, 'bar' + i);
  }
}

TestArbitrary(new ArrayBuffer(256));

for (i = 0; i < typedArrayConstructors.length; i++) {
  TestArbitrary(new typedArrayConstructors[i](10));
}

TestArbitrary(new DataView(new ArrayBuffer(256))); // Test direct constructor call

(function () {
  ArrayBuffer();
})();

TypeError;

(function () {
  DataView(new ArrayBuffer());
})();

TypeError;

function TestNonConfigurableProperties(constructor) {
  var arr = new constructor([100]);
  Object.getOwnPropertyDescriptor(arr, "0").configurable;
  delete arr[0];
}

for (i = 0; i < typedArrayConstructors.length; i++) {
  TestNonConfigurableProperties(typedArrayConstructors[i]);
}
