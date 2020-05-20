// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
let x;

function f(a) {
  x += a;
}

function g(a) {
  f(a);
  return x;
}

function h(a) {
  x = a;
  return x;
}

function boom() {
  return g(1);
}

1;
h(1);
2;
boom();
3;
boom();
4;
boom();
