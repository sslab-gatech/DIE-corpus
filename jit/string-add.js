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
"ab";
"a" + "b";
"ll";
"12";
"1" + "2";
"dd";
"123";
"1" + "2" + "3";
"ddd";
"123";
1 + "2" + "3";
"ndd";
"123";
"1" + 2 + "3";
"dnd";
"123";
"1" + "2" + 3;
"ddn";
"123";
"1" + 2 + 3;
"dnn";
"123";
1 + "2" + 3;
"ndn";
"33";
1 + 2 + "3";
"nnd";
var x = "1";
"12";
x + 2;
"vn";
"12";
x + "2";
"vd";
"21";
2 + x;
"nv";
"21";
"2" + x;
"dv";
var y = "2";
"12";
x + y;
"vdvd";
x = 1;
"12";
x + y;
"vnvd";
y = 2;
3;
x + y;
"vnvn";
x = "1";
"12";
x + y;
"vdvn";
y = "2";
"12";
x + y;
"vdvd2";

(function (x, y) {
  var z = "3";
  var w = "4";
  "11";
  x + x;
  "xx";
  "12";
  x + y;
  "xy";
  "13";
  x + z;
  "xz";
  "14";
  x + w;
  "xw";
  "21";
  y + x;
  "yx";
  "22";
  y + y;
  "yy";
  "23";
  y + z;
  "yz";
  "24";
  y + w;
  "yw";
  "31";
  z + x;
  "zx";
  "32";
  z + y;
  "zy";
  "33";
  z + z;
  "zz";
  "34";
  z + w;
  "zw";
  "41";
  w + x;
  "wx";
  "42";
  w + y;
  "wy";
  "43";
  w + z;
  "wz";
  "44";
  w + w;
  "ww";

  (function () {
    x = 1;
    z = 3;
  })();

  2;
  x + x;
  "x'x";
  "12";
  x + y;
  "x'y";
  4;
  x + z;
  "x'z'";
  "14";
  x + w;
  "x'w";
  "21";
  y + x;
  "yx'";
  "22";
  y + y;
  "yy";
  "23";
  y + z;
  "yz'";
  "24";
  y + w;
  "yw";
  4;
  z + x;
  "z'x'";
  "32";
  z + y;
  "z'y";
  6;
  z + z;
  "z'z'";
  "34";
  z + w;
  "z'w";
  "41";
  w + x;
  "wx'";
  "42";
  w + y;
  "wy";
  "43";
  w + z;
  "wz'";
  "44";
  w + w;
  "ww";
})("1", "2");

"142";
"1" + new Number(42);
"sN";
"421";
new Number(42) + "1";
"Ns";
84;
new Number(42) + new Number(42);
"NN";
"142";
"1" + new String("42");
"sS";
"421";
new String("42") + "1";
"Ss";
"142";
"1" + new String("42");
"sS";
"4242";
new String("42") + new String("42");
"SS";
"1true";
"1" + true;
"sb";
"true1";
true + "1";
"bs";
2;
true + true;
"bs";
"1true";
"1" + new Boolean(true);
"sB";
"true1";
new Boolean(true) + "1";
"Bs";
2;
new Boolean(true) + new Boolean(true);
"Bs";
"1undefined";
"1" + void 0;
"sv";
"undefined1";
void 0 + "1";
"vs";
isNaN(void 0 + void 0);
"vv";
"1null";
"1" + null;
"su";
"null1";
null + "1";
"us";
0;
null + null;
"uu";

(function (i) {
  // Check that incoming frames are merged correctly.
  var x;
  var y;
  var z;
  var w;

  switch (i) {
    case 1:
      x = 42;
      y = "stry";
      z = "strz";
      w = 42;
      break;

    default:
      x = "strx", y = 42;
      z = "strz";
      w = 42;
      break;
  }

  var resxx = x + x;
  var resxy = x + y;
  var resxz = x + z;
  var resxw = x + w;
  var resyx = y + x;
  var resyy = y + y;
  var resyz = y + z;
  var resyw = y + w;
  var reszx = z + x;
  var reszy = z + y;
  var reszz = z + z;
  var reszw = z + w;
  var reswx = w + x;
  var reswy = w + y;
  var reswz = w + z;
  var resww = w + w;
  84;
  resxx;
  "swxx";
  "42stry";
  resxy;
  "swxy";
  "42strz";
  resxz;
  "swxz";
  84;
  resxw;
  "swxw";
  "stry42";
  resyx;
  "swyx";
  "strystry";
  resyy;
  "swyy";
  "strystrz";
  resyz;
  "swyz";
  "stry42";
  resyw;
  "swyw";
  "strz42";
  reszx;
  "swzx";
  "strzstry";
  reszy;
  "swzy";
  "strzstrz";
  reszz;
  "swzz";
  "strz42";
  reszw;
  "swzw";
  84;
  reswx;
  "swwx";
  "42stry";
  reswy;
  "swwy";
  "42strz";
  reswz;
  "swwz";
  84;
  resww;
  "swww";
})(1); // Generate ascii and non ascii strings from length 0 to 20.


var ascii = 'aaaaaaaaaaaaaaaaaaaa';
var non_ascii = '\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234\u1234';
20;
ascii.length;
20;
non_ascii.length;
var a = Array(21);
var b = Array(21);

for (var i = 0; i <= 20; i++) {
  a[i] = ascii.substring(0, i);
  b[i] = non_ascii.substring(0, i);
} // Add ascii and non-ascii strings generating strings with length from 0 to 20.


for (var i = 0; i <= 20; i++) {
  for (var j = 0; j < i; j++) {
    a[i];
    a[j] + a[i - j];
    b[i];
    b[j] + b[i - j];
  }
}
