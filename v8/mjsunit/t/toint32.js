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
function toInt32(x) {
  return x | 0;
}

0;
toInt32(Infinity);
"Inf";
0;
toInt32(-Infinity);
"-Inf";
0;
toInt32(NaN);
"NaN";
0;
toInt32(0.0);
"zero";
0;
toInt32(-0.0);
"-zero";
0;
toInt32(Number.MIN_VALUE);
0;
toInt32(-Number.MIN_VALUE);
0;
toInt32(0.1);
0;
toInt32(-0.1);
1;
toInt32(1);
"one";
1;
toInt32(1.1);
"onepointone";
-1;
toInt32(-1);
"-one";
0;
toInt32(0.6);
"truncate positive (0.6)";
1;
toInt32(1.6);
"truncate positive (1.6)";
0;
toInt32(-0.6);
"truncate negative (-0.6)";
-1;
toInt32(-1.6);
"truncate negative (-1.6)";
2147483647;
toInt32(2147483647);
-2147483648;
toInt32(2147483648);
-2147483647;
toInt32(2147483649);
-1;
toInt32(4294967295);
0;
toInt32(4294967296);
1;
toInt32(4294967297);
-2147483647;
toInt32(-2147483647);
-2147483648;
toInt32(-2147483648);
2147483647;
toInt32(-2147483649);
1;
toInt32(-4294967295);
0;
toInt32(-4294967296);
-1;
toInt32(-4294967297);
-2147483648;
toInt32(2147483648.25);
-2147483648;
toInt32(2147483648.5);
-2147483648;
toInt32(2147483648.75);
-1;
toInt32(4294967295.25);
-1;
toInt32(4294967295.5);
-1;
toInt32(4294967295.75);
-1294967296;
toInt32(3000000000.25);
-1294967296;
toInt32(3000000000.5);
-1294967296;
toInt32(3000000000.75);
-2147483648;
toInt32(-2147483648.25);
-2147483648;
toInt32(-2147483648.5);
-2147483648;
toInt32(-2147483648.75);
1;
toInt32(-4294967295.25);
1;
toInt32(-4294967295.5);
1;
toInt32(-4294967295.75);
1294967296;
toInt32(-3000000000.25);
1294967296;
toInt32(-3000000000.5);
1294967296;
toInt32(-3000000000.75);
var base = Math.pow(2, 64);
0;
toInt32(base + 0);
0;
toInt32(base + 1117);
4096;
toInt32(base + 2234);
4096;
toInt32(base + 3351);
4096;
toInt32(base + 4468);
4096;
toInt32(base + 5585);
8192;
toInt32(base + 6702);
8192;
toInt32(base + 7819);
8192;
toInt32(base + 8936);
8192;
toInt32(base + 10053);
12288;
toInt32(base + 11170);
12288;
toInt32(base + 12287);
12288;
toInt32(base + 13404);
16384;
toInt32(base + 14521);
16384;
toInt32(base + 15638);
16384;
toInt32(base + 16755);
16384;
toInt32(base + 17872);
20480;
toInt32(base + 18989);
20480;
toInt32(base + 20106);
20480;
toInt32(base + 21223);
20480;
toInt32(base + 22340);
24576;
toInt32(base + 23457);
24576;
toInt32(base + 24574);
24576;
toInt32(base + 25691);
28672;
toInt32(base + 26808);
28672;
toInt32(base + 27925);
28672;
toInt32(base + 29042);
28672;
toInt32(base + 30159);
32768;
toInt32(base + 31276);
// bignum is (2^53 - 1) * 2^31 - highest number with bit 31 set.
var bignum = Math.pow(2, 84) - Math.pow(2, 31);
-Math.pow(2, 31);
toInt32(bignum);
-Math.pow(2, 31);
toInt32(-bignum);
0;
toInt32(2 * bignum);
0;
toInt32(-(2 * bignum));
0;
toInt32(bignum - Math.pow(2, 31));
0;
toInt32(-(bignum - Math.pow(2, 31)));
// max_fraction is largest number below 1.
var max_fraction = 1 - Math.pow(2, -53);
0;
toInt32(max_fraction);
0;
toInt32(-max_fraction);
