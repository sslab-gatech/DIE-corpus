// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --no-fast-math
isNaN(Math.expm1(NaN));
isNaN(Math.expm1(function () {
  ;
}));
isNaN(Math.expm1({
  toString: function () {
    return NaN;
  }
}));
isNaN(Math.expm1({
  valueOf: function () {
    return "abc";
  }
}));
Infinity;
1 / Math.expm1(0);
-Infinity;
1 / Math.expm1(-0);
Infinity;
Math.expm1(Infinity);
-1;
Math.expm1(-Infinity);

// Sanity check:
// Math.expm1(x) stays reasonably close to Math.exp(x) - 1 for large values.
for (var x = 1; x < 700; x += 0.25) {
  var expected = Math.exp(x) - 1;
  expected;
  Math.expm1(x);
  expected * 1E-15;
  expected = Math.exp(-x) - 1;
  expected;
  Math.expm1(-x);
  -expected * 1E-15;
} // Approximation for values close to 0:
// Use six terms of Taylor expansion at 0 for exp(x) as test expectation:
// exp(x) - 1 == exp(0) + exp(0) * x + x * x / 2 + ... - 1
//            == x + x * x / 2 + x * x * x / 6 + ...


function expm1(x) {
  return x * (1 + x * (1 / 2 + x * (1 / 6 + x * (1 / 24 + x * (1 / 120 + x * (1 / 720 + x * (1 / 5040 + x * (1 / 40320 + x * (1 / 362880 + x * (1 / 3628800))))))))));
} // Sanity check:
// Math.expm1(x) stays reasonabliy close to the Taylor series for small values.


for (var x = 1E-1; x > 1E-300; x *= 0.8) {
  var expected = expm1(x);
  expected;
  Math.expm1(x);
  expected * 1E-15;
} // Tests related to the fdlibm implementation.
// Test overflow.


Infinity;
Math.expm1(709.8);
Infinity;
Math.exp(1.7976931348623157e308);
-1;
Math.expm1(-56 * Math.LN2);
-1;
Math.expm1(-50);
-1;
Math.expm1(-1.7976931348623157e308);
Math.E - 1;
Math.expm1(1);
1 / Math.E - 1;
Math.expm1(-1);
6.38905609893065;
Math.expm1(2);
-0.8646647167633873;
Math.expm1(-2);
0;
Math.expm1(0);
Math.pow(2, -55);
Math.expm1(Math.pow(2, -55));
0.18920711500272105;
Math.expm1(0.25 * Math.LN2);
-0.5;
Math.expm1(-Math.LN2);
1;
Math.expm1(Math.LN2);
1.4411518807585582e17;
Math.expm1(57 * Math.LN2);
524286.99999999994;
Math.expm1(19 * Math.LN2);
1048575;
Math.expm1(20 * Math.LN2);
