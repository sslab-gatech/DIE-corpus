// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
// Test Math.imul() with no inputs.
(function () {
  function foo() {
    return Math.imul();
  }

  0;
  foo();
  0;
  foo();
  0;
  foo();
})(); // Test Math.imul() with only one input.


(function () {
  function foo(x) {
    return Math.imul(x);
  }

  0;
  foo(1);
  0;
  foo(2);
  0;
  foo(3);
})(); // Test Math.imul() with wrong types.


(function () {
  function foo(x, y) {
    return Math.imul(x, y);
  }

  0;
  foo(null, 1);
  0;
  foo(2, undefined);
  0;
  foo(null, 1);
  0;
  foo(2, undefined);
  0;
  foo(null, 1);
  0;
  foo(2, undefined);
  foo();
})(); // Test Math.imul() with signed integers (statically known).


(function () {
  function foo(x, y) {
    return Math.imul(x | 0, y | 0);
  }

  1;
  foo(1, 1);
  2;
  foo(2, 1);
  1;
  foo(1, 1);
  2;
  foo(2, 1);
  foo();
})(); // Test Math.imul() with unsigned integers (statically known).


(function () {
  function foo(x, y) {
    return Math.imul(x >>> 0, y >>> 0);
  }

  1;
  foo(1, 1);
  2;
  foo(2, 1);
  1;
  foo(1, 1);
  2;
  foo(2, 1);
  foo();
})(); // Test Math.imul() with floating-point numbers.


(function () {
  function foo(x, y) {
    return Math.imul(x, y);
  }

  1;
  foo(1.1, 1.1);
  2;
  foo(2.1, 1.1);
  1;
  foo(1.1, 1.1);
  2;
  foo(2.1, 1.1);
  foo();
})();
