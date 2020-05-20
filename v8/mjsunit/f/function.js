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
var f = Function();
typeof f() == 'undefined';
f = new Function();
typeof f() == 'undefined';
f = Function('return 1');
1;
f();
f = new Function('return 1');
1;
f();
f = Function('return true');
f();
f = new Function('return true');
f();
f = Function('x', 'return x');
1;
f(1);
'bar';
f('bar');
typeof f() == 'undefined';
var x = {};
x === f(x);
f = Function('x', 'return x // comment');
1;
f(1);
f = Function('return typeof anonymous');
'undefined';
f();
var anonymous = 42;
f = Function('return anonymous;');
42;
f();
f = new Function('x', 'return x');
1;
f(1);
'bar';
f('bar');
typeof f() == 'undefined';
var x = {};
x === f(x);
f = Function('x', 'y', 'return x+y');
5;
f(2, 3);
'foobar';
f('foo', 'bar');
f = new Function('x', 'y', 'return x+y');
5;
f(2, 3);
'foobar';
f('foo', 'bar');
var x = {};

x.toString = function () {
  return 'x';
};

var y = {};

y.toString = function () {
  return 'y';
};

var z = {};

z.toString = function () {
  return 'return x*y';
};

var f = Function(x, y, z);
25;
f(5, 5);
42;
f(2, 21);
f = new Function(x, y, z);
25;
f(5, 5);
42;
f(2, 21);
