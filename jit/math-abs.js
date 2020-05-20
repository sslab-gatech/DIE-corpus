// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function Module(stdlib) {
  "use asm";

  var abs = stdlib.Math.abs; // f: double -> double

  function f(a) {
    a = +a;
    return +abs(a);
  } // g: unsigned -> double


  function g(a) {
    a = a | 0;
    return +abs(+(a >>> 0));
  } // h: signed -> double


  function h(a) {
    a = a | 0;
    return +abs(+(a | 0));
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
isNaN(f(NaN));
isNaN(f(undefined));
isNaN(f(function () {
  ;
}));
"Infinity";
String(1 / f(0));
"Infinity";
String(1 / f(-0));
"Infinity";
String(f(Infinity));
"Infinity";
String(f(-Infinity));
0;
f(0);
0.1;
f(0.1);
0.5;
f(0.5);
0.1;
f(-0.1);
0.5;
f(-0.5);
1;
f(1);
1.1;
f(1.1);
1.5;
f(1.5);
1;
f(-1);
1.1;
f(-1.1);
1.5;
f(-1.5);
0;
g(0);
0;
g(0.1);
0;
g(0.5);
0;
g(-0.1);
0;
g(-0.5);
1;
g(1);
1;
g(1.1);
1;
g(1.5);
4294967295;
g(-1);
4294967295;
g(-1.1);
4294967295;
g(-1.5);
0;
h(0);
0;
h(0.1);
0;
h(0.5);
0;
h(-0.1);
0;
h(-0.5);
1;
h(1);
1;
h(1.1);
1;
h(1.5);
1;
h(-1);
1;
h(-1.1);
1;
h(-1.5);
Number.MIN_VALUE;
f(Number.MIN_VALUE);
Number.MIN_VALUE;
f(-Number.MIN_VALUE);
Number.MAX_VALUE;
f(Number.MAX_VALUE);
Number.MAX_VALUE;
f(-Number.MAX_VALUE);
