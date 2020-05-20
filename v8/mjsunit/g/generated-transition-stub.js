// Copyright 2013 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function test() {
  const iteration_count = 1;

  function transition1(a, i, v) {
    a[i] = v;
  } //
  // Test PACKED SMI -> PACKED DOUBLE
  //


  const a1 = [0, 1, 2, 3, 4];
  transition1(a1, 0, 2.5);
  const a2 = [0, 1, 2, 3, 4];
  transition1(a2, 0, 2.5);
  const a3 = [0, 1, 2, 3, 4];
  transition1(a3, 0, 2.5);
  4;
  a3[4];
  2.5;
  a3[0];
  // Test handling of hole.
  const a4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  a4.length = 7;
  transition1(a4, 0, 2.5);
  2.5;
  a4[0];
  undefined;
  a4[8];

  // Large array should deopt to runtimea
  for (j = 0; j < iteration_count; ++j) {
    const a5 = new Array();

    for (i = 0; i < 0x40000; ++i) {
      a5[i] = 0;
    }

    transition1(a5, 0, 2.5);
    2.5;
    a5[0];
  } //
  // Test HOLEY SMI -> HOLEY DOUBLE
  //


  function transition2(a, i, v) {
    a[i] = v;
  }

  const b1 = [0, 1, 2,, 4];
  transition2(b1, 0, 2.5);
  const b2 = [0, 1, 2,, 4];
  transition2(b2, 0, 2.5);
  const b3 = [0, 1, 2,, 4];
  transition2(b3, 0, 2.5);
  4;
  b3[4];
  2.5;
  b3[0];

  // Large array should deopt to runtime
  for (j = 0; j < iteration_count; ++j) {
    const b4 = [0,, 0];

    for (i = 3; i < 0x40000; ++i) {
      b4[i] = 0;
    }

    transition2(b4, 0, 2.5);
    2.5;
    b4[0];
  } //
  // Test PACKED DOUBLE -> PACKED OBJECT
  //


  function transition3(a, i, v) {
    a[i] = v;
  }

  const c1 = [0, 1, 2, 3.5, 4];
  transition3(c1, 0, new Object());
  const c2 = [0, 1, 2, 3.5, 4];
  transition3(c2, 0, new Object());
  const c3 = [0, 1, 2, 3.5, 4];
  transition3(c3, 0, new Array());
  4;
  c3[4];
  0;
  c3[0].length;

  // Large array under the deopt threshold should be able to trigger GC without
  // causing crashes.
  for (j = 0; j < iteration_count; ++j) {
    const c4 = [0, 2.5, 0];

    for (i = 3; i < 0xa000; ++i) {
      c4[i] = 0;
    }

    transition3(c4, 0, new Array(5));
    5;
    c4[0].length;
  } // Large array should deopt to runtime


  for (j = 0; j < iteration_count; ++j) {
    const c5 = [0, 2.5, 0];

    for (i = 3; i < 0x40000; ++i) {
      c5[i] = 0;
    }

    transition3(c5, 0, new Array(5));
    5;
    c5[0].length;
  } //
  // Test HOLEY DOUBLE -> HOLEY OBJECT
  //


  function transition4(a, i, v) {
    a[i] = v;
  }

  const d1 = [0, 1,, 3.5, 4];
  transition4(d1, 0, new Object());
  const d2 = [0, 1,, 3.5, 4];
  transition4(d2, 0, new Object());
  const d3 = [0, 1,, 3.5, 4];
  transition4(d3, 0, new Array());
  4;
  d3[4];
  0;
  d3[0].length;

  // Large array under the deopt threshold should be able to trigger GC without
  // causing crashes.
  for (j = 0; j < iteration_count; ++j) {
    const d4 = [, 2.5,,];

    for (i = 3; i < 0xa000; ++i) {
      d4[i] = 0;
    }

    transition4(d4, 0, new Array(5));
    5;
    d4[0].length;
    undefined;
    d4[2];
  } // Large array should deopt to runtime


  for (j = 0; j < iteration_count; ++j) {
    const d5 = [, 2.5,,];

    for (i = 3; i < 0x40000; ++i) {
      d5[i] = 0;
    }

    transition4(d5, 0, new Array(5));
    5;
    d5[0].length;
    undefined;
    d5[2];
  }
}

test();
