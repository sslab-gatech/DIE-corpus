// Copyright 2013 the V8 project authors. All rights reserved.
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
// TODO(3468): we rely on a precise Math.exp.
// Flags: --no-fast-math
[Math.sinh, Math.cosh, Math.tanh, Math.asinh, Math.acosh, Math.atanh].forEach(function (fun) {
  isNaN(fun(NaN));
  isNaN(fun("abc"));
  isNaN(fun({}));
  fun(0);
  fun([]);
  isNaN(fun([1, 1]));
  fun(1.11);
  fun({
    toString: function () {
      return "1.11";
    }
  });
  fun(-3.1);
  fun({
    toString: function () {
      return -3.1;
    }
  });
  fun(-1.1);
  fun({
    valueOf: function () {
      return "-1.1";
    }
  });
  fun(3.11);
  fun({
    valueOf: function () {
      return 3.11;
    }
  });
});

function test_id(fun, rev, value) {
  1;
  rev(fun(value)) / value;
  1E-7;
}

[Math.PI, 2, 5, 1E-5, 0.3].forEach(function (x) {
  test_id(Math.sinh, Math.asinh, x);
  test_id(Math.sinh, Math.asinh, -x);
  test_id(Math.cosh, Math.acosh, x);
  test_id(Math.tanh, Math.atanh, x);
  test_id(Math.tanh, Math.atanh, -x);
});
[Math.sinh, Math.asinh, Math.tanh, Math.atanh].forEach(function (fun) {
  "-Infinity";
  String(1 / fun(-0));
  "Infinity";
  String(1 / fun(0));
});
[Math.sinh, Math.asinh].forEach(function (fun) {
  "-Infinity";
  String(fun(-Infinity));
  "Infinity";
  String(fun(Infinity));
  "-Infinity";
  String(fun("-Infinity"));
  "Infinity";
  String(fun("Infinity"));
});
Infinity;
Math.cosh(-Infinity);
Infinity;
Math.cosh(Infinity);
Infinity;
Math.cosh("-Infinity");
Infinity;
Math.cosh("Infinity");
-Infinity;
Math.atanh(-1);
Infinity;
Math.atanh(1);
// Math.atanh(x) is NaN for |x| > 1 and NaN
[1.000000000001, Math.PI, 10000000, 2, Infinity, NaN].forEach(function (x) {
  isNaN(Math.atanh(-x));
  isNaN(Math.atanh(x));
});
0;
Math.sinh(0);
-Infinity;
1 / Math.sinh(-0);
1;
Math.tanh(Infinity);
-1;
Math.tanh(-Infinity);
1;
Math.cosh(0);
1;
Math.cosh(-0);
0;
Math.acosh(1);
"Infinity";
String(Math.acosh(Infinity));
// Math.acosh(x) is NaN for x < 1
[0.99999999999, 0.2, -1000, 0, -0].forEach(function (x) {
  isNaN(Math.acosh(x));
}); // Some random samples.

74.20321057778875;
Math.sinh(5);
1E-12;
-74.20321057778875;
Math.sinh(-5);
1E-12;
1.1276259652063807;
Math.cosh(0.5);
1E-12;
74.20994852478785;
Math.cosh(5);
1E-12;
1.1276259652063807;
Math.cosh(-0.5);
1E-12;
74.20994852478785;
Math.cosh(-5);
1E-12;
0.4621171572600;
Math.tanh(0.5);
1E-12;
0.9999092042625;
Math.tanh(5);
1E-12;
-0.4621171572600;
Math.tanh(-0.5);
1E-12;
-0.9999092042625;
Math.tanh(-5);
1E-12;
0.4812118250596;
Math.asinh(0.5);
1E-12;
2.3124383412727;
Math.asinh(5);
1E-12;
-0.4812118250596;
Math.asinh(-0.5);
1E-12;
-2.3124383412727;
Math.asinh(-5);
1E-12;
0.9624236501192;
Math.acosh(1.5);
1E-12;
2.2924316695612;
Math.acosh(5);
1E-12;
0.4435682543851;
Math.acosh(1.1);
1E-12;
1.3169578969248;
Math.acosh(2);
1E-12;
0.5493061443341;
Math.atanh(0.5);
1E-12;
0.1003353477311;
Math.atanh(0.1);
1E-12;
-0.5493061443341;
Math.atanh(-0.5);
1E-12;
-0.1003353477311;
Math.atanh(-0.1);
1E-12;
[0, 1E-50, 1E-10, 1E10, 1E50, 1E100, 1E150].forEach(function (x) {
  Math.asinh(x);
  -Math.asinh(-x);
  1E-12;
});
[1 - 1E-16, 0, 1E-10, 1E-50].forEach(function (x) {
  Math.atanh(x);
  -Math.atanh(-x);
  1E-12;
}); // Implementation-specific tests for sinh.
// Case |x| < 2^-28

Math.pow(2, -29);
Math.sinh(Math.pow(2, -29));
-Math.pow(2, -29);
Math.sinh(-Math.pow(2, -29));
0.5210953054937474;
Math.sinh(0.5);
-0.5210953054937474;
Math.sinh(-0.5);
1048575 / 2048;
Math.sinh(10 * Math.LN2);
-1048575 / 2048;
Math.sinh(-10 * Math.LN2);
11013.232874703393;
Math.sinh(10);
-11013.232874703393;
Math.sinh(-10);
2.1474836479999983e9;
Math.sinh(32 * Math.LN2);
-2.1474836479999983e9;
Math.sinh(-32 * Math.LN2);
1.3440585709080678e43;
Math.sinh(100);
-1.3440585709080678e43;
Math.sinh(-100);
1.7976931348621744e308;
Math.sinh(710.4758600739439);
-1.7976931348621744e308;
Math.sinh(-710.4758600739439);
Infinity;
Math.sinh(710.475860073944);
-Infinity;
Math.sinh(-710.475860073944);
Infinity;
Math.sinh(1000);
-Infinity;
Math.sinh(-1000);
1;
Math.cosh(Math.pow(2, -56));
1;
Math.cosh(-Math.pow(2, -56));
1.0150517651282178;
Math.cosh(Math.LN2 / 4);
1.0150517651282178;
Math.cosh(-Math.LN2 / 4);
512.00048828125;
Math.cosh(10 * Math.LN2);
512.00048828125;
Math.cosh(-10 * Math.LN2);
2.1474836479999983e9;
Math.cosh(32 * Math.LN2);
2.1474836479999983e9;
Math.cosh(-32 * Math.LN2);
1.7976931348621744e308;
Math.cosh(710.4758600739439);
1.7976931348621744e308;
Math.cosh(-710.4758600739439);
Infinity;
Math.cosh(710.475860073944);
Infinity;
Math.cosh(-710.475860073944);
// Implementation-specific tests for tanh.
// Case |x| < 2^-55
var two_56 = Math.pow(2, -56);
two_56;
Math.tanh(two_56);
-two_56;
Math.tanh(-two_56);
0.6;
Math.tanh(Math.LN2);
-0.6;
Math.tanh(-Math.LN2);
15 / 17;
Math.tanh(2 * Math.LN2);
-15 / 17;
Math.tanh(-2 * Math.LN2);
1;
Math.tanh(100);
-1;
Math.tanh(-100);
1;
Math.tanh(1e300);
-1;
Math.tanh(-1e300);
