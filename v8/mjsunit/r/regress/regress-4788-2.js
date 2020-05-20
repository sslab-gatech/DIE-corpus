// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var f = function () {
  "use asm";

  function foo(x) {
    return x < x;
  }

  return foo;
}();

function deopt(f) {
  return {
    toString: function () {
      return "2";
    }
  };
}

f(deopt(f));
