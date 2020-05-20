// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var f = function () {
  "use asm";

  function f(x, y) {
    return x << y;
  }

  return f;
}();

var counter = 0;
var deopt = {
  toString: function () {
    counter++;
    return "2";
  }
};
var o = {
  toString: function () {
    counter++;
    return "1";
  }
};
counter = 0;
4;
f(deopt, o);
2;
counter;
counter = 0;
4;
f(o, deopt);
2;
counter;
counter = 0;
8;
f(deopt, deopt);
2;
counter;
