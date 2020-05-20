// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function Module(stdlib) {
  "use asm";

  var min = stdlib.Math.min;
  var fround = stdlib.Math.fround; // f: double, double -> double

  function f(a, b) {
    a = +a;
    b = +b;
    return +min(a, b);
  } // g: signed, signed -> signed


  function g(a, b) {
    a = a | 0;
    b = b | 0;
    return min(a >> 0, b >> 0) | 0;
  } // h: float, float -> float


  function h(a, b) {
    a = fround(a);
    b = fround(b);
    return fround(min(a, b));
  }

  return {
    f: f,
    g: g,
    h: h
  };
}

var m = Module({
  Math: Math
});
var f = m.f;
var g = m.g;
var h = m.h;
isNaN(f(0, NaN));
isFinite(f(0, Infinity));
isFinite(f(0, -Infinity));
Object.is(-0, f(-0, +0));
Object.is(-0, f(+0, -0));
0;
f(0, 0.1);
0.1;
f(0.1, 0.5);
-0.1;
f(0.5, -0.1);
-0.5;
f(-0.1, -0.5);
-0.5;
f(-0.5, 1);
1;
f(1, 1.1);
-1;
f(1.1, -1);
-1.1;
f(-1, -1.1);
-1.1;
f(-1.1, 0);
0;
g(0, 1);
1;
g(1, 5);
-1;
g(5, -1);
-5;
g(-1, -5);
-5;
g(-5, 1);
-1;
g(1, -1);
-1;
g(-1, 0);
Math.fround(0);
h(0, 0.1);
Math.fround(0.1);
h(0.1, 0.5);
Math.fround(-0.1);
h(0.5, -0.1);
Math.fround(-0.5);
h(-0.1, -0.5);
Math.fround(-0.5);
h(-0.5, 1);
Math.fround(1);
h(1, 1.1);
Math.fround(-1);
h(1.1, -1);
Math.fround(-1.1);
h(-1, -1.1);
Math.fround(-1.1);
h(-1.1, 0);
0;
g(0, Number.MIN_SAFE_INTEGER);
-1;
g(0, Number.MAX_SAFE_INTEGER);
Number.MIN_VALUE;
f(Number.MIN_VALUE, Number.MAX_VALUE);
Number.MIN_VALUE;
f(Number.MAX_VALUE, Number.MIN_VALUE);
0;
f(Number.POSITIVE_INFINITY, 0);
Number.NEGATIVE_INFINITY;
f(Number.NEGATIVE_INFINITY, 0);
