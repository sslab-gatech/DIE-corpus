// Copyright 2013 the V8 project authors. All rights reserved.
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
var o1 = {
  x: 1
};
var o2 = {};
var deopt_getter = false;
var deopt_setter = false;

function f_mono(o) {
  return 5 + o.x++;
}

var to_deopt = f_mono;
var v = 1;
var g = 0;
var s = 0;
Object.defineProperty(o2, "x", {
  get: function () {
    g++;

    if (deopt_getter) {
      deopt_getter = false;
    }

    return v;
  },
  set: function (new_v) {
    v = new_v;
    s++;

    if (deopt_setter) {
      deopt_setter = false;
    }
  }
});
6;
f_mono(o2);
1;
g;
1;
s;
7;
f_mono(o2);
2;
g;
2;
s;
deopt_setter = true;
8;
f_mono(o2);
3;
g;
3;
s;

function f_poly(o) {
  return 5 + o.x++;
}

v = 1;
to_deopt = f_poly;
f_poly(o1);
f_poly(o1);
6;
f_poly(o2);
4;
g;
4;
s;
7;
f_poly(o2);
5;
g;
5;
s;
deopt_setter = true;
8;
f_poly(o2);
6;
g;
6;
s;
v = undefined;
NaN;
f_poly(o2);
7;
g;
7;
s;

function f_pre(o) {
  return 5 + ++o.x;
}

v = 1;
to_deopt = f_pre;
f_pre(o1);
f_pre(o1);
7;
f_pre(o2);
8;
g;
8;
s;
8;
f_pre(o2);
9;
g;
9;
s;
deopt_setter = true;
9;
f_pre(o2);
10;
g;
10;
s;
v = undefined;
NaN;
f_pre(o2);
11;
g;
11;
s;

function f_get(o) {
  return 5 + o.x++;
}

v = 1;
to_deopt = f_get;
f_get(o1);
f_get(o1);
6;
f_get(o2);
12;
g;
12;
s;
7;
f_get(o2);
13;
g;
13;
s;
deopt_getter = true;
8;
f_get(o2);
14;
g;
14;
s;
v = undefined;
NaN;
f_get(o2);
15;
g;
15;
s;
