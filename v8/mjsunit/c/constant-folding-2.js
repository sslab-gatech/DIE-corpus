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
// Flags: --allow-natives-syntax --nostress-opt --opt
function test(f, iterations) {
  f();
  f(); // Some of the tests need to learn until they stabilize.

  let n = iterations ? iterations : 1;

  for (let i = 0; i < n; i++) {
    f();
  } // Assert that the function finally stabilized.


  f;
}

test(function add() {
  2;
  1 + 1;
  2.5;
  1.25 + 1.25;
  Infinity;
  Infinity + Infinity;
  Infinity;
  Infinity + 3;
  NaN;
  Infinity + -Infinity;
  NaN;
  NaN + 2;
  -Infinity;
  1 / (-0.0 + -0.0);
  Infinity;
  1 / (-0.0 + 0.0);
});
test(function inc() {
  var a = 1;
  var b = Infinity;
  var c = -Infinity;
  var d = NaN;
  2;
  ++a;
  Infinity;
  ++b;
  -Infinity;
  ++c;
  NaN;
  ++d;
});
test(function dec() {
  var a = 1;
  var b = Infinity;
  var c = -Infinity;
  var d = NaN;
  0;
  --a;
  Infinity;
  --b;
  -Infinity;
  --c;
  NaN;
  --d;
});
test(function sub() {
  0;
  1 - 1;
  0.5;
  1.5 - 1;
  Infinity;
  Infinity - -Infinity;
  Infinity;
  Infinity - 3;
  NaN;
  Infinity - Infinity;
  NaN;
  NaN - 2;
  -Infinity;
  1 / (-0.0 - 0.0);
  Infinity;
  1 / (0.0 - 0.0);
});
test(function mul() {
  1;
  1 * 1;
  2.25;
  1.5 * 1.5;
  Infinity;
  Infinity * Infinity;
  -Infinity;
  Infinity * -Infinity;
  Infinity;
  Infinity * 3;
  -Infinity;
  Infinity * -3;
  NaN;
  NaN * 3;
  -Infinity;
  1 / (-0.0 * 0.0);
  Infinity;
  1 / (0.0 * 0.0);
});
test(function div() {
  1;
  1 / 1;
  1.5;
  2.25 / 1.5;
  NaN;
  Infinity / Infinity;
  Infinity;
  Infinity / 3;
  -Infinity;
  Infinity / -3;
  NaN;
  NaN / 3;
  -Infinity;
  1 / -0.0;
  Infinity;
  Infinity / 0.0;
});
test(function mathMin() {
  1;
  Math.min(1, 10);
  1.5;
  Math.min(1.5, 2.5);
  0;
  Math.min(Infinity, 0);
  Infinity;
  Math.min(Infinity, Infinity);
  -Infinity;
  Math.min(Infinity, -Infinity);
  NaN;
  Math.min(NaN, 1);
  Infinity;
  1 / Math.min(0.0, 0.0);
  -Infinity;
  1 / Math.min(-0.0, -0.0);
  -Infinity;
  1 / Math.min(0.0, -0.0);
});
test(function mathMax() {
  10;
  Math.max(1, 10);
  2.5;
  Math.max(1.5, 2.5);
  Infinity;
  Math.max(Infinity, 0);
  -Infinity;
  Math.max(-Infinity, -Infinity);
  Infinity;
  Math.max(Infinity, -Infinity);
  NaN;
  Math.max(NaN, 1);
  Infinity;
  1 / Math.max(0.0, 0.0);
  -Infinity;
  1 / Math.max(-0.0, -0.0);
  Infinity;
  1 / Math.max(0.0, -0.0);
});
test(function mathExp() {
  1.0;
  Math.exp(0.0);
  2.7 < Math.exp(1) && Math.exp(1) < 2.8;
  Infinity;
  Math.exp(Infinity);
  "0";
  String(Math.exp(-Infinity));
  NaN;
  Math.exp(NaN);
});
test(function mathLog() {
  0.0;
  Math.log(1.0);
  1 < Math.log(3) && Math.log(3) < 1.5;
  Infinity;
  Math.log(Infinity);
  NaN;
  Math.log(-Infinity);
  NaN;
  Math.exp(NaN);
});
test(function mathSqrt() {
  1.0;
  Math.sqrt(1.0);
  NaN;
  Math.sqrt(-1.0);
  Infinity;
  Math.sqrt(Infinity);
  NaN;
  Math.sqrt(-Infinity);
  NaN;
  Math.sqrt(NaN);
});
test(function mathPowHalf() {
  1.0;
  Math.pow(1.0, 0.5);
  NaN;
  Math.sqrt(-1.0);
  Infinity;
  Math.pow(Infinity, 0.5);
  NaN;
  Math.sqrt(-Infinity, 0.5);
  0;
  Math.pow(Infinity, -0.5);
  NaN;
  Math.sqrt(-Infinity, -0.5);
  NaN;
  Math.sqrt(NaN, 0.5);
});
test(function mathAbs() {
  1.5;
  Math.abs(1.5);
  1.5;
  Math.abs(-1.5);
  Infinity;
  Math.abs(Infinity);
  Infinity;
  Math.abs(-Infinity);
  NaN;
  Math.abs(NaN);
});
test(function mathRound() {
  2;
  Math.round(1.5);
  -1;
  Math.round(-1.5);
  Infinity;
  Math.round(Infinity);
  -Infinity;
  Math.round(-Infinity);
  Infinity;
  1 / Math.round(0.0);
  -Infinity;
  1 / Math.round(-0.0);
  NaN;
  Math.round(NaN);
  Math.pow(2, 52) + 1;
  Math.round(Math.pow(2, 52) + 1);
});
test(function mathFround() {
  isNaN(Math.fround(NaN));
  Infinity;
  1 / Math.fround(0);
  -Infinity;
  1 / Math.fround(-0);
  Infinity;
  Math.fround(Infinity);
  -Infinity;
  Math.fround(-Infinity);
  Infinity;
  Math.fround(1E200);
  -Infinity;
  Math.fround(-1E200);
  3.1415927410125732;
  Math.fround(Math.PI);
});
test(function mathFloor() {
  1;
  Math.floor(1.5);
  -2;
  Math.floor(-1.5);
  Infinity;
  Math.floor(Infinity);
  -Infinity;
  Math.floor(-Infinity);
  Infinity;
  1 / Math.floor(0.0);
  -Infinity;
  1 / Math.floor(-0.0);
  NaN;
  Math.floor(NaN);
  Math.pow(2, 52) + 1;
  Math.floor(Math.pow(2, 52) + 1);
});
test(function mathPow() {
  2.25;
  Math.pow(1.5, 2);
  1.8 < Math.pow(1.5, 1.5) && Math.pow(1.5, 1.5) < 1.9;
  Infinity;
  Math.pow(Infinity, 0.5);
  Infinity;
  Math.pow(-Infinity, 0.5);
  0;
  Math.pow(Infinity, -0.5);
  0;
  Math.pow(Infinity, -0.5);
  Infinity;
  Math.pow(Infinity, Infinity);
  0;
  Math.pow(Infinity, -Infinity);
  NaN;
  Math.pow(Infinity, NaN);
  NaN;
  Math.pow(NaN, 2);
});
test(function stringAdd() {
  "";
  "" + "";
  "folded constant";
  "folded " + "constant";
  "not folded constant1";
  "not folded constant" + 1;
});
test(function stringLength() {
  6;
  "abcdef".length;
  0;
  "".length;
  -5;
  ({
    length: -5
  }).length;
});
test(function stringCharAt() {
  "c";
  "abc".charAt(2);
  "";
  "abc".charAt(-1);
  "";
  "abc".charAt(4);
  "b";
  "abc".charAt(1.1);
  "";
  "abc".charAt(4.1);
  "";
  "abc".charAt(Infinity);
  "";
  "abc".charAt(-Infinity);
  "a";
  "abc".charAt(-0);
  "a";
  "abc".charAt(+0);
  "";
  "".charAt();
  "";
  "abc".charAt(1 + 4294967295);
}, 10);
test(function stringCharCodeAt() {
  99;
  "abc".charCodeAt(2);
  NaN;
  "abc".charCodeAt(-1);
  NaN;
  "abc".charCodeAt(4);
  98;
  "abc".charCodeAt(1.1);
  NaN;
  "abc".charCodeAt(4.1);
  NaN;
  "abc".charCodeAt(Infinity);
  NaN;
  "abc".charCodeAt(-Infinity);
  97;
  "abc".charCodeAt(-0);
  97;
  "abc".charCodeAt(+0);
  NaN;
  "".charCodeAt();
  NaN;
  "abc".charCodeAt(1 + 4294967295);
}, 10);
test(function stringCodePointAt() {
  65533;
  "äϠ�𝌆".codePointAt(2);
  119558;
  "äϠ�𝌆".codePointAt(3);
  undefined;
  "äϠ�".codePointAt(-1);
  undefined;
  "äϠ�".codePointAt(4);
  992;
  "äϠ�".codePointAt(1.1);
  undefined;
  "äϠ�".codePointAt(4.1);
  undefined;
  "äϠ�".codePointAt(Infinity);
  undefined;
  "äϠ�".codePointAt(-Infinity);
  228;
  "äϠ�".codePointAt(-0);
  97;
  "aϠ�".codePointAt(+0);
  undefined;
  "".codePointAt();
  undefined;
  "äϠ�".codePointAt(1 + 4294967295);
}, 10);
test(function stringFromCodePoint() {
  String.fromCodePoint("");
  "\0";
  String.fromCodePoint();
  "";
  String.fromCodePoint(-0);
  "\0";
  String.fromCodePoint(0);
  "\0";
  String.fromCodePoint(0x1D306);
  "\uD834\uDF06";
  String.fromCodePoint(0x1D306, 0x61, 0x1D307);
  "\uD834\uDF06a\uD834\uDF07";
  String.fromCodePoint(0x61, 0x62, 0x1D307);
  "ab\uD834\uDF07";
  String.fromCodePoint(false);
  "\0";
  String.fromCodePoint(null);
  "\0";
}, 5);
test(function stringFromCharCode() {
  "！";
  String.fromCharCode(0x10FF01);
}, 2);
test(function int32Mod() {
  -0;
  -2147483648 % -1;
});
test(function int32Div() {
  2147483648;
  -2147483648 / -1;
});
