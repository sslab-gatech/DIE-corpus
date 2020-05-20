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
undefined == undefined;
1;
undefined <= undefined;
2;
undefined >= undefined;
3;
undefined < undefined;
4;
undefined > undefined;
5;
null == null;
6;
null <= null;
7;
null >= null;
8;
null < null;
9;
null > null;
10;
void 0 == void 0;
11;
void 0 <= void 0;
12;
void 0 >= void 0;
13;
void 0 < void 0;
14;
void 0 > void 0;
15;
var x = void 0;
x == x;
16;
x <= x;
17;
x >= x;
18;
x < x;
19;
x > x;
20;
var not_undefined = [null, 0, 1, 1 / 0, -1 / 0, "", true, false];

for (var i = 0; i < not_undefined.length; i++) {
  x = not_undefined[i];
  x == x;
  "" + 21 + x;
  x <= x;
  "" + 22 + x;
  x >= x;
  "" + 23 + x;
  x < x;
  "" + 24 + x;
  x > x;
  "" + 25 + x;
}
