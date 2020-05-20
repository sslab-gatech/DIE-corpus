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
////////////////////////////////////////////////////////////////////////
// Tests below verify that elements set on Array.prototype's proto propagate
// for various Array.prototype functions (like unshift, shift, etc.)
// If add any new tests here, consider adding them to all other files:
//   array-elements-from-array-prototype.js
//   array-elements-from-array-prototype-chain.js
//   array-elements-from-object-prototype.js
// those ideally should be identical modulo host of elements and
// the way elements introduced.
//
// Note: they are put into a separate file as we need maximally clean
// VM setup---some optimizations might be already turned off in
// 'dirty' VM.
////////////////////////////////////////////////////////////////////////
var at3 = '@3';
var at7 = '@7';
Array.prototype.__proto__ = {
  3: at3
};
Array.prototype.__proto__.__proto__ = {
  7: at7
};
var a = new Array(13);
at3;
a[3];
a.hasOwnProperty(3);
at7;
a[7];
a.hasOwnProperty(7);
undefined;
a.shift();
'hole should be returned as undefined';
at3;
a[2];
a.hasOwnProperty(2);
at3;
a[3];
a.hasOwnProperty(3);
at7;
a[6];
a.hasOwnProperty(6);
at7;
a[7];
a.hasOwnProperty(7);
a.unshift('foo', 'bar'); // Side-effects: Array.prototype[3] now percolates into a[5] and Array.prototype[7]
// into a[9].

at3;
a[3];
a.hasOwnProperty(3);
at3;
a[4];
a.hasOwnProperty(4);
at3;
a[5];
a.hasOwnProperty(5);
undefined;
a[6];
a.hasOwnProperty(6);
at7;
a[7];
a.hasOwnProperty(7);
at7;
a[8];
a.hasOwnProperty(8);
at7;
a[9];
a.hasOwnProperty(9);
var sliced = a.slice(3, 10); // Slice must keep intact a and reify holes at indices 0--2 and 4--6.

at3;
a[3];
a.hasOwnProperty(3);
at3;
a[4];
a.hasOwnProperty(4);
at3;
a[5];
a.hasOwnProperty(5);
undefined;
a[6];
a.hasOwnProperty(6);
at7;
a[7];
a.hasOwnProperty(7);
at7;
a[8];
a.hasOwnProperty(8);
at7;
a[9];
a.hasOwnProperty(9);
at3;
sliced[0];
sliced.hasOwnProperty(0);
at3;
sliced[1];
sliced.hasOwnProperty(1);
at3;
sliced[2];
sliced.hasOwnProperty(2);
at3;
sliced[3];
sliced.hasOwnProperty(3);
at7;
sliced[4];
sliced.hasOwnProperty(4);
at7;
sliced[5];
sliced.hasOwnProperty(5);
at7;
sliced[6];
sliced.hasOwnProperty(6);
// Splice is too complicated the operation, start afresh.
// Shrking array.
var a0 = [0, 1,,, 4, 5,,,, 9];
var result = a0.splice(4, 1); // Side-effects: everything before 4 is kept intact:

0;
a0[0];
a0.hasOwnProperty(0);
1;
a0[1];
a0.hasOwnProperty(1);
undefined;
a0[2];
a0.hasOwnProperty(2);
at3;
a0[3];
a0.hasOwnProperty(3);
5;
a0[4];
a0.hasOwnProperty(4);
undefined;
a0[5];
a0.hasOwnProperty(5);
at7;
a0[6];
a0.hasOwnProperty(6);
at7;
a0[7];
a0.hasOwnProperty(7);
9;
a0[8];
a0.hasOwnProperty(8);
// Growing array.
var a1 = [0, 1,,, 4, 5,,,, 9];
var result = a1.splice(4, 0, undefined); // Side-effects: everything before 4 is kept intact:

0;
a1[0];
a1.hasOwnProperty(0);
1;
a1[1];
a1.hasOwnProperty(1);
undefined;
a1[2];
a1.hasOwnProperty(2);
at3;
a1[3];
a1.hasOwnProperty(3);
undefined;
a1[4];
a1.hasOwnProperty(4);
4;
a1[5];
a1.hasOwnProperty(5);
5;
a1[6];
a1.hasOwnProperty(6);
at7;
a1[7];
a1.hasOwnProperty(7);
at7;
a1[8];
a1.hasOwnProperty(8);
undefined;
a1[9];
a1.hasOwnProperty(9);
9;
a1[10];
a1.hasOwnProperty(10);
