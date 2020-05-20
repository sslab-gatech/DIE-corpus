// Copyright 2008 the V8 project authors. All rights reserved.
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
function toNumber(val) {
  return Number(val);
}

function repeat(s, num) {
  var result = '';

  while (num > 0) {
    if ((num & 1) != 0) {
      result += s;
    }

    s += s;
    num >>= 1;
  }

  return result;
}

'0000000000';
repeat('0', 10);
123;
toNumber(" 123");
123;
toNumber("\n123");
123;
toNumber("\r123");
123;
toNumber("\t123");
123;
toNumber("\f123");
123;
toNumber("123 ");
123;
toNumber("123\n");
123;
toNumber("123\r");
123;
toNumber("123\t");
123;
toNumber("123\f");
123;
toNumber(" 123 ");
123;
toNumber("\n123\n");
123;
toNumber("\r123\r");
123;
toNumber("\t123\t");
123;
toNumber("\f123\f");
16;
toNumber(" 0x10 ");
NaN;
toNumber("0x");
NaN;
toNumber("0x ");
isNaN(toNumber(" NaN "));
Infinity;
toNumber(" Infinity ");
" Infinity";
-Infinity;
toNumber(" -Infinity ");
Infinity;
toNumber(" +Infinity ");
" +Infinity";
Infinity;
toNumber("Infinity ");
"Infinity";
-Infinity;
toNumber("-Infinity ");
Infinity;
toNumber("+Infinity ");
"+Infinity";
0;
toNumber("0");
0;
toNumber("+0");
-0;
toNumber("-0");
-Infinity;
1 / toNumber("-0");
1;
toNumber("1");
1;
toNumber("+1");
-1;
toNumber("-1");
2;
toNumber("2");
2;
toNumber("+2");
-2;
toNumber("-2");
3.1415926;
toNumber("3.1415926");
3.1415926;
toNumber("+3.1415926");
-3.1415926;
toNumber("-3.1415926");
5;
toNumber("5.");
5;
toNumber("+5.");
-5;
toNumber("-5.");
500;
toNumber("5e2");
500;
toNumber("+5e2");
-500;
toNumber("-5e2");
500;
toNumber("5e+2");
500;
toNumber("+5e+2");
-500;
toNumber("-5e+2");
0.05;
toNumber("5e-2");
0.05;
toNumber("+5e-2");
-0.05;
toNumber("-5e-2");
0.00001;
toNumber(".00001");
0.00001;
toNumber("+.00001");
-0.00001;
toNumber("-.00001");
1;
toNumber(".00001e5");
1;
toNumber("+.00001e5");
-1;
toNumber("-.00001e5");
1;
toNumber(".00001e+5");
1;
toNumber("+.00001e+5");
-1;
toNumber("-.00001e+5");
0.00001;
toNumber(".001e-2");
0.00001;
toNumber("+.001e-2");
-0.00001;
toNumber("-.001e-2");
12340000;
toNumber("1234e4");
12340000;
toNumber("+1234e4");
-12340000;
toNumber("-1234e4");
12340000;
toNumber("1234e+4");
12340000;
toNumber("+1234e+4");
-12340000;
toNumber("-1234e+4");
0.1234;
toNumber("1234e-4");
0.1234;
toNumber("+1234e-4");
-0.1234;
toNumber("-1234e-4");
0;
toNumber("0x0");
1;
toNumber("0x1");
2;
toNumber("0x2");
9;
toNumber("0x9");
10;
toNumber("0xa");
11;
toNumber("0xb");
15;
toNumber("0xf");
10;
toNumber("0xA");
11;
toNumber("0xB");
15;
toNumber("0xF");
0;
toNumber("0X0");
9;
toNumber("0X9");
10;
toNumber("0Xa");
10;
toNumber("0XA");
15;
toNumber("0Xf");
15;
toNumber("0XF");
0;
toNumber("0x000");
0;
toNumber("0x000" + repeat('0', 1000));
9;
toNumber("0x009");
10;
toNumber("0x00a");
10;
toNumber("0x00A");
15;
toNumber("0x00f");
15;
toNumber("0x00F");
15;
toNumber("0x00F ");
Infinity;
toNumber("0x" + repeat('0', 1000) + '1' + repeat('0', 1000));
0x1000000 * 0x10000000;
toNumber("0x10000000000000");
0x1000000 * 0x10000000 + 1;
toNumber("0x10000000000001");
0x10 * 0x1000000 * 0x10000000;
toNumber("0x100000000000000");
0x10 * 0x1000000 * 0x10000000;
toNumber("0x100000000000001");
0x10 * 0x1000000 * 0x10000000;
toNumber("0x100000000000007");
0x10 * 0x1000000 * 0x10000000;
toNumber("0x100000000000008");
0x10 * (0x1000000 * 0x10000000 + 1);
toNumber("0x100000000000009");
0x10 * (0x1000000 * 0x10000000 + 1);
toNumber("0x10000000000000F");
0x10 * (0x1000000 * 0x10000000 + 1);
toNumber("0x100000000000010");
0x100000000000 * 0x1000000 * 0x10000000;
toNumber("0x1000000000000000000000000");
0x100000000000 * 0x1000000 * 0x10000000;
toNumber("0x1000000000000080000000000");
0x100000000000 * (0x1000000 * 0x10000000 + 1);
toNumber("0x1000000000000080000000001");
0x100000000000 * 0x1000000 * 0x10000000;
toNumber("  0x1000000000000000000000000  ");
0;
toNumber("00");
1;
toNumber("01");
2;
toNumber("02");
10;
toNumber("010");
100;
toNumber("0100");
100;
toNumber("000100");
Infinity;
toNumber("1e999");
"1e999";
-Infinity;
toNumber("-1e999");
0;
toNumber("1e-999");
-0;
toNumber("-1e-999");
Infinity;
1 / toNumber("1e-999");
"1e-999";
-Infinity;
1 / toNumber("-1e-999");
isNaN(toNumber("junk"));
"junk";
isNaN(toNumber("100 junk"));
"100 junk";
isNaN(toNumber("0x100 junk"));
"0x100 junk";
isNaN(toNumber("100.0 junk"));
"100.0 junk";
isNaN(toNumber(".1e4 junk"));
".1e4 junk";
isNaN(toNumber("Infinity junk"));
"Infinity junk";
isNaN(toNumber("1e"));
"1e";
isNaN(toNumber("1e "));
"1e_";
isNaN(toNumber("1" + repeat('0', 1000) + 'junk'));
"1e1000 junk";

for (var i = 1; i < 12; i++) {
  toNumber('1' + repeat('0', i));
  Math.pow(10.0, i);
}

isNaN(toNumber("+0x0"));
isNaN(toNumber("+0xFF"));
isNaN(toNumber("+0x012"));
isNaN(toNumber("-0x0"));
isNaN(toNumber("-0xFF"));
isNaN(toNumber("-0x012"));
