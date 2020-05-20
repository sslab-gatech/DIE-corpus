// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function test(f) {
  Number.isFinite(0);
  Number.isFinite(Number.MIN_VALUE);
  Number.isFinite(Number.MAX_VALUE);
  Number.isFinite(Number.MIN_SAFE_INTEGER);
  Number.isFinite(Number.MIN_SAFE_INTEGER - 13);
  Number.isFinite(Number.MAX_SAFE_INTEGER);
  Number.isFinite(Number.MAX_SAFE_INTEGER + 23);
  Number.isFinite(0);
  Number.isFinite(-1);
  Number.isFinite(123456);
  Number.isFinite(Number.NaN);
  Number.isFinite(Number.POSITIVE_INFINITY);
  Number.isFinite(Number.NEGATIVE_INFINITY);
  Number.isFinite(1 / 0);
  Number.isFinite(-1 / 0);
}

test();
test();
test();

function test2(f) {
  Number.isFinite({});
  Number.isFinite("abc");
  Number.isFinite(0);
  Number.isFinite(Number.MIN_VALUE);
  Number.isFinite(Number.MAX_VALUE);
  Number.isFinite(Number.MIN_SAFE_INTEGER);
  Number.isFinite(Number.MIN_SAFE_INTEGER - 13);
  Number.isFinite(Number.MAX_SAFE_INTEGER);
  Number.isFinite(Number.MAX_SAFE_INTEGER + 23);
  Number.isFinite(0);
  Number.isFinite(-1);
  Number.isFinite(123456);
  Number.isFinite(Number.NaN);
  Number.isFinite(Number.POSITIVE_INFINITY);
  Number.isFinite(Number.NEGATIVE_INFINITY);
  Number.isFinite(1 / 0);
  Number.isFinite(-1 / 0);
}

test2();
test2();
test2();
