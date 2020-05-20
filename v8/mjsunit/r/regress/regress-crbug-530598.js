// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --turbo-inlining
var f1 = function () {
  "use asm";

  function g() {
    throw 0;
  }

  function f() {
    return g();
  }

  return f;
}();

"f1()";
"f1()";

var f2 = function () {
  "use asm";

  function g() {
    for (;;) {
      ;
    }
  }

  function f(a) {
    return a || g();
  }

  return f;
}();

f2(true);
f2(true);
