// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function test(f) {
  f(0);
  f(Number.MIN_SAFE_INTEGER);
  f(Number.MIN_SAFE_INTEGER - 13);
  f(Number.MIN_SAFE_INTEGER + 13);
  f(Number.MAX_SAFE_INTEGER);
  f(Number.MAX_SAFE_INTEGER + 23);
  f(Number.MAX_SAFE_INTEGER - 23);
  f(Number.MIN_VALUE);
  f(Number.MAX_VALUE);
  f(Number.NaN);
  f(Number.POSITIVE_INFINITY);
  f(Number.NEGATIVE_INFINITY);
  f(1 / 0);
  f(-1 / 0);
  f(Number.EPSILON);
  var near_upper = Math.pow(2, 52);
  f(near_upper);
  f(2 * near_upper);
  f(2 * near_upper - 1);
  f(2 * near_upper - 2);
  f(2 * near_upper + 1);
  f(2 * near_upper + 2);
  f(2 * near_upper + 7);
  var near_lower = -near_upper;
  f(near_lower);
  f(2 * near_lower);
  f(2 * near_lower + 1);
  f(2 * near_lower + 2);
  f(2 * near_lower - 1);
  f(2 * near_lower - 2);
  f(2 * near_lower - 7);
} // Check that the NumberIsSafeInteger simplified operator in
// TurboFan does the right thing.


function NumberIsSafeInteger(x) {
  return Number.isSafeInteger(+x);
}

test(NumberIsSafeInteger);
test(NumberIsSafeInteger);
test(NumberIsSafeInteger); // Check that the ObjectIsSafeInteger simplified operator in
// TurboFan does the right thing as well (i.e. when TurboFan
// is not able to tell statically that the inputs are numbers).

function ObjectIsSafeInteger(x) {
  return Number.isSafeInteger(x);
}

test(ObjectIsSafeInteger);
test(ObjectIsSafeInteger);
test(ObjectIsSafeInteger);
