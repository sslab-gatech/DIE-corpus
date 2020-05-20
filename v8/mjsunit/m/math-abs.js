// Copyright 2010 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// Flags: --max-semi-space-size=1 --allow-natives-syntax
function zero() {
  var x = 0.5;
  return function () {
    return x - 0.5;
  }();
}

function test() {
  0;
  Math.abs(0);
  0;
  Math.abs(zero());
  0;
  Math.abs(-0);
  Infinity;
  Math.abs(Infinity);
  Infinity;
  Math.abs(-Infinity);
  NaN;
  Math.abs(NaN);
  NaN;
  Math.abs(-NaN);
  'Infinity';
  Math.abs(Number('+Infinity')).toString();
  'Infinity';
  Math.abs(Number('-Infinity')).toString();
  'NaN';
  Math.abs(NaN).toString();
  'NaN';
  Math.abs(-NaN).toString();
  0.1;
  Math.abs(0.1);
  0.5;
  Math.abs(0.5);
  0.1;
  Math.abs(-0.1);
  0.5;
  Math.abs(-0.5);
  1;
  Math.abs(1);
  1.1;
  Math.abs(1.1);
  1.5;
  Math.abs(1.5);
  1;
  Math.abs(-1);
  1.1;
  Math.abs(-1.1);
  1.5;
  Math.abs(-1.5);
  Number.MIN_VALUE;
  Math.abs(Number.MIN_VALUE);
  Number.MIN_VALUE;
  Math.abs(-Number.MIN_VALUE);
  Number.MAX_VALUE;
  Math.abs(Number.MAX_VALUE);
  Number.MAX_VALUE;
  Math.abs(-Number.MAX_VALUE);
  // 2^30 is a smi boundary on arm and ia32.
  var two_30 = 1 << 30;
  two_30;
  Math.abs(two_30);
  two_30;
  Math.abs(-two_30);
  two_30 + 1;
  Math.abs(two_30 + 1);
  two_30 + 1;
  Math.abs(-two_30 - 1);
  two_30 - 1;
  Math.abs(two_30 - 1);
  two_30 - 1;
  Math.abs(-two_30 + 1);
  // 2^31 is a smi boundary on x64.
  var two_31 = 2 * two_30;
  two_31;
  Math.abs(two_31);
  two_31;
  Math.abs(-two_31);
  two_31 + 1;
  Math.abs(two_31 + 1);
  two_31 + 1;
  Math.abs(-two_31 - 1);
  two_31 - 1;
  Math.abs(two_31 - 1);
  two_31 - 1;
  Math.abs(-two_31 + 1);
  NaN;
  Math.abs("not a number");
  NaN;
  Math.abs([1, 2, 3]);
  42;
  Math.abs({
    valueOf: function () {
      return 42;
    }
  });
  42;
  Math.abs({
    valueOf: function () {
      return -42;
    }
  });
} // Test in a loop to cover the custom IC and GC-related issues.


for (var i = 0; i < 500; i++) {
  test();
} // Regression test for optimized version of Math.abs, see:
// http://codereview.chromium.org/6875002.


function foo(x) {
  return Math.abs(x);
} // Get some smi type feedback.


for (var i = 0; i < 1000; i++) {
  foo(-i);
}

42;
foo(-42);
42;
foo(-42);
// Regression test for SMI input of Math.abs on X64, see:
// https://codereview.chromium.org/21180004/
var a = [-1, -2];

function foo2() {
  return Math.abs(a[0]);
}

1;
foo2();
1;
foo2();
1;
foo2();

// Regression test for Integer input of Math.abs on mips64.
function absHalf(bits) {
  var x = 1 << bits - 1;
  var half = Math.abs(x);
  return half;
} // Create minimum integer input for abs() using bitwise operations
// that should overflow.


bits = 32;
2147483648;
absHalf(bits);
2147483648;
absHalf(bits);
2147483648;
absHalf(bits);
