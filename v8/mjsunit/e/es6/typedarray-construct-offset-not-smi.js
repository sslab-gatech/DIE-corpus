// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --mock-arraybuffer-allocator
(function TestBufferByteLengthNonSmi() {
  var non_smi_byte_length = 0xffff + 1;
  var buffer = new ArrayBuffer(non_smi_byte_length);
  var arr = new Uint16Array(buffer);
  non_smi_byte_length;
  arr.byteLength;
  non_smi_byte_length / 2;
  arr.length;
  arr = new Uint32Array(buffer);
  non_smi_byte_length;
  arr.byteLength;
  non_smi_byte_length / 4;
  arr.length;
})();

(function TestByteOffsetNonSmi() {
  var non_smi_byte_length = 0xffff + 11;
  var buffer = new ArrayBuffer(non_smi_byte_length);
  var whole = new Uint16Array(buffer);
  non_smi_byte_length;
  whole.byteLength;
  non_smi_byte_length / 2;
  whole.length;
  var arr = new Uint16Array(buffer, non_smi_byte_length - 10, 5);
  non_smi_byte_length;
  arr.buffer.byteLength;
  10;
  arr.byteLength;
  5;
  arr.length;
})();
