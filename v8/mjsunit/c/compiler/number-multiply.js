// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
// Test the extreme case where -0 is produced by rounding errors.
(function () {
  function bar(x) {
    return 1e-308 * x;
  }

  bar(1);

  function foo() {
    return Object.is(-0, bar(-1e-308));
  }

  foo();
  foo();
  foo();
})(); // Test that multiplication of integer by 0 produces the correct results.


(function () {
  function foo(x) {
    return 0 * Math.round(x);
  }

  0;
  foo(0.1);
  -0;
  foo(-0.1);
  NaN;
  foo(NaN);
  NaN;
  foo(Infinity);
  NaN;
  foo(-Infinity);
  0;
  foo(0.1);
  -0;
  foo(-0.1);
  NaN;
  foo(NaN);
  NaN;
  foo(Infinity);
  NaN;
  foo(-Infinity);
})(); // Test that multiplication properly preserves -0 and NaN, and doesn't
// cut it short incorrectly.


(function () {
  function foo(x, y) {
    x = Math.sign(x);
    y = Math.sign(y);
    return Math.min(x * y, 0);
  }

  0;
  foo(1, 0);
  -0;
  foo(1, -0);
  NaN;
  foo(NaN, -0);
  0;
  foo(1, 0);
  -0;
  foo(1, -0);
  NaN;
  foo(NaN, -0);
})();
