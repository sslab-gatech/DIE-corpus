// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
// Test that NumberAbs correctly deals with PositiveInteger \/ MinusZero
// and turns the -0 into a 0.
(function () {
  function foo(x) {
    x = Math.floor(x);
    x = Math.max(x, -0);
    return 1 / Math.abs(x);
  }

  Infinity;
  foo(-0);
  Infinity;
  foo(-0);
  Infinity;
  foo(-0);
})(); // Test that NumberAbs properly passes the kIdentifyZeros truncation
// for Signed32 \/ MinusZero inputs.


(function () {
  function foo(x) {
    return Math.abs(x * -2);
  }

  2;
  foo(-1);
  4;
  foo(-2);
  2;
  foo(-1);
  4;
  foo(-2);
  foo();
  0;
  foo(0);
  foo();
})(); // Test that NumberAbs properly passes the kIdentifyZeros truncation
// for Unsigned32 \/ MinusZero inputs.


(function () {
  function foo(x) {
    x = x | 0;
    return Math.abs(Math.max(x * -2, 0));
  }

  2;
  foo(-1);
  4;
  foo(-2);
  2;
  foo(-1);
  4;
  foo(-2);
  foo();
  0;
  foo(0);
  foo();
})(); // Test that NumberAbs properly passes the kIdentifyZeros truncation
// for OrderedNumber inputs.


(function () {
  function foo(x) {
    x = x | 0;
    return Math.abs(Math.min(x * -2, 2 ** 32));
  }

  2;
  foo(-1);
  4;
  foo(-2);
  2;
  foo(-1);
  4;
  foo(-2);
  foo();
  0;
  foo(0);
  foo();
})();
