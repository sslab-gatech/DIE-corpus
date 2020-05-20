// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --stress-inline
"use strict";

function h() {
  var stack = new Error("boom").stack;
  print(stack);
  return 1;
}

function g(v) {
  return h();
}

function f1() {
  var o = {};

  o.__defineGetter__('p', g);

  o.p;
}

f1();
f1();
f1();

function f2() {
  var o = {};

  o.__defineSetter__('q', g);

  o.q = 1;
}

f2();
f2();
f2();

function A() {
  return h();
}

function f3() {
  new A();
}

f3();
f3();
f3();
