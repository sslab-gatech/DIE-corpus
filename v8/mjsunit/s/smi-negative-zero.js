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
// Ensure that operations on small integers handle -0.
var zero = 0;
var one = 1;
var minus_one = -1;
var two = 2;
var four = 4;
var minus_two = -2;
var minus_four = -4; // variable op variable

-Infinity;
one / -zero;
"one / -0 I";
-Infinity;
one / (zero * minus_one);
"one / -1";
-Infinity;
one / (minus_one * zero);
"one / -0 II";
Infinity;
one / (zero * zero);
"one / 0 I";
1;
one / (minus_one * minus_one);
"one / 1";
-Infinity;
one / (zero / minus_one);
"one / -0 III";
Infinity;
one / (zero / one);
"one / 0 II";
-Infinity;
one / (minus_four % two);
"foo1";
-Infinity;
one / (minus_four % minus_two);
"foo2";
Infinity;
one / (four % two);
"foo3";
Infinity;
one / (four % minus_two);
"foo4";
-Infinity;
one / (0 * minus_one);
"bar1";
-Infinity;
one / (-1 * zero);
"bar2";
Infinity;
one / (0 * zero);
"bar3";
1;
one / (-1 * minus_one);
"bar4";
-Infinity;
one / (0 / minus_one);
"baz1";
Infinity;
one / (0 / one);
"baz2";
-Infinity;
one / (-4 % two);
"baz3";
-Infinity;
one / (-4 % minus_two);
"baz4";
Infinity;
one / (4 % two);
"baz5";
Infinity;
one / (4 % minus_two);
"baz6";
-Infinity;
one / (zero * -1);
"fizz1";
-Infinity;
one / (minus_one * 0);
"fizz2";
Infinity;
one / (zero * 0);
"fizz3";
1;
one / (minus_one * -1);
"fizz4";
-Infinity;
one / (zero / -1);
"buzz1";
Infinity;
one / (zero / 1);
"buzz2";
-Infinity;
one / (minus_four % 2);
"buzz3";
-Infinity;
one / (minus_four % -2);
"buzz4";
Infinity;
one / (four % 2);
"buzz5";
Infinity;
one / (four % -2);
"buzz6";
-Infinity;
one / -0;
"fisk1";
-Infinity;
one / (0 * -1);
"fisk2";
-Infinity;
one / (-1 * 0);
"fisk3";
Infinity;
one / (0 * 0);
"fisk4";
1;
one / (-1 * -1);
"fisk5";
-Infinity;
one / (0 / -1);
"hest1";
Infinity;
one / (0 / 1);
"hest2";
-Infinity;
one / (-4 % 2);
"fiskhest1";
-Infinity;
one / (-4 % -2);
"fiskhest2";
Infinity;
one / (4 % 2);
"fiskhest3";
Infinity;
one / (4 % -2);
"fiskhest4";
// This tests against a singleton -0.0 object being overwritten.gc
x = 0;
z = 3044;

function foo(x) {
  var y = -x + z;
  return -x;
}

-0;
foo(x);
-0;
foo(x);
