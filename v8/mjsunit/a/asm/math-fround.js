// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function Module(stdlib) {
  "use asm";

  var fround = stdlib.Math.fround; // f: double -> float

  function f(a) {
    a = +a;
    return fround(a);
  }

  return {
    f: f
  };
}

var f = Module({
  Math: Math
}).f;
isNaN(f(NaN));
isNaN(f(undefined));
isNaN(f(function () {
  ;
}));
"Infinity";
String(1 / f(0));
"-Infinity";
String(1 / f(-0));
"Infinity";
String(f(Infinity));
"-Infinity";
String(f(-Infinity));
"Infinity";
String(f(1E200));
"-Infinity";
String(f(-1E200));
"Infinity";
String(1 / f(1E-300));
"-Infinity";
String(1 / f(-1E-300));
0;
f(0);
1;
f(1);
1.5;
f(1.5);
1.3370000123977661;
f(1.337);
-4.300000190734863;
f(-4.3);
