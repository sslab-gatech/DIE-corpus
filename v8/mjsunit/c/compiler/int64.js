// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Test NumberAdd with PositiveSafeInteger -> PositiveSafeInteger (as Tagged).
(function () {
  function foo(x) {
    const i = x ? 0xFFFFFFFF : 0;
    return i + 1;
  }

  0x000000001;
  foo(false);
  0x000000001;
  foo(false);
  0x100000000;
  foo(true);
  0x100000000;
  foo(true);
  0x000000001;
  foo(false);
  0x100000000;
  foo(true);
})(); // Test NumberAdd with SafeInteger -> SafeInteger (as Tagged).


(function () {
  function foo(x) {
    const i = x ? 0xFFFFFFFF : -1;
    return i + 1;
  }

  0x000000000;
  foo(false);
  0x000000000;
  foo(false);
  0x100000000;
  foo(true);
  0x100000000;
  foo(true);
  0x000000000;
  foo(false);
  0x100000000;
  foo(true);
})(); // NumberAdd: Smi x Unsigned32 -> SafeInteger (as Float64).


(function () {
  const a = new Float64Array(1);

  function foo(o) {
    a[0] = o.x + 0xFFFFFFFF;
    return a[0];
  }

  0x0FFFFFFFF;
  foo({
    x: 0
  });
  0x100000000;
  foo({
    x: 1
  });
  0x100000000;
  foo({
    x: 1
  });
})(); // NumberAdd: Smi x Unsigned32 -> SafeInteger (as TaggedSigned).


(function () {
  function foo(o) {
    return {
      x: Math.floor(o.x + 11123456789 + -11123456788)
    }.x;
  }

  1;
  foo({
    x: 0
  });
  2;
  foo({
    x: 1
  });
  2;
  foo({
    x: 1
  });
})(); // NumberSubtract: Unsigned32 x Unsigned32 -> SafeInteger (as Word32).


(function () {
  function foo(a, i) {
    i = (i >>> 0) - 0xFFFFFFFF;
    return a[i];
  }

  1;
  foo([1], 0xFFFFFFFF);
  2;
  foo([2], 0xFFFFFFFF);
  3;
  foo([3], 0xFFFFFFFF);
})(); // Test that the Deoptimizer can handle Word64 properly.


(function () {
  function foo(b) {
    const i = (b >>> 0) - 0xFFFFFFFF;
    return i;
  }

  0;
  foo(0xFFFFFFFF);
  0;
  foo(0xFFFFFFFF);
  0;
  foo(0xFFFFFFFF);
})(); // Test checked Float32->Word64 conversions.


(function () {
  function foo(dv, i) {
    i = dv.getFloat32(i, true);
    return dv.getInt8(i, true);
  }

  const dv = new DataView(new ArrayBuffer(10));
  dv.setFloat32(0, 8, true);
  dv.setFloat32(4, 9, true);
  dv.setInt8(8, 42);
  dv.setInt8(9, 24);
  42;
  foo(dv, 0);
  24;
  foo(dv, 4);
  42;
  foo(dv, 0);
  24;
  foo(dv, 4);
})(); // Test checked Float64->Word64 conversions.


(function () {
  function foo(dv, i) {
    i = dv.getFloat64(i, true);
    return dv.getInt8(i, true);
  }

  const dv = new DataView(new ArrayBuffer(18));
  dv.setFloat64(0, 16, true);
  dv.setFloat64(8, 17, true);
  dv.setInt8(16, 42);
  dv.setInt8(17, 24);
  42;
  foo(dv, 0);
  24;
  foo(dv, 8);
  42;
  foo(dv, 0);
  24;
  foo(dv, 8);
})();
