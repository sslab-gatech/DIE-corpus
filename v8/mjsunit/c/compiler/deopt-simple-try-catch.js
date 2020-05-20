// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file
// Flags: --allow-natives-syntax
// Small program to test deoptimization with exception handling.
function g() {
  throw 42;
}

function f() {
  var a = 1;

  try {
    g();
  } catch (e) {
    return e + a;
  }
}

f();
43;
f();
43;
f();
43;
