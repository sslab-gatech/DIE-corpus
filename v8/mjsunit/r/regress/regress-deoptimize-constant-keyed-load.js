// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var o = {};

function g(a, b, c) {
  return a + b + c;
}

function f() {
  var t = "progressChanged";
  return g(1, o[t], 100);
}

f();
f();
111;
f();
