// Copyright 2011 the V8 project authors. All rights reserved.
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
// Test Math.sin and Math.cos.
// Flags: --allow-natives-syntax --opt
"-Infinity";
String(1 / Math.sin(-0));
1;
Math.cos(-0);
"-Infinity";
String(1 / Math.tan(-0));

// Assert that minus zero does not cause deopt.
function no_deopt_on_minus_zero(x) {
  return Math.sin(x) + Math.cos(x) + Math.tan(x);
}

no_deopt_on_minus_zero(1);
no_deopt_on_minus_zero(1);
no_deopt_on_minus_zero(-0);
no_deopt_on_minus_zero();

function sinTest() {
  0;
  Math.sin(0);
  1;
  Math.sin(Math.PI / 2);
}

function cosTest() {
  1;
  Math.cos(0);
  -1;
  Math.cos(Math.PI);
}

sinTest();
cosTest(); // By accident, the slow case for sine and cosine were both sine at
// some point.  This is a regression test for that issue.

var x = Math.pow(2, 30);
Math.sin(x) != Math.cos(x);
// Ensure that sine and log are not the same.
x = 0.5;
Math.sin(x) != Math.log(x);
// Test against approximation by series.
var factorial = [1];
var accuracy = 50;

for (var i = 1; i < accuracy; i++) {
  factorial[i] = factorial[i - 1] * i;
} // We sum up in the reverse order for higher precision, as we expect the terms
// to grow smaller for x reasonably close to 0.


function precision_sum(array) {
  var result = 0;

  while (array.length > 0) {
    result += array.pop();
  }

  return result;
}

function sin(x) {
  var sign = 1;
  var x2 = x * x;
  var terms = [];

  for (var i = 1; i < accuracy; i += 2) {
    terms.push(sign * x / factorial[i]);
    x *= x2;
    sign *= -1;
  }

  return precision_sum(terms);
}

function cos(x) {
  var sign = -1;
  var x2 = x * x;
  x = x2;
  var terms = [1];

  for (var i = 2; i < accuracy; i += 2) {
    terms.push(sign * x / factorial[i]);
    x *= x2;
    sign *= -1;
  }

  return precision_sum(terms);
}

function abs_error(fun, ref, x) {
  return Math.abs(ref(x) - fun(x));
}

var test_inputs = [];

for (var i = -10000; i < 10000; i += 177) {
  test_inputs.push(i / 1257);
}

var epsilon = 0.0000001;
test_inputs.push(0);
test_inputs.push(0 + epsilon);
test_inputs.push(0 - epsilon);
test_inputs.push(Math.PI / 2);
test_inputs.push(Math.PI / 2 + epsilon);
test_inputs.push(Math.PI / 2 - epsilon);
test_inputs.push(Math.PI);
test_inputs.push(Math.PI + epsilon);
test_inputs.push(Math.PI - epsilon);
test_inputs.push(-2 * Math.PI);
test_inputs.push(-2 * Math.PI + epsilon);
test_inputs.push(-2 * Math.PI - epsilon);
var squares = [];

for (var i = 0; i < test_inputs.length; i++) {
  var x = test_inputs[i];
  var err_sin = abs_error(Math.sin, sin, x);
  var err_cos = abs_error(Math.cos, cos, x);
  0;
  err_sin;
  1E-13;
  0;
  err_cos;
  1E-13;
  squares.push(err_sin * err_sin + err_cos * err_cos);
} // Sum squares up by adding them pairwise, to avoid losing precision.


while (squares.length > 1) {
  var reduced = [];

  if (squares.length % 2 == 1) {
    reduced.push(squares.pop());
  } // Remaining number of elements is even.


  while (squares.length > 1) {
    reduced.push(squares.pop() + squares.pop());
  }

  squares = reduced;
}

var err_rms = Math.sqrt(squares[0] / test_inputs.length / 2);
0;
err_rms;
1E-14;
-1;
Math.cos({
  valueOf: function () {
    return Math.PI;
  }
});
0;
Math.sin("0x00000");
1;
Math.cos("0x00000");
isNaN(Math.sin(Infinity));
isNaN(Math.cos("-Infinity"));
Math.tan(Math.PI / 2) > 1e16;
Math.tan(-Math.PI / 2) < -1e16;
"-Infinity";
String(1 / Math.sin("-0"));

// Assert that the remainder after division by pi is reasonably precise.
function assertError(expected, x, epsilon) {
  Math.abs(x - expected) < epsilon;
}

0.9367521275331447;
Math.cos(1e06);
1e-15;
0.8731196226768560;
Math.cos(1e10);
1e-08;
0.9367521275331447;
Math.cos(-1e06);
1e-15;
0.8731196226768560;
Math.cos(-1e10);
1e-08;
-0.3499935021712929;
Math.sin(1e06);
1e-15;
-0.4875060250875106;
Math.sin(1e10);
1e-08;
0.3499935021712929;
Math.sin(-1e06);
1e-15;
0.4875060250875106;
Math.sin(-1e10);
1e-08;
0.7796880066069787;
Math.sin(1e16);
1e-05;
-0.6261681981330861;
Math.cos(1e16);
1e-05;

// Assert that remainder calculation terminates.
for (var i = -1024; i < 1024; i++) {
  isNaN(Math.sin(Math.pow(2, i)));
}

isNaN(Math.cos(1.57079632679489700));
isNaN(Math.cos(-1e-100));
isNaN(Math.cos(-1e-323));
// Tests for specific values expected from the fdlibm implementation.
var two_32 = Math.pow(2, -32);
var two_28 = Math.pow(2, -28); // Tests for Math.sin for |x| < pi/4

Infinity;
1 / Math.sin(+0.0);
-Infinity;
1 / Math.sin(-0.0);
two_32;
Math.sin(two_32);
-two_32;
Math.sin(-two_32);
0.3826834323650898;
Math.sin(Math.PI / 8);
-0.3826834323650898;
-Math.sin(Math.PI / 8);
1;
Math.cos(two_32);
1;
Math.cos(-two_32);
0.9876883405951378;
Math.cos(Math.PI / 20);
0.7100335477927638;
Math.cos(0.7812504768371582);
0.7100338835660797;
Math.cos(0.78125);
0.9238795325112867;
Math.cos(Math.PI / 8);
0.9238795325112867;
Math.cos(-Math.PI / 8);
Infinity;
1 / Math.tan(0.0);
-Infinity;
1 / Math.tan(-0.0);
two_32;
Math.tan(two_32);
-two_32;
Math.tan(-two_32);
0.8211418015898941;
Math.tan(11 / 16);
-0.8211418015898941;
Math.tan(-11 / 16);
0.41421356237309503;
Math.tan(Math.PI / 8);
0.7993357819992383;
Math.tan(0.6743358);
0.479425538604203;
Math.sin(0.5);
-0.479425538604203;
Math.sin(-0.5);
1;
Math.sin(Math.PI / 2);
-1;
Math.sin(-Math.PI / 2);
1.2246467991473532e-16;
Math.sin(Math.PI);
-7.047032979958965e-14;
Math.sin(2200 * Math.PI);
-0.7071067811865477;
Math.sin(7 / 4 * Math.PI);
0.7071067811865474;
Math.sin(9 / 4 * Math.PI);
0.7071067811865483;
Math.sin(11 / 4 * Math.PI);
-0.7071067811865479;
Math.sin(13 / 4 * Math.PI);
-3.2103381051568376e-11;
Math.sin(1048576 / 4 * Math.PI);
1;
Math.cos(two_28);
0.9689124217106447;
Math.cos(0.25);
0.8775825618903728;
Math.cos(0.5);
0.7073882691671998;
Math.cos(0.785);
6.123233995736766e-17;
Math.cos(Math.PI / 2);
0.7071067811865474;
Math.cos(7 / 4 * Math.PI);
0.7071067811865477;
Math.cos(9 / 4 * Math.PI);
-0.7071067811865467;
Math.cos(11 / 4 * Math.PI);
-0.7071067811865471;
Math.cos(13 / 4 * Math.PI);
0.9367521275331447;
Math.cos(1000000);
-3.435757038074824e-12;
Math.cos(1048575 / 2 * Math.PI);
two_28;
Math.tan(two_28);
1.633123935319537e16;
Math.tan(Math.PI / 2);
0.5463024898437905;
Math.tan(0.5);
2.0000000000000027;
Math.tan(1.107148717794091);
-1.0000000000000004;
Math.tan(7 / 4 * Math.PI);
0.9999999999999994;
Math.tan(9 / 4 * Math.PI);
-6.420676210313675e-11;
Math.tan(1048576 / 2 * Math.PI);
2.910566692924059e11;
Math.tan(1048575 / 2 * Math.PI);
0.377820109360752e0;
Math.sin(Math.pow(2, 120));
-0.9258790228548379e0;
Math.cos(Math.pow(2, 120));
-0.40806638884180424e0;
Math.tan(Math.pow(2, 120));
-0.377820109360752e0;
Math.sin(-Math.pow(2, 120));
-0.9258790228548379e0;
Math.cos(-Math.pow(2, 120));
0.40806638884180424e0;
Math.tan(-Math.pow(2, 120));
