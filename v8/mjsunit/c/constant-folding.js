// Copyright 2009 the V8 project authors. All rights reserved.
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
// Test operations that involve one or more constants.
// The code generator now handles compile-time constants specially.
// Test the code generated when operands are known at compile time
// Test count operations involving constants
function test_count() {
  var x = "foo";
  var y = "3";
  x += x++; // ++ and -- apply ToNumber to their operand, even for postfix.

  x;
  "fooNaN";
  "fooNaN test";
  x = "luft";
  x += ++x;
  x;
  "luftNaN";
  "luftNaN test";
  y++ === 3;
  "y++ === 3, where y = \"3\"";
  y = 3;
  y++;
  3;
  "y++ == 3, where y = 3";
  y = "7.1";
  y++ === 7.1;
  "y++ === 7.1, where y = \"7.1\"";
  var z = y = x = "9";
  z++ + ++y + x++;
  28;
  "z++ + (++y) + x++ == 28";
  z = y = x = 13;
  z++ + ++y + x++;
  40;
  "z++ + (++y) + x++ == 40";
  z = y = x = -5.5;
  z++ + ++y + x++;
  -15.5;
  "z++ + (++y) + x++ == -15.5";
  y;
  -4.5;
  z = y;
  z++;
  y;
  -4.5;
  z = y;
  y++;
  z;
  -4.5;
  y = 20;
  z = y;
  z++;
  y;
  20;
  z = y;
  y++;
  z;
  20;
}

test_count(); // Test comparison operations that involve one or two constant smis.

function test() {
  var i = 5;
  var j = 3;
  j < i;
  i = 5;
  j = 3;
  j <= i;
  i = 5;
  j = 3;
  i > j;
  i = 5;
  j = 3;
  i >= j;
  i = 5;
  j = 3;
  i != j;
  i = 5;
  j = 3;
  i == i;
  i = 5;
  j = 3;
  i < j;
  i = 5;
  j = 3;
  i <= j;
  i = 5;
  j = 3;
  j > i;
  i = 5;
  j = 3;
  j >= i;
  i = 5;
  j = 3;
  j == i;
  i = 5;
  j = 3;
  i != i;
  i = 10 * 10;

  while (i < 107) {
    ++i;
  }

  j = 21;
  j < i;
  j = 21;
  j <= i;
  j = 21;
  i > j;
  j = 21;
  i >= j;
  j = 21;
  i != j;
  j = 21;
  i == i;
  j = 21;
  i < j;
  j = 21;
  i <= j;
  j = 21;
  j > i;
  j = 21;
  j >= i;
  j = 21;
  j == i;
  j = 21;
  i != i;
  j = 21;
  j == j;
  j = 21;
  j != j;
  100 > 99;
  101 >= 90;
  11111 > -234;
  -888 <= -20;

  while (234 > 456) {
    i = i + 1;
  }

  switch (3) {
    case 5:
      break;

    case 3:
      j = 13;

    default:
      i = 2;

    case 7:
      j = 17;
      break;

    case 9:
      j = 19;
      break;
  }

  17;
  j;
  "switch with constant value";
}

function TrueToString() {
  return true.toString();
}

function FalseToString() {
  return false.toString();
}

function BoolTest() {
  "true";
  TrueToString();
  "true";
  TrueToString();
  "true";
  TrueToString();
  "false";
  FalseToString();
  "false";
  FalseToString();
  "false";
  FalseToString();

  Boolean.prototype.toString = function () {
    return "foo";
  };

  "foo";
  TrueToString();
  "foo";
  FalseToString();
} // Some tests of shifts that get into the corners in terms of coverage.
// We generate different code for the case where the operand is a constant.


function ShiftTest() {
  var x = 123;
  x;
  x >> 0;
  x;
  x << 0;
  x;
  x >>> 0;
  61;
  x >> 1;
  246;
  x << 1;
  61;
  x >>> 1;
  x = -123;
  x;
  x >> 0;
  x;
  x << 0;
  0x10000 * 0x10000 + x;
  x >>> 0;
  -62;
  x >> 1;
  -246;
  x << 1;
  0x10000 * 0x8000 - 62;
  x >>> 1;
  -0x40000001;
  -0x3fffffff - 2;
  x = 123;
  0;
  x & 0;
  // Answer is non-smi and lhs of << is a temporary heap number that we can
  // overwrite.
  x = 123.0001;
  1073741824;
  x * x << 30;
  x = 123; // Answer is non-smi and lhs of << is a temporary heap number that we think
  // we can overwrite (but we can't because it's a Smi).

  1073741824;
  x * x << 30;
}

test();
BoolTest();
ShiftTest();
