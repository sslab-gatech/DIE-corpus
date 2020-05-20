// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --noalways-opt
// Test that NumberDivide with Number feedback works if only in the
// end SimplifiedLowering figures out that the inputs to this operation
// are actually Unsigned32.
(function () {
  // We need a separately polluted % with NumberOrOddball feedback.
  function bar(x) {
    return x / 2;
  }

  bar(undefined); // The % feedback is now NumberOrOddball.
  // Now just use the gadget above in a way that only after RETYPE
  // in SimplifiedLowering we find out that the `x` is actually in
  // Unsigned32 range (based on taking the SignedSmall feedback on
  // the + operator).

  function foo(x) {
    x = (x >>> 0) + 1;
    return bar(x) | 0;
  }

  1;
  foo(1);
  1;
  foo(2);
  2;
  foo(3);
  2;
  foo(4);
  1;
  foo(1);
  1;
  foo(2);
  2;
  foo(3);
  2;
  foo(4);
  foo();
})(); // Test that NumberDivide with Number feedback works if only in the
// end SimplifiedLowering figures out that the inputs to this operation
// are actually Signed32.


(function () {
  // We need a separately polluted % with NumberOrOddball feedback.
  function bar(x) {
    return x / 2;
  }

  bar(undefined); // The % feedback is now NumberOrOddball.
  // Now just use the gadget above in a way that only after RETYPE
  // in SimplifiedLowering we find out that the `x` is actually in
  // Signed32 range (based on taking the SignedSmall feedback on
  // the + operator).

  function foo(x) {
    x = (x | 0) + 1;
    return bar(x) | 0;
  }

  1;
  foo(1);
  1;
  foo(2);
  2;
  foo(3);
  2;
  foo(4);
  1;
  foo(1);
  1;
  foo(2);
  2;
  foo(3);
  2;
  foo(4);
  foo();
})(); // Test that SpeculativeNumberDivide turns into CheckedInt32Div, and
// that the "known power of two divisor" optimization works correctly.


(function () {
  function foo(x) {
    return (x | 0) / 2;
  } // Warmup with proper int32 divisions.


  1;
  foo(2);
  2;
  foo(4);
  3;
  foo(6);
  foo();
  0.5;
  foo(1);
  foo();
  4;
  foo(8);
  foo();
  0.5;
  foo(1);
  foo();
})(); // Test that SpeculativeNumberDivide turns into CheckedInt32Div, and
// that the optimized code properly bails out on "division by zero".


(function () {
  function foo(x, y) {
    return x / y;
  } // Warmup with proper int32 divisions.


  2;
  foo(4, 2);
  2;
  foo(8, 4);
  1;
  foo(2, 2);
  foo();
  Infinity;
  foo(1, 0);
  foo();
  2;
  foo(2, 1);
  foo();
  Infinity;
  foo(1, 0);
  foo();
})(); // Test that SpeculativeNumberDivide turns into CheckedInt32Div, and
// that the optimized code properly bails out on minus zero.


(function () {
  function foo(x, y) {
    return x / y;
  } // Warmup with proper int32 divisions.


  2;
  foo(4, 2);
  2;
  foo(8, 4);
  1;
  foo(2, 2);
  foo();
  -0;
  foo(0, -1);
  foo();
  2;
  foo(2, 1);
  foo();
  -0;
  foo(0, -1);
  foo();
})(); // Test that SpeculativeNumberDivide turns into CheckedInt32Div, and
// that the optimized code properly bails out if result is -kMinInt.


(function () {
  function foo(x, y) {
    return x / y;
  } // Warmup with proper int32 divisions.


  2;
  foo(4, 2);
  2;
  foo(8, 4);
  1;
  foo(2, 2);
  foo();
  2147483648;
  foo(-2147483648, -1);
  foo();
  2;
  foo(2, 1);
  foo();
  2147483648;
  foo(-2147483648, -1);
  foo();
})(); // Test that SpeculativeNumberDivide turns into CheckedUint32Div, and
// that the "known power of two divisor" optimization works correctly.


(function () {
  function foo(s) {
    return s.length / 2;
  } // Warmup with proper uint32 divisions.


  1;
  foo("ab".repeat(1));
  2;
  foo("ab".repeat(2));
  3;
  foo("ab".repeat(3));
  foo();
  0.5;
  foo("a");
  foo();
  4;
  foo("ab".repeat(4));
  foo();
  0.5;
  foo("a");
  foo();
})(); // Test that SpeculativeNumberDivide turns into CheckedUint32Div, and
// that the optimized code properly bails out on "division by zero".


(function () {
  function foo(x, y) {
    return (x >>> 0) / (y >>> 0);
  } // Warmup with proper uint32 divisions.


  2;
  foo(4, 2);
  2;
  foo(8, 4);
  1;
  foo(2, 2);
  foo();
  Infinity;
  foo(1, 0);
  foo();
  2;
  foo(2, 1);
  foo();
  Infinity;
  foo(1, 0);
  foo();
})();
