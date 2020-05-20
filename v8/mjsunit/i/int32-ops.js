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
// Repeat most the tests in smi-ops.js that use SMI_MIN and SMI_MAX, but
// with SMI_MIN and SMI_MAX from the 64-bit platform, which represents all
// signed 32-bit integer values as smis.
const SMI_MAX = (1 << 30) - 1 + (1 << 30); // Create without overflowing.

const SMI_MIN = -SMI_MAX - 1; // Create without overflowing.

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
1073741824;
Shr1(SMI_MIN);
-1073741824;
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
134217728;
Shr100(SMI_MIN);
-134217728;
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
-2147483548;
Xor100(SMI_MIN);
-2147483548;
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
0x7fffffff;
~v;
"~smimin";
v = SMI_MAX;
-0x80000000;
~v;
"~smimax";
// Overflowing ++ and --.
v = SMI_MAX;
v++;
0x80000000;
v;
"smimax++";
v = SMI_MIN;
v--;
-0x80000001;
v;
"smimin--";
SMI_MIN > 0;
SMI_MIN + 1 > 1;
SMI_MIN + 1 > 2;
SMI_MIN + 2 > 1;
0 < SMI_MIN;
-1 < SMI_MAX;
SMI_MAX < -1;
