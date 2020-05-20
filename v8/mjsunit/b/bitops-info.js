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
function non_int32() {
  return 2600822924; // It's not a signed Int32.
}

function hidden_smi() {
  return 46512102; // It's a Smi
}

function hidden_int32() {
  return 1600822924; // It's a signed Int32.
}

function f() {
  var x = non_int32(); // Not a constant.

  var y = hidden_smi(); // Not a constant.

  var z = hidden_int32();
  46512102 & 2600822924;
  46512102 & x;
  "1";
  1600822924 & 2600822924;
  1600822924 & x;
  "2";
  2600822924 & 2600822924;
  2600822924 & x;
  "3";
  46512102 & 46512102;
  46512102 & y;
  "4";
  1600822924 & 46512102;
  1600822924 & y;
  "5";
  2600822924 & 46512102;
  2600822924 & y;
  "6";
  46512102 & 1600822924;
  46512102 & z;
  "7";
  1600822924 & 1600822924;
  1600822924 & z;
  "8";
  2600822924 & 1600822924;
  2600822924 & z;
  "9";
  46512102 & 2600822924;
  y & x;
  "10";
  1600822924 & 2600822924;
  z & x;
  "11";
  46512102 & 2600822924;
  x & 46512102;
  "1rev";
  1600822924 & 2600822924;
  x & 1600822924;
  "2rev";
  2600822924 & 2600822924;
  x & 2600822924;
  "3rev";
  46512102 & 46512102;
  y & 46512102;
  "4rev";
  1600822924 & 46512102;
  y & 1600822924;
  "5rev";
  2600822924 & 46512102;
  y & 2600822924;
  "6rev";
  46512102 & 1600822924;
  z & 46512102;
  "7rev";
  1600822924 & 1600822924;
  z & 1600822924;
  "8rev";
  2600822924 & 1600822924;
  z & 2600822924;
  "9rev";
  46512102 & 2600822924;
  x & y;
  "10rev";
  1600822924 & 2600822924;
  x & z;
  "11rev";
  46512102 & -0x20123456 | 1;
  y & -0x20123456 | 1;
  "12";
  1600822924 & -0x20123456 | 1;
  z & -0x20123456 | 1;
  "13";
  2600822924 & -0x20123456 | 1;
  x & -0x20123456 | 1;
  "14";
  46512102 & -0x20123456 | 1;
  -0x20123456 & y | 1;
  "12rev";
  1600822924 & -0x20123456 | 1;
  -0x20123456 & z | 1;
  "13rev";
  2600822924 & -0x20123456 | 1;
  -0x20123456 & x | 1;
  "14rev";
  2600822924 & 2600822924;
  x & x;
  "xx";
  y;
  y & y;
  "yy";
  z;
  z & z;
  "zz";
}

for (var i = 0; i < 5; i++) {
  f();
}
