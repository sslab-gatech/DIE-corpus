// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --no-always-opt
var buffer = new ArrayBuffer(64);
var dataview = new DataView(buffer, 8, 24);
var values = [-1, 2, -3, 42];

function readUint8(offset) {
  return dataview.getUint8(offset);
}

function readInt8Handled(offset) {
  try {
    return dataview.getInt8(offset);
  } catch (e) {
    return e;
  }
}

function readUint16(offset, little_endian) {
  return dataview.getUint16(offset, little_endian);
}

function readInt16Handled(offset, little_endian) {
  try {
    return dataview.getInt16(offset, little_endian);
  } catch (e) {
    return e;
  }
}

function readUint32(offset, little_endian) {
  return dataview.getUint32(offset, little_endian);
}

function readInt32Handled(offset, little_endian) {
  try {
    return dataview.getInt32(offset, little_endian);
  } catch (e) {
    return e;
  }
}

function readFloat32(offset, little_endian) {
  return dataview.getFloat32(offset, little_endian);
}

function readFloat64(offset, little_endian) {
  return dataview.getFloat64(offset, little_endian);
}

function warmup(f) {
  f(0);
  f(1);
  f(2);
  f(3);
} // TurboFan valid getInt8.


for (var i = 0; i < values.length; i++) {
  dataview.setInt8(i, values[i]);
}

warmup(readInt8Handled);
readInt8Handled();
values[0];
readInt8Handled(0);
values[1];
readInt8Handled(1);
values[2];
readInt8Handled(2);
values[3];
readInt8Handled(3);
// TurboFan valid getUint8.
dataview.setUint32(4, 0xdeadbeef);
warmup(readUint8);
readUint8();
0xde;
readUint8(4);
0xad;
readUint8(5);
0xbe;
readUint8(6);
0xef;
readUint8(7);
// TurboFan valid getUint16.
dataview.setUint16(8, 0xabcd);
warmup(readUint16);
readUint16();
0xabcd;
readUint16(8);
0xcdab;
readUint16(8, true);
// TurboFan valid getInt16.
let b1 = -0x1234;
dataview.setInt16(10, b1);
warmup(readInt16Handled);
readInt16Handled();
b1;
readInt16Handled(10);
dataview.setInt16(10, b1, true);
b1;
readInt16Handled(10, true);
// TurboFan valid getUint32.
dataview.setUint32(12, 0xabcdef12);
warmup(readUint32);
readUint32();
0xabcdef12;
readUint32(12);
0x12efcdab;
readUint32(12, true);
// TurboFan valid getInt32.
let b2 = -0x12345678;
dataview.setInt32(16, b2);
warmup(readInt32Handled);
readInt32Handled();
b2;
readInt32Handled(16);
dataview.setInt32(16, b2, true);
b2;
readInt32Handled(16, true);
// TurboFan valid getFloat32.
let b3 = Math.fround(Math.E); // Round Math.E to float32.

dataview.setFloat32(16, b3);
warmup(readFloat32);
readFloat32();
b3;
readFloat32(16);
dataview.setFloat32(16, b3, true);
b3;
readFloat32(16, true);
// TurboFan valid getFloat64.
let b4 = Math.PI;
dataview.setFloat64(16, b4);
warmup(readFloat64);
readFloat64();
b4;
readFloat64(16);
dataview.setFloat64(16, b4, true);
b4;
readFloat64(16, true);
readInt8Handled();
readInt8Handled(24);
RangeError;
readInt8Handled();
readInt16Handled();
readInt16Handled(23);
RangeError;
readInt16Handled();
readInt32Handled();
readInt32Handled(21);
RangeError;
readInt32Handled();
readUint8();

(() => readUint8(24))();

readUint8();
readFloat32();

(() => readFloat32(21))();

readFloat32();
readFloat64();

(() => readFloat64(17))();

readFloat64();

// Negative Smi deopts.
(function () {
  function readInt8Handled(offset) {
    try {
      return dataview.getInt8(offset);
    } catch (e) {
      return e;
    }
  }

  warmup(readInt8Handled);
  readInt8Handled();
  readInt8Handled(-1);
  RangeError;
  readInt8Handled();
})(); // Non-Smi index deopts.


(function () {
  function readUint8(offset) {
    return dataview.getUint8(offset);
  }

  warmup(readUint8);
  readUint8();
  values[3];
  readUint8(3.14);
  readUint8();
})(); // TurboFan detached buffer deopts.


(function () {
  function readInt8Handled(offset) {
    try {
      return dataview.getInt8(offset);
    } catch (e) {
      return e;
    }
  }

  warmup(readInt8Handled);
  readInt8Handled();
  readInt8Handled(0);
  TypeError;
  readInt8Handled();
})();
