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
var array = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];
var undef_array = [0,, 2, undefined, 4,, 6, undefined, 8,, 10]; // Sparse arrays with length 42000.

var sparse_array = [];
sparse_array[100] = 3;
sparse_array[200] = undefined;
sparse_array[300] = 4;
sparse_array[400] = 5;
sparse_array[500] = 6;
sparse_array[600] = 5;
sparse_array[700] = 4;
sparse_array[800] = undefined;
sparse_array[900] = 3;
sparse_array[41999] = "filler";
var dense_object = {
  0: 42,
  1: 37,
  length: 2
};
var sparse_object = {
  0: 42,
  100000: 37,
  length: 200000
};
var funky_object = {
  10: 42,
  100000: 42,
  100001: 37,
  length: 50000
};
var infinite_object = {
  10: 42,
  100000: 37,
  length: Infinity
}; // ----------------------------------------------------------------------
// Array.prototype.indexOf.
// ----------------------------------------------------------------------
// Negative cases.

-1;
[].indexOf(1);
-1;
array.indexOf(4);
-1;
array.indexOf(3, array.length);
2;
array.indexOf(3);
0;
array.indexOf(1, -17);
3;
array.indexOf(1, -11);
3;
array.indexOf(1, 1);
3;
array.indexOf(1, 3);
6;
array.indexOf(1, 4);
3;
undef_array.indexOf(undefined);
3;
undef_array.indexOf(undefined, 3);
7;
undef_array.indexOf(undefined, 4);
7;
undef_array.indexOf(undefined, 7);
-1;
undef_array.indexOf(undefined, 8);
3;
undef_array.indexOf(undefined, -11);
3;
undef_array.indexOf(undefined, -8);
7;
undef_array.indexOf(undefined, -7);
7;
undef_array.indexOf(undefined, -4);
-1;
undef_array.indexOf(undefined, -3);
100;
sparse_array.indexOf(3);
900;
sparse_array.indexOf(3, 101);
-1;
sparse_array.indexOf(3, 901);
100;
sparse_array.indexOf(3, -42000);
900;
sparse_array.indexOf(3, 101 - 42000);
-1;
sparse_array.indexOf(3, 901 - 42000);
300;
sparse_array.indexOf(4);
700;
sparse_array.indexOf(4, 301);
-1;
sparse_array.indexOf(4, 701);
300;
sparse_array.indexOf(4, -42000);
700;
sparse_array.indexOf(4, 301 - 42000);
-1;
sparse_array.indexOf(4, 701 - 42000);
200;
sparse_array.indexOf(undefined);
800;
sparse_array.indexOf(undefined, 201);
-1;
sparse_array.indexOf(undefined, 801);
200;
sparse_array.indexOf(undefined, -42000);
800;
sparse_array.indexOf(undefined, 201 - 42000);
-1;
sparse_array.indexOf(undefined, 801 - 42000);
0;
Array.prototype.indexOf.call(dense_object, 42);
1;
Array.prototype.indexOf.call(dense_object, 37);
-1;
Array.prototype.indexOf.call(dense_object, 87);
0;
Array.prototype.indexOf.call(sparse_object, 42);
100000;
Array.prototype.indexOf.call(sparse_object, 37);
-1;
Array.prototype.indexOf.call(sparse_object, 87);
10;
Array.prototype.indexOf.call(funky_object, 42);
-1;
Array.prototype.indexOf.call(funky_object, 42, 15);
-1;
Array.prototype.indexOf.call(funky_object, 37);
10;
Array.prototype.indexOf.call(infinite_object, 42);
-1;
[].lastIndexOf(1);
-1;
array.lastIndexOf(1, -17);
9;
array.lastIndexOf(1);
9;
array.lastIndexOf(1, array.length);
0;
array.lastIndexOf(1, 2);
3;
array.lastIndexOf(1, 4);
3;
array.lastIndexOf(1, 3);
0;
array.lastIndexOf(1, -11);
7;
undef_array.lastIndexOf(undefined);
-1;
undef_array.lastIndexOf(undefined, 2);
3;
undef_array.lastIndexOf(undefined, 3);
3;
undef_array.lastIndexOf(undefined, 6);
7;
undef_array.lastIndexOf(undefined, 7);
7;
undef_array.lastIndexOf(undefined, -1);
-1;
undef_array.lastIndexOf(undefined, -9);
3;
undef_array.lastIndexOf(undefined, -8);
3;
undef_array.lastIndexOf(undefined, -5);
7;
undef_array.lastIndexOf(undefined, -4);
900;
sparse_array.lastIndexOf(3);
100;
sparse_array.lastIndexOf(3, 899);
-1;
sparse_array.lastIndexOf(3, 99);
900;
sparse_array.lastIndexOf(3, -1);
100;
sparse_array.lastIndexOf(3, 899 - 42000);
-1;
sparse_array.lastIndexOf(3, 99 - 42000);
700;
sparse_array.lastIndexOf(4);
300;
sparse_array.lastIndexOf(4, 699);
-1;
sparse_array.lastIndexOf(4, 299);
700;
sparse_array.lastIndexOf(4, -1);
300;
sparse_array.lastIndexOf(4, 699 - 42000);
-1;
sparse_array.lastIndexOf(4, 299 - 42000);
800;
sparse_array.lastIndexOf(undefined);
200;
sparse_array.lastIndexOf(undefined, 799);
-1;
sparse_array.lastIndexOf(undefined, 199);
800;
sparse_array.lastIndexOf(undefined, -1);
200;
sparse_array.lastIndexOf(undefined, 799 - 42000);
-1;
sparse_array.lastIndexOf(undefined, 199 - 42000);
0;
Array.prototype.lastIndexOf.call(dense_object, 42);
1;
Array.prototype.lastIndexOf.call(dense_object, 37);
0;
Array.prototype.lastIndexOf.call(sparse_object, 42);
100000;
Array.prototype.lastIndexOf.call(sparse_object, 37);
0;
Array.prototype.lastIndexOf.call(dense_object, 42);
1;
Array.prototype.lastIndexOf.call(dense_object, 37);
-1;
Array.prototype.lastIndexOf.call(dense_object, 87);
0;
Array.prototype.lastIndexOf.call(sparse_object, 42);
100000;
Array.prototype.lastIndexOf.call(sparse_object, 37);
-1;
Array.prototype.lastIndexOf.call(sparse_object, 87);
10;
Array.prototype.lastIndexOf.call(funky_object, 42, 15);
10;
Array.prototype.lastIndexOf.call(funky_object, 42);
-1;
Array.prototype.lastIndexOf.call(funky_object, 37);
