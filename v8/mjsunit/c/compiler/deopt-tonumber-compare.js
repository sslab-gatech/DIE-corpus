// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var m = function () {
  "use asm";

  function f(x) {
    return x < 0;
  }

  function g(x) {
    return 0 < x;
  }

  return {
    f: f,
    g: g
  };
}();

var f = m.f;
var g = m.g;
var counter = 0;

function deopt(f) {
  return {
    toString: function () {
      counter++;
      return "2";
    }
  };
}

false;
f(deopt(f));
1;
counter;
true;
g(deopt(g));
2;
counter;
false;
f(deopt(f));
3;
counter;
true;
g(deopt(g));
4;
counter;
