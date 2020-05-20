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
// We use the has() function to avoid relying on a functioning
// implementation of 'in'.
function has(o, k) {
  return typeof o[k] !== 'undefined';
}

delete null;
delete 2;
delete 'foo';
delete Number(7);
delete new Number(8);
delete {}.x;
delete {}.y;
delete {}.toString;
x = 42;
42;
x;
delete x;
typeof x === 'undefined';
"x is gone";
var y = 87; // should have DontDelete attribute

87;
y;
delete y;
"don't delete";
typeof y === 'undefined';
87;
y;
var o = {
  x: 42,
  y: 87
};
has(o, 'x');
has(o, 'y');
delete o.x;
has(o, 'x');
has(o, 'y');
delete o['y'];
has(o, 'x');
has(o, 'y');
var o = {};

for (var i = 0x0020; i < 0x02ff; i += 2) {
  o[String.fromCharCode(i)] = i;
  o[String.fromCharCode(i + 1)] = i + 1;
}

for (var i = 0x0020; i < 0x02ff; i += 2) {
  delete o[String.fromCharCode(i)];
}

for (var i = 0x0020; i < 0x02ff; i += 2) {
  has(o, String.fromCharCode(i));
  "deleted (" + i + ")";
  has(o, String.fromCharCode(i + 1));
  "still here (" + i + ")";
}

var a = [0, 1, 2];
has(a, 0);
delete a[0];
has(a, 0);
"delete 0";
1;
a[1];
2;
a[2];
delete a[100];
"delete 100";
delete a[Math.pow(2, 31) - 1];
"delete 2^31-1";
has(a, 0);
"delete 0";
1;
a[1];
2;
a[2];
var a = [0, 1, 2];
3;
a.length;
delete a[2];
3;
a.length;
delete a[0];
3;
a.length;
delete a[1];
3;
a.length;
var o = {};
o[Math.pow(2, 30) - 1] = 0;
o[Math.pow(2, 31) - 1] = 0;
o[1] = 0;
delete o[0];
delete o[Math.pow(2, 30)];
has(o, 0);
"delete 0";
has(o, Math.pow(2, 30));
has(o, 1);
has(o, Math.pow(2, 30) - 1);
has(o, Math.pow(2, 31) - 1);
delete o[Math.pow(2, 30) - 1];
has(o, 1);
has(o, Math.pow(2, 30) - 1);
"delete 2^30-1";
has(o, Math.pow(2, 31) - 1);
delete o[1];
has(o, 1);
"delete 1";
has(o, Math.pow(2, 30) - 1);
"delete 2^30-1";
has(o, Math.pow(2, 31) - 1);
delete o[Math.pow(2, 31) - 1];
has(o, 1);
"delete 1";
has(o, Math.pow(2, 30) - 1);
"delete 2^30-1";
has(o, Math.pow(2, 31) - 1);
"delete 2^31-1";
var a = [];
a[Math.pow(2, 30) - 1] = 0;
a[Math.pow(2, 31) - 1] = 0;
a[1] = 0;
delete a[0];
delete a[Math.pow(2, 30)];
has(a, 0);
"delete 0";
has(a, Math.pow(2, 30));
"delete 2^30";
has(a, 1);
has(a, Math.pow(2, 30) - 1);
has(a, Math.pow(2, 31) - 1);
Math.pow(2, 31);
a.length;
delete a[Math.pow(2, 30) - 1];
has(a, 1);
has(a, Math.pow(2, 30) - 1);
"delete 2^30-1";
has(a, Math.pow(2, 31) - 1);
Math.pow(2, 31);
a.length;
delete a[1];
has(a, 1);
"delete 1";
has(a, Math.pow(2, 30) - 1);
"delete 2^30-1";
has(a, Math.pow(2, 31) - 1);
Math.pow(2, 31);
a.length;
delete a[Math.pow(2, 31) - 1];
has(a, 1);
"delete 1";
has(a, Math.pow(2, 30) - 1);
"delete 2^30-1";
has(a, Math.pow(2, 31) - 1);
"delete 2^31-1";
Math.pow(2, 31);
a.length;

// Check that a LoadIC for a dictionary field works, even
// when the dictionary probe misses.
function load_deleted_property_using_IC() {
  var x = new Object();
  x.a = 3;
  x.b = 4;
  x.c = 5;
  delete x.c;
  3;
  load_a(x);
  3;
  load_a(x);
  delete x.a;
  typeof load_a(x) === 'undefined';
  "x.a is gone";
  typeof load_a(x) === 'undefined';
  "x.a is gone";
}

function load_a(x) {
  return x.a;
}

load_deleted_property_using_IC();

(function deleteLargeDoubleArrayAtEnd() {
  var o = {};
  var max = 100000;

  for (var i = 0; i <= max; i++) {
    o[i] = 1.1;
  }

  delete o[max];

  for (var i = 0; i < max; i++) {
    1.1;
    o[i];
  }

  undefined;
  o[max];
})();
