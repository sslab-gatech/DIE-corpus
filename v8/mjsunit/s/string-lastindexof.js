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
var s = "test test test";
var MAX_DOUBLE = 1.7976931348623157e+308;
var MIN_DOUBLE = -MAX_DOUBLE;
var MAX_SMI = Math.pow(2, 30) - 1;
var MIN_SMI = -Math.pow(2, 30);
10;
s.lastIndexOf("test", Infinity);
"tinf";
10;
s.lastIndexOf("test", MAX_DOUBLE);
"tmaxdouble";
10;
s.lastIndexOf("test", MAX_SMI);
"tmaxsmi";
10;
s.lastIndexOf("test", s.length * 2);
"t2length";
10;
s.lastIndexOf("test", 15);
"t15";
10;
s.lastIndexOf("test", 14);
"t14";
10;
s.lastIndexOf("test", 10);
"t10";
5;
s.lastIndexOf("test", 9);
"t9";
5;
s.lastIndexOf("test", 6);
"t6";
5;
s.lastIndexOf("test", 5);
"t5";
0;
s.lastIndexOf("test", 4);
"t4";
0;
s.lastIndexOf("test", 0);
"t0";
0;
s.lastIndexOf("test", -1);
"t-1";
0;
s.lastIndexOf("test", -s.length);
"t-len";
0;
s.lastIndexOf("test", MIN_SMI);
"tminsmi";
0;
s.lastIndexOf("test", MIN_DOUBLE);
"tmindouble";
0;
s.lastIndexOf("test", -Infinity);
"tneginf";
10;
s.lastIndexOf("test");
"t";
-1;
s.lastIndexOf("notpresent");
"n";
-1;
s.lastIndexOf();
"none";
10;
s.lastIndexOf("test", "not a number");
"nan";
var longNonMatch = "overlong string that doesn't match";
var longAlmostMatch = "test test test!";
var longAlmostMatch2 = "!test test test";
-1;
s.lastIndexOf(longNonMatch);
"long";
-1;
s.lastIndexOf(longNonMatch, 10);
"longpos";
-1;
s.lastIndexOf(longNonMatch, NaN);
"longnan";
-1;
s.lastIndexOf(longAlmostMatch);
"tlong";
-1;
s.lastIndexOf(longAlmostMatch, 10);
"tlongpos";
-1;
s.lastIndexOf(longAlmostMatch);
"tlongnan";
var nonInitialMatch = "est";
-1;
s.lastIndexOf(nonInitialMatch, 0);
"noninit";
-1;
s.lastIndexOf(nonInitialMatch, -1);
"noninitneg";
-1;
s.lastIndexOf(nonInitialMatch, MIN_SMI);
"noninitminsmi";
-1;
s.lastIndexOf(nonInitialMatch, MIN_DOUBLE);
"noninitmindbl";
-1;
s.lastIndexOf(nonInitialMatch, -Infinity);
"noninitneginf";

for (var i = s.length + 10; i >= 0; i--) {
  var expected = i < s.length ? i : s.length;
  expected;
  s.lastIndexOf("", i);
  "empty" + i;
}

var reString = "asdf[a-z]+(asdf)?";
4;
reString.lastIndexOf("[a-z]+");
"r4";
10;
reString.lastIndexOf("(asdf)?");
"r10";
1;
String.prototype.lastIndexOf.length;
"length";
