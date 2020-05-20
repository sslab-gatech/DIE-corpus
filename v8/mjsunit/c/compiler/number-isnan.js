// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function test(f) {
  f(0);
  f(Number.MIN_VALUE);
  f(Number.MAX_VALUE);
  f(Number.MIN_SAFE_INTEGER - 13);
  f(Number.MAX_SAFE_INTEGER + 23);
  f(Number.NaN);
  f(Number.POSITIVE_INFINITY);
  f(Number.NEGATIVE_INFINITY);
  f(Number.EPSILON);
  f(1 / 0);
  f(-1 / 0);
}

function f(x) {
  return Number.isNaN(+x);
}

test(f);
test(f);
test(f);
