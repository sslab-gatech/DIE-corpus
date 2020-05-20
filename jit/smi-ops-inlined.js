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
const SMI_MAX = (1 << 30) - 1;
const SMI_MIN = -(1 << 30);
const ONE = 1;
const ONE_HUNDRED = 100;
const OBJ_42 = new function () {
  this.valueOf = function () {
    return 42;
  };
}();
42;
OBJ_42.valueOf();

function Add1(x) {
  return x + 1;
}

function Add100(x) {
  return x + 100;
}

function Add1Reversed(x) {
  return 1 + x;
}

function Add100Reversed(x) {
  return 100 + x;
}

1;
Add1(0);
1;
Add1Reversed(0);
SMI_MAX + ONE;
Add1(SMI_MAX);
"smimax + 1";
SMI_MAX + ONE;
Add1Reversed(SMI_MAX);
"1 + smimax";
42 + ONE;
Add1(OBJ_42);
42 + ONE;
Add1Reversed(OBJ_42);
100;
Add100(0);
100;
Add100Reversed(0);
SMI_MAX + ONE_HUNDRED;
Add100(SMI_MAX);
"smimax + 100";
SMI_MAX + ONE_HUNDRED;
Add100Reversed(SMI_MAX);
" 100 + smimax";
42 + ONE_HUNDRED;
Add100(OBJ_42);
42 + ONE_HUNDRED;
Add100Reversed(OBJ_42);

// non-smi
function Sub1(x) {
  return x - 1;
}

function Sub100(x) {
  return x - 100;
}

function Sub1Reversed(x) {
  return 1 - x;
}

function Sub100Reversed(x) {
  return 100 - x;
}

0;
Sub1(1);
-1;
Sub1Reversed(2);
SMI_MIN - ONE;
Sub1(SMI_MIN);
ONE - SMI_MIN;
Sub1Reversed(SMI_MIN);
42 - ONE;
Sub1(OBJ_42);
ONE - 42;
Sub1Reversed(OBJ_42);
0;
Sub100(100);
1;
Sub100Reversed(99);
SMI_MIN - ONE_HUNDRED;
Sub100(SMI_MIN);
ONE_HUNDRED - SMI_MIN;
Sub100Reversed(SMI_MIN);
42 - ONE_HUNDRED;
Sub100(OBJ_42);
ONE_HUNDRED - 42;
Sub100Reversed(OBJ_42);

// non-smi
function Shr1(x) {
  return x >>> 1;
}

function Shr100(x) {
  return x >>> 100;
}

function Shr1Reversed(x) {
  return 1 >>> x;
}

function Shr100Reversed(x) {
  return 100 >>> x;
}

function Sar1(x) {
  return x >> 1;
}

function Sar100(x) {
  return x >> 100;
}

function Sar1Reversed(x) {
  return 1 >> x;
}

function Sar100Reversed(x) {
  return 100 >> x;
}

0;
Shr1(1);
0;
Sar1(1);
0;
Shr1Reversed(2);
0;
Sar1Reversed(2);
1610612736;
Shr1(SMI_MIN);
-536870912;
Sar1(SMI_MIN);
1;
Shr1Reversed(SMI_MIN);
1;
Sar1Reversed(SMI_MIN);
21;
Shr1(OBJ_42);
21;
Sar1(OBJ_42);
0;
Shr1Reversed(OBJ_42);
0;
Sar1Reversed(OBJ_42);
6;
Shr100(100);
"100 >>> 100";
6;
Sar100(100);
"100 >> 100";
12;
Shr100Reversed(99);
12;
Sar100Reversed(99);
201326592;
Shr100(SMI_MIN);
-67108864;
Sar100(SMI_MIN);
100;
Shr100Reversed(SMI_MIN);
100;
Sar100Reversed(SMI_MIN);
2;
Shr100(OBJ_42);
2;
Sar100(OBJ_42);
0;
Shr100Reversed(OBJ_42);
0;
Sar100Reversed(OBJ_42);

function Xor1(x) {
  return x ^ 1;
}

function Xor100(x) {
  return x ^ 100;
}

function Xor1Reversed(x) {
  return 1 ^ x;
}

function Xor100Reversed(x) {
  return 100 ^ x;
}

0;
Xor1(1);
3;
Xor1Reversed(2);
SMI_MIN + 1;
Xor1(SMI_MIN);
SMI_MIN + 1;
Xor1Reversed(SMI_MIN);
43;
Xor1(OBJ_42);
43;
Xor1Reversed(OBJ_42);
0;
Xor100(100);
7;
Xor100Reversed(99);
-1073741724;
Xor100(SMI_MIN);
-1073741724;
Xor100Reversed(SMI_MIN);
78;
Xor100(OBJ_42);
78;
Xor100Reversed(OBJ_42);
var x = 0x23;
var y = 0x35;
0x16;
x ^ y;
// Bitwise not.
var v = 0;
-1;
~v;
v = SMI_MIN;
0x3fffffff;
~v;
"~smimin";
v = SMI_MAX;
-0x40000000;
~v;
"~smimax";
// Overflowing ++ and --.
v = SMI_MAX;
v++;
0x40000000;
v;
"smimax++";
v = SMI_MIN;
v--;
-0x40000001;
v;
"smimin--";
// Not actually Smi operations.
// Check that relations on unary ops work.
var v = -1.2;
v == v;
v === v;
v <= v;
v >= v;
v < v;
v > v;
v != v;
v !== v;
// Right hand side of unary minus is overwritable.
v = 1.5;
-2.25;
-(v * v);
// Smi input to bitop gives non-smi result where the rhs is a float that
// can be overwritten.
var x1 = 0x10000000;
var x2 = 0x40000002;
var x3 = 0x40000000;
0x40000000;
x1 << x2 - x3;
"0x10000000<<1(1)";
// Smi input to bitop gives non-smi result where the rhs could be overwritten
// if it were a float, but it isn't.
x1 = 0x10000000;
x2 = 4;
x3 = 2;
0x40000000;
x1 << x2 - x3;
"0x10000000<<2(2)";

// Test shift operators on non-smi inputs, giving smi and non-smi results.
function testShiftNonSmis() {
  var pos_non_smi = 2000000000;
  var neg_non_smi = -pos_non_smi;
  var pos_smi = 1000000000;
  var neg_smi = -pos_smi; // Begin block A

  pos_non_smi;
  pos_non_smi >> 0;
  pos_non_smi;
  pos_non_smi >>> 0;
  pos_non_smi;
  pos_non_smi << 0;
  neg_non_smi;
  neg_non_smi >> 0;
  neg_non_smi + 0x100000000;
  neg_non_smi >>> 0;
  neg_non_smi;
  neg_non_smi << 0;
  pos_smi;
  pos_smi >> 0;
  "possmi >> 0";
  pos_smi;
  pos_smi >>> 0;
  "possmi >>>0";
  pos_smi;
  pos_smi << 0;
  "possmi << 0";
  neg_smi;
  neg_smi >> 0;
  "negsmi >> 0";
  neg_smi + 0x100000000;
  neg_smi >>> 0;
  "negsmi >>> 0";
  (neg_smi, neg_smi << 0), "negsmi << 0";
  pos_non_smi / 2;
  pos_non_smi >> 1;
  pos_non_smi / 2;
  pos_non_smi >>> 1;
  -0x1194D800;
  pos_non_smi << 1;
  pos_non_smi / 8;
  pos_non_smi >> 3;
  pos_non_smi / 8;
  pos_non_smi >>> 3;
  -0x46536000;
  pos_non_smi << 3;
  0x73594000;
  pos_non_smi << 4;
  pos_non_smi;
  pos_non_smi + 0.5 >> 0;
  pos_non_smi;
  pos_non_smi + 0.5 >>> 0;
  pos_non_smi;
  pos_non_smi + 0.5 << 0;
  pos_non_smi / 2;
  pos_non_smi + 0.5 >> 1;
  pos_non_smi / 2;
  pos_non_smi + 0.5 >>> 1;
  -0x1194D800;
  pos_non_smi + 0.5 << 1;
  pos_non_smi / 8;
  pos_non_smi + 0.5 >> 3;
  pos_non_smi / 8;
  pos_non_smi + 0.5 >>> 3;
  -0x46536000;
  pos_non_smi + 0.5 << 3;
  0x73594000;
  pos_non_smi + 0.5 << 4;
  neg_non_smi / 2;
  neg_non_smi >> 1;
  "negnonsmi >> 1";
  neg_non_smi / 2 + 0x100000000 / 2;
  neg_non_smi >>> 1;
  "negnonsmi >>> 1";
  0x1194D800;
  neg_non_smi << 1;
  neg_non_smi / 8;
  neg_non_smi >> 3;
  neg_non_smi / 8 + 0x100000000 / 8;
  neg_non_smi >>> 3;
  0x46536000;
  neg_non_smi << 3;
  -0x73594000;
  neg_non_smi << 4;
  neg_non_smi;
  neg_non_smi - 0.5 >> 0;
  neg_non_smi + 0x100000000;
  neg_non_smi - 0.5 >>> 0;
  "negnonsmi.5 >>> 0";
  neg_non_smi;
  neg_non_smi - 0.5 << 0;
  neg_non_smi / 2;
  neg_non_smi - 0.5 >> 1;
  neg_non_smi / 2 + 0x100000000 / 2;
  neg_non_smi - 0.5 >>> 1;
  "negnonsmi.5 >>> 1";
  0x1194D800;
  neg_non_smi - 0.5 << 1;
  neg_non_smi / 8;
  neg_non_smi - 0.5 >> 3;
  neg_non_smi / 8 + 0x100000000 / 8;
  neg_non_smi - 0.5 >>> 3;
  0x46536000;
  neg_non_smi - 0.5 << 3;
  -0x73594000;
  neg_non_smi - 0.5 << 4;
  pos_smi / 2;
  pos_smi >> 1;
  pos_smi / 2;
  pos_smi >>> 1;
  pos_non_smi;
  pos_smi << 1;
  pos_smi / 8;
  pos_smi >> 3;
  pos_smi / 8;
  pos_smi >>> 3;
  -0x2329b000;
  pos_smi << 3;
  0x73594000;
  pos_smi << 5;
  pos_smi;
  pos_smi + 0.5 >> 0;
  "possmi.5 >> 0";
  pos_smi;
  pos_smi + 0.5 >>> 0;
  "possmi.5 >>> 0";
  pos_smi;
  pos_smi + 0.5 << 0;
  "possmi.5 << 0";
  pos_smi / 2;
  pos_smi + 0.5 >> 1;
  pos_smi / 2;
  pos_smi + 0.5 >>> 1;
  pos_non_smi;
  pos_smi + 0.5 << 1;
  pos_smi / 8;
  pos_smi + 0.5 >> 3;
  pos_smi / 8;
  pos_smi + 0.5 >>> 3;
  -0x2329b000;
  pos_smi + 0.5 << 3;
  0x73594000;
  pos_smi + 0.5 << 5;
  neg_smi / 2;
  neg_smi >> 1;
  neg_smi / 2 + 0x100000000 / 2;
  neg_smi >>> 1;
  neg_non_smi;
  neg_smi << 1;
  neg_smi / 8;
  neg_smi >> 3;
  neg_smi / 8 + 0x100000000 / 8;
  neg_smi >>> 3;
  0x46536000;
  neg_smi << 4;
  -0x73594000;
  neg_smi << 5;
  neg_smi;
  neg_smi - 0.5 >> 0;
  "negsmi.5 >> 0";
  neg_smi + 0x100000000;
  neg_smi - 0.5 >>> 0;
  "negsmi.5 >>> 0";
  neg_smi;
  neg_smi - 0.5 << 0;
  "negsmi.5 << 0";
  neg_smi / 2;
  neg_smi - 0.5 >> 1;
  neg_smi / 2 + 0x100000000 / 2;
  neg_smi - 0.5 >>> 1;
  neg_non_smi;
  neg_smi - 0.5 << 1;
  neg_smi / 8;
  neg_smi - 0.5 >> 3;
  neg_smi / 8 + 0x100000000 / 8;
  neg_smi - 0.5 >>> 3;
  0x46536000;
  neg_smi - 0.5 << 4;
  -0x73594000;
  neg_smi - 0.5 << 5;
  // End block A
  // Repeat block A with 2^32 added to positive numbers and
  // 2^32 subtracted from negative numbers.
  // Begin block A repeat 1
  var two_32 = 0x100000000;
  var neg_32 = -two_32;
  pos_non_smi;
  two_32 + pos_non_smi >> 0;
  pos_non_smi;
  two_32 + pos_non_smi >>> 0;
  pos_non_smi;
  two_32 + pos_non_smi << 0;
  neg_non_smi;
  neg_32 + neg_non_smi >> 0;
  neg_non_smi + 0x100000000;
  neg_32 + neg_non_smi >>> 0;
  neg_non_smi;
  neg_32 + neg_non_smi << 0;
  pos_smi;
  two_32 + pos_smi >> 0;
  "2^32+possmi >> 0";
  pos_smi;
  two_32 + pos_smi >>> 0;
  "2^32+possmi >>> 0";
  pos_smi;
  two_32 + pos_smi << 0;
  "2^32+possmi << 0";
  neg_smi;
  neg_32 + neg_smi >> 0;
  "2^32+negsmi >> 0";
  neg_smi + 0x100000000;
  neg_32 + neg_smi >>> 0;
  neg_smi;
  neg_32 + neg_smi << 0;
  "2^32+negsmi << 0";
  pos_non_smi / 2;
  two_32 + pos_non_smi >> 1;
  pos_non_smi / 2;
  two_32 + pos_non_smi >>> 1;
  -0x1194D800;
  two_32 + pos_non_smi << 1;
  pos_non_smi / 8;
  two_32 + pos_non_smi >> 3;
  pos_non_smi / 8;
  two_32 + pos_non_smi >>> 3;
  -0x46536000;
  two_32 + pos_non_smi << 3;
  0x73594000;
  two_32 + pos_non_smi << 4;
  pos_non_smi;
  two_32 + pos_non_smi + 0.5 >> 0;
  pos_non_smi;
  two_32 + pos_non_smi + 0.5 >>> 0;
  pos_non_smi;
  two_32 + pos_non_smi + 0.5 << 0;
  pos_non_smi / 2;
  two_32 + pos_non_smi + 0.5 >> 1;
  pos_non_smi / 2;
  two_32 + pos_non_smi + 0.5 >>> 1;
  -0x1194D800;
  two_32 + pos_non_smi + 0.5 << 1;
  pos_non_smi / 8;
  two_32 + pos_non_smi + 0.5 >> 3;
  pos_non_smi / 8;
  two_32 + pos_non_smi + 0.5 >>> 3;
  -0x46536000;
  two_32 + pos_non_smi + 0.5 << 3;
  0x73594000;
  two_32 + pos_non_smi + 0.5 << 4;
  neg_non_smi / 2;
  neg_32 + neg_non_smi >> 1;
  neg_non_smi / 2 + 0x100000000 / 2;
  neg_32 + neg_non_smi >>> 1;
  0x1194D800;
  neg_32 + neg_non_smi << 1;
  neg_non_smi / 8;
  neg_32 + neg_non_smi >> 3;
  neg_non_smi / 8 + 0x100000000 / 8;
  neg_32 + neg_non_smi >>> 3;
  0x46536000;
  neg_32 + neg_non_smi << 3;
  -0x73594000;
  neg_32 + neg_non_smi << 4;
  neg_non_smi;
  neg_32 + neg_non_smi - 0.5 >> 0;
  neg_non_smi + 0x100000000;
  neg_32 + neg_non_smi - 0.5 >>> 0;
  neg_non_smi;
  neg_32 + neg_non_smi - 0.5 << 0;
  neg_non_smi / 2;
  neg_32 + neg_non_smi - 0.5 >> 1;
  neg_non_smi / 2 + 0x100000000 / 2;
  neg_32 + neg_non_smi - 0.5 >>> 1;
  0x1194D800;
  neg_32 + neg_non_smi - 0.5 << 1;
  neg_non_smi / 8;
  neg_32 + neg_non_smi - 0.5 >> 3;
  neg_non_smi / 8 + 0x100000000 / 8;
  neg_32 + neg_non_smi - 0.5 >>> 3;
  0x46536000;
  neg_32 + neg_non_smi - 0.5 << 3;
  -0x73594000;
  neg_32 + neg_non_smi - 0.5 << 4;
  pos_smi / 2;
  two_32 + pos_smi >> 1;
  pos_smi / 2;
  two_32 + pos_smi >>> 1;
  pos_non_smi;
  two_32 + pos_smi << 1;
  pos_smi / 8;
  two_32 + pos_smi >> 3;
  pos_smi / 8;
  two_32 + pos_smi >>> 3;
  -0x2329b000;
  two_32 + pos_smi << 3;
  0x73594000;
  two_32 + pos_smi << 5;
  pos_smi;
  two_32 + pos_smi + 0.5 >> 0;
  pos_smi;
  two_32 + pos_smi + 0.5 >>> 0;
  pos_smi;
  two_32 + pos_smi + 0.5 << 0;
  pos_smi / 2;
  two_32 + pos_smi + 0.5 >> 1;
  pos_smi / 2;
  two_32 + pos_smi + 0.5 >>> 1;
  pos_non_smi;
  two_32 + pos_smi + 0.5 << 1;
  pos_smi / 8;
  two_32 + pos_smi + 0.5 >> 3;
  pos_smi / 8;
  two_32 + pos_smi + 0.5 >>> 3;
  -0x2329b000;
  two_32 + pos_smi + 0.5 << 3;
  0x73594000;
  two_32 + pos_smi + 0.5 << 5;
  neg_smi / 2;
  neg_32 + neg_smi >> 1;
  neg_smi / 2 + 0x100000000 / 2;
  neg_32 + neg_smi >>> 1;
  neg_non_smi;
  neg_32 + neg_smi << 1;
  neg_smi / 8;
  neg_32 + neg_smi >> 3;
  (neg_smi + 0x100000000) / 8;
  neg_32 + neg_smi >>> 3;
  0x46536000;
  neg_32 + neg_smi << 4;
  -0x73594000;
  neg_32 + neg_smi << 5;
  neg_smi;
  neg_32 + neg_smi - 0.5 >> 0;
  "-2^32+negsmi.5 >> 0";
  neg_smi + 0x100000000;
  neg_32 + neg_smi - 0.5 >>> 0;
  neg_smi;
  neg_32 + neg_smi - 0.5 << 0;
  "-2^32+negsmi.5 << 0";
  neg_smi / 2;
  neg_32 + neg_smi - 0.5 >> 1;
  neg_smi / 2 + 0x100000000 / 2;
  neg_32 + neg_smi - 0.5 >>> 1;
  neg_non_smi;
  neg_32 + neg_smi - 0.5 << 1;
  neg_smi / 8;
  neg_32 + neg_smi - 0.5 >> 3;
  neg_smi / 8 + 0x100000000 / 8;
  neg_32 + neg_smi - 0.5 >>> 3;
  0x46536000;
  neg_32 + neg_smi - 0.5 << 4;
  -0x73594000;
  neg_32 + neg_smi - 0.5 << 5;
  // End block A repeat 1
  // Repeat block A with shift amounts in variables intialized with
  // a constant.
  var zero = 0;
  var one = 1;
  var three = 3;
  var four = 4;
  var five = 5; // Begin block A repeat 2

  pos_non_smi;
  pos_non_smi >> zero;
  pos_non_smi;
  pos_non_smi >>> zero;
  pos_non_smi;
  pos_non_smi << zero;
  neg_non_smi;
  neg_non_smi >> zero;
  neg_non_smi + 0x100000000;
  neg_non_smi >>> zero;
  neg_non_smi;
  neg_non_smi << zero;
  pos_smi;
  pos_smi >> zero;
  pos_smi;
  pos_smi >>> zero;
  pos_smi;
  pos_smi << zero;
  neg_smi;
  neg_smi >> zero;
  "negsmi >> zero";
  neg_smi + 0x100000000;
  neg_smi >>> zero;
  neg_smi;
  neg_smi << zero;
  "negsmi << zero";
  pos_non_smi / 2;
  pos_non_smi >> one;
  pos_non_smi / 2;
  pos_non_smi >>> one;
  -0x1194D800;
  pos_non_smi << one;
  pos_non_smi / 8;
  pos_non_smi >> three;
  pos_non_smi / 8;
  pos_non_smi >>> three;
  -0x46536000;
  pos_non_smi << three;
  0x73594000;
  pos_non_smi << four;
  pos_non_smi;
  pos_non_smi + 0.5 >> zero;
  pos_non_smi;
  pos_non_smi + 0.5 >>> zero;
  pos_non_smi;
  pos_non_smi + 0.5 << zero;
  pos_non_smi / 2;
  pos_non_smi + 0.5 >> one;
  pos_non_smi / 2;
  pos_non_smi + 0.5 >>> one;
  -0x1194D800;
  pos_non_smi + 0.5 << one;
  pos_non_smi / 8;
  pos_non_smi + 0.5 >> three;
  pos_non_smi / 8;
  pos_non_smi + 0.5 >>> three;
  -0x46536000;
  pos_non_smi + 0.5 << three;
  0x73594000;
  pos_non_smi + 0.5 << four;
  neg_non_smi / 2;
  neg_non_smi >> one;
  neg_non_smi / 2 + 0x100000000 / 2;
  neg_non_smi >>> one;
  0x1194D800;
  neg_non_smi << one;
  neg_non_smi / 8;
  neg_non_smi >> three;
  neg_non_smi / 8 + 0x100000000 / 8;
  neg_non_smi >>> three;
  0x46536000;
  neg_non_smi << three;
  -0x73594000;
  neg_non_smi << four;
  neg_non_smi;
  neg_non_smi - 0.5 >> zero;
  neg_non_smi + 0x100000000;
  neg_non_smi - 0.5 >>> zero;
  neg_non_smi;
  neg_non_smi - 0.5 << zero;
  neg_non_smi / 2;
  neg_non_smi - 0.5 >> one;
  neg_non_smi / 2 + 0x100000000 / 2;
  neg_non_smi - 0.5 >>> one;
  0x1194D800;
  neg_non_smi - 0.5 << one;
  neg_non_smi / 8;
  neg_non_smi - 0.5 >> three;
  neg_non_smi / 8 + 0x100000000 / 8;
  neg_non_smi - 0.5 >>> three;
  0x46536000;
  neg_non_smi - 0.5 << three;
  -0x73594000;
  neg_non_smi - 0.5 << four;
  pos_smi / 2;
  pos_smi >> one;
  pos_smi / 2;
  pos_smi >>> one;
  pos_non_smi;
  pos_smi << one;
  pos_smi / 8;
  pos_smi >> three;
  pos_smi / 8;
  pos_smi >>> three;
  -0x2329b000;
  pos_smi << three;
  0x73594000;
  pos_smi << five;
  pos_smi;
  pos_smi + 0.5 >> zero;
  pos_smi;
  pos_smi + 0.5 >>> zero;
  pos_smi;
  pos_smi + 0.5 << zero;
  pos_smi / 2;
  pos_smi + 0.5 >> one;
  pos_smi / 2;
  pos_smi + 0.5 >>> one;
  pos_non_smi;
  pos_smi + 0.5 << one;
  pos_smi / 8;
  pos_smi + 0.5 >> three;
  pos_smi / 8;
  pos_smi + 0.5 >>> three;
  -0x2329b000;
  pos_smi + 0.5 << three;
  0x73594000;
  pos_smi + 0.5 << five;
  neg_smi / 2;
  neg_smi >> one;
  neg_smi / 2 + 0x100000000 / 2;
  neg_smi >>> one;
  neg_non_smi;
  neg_smi << one;
  neg_smi / 8;
  neg_smi >> three;
  neg_smi / 8 + 0x100000000 / 8;
  neg_smi >>> three;
  0x46536000;
  neg_smi << four;
  -0x73594000;
  neg_smi << five;
  neg_smi;
  neg_smi - 0.5 >> zero;
  neg_smi + 0x100000000;
  neg_smi - 0.5 >>> zero;
  neg_smi;
  neg_smi - 0.5 << zero;
  neg_smi / 2;
  neg_smi - 0.5 >> one;
  neg_smi / 2 + 0x100000000 / 2;
  neg_smi - 0.5 >>> one;
  neg_non_smi;
  neg_smi - 0.5 << one;
  neg_smi / 8;
  neg_smi - 0.5 >> three;
  neg_smi / 8 + 0x100000000 / 8;
  neg_smi - 0.5 >>> three;
  0x46536000;
  neg_smi - 0.5 << four;
  -0x73594000;
  neg_smi - 0.5 << five;
  // End block A repeat 2
  // Repeat previous block, with computed values in the shift variables.
  five = 0;

  while (five < 5) {
    ++five;
  }

  four = five - one;
  three = four - one;
  one = four - three;
  zero = one - one; // Begin block A repeat 3

  pos_non_smi;
  pos_non_smi >> zero;
  pos_non_smi;
  pos_non_smi >>> zero;
  pos_non_smi;
  pos_non_smi << zero;
  neg_non_smi;
  neg_non_smi >> zero;
  neg_non_smi + 0x100000000;
  neg_non_smi >>> zero;
  neg_non_smi;
  neg_non_smi << zero;
  pos_smi;
  pos_smi >> zero;
  pos_smi;
  pos_smi >>> zero;
  pos_smi;
  pos_smi << zero;
  neg_smi;
  neg_smi >> zero;
  "negsmi >> zero(2)";
  neg_smi + 0x100000000;
  neg_smi >>> zero;
  neg_smi;
  neg_smi << zero;
  "negsmi << zero(2)";
  pos_non_smi / 2;
  pos_non_smi >> one;
  pos_non_smi / 2;
  pos_non_smi >>> one;
  -0x1194D800;
  pos_non_smi << one;
  pos_non_smi / 8;
  pos_non_smi >> three;
  pos_non_smi / 8;
  pos_non_smi >>> three;
  -0x46536000;
  pos_non_smi << three;
  0x73594000;
  pos_non_smi << four;
  pos_non_smi;
  pos_non_smi + 0.5 >> zero;
  pos_non_smi;
  pos_non_smi + 0.5 >>> zero;
  pos_non_smi;
  pos_non_smi + 0.5 << zero;
  pos_non_smi / 2;
  pos_non_smi + 0.5 >> one;
  pos_non_smi / 2;
  pos_non_smi + 0.5 >>> one;
  -0x1194D800;
  pos_non_smi + 0.5 << one;
  pos_non_smi / 8;
  pos_non_smi + 0.5 >> three;
  pos_non_smi / 8;
  pos_non_smi + 0.5 >>> three;
  -0x46536000;
  pos_non_smi + 0.5 << three;
  0x73594000;
  pos_non_smi + 0.5 << four;
  neg_non_smi / 2;
  neg_non_smi >> one;
  neg_non_smi / 2 + 0x100000000 / 2;
  neg_non_smi >>> one;
  0x1194D800;
  neg_non_smi << one;
  neg_non_smi / 8;
  neg_non_smi >> three;
  neg_non_smi / 8 + 0x100000000 / 8;
  neg_non_smi >>> three;
  0x46536000;
  neg_non_smi << three;
  -0x73594000;
  neg_non_smi << four;
  neg_non_smi;
  neg_non_smi - 0.5 >> zero;
  neg_non_smi + 0x100000000;
  neg_non_smi - 0.5 >>> zero;
  neg_non_smi;
  neg_non_smi - 0.5 << zero;
  neg_non_smi / 2;
  neg_non_smi - 0.5 >> one;
  neg_non_smi / 2 + 0x100000000 / 2;
  neg_non_smi - 0.5 >>> one;
  0x1194D800;
  neg_non_smi - 0.5 << one;
  neg_non_smi / 8;
  neg_non_smi - 0.5 >> three;
  neg_non_smi / 8 + 0x100000000 / 8;
  neg_non_smi - 0.5 >>> three;
  0x46536000;
  neg_non_smi - 0.5 << three;
  -0x73594000;
  neg_non_smi - 0.5 << four;
  pos_smi / 2;
  pos_smi >> one;
  pos_smi / 2;
  pos_smi >>> one;
  pos_non_smi;
  pos_smi << one;
  pos_smi / 8;
  pos_smi >> three;
  pos_smi / 8;
  pos_smi >>> three;
  -0x2329b000;
  pos_smi << three;
  0x73594000;
  pos_smi << five;
  pos_smi;
  pos_smi + 0.5 >> zero;
  pos_smi;
  pos_smi + 0.5 >>> zero;
  pos_smi;
  pos_smi + 0.5 << zero;
  pos_smi / 2;
  pos_smi + 0.5 >> one;
  pos_smi / 2;
  pos_smi + 0.5 >>> one;
  pos_non_smi;
  pos_smi + 0.5 << one;
  pos_smi / 8;
  pos_smi + 0.5 >> three;
  pos_smi / 8;
  pos_smi + 0.5 >>> three;
  -0x2329b000;
  pos_smi + 0.5 << three;
  0x73594000;
  pos_smi + 0.5 << five;
  neg_smi / 2;
  neg_smi >> one;
  neg_smi / 2 + 0x100000000 / 2;
  neg_smi >>> one;
  neg_non_smi;
  neg_smi << one;
  neg_smi / 8;
  neg_smi >> three;
  neg_smi / 8 + 0x100000000 / 8;
  neg_smi >>> three;
  0x46536000;
  neg_smi << four;
  -0x73594000;
  neg_smi << five;
  neg_smi;
  neg_smi - 0.5 >> zero;
  "negsmi.5 >> zero";
  neg_smi + 0x100000000;
  neg_smi - 0.5 >>> zero;
  neg_smi;
  neg_smi - 0.5 << zero;
  "negsmi.5 << zero";
  neg_smi / 2;
  neg_smi - 0.5 >> one;
  neg_smi / 2 + 0x100000000 / 2;
  neg_smi - 0.5 >>> one;
  neg_non_smi;
  neg_smi - 0.5 << one;
  neg_smi / 8;
  neg_smi - 0.5 >> three;
  neg_smi / 8 + 0x100000000 / 8;
  neg_smi - 0.5 >>> three;
  0x46536000;
  neg_smi - 0.5 << four;
  -0x73594000;
  neg_smi - 0.5 << five;
  5;
  20.5 >> 2.4;
  5;
  20.5 >> 2.7;
  var shift = 2.4;
  5;
  20.5 >> shift;
  5;
  20.5 >> shift + 0.3;
  shift = shift + zero;
  5;
  20.5 >> shift;
  5;
  20.5 >> shift + 0.3;
}

testShiftNonSmis();

function intConversion() {
  function foo(x) {
    x;
    x * 1.0000000001 | 0;
    "foo more " + x;
    x;
    x | 0;
    "foo " + x;

    if (x > 0) {
      x - 1;
      x * 0.9999999999 | 0;
      "foo less " + x;
    } else {
      x + 1;
      x * 0.9999999999 | 0;
      "foo less " + x;
    }
  }

  for (var i = 1; i < 0x80000000; i *= 2) {
    foo(i);
    foo(-i);
  }

  for (var i = 1; i < 1 / 0; i *= 2) {
    i | 0;
    i * 1.0000000000000001 | 0;
    "b" + i;
    -i | 0;
    i * -1.0000000000000001 | 0;
    "c" + i;
  }

  for (var i = 0.5; i > 0; i /= 2) {
    0;
    i | 0;
    "d" + i;
    0;
    -i | 0;
    "e" + i;
  }
}

intConversion(); // Verify that we handle the (optimized) corner case of shifting by
// zero even for non-smis.

function shiftByZero(n) {
  return n << 0;
}

3;
shiftByZero(3.1415);
