// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function test() {
  Number.isInteger(0);
  Number.isInteger(Number.MIN_VALUE);
  Number.isInteger(Number.MAX_VALUE);
  Number.isInteger(Number.MIN_SAFE_INTEGER);
  Number.isInteger(Number.MIN_SAFE_INTEGER - 13);
  Number.isInteger(Number.MAX_SAFE_INTEGER);
  Number.isInteger(Number.MAX_SAFE_INTEGER + 23);
  Number.isInteger(0);
  Number.isInteger(-1);
  Number.isInteger(123456);
  Number.isInteger(Number.NaN);
  Number.isInteger(Number.POSITIVE_INFINITY);
  Number.isInteger(Number.NEGATIVE_INFINITY);
  Number.isInteger(1 / 0);
  Number.isInteger(-1 / 0);
  Number.isInteger(Number.EPSILON);
}

test();
test();
test();

function test2() {
  Number.isInteger(0);
  Number.isInteger(Number.MIN_VALUE);
  Number.isInteger(Number.MAX_VALUE);
  Number.isInteger(Number.MIN_SAFE_INTEGER);
  Number.isInteger(Number.MIN_SAFE_INTEGER - 13);
  Number.isInteger(Number.MAX_SAFE_INTEGER);
  Number.isInteger(Number.MAX_SAFE_INTEGER + 23);
  Number.isInteger(0);
  Number.isInteger(-1);
  Number.isInteger(123456);
  Number.isInteger(Number.NaN);
  Number.isInteger(Number.POSITIVE_INFINITY);
  Number.isInteger(Number.NEGATIVE_INFINITY);
  Number.isInteger(1 / 0);
  Number.isInteger(-1 / 0);
  Number.isInteger(Number.EPSILON);
}

test2();
test2();
test2();
