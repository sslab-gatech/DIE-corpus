// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var o = {
  v: 1
};
var deopt = false;
Object.defineProperty(o, "x", {
  get: function () {
    return 1;
  }
});

function bar(x, y, z) {
  return x + z;
}

function foo(o, x) {
  return bar(1, (o[x], 2), 3);
}

4;
foo(o, "v");
4;
foo(o, "v");
4;
foo(o, "x");
4;
foo(o, "x");
deopt = true;
4;
foo(o, "x");
