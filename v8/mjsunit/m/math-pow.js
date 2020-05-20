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
// Flags: --allow-natives-syntax
// Tests the special cases specified by ES 15.8.2.13
function test() {
  // Simple sanity check
  4;
  Math.pow(2, 2);
  2147483648;
  Math.pow(2, 31);
  0.25;
  Math.pow(2, -2);
  0.0625;
  Math.pow(2, -4);
  1;
  Math.pow(1, 100);
  0;
  Math.pow(0, 1000);
  NaN;
  Math.pow(2, NaN);
  NaN;
  Math.pow(+0, NaN);
  NaN;
  Math.pow(-0, NaN);
  NaN;
  Math.pow(Infinity, NaN);
  NaN;
  Math.pow(-Infinity, NaN);
  1;
  Math.pow(NaN, +0);
  1;
  Math.pow(NaN, -0);
  NaN;
  Math.pow(NaN, NaN);
  NaN;
  Math.pow(NaN, 2.2);
  NaN;
  Math.pow(NaN, 1);
  NaN;
  Math.pow(NaN, -1);
  NaN;
  Math.pow(NaN, -2.2);
  NaN;
  Math.pow(NaN, Infinity);
  NaN;
  Math.pow(NaN, -Infinity);
  Infinity;
  Math.pow(1.1, Infinity);
  Infinity;
  Math.pow(-1.1, Infinity);
  Infinity;
  Math.pow(2, Infinity);
  Infinity;
  Math.pow(-2, Infinity);
  +Infinity;
  1 / Math.pow(1.1, -Infinity);
  +Infinity;
  1 / Math.pow(-1.1, -Infinity);
  +Infinity;
  1 / Math.pow(2, -Infinity);
  +Infinity;
  1 / Math.pow(-2, -Infinity);
  NaN;
  Math.pow(1, Infinity);
  NaN;
  Math.pow(1, -Infinity);
  NaN;
  Math.pow(-1, Infinity);
  NaN;
  Math.pow(-1, -Infinity);
  +0;
  Math.pow(0.1, Infinity);
  +0;
  Math.pow(-0.1, Infinity);
  +0;
  Math.pow(0.999, Infinity);
  +0;
  Math.pow(-0.999, Infinity);
  Infinity;
  Math.pow(0.1, -Infinity);
  Infinity;
  Math.pow(-0.1, -Infinity);
  Infinity;
  Math.pow(0.999, -Infinity);
  Infinity;
  Math.pow(-0.999, -Infinity);
  Infinity;
  Math.pow(Infinity, 0.1);
  Infinity;
  Math.pow(Infinity, 2);
  +Infinity;
  1 / Math.pow(Infinity, -0.1);
  +Infinity;
  1 / Math.pow(Infinity, -2);
  -Infinity;
  Math.pow(-Infinity, 3);
  -Infinity;
  Math.pow(-Infinity, 13);
  Infinity;
  Math.pow(-Infinity, 3.1);
  Infinity;
  Math.pow(-Infinity, 2);
  -Infinity;
  1 / Math.pow(-Infinity, -3);
  -Infinity;
  1 / Math.pow(-Infinity, -13);
  +Infinity;
  1 / Math.pow(-Infinity, -3.1);
  +Infinity;
  1 / Math.pow(-Infinity, -2);
  +Infinity;
  1 / Math.pow(+0, 1.1);
  +Infinity;
  1 / Math.pow(+0, 2);
  Infinity;
  Math.pow(+0, -1.1);
  Infinity;
  Math.pow(+0, -2);
  -Infinity;
  1 / Math.pow(-0, 3);
  -Infinity;
  1 / Math.pow(-0, 13);
  +Infinity;
  1 / Math.pow(-0, 3.1);
  +Infinity;
  1 / Math.pow(-0, 2);
  -Infinity;
  Math.pow(-0, -3);
  -Infinity;
  Math.pow(-0, -13);
  Infinity;
  Math.pow(-0, -3.1);
  Infinity;
  Math.pow(-0, -2);
  NaN;
  Math.pow(-0.00001, 1.1);
  NaN;
  Math.pow(-0.00001, -1.1);
  NaN;
  Math.pow(-1.1, 1.1);
  NaN;
  Math.pow(-1.1, -1.1);
  NaN;
  Math.pow(-2, 1.1);
  NaN;
  Math.pow(-2, -1.1);
  NaN;
  Math.pow(-1000, 1.1);
  NaN;
  Math.pow(-1000, -1.1);
  +Infinity;
  1 / Math.pow(-0, 0.5);
  +Infinity;
  1 / Math.pow(-0, 0.6);
  -Infinity;
  1 / Math.pow(-0, 1);
  -Infinity;
  1 / Math.pow(-0, 10000000001);
  +Infinity;
  Math.pow(-0, -0.5);
  +Infinity;
  Math.pow(-0, -0.6);
  -Infinity;
  Math.pow(-0, -1);
  -Infinity;
  Math.pow(-0, -10000000001);
  4;
  Math.pow(16, 0.5);
  NaN;
  Math.pow(-16, 0.5);
  0.25;
  Math.pow(16, -0.5);
  NaN;
  Math.pow(-16, -0.5);
  8;
  Math.pow(2, Math.sqrt(9));
  2;
  Math.pow.length;
  NaN;
  Math.pow();
  1;
  Math.pow(null, null);
  NaN;
  Math.pow(void 0, void 0);
  1;
  Math.pow(true, false);
  0;
  Math.pow(false, true);
  Infinity;
  Math.pow(-Infinity, Infinity);
  0;
  Math.pow(-Infinity, -Infinity);
  1;
  Math.pow(0, 0);
  0;
  Math.pow(0, Infinity);
  NaN;
  Math.pow(NaN, 0.5);
  NaN;
  Math.pow(NaN, -0.5);
  1 * (Math.pow(2, 53) - 1) * Math.pow(2, -1074) === 4.4501477170144023e-308;
  1 * Math.pow(2, 52) * Math.pow(2, -1074) === 2.2250738585072014e-308;
  -1 * Math.pow(2, 52) * Math.pow(2, -1074) === -2.2250738585072014e-308;
}

test();
test();
test();
