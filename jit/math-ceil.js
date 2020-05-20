// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function Module(stdlib) {
  "use asm";

  var ceil = stdlib.Math.ceil; // f: double -> float

  function f(a) {
    a = +a;
    return +ceil(a);
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
0;
f(0);
+0;
f(+0);
-0;
f(-0);
1;
f(0.49999);
1;
f(0.6);
1;
f(0.5);
-0;
f(-0.1);
-0;
f(-0.5);
-0;
f(-0.6);
-1;
f(-1.6);
-0;
f(-0.50001);
"Infinity";
String(f(Infinity));
"-Infinity";
String(f(-Infinity));
