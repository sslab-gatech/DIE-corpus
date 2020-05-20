// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function le(a, b) {
  return a <= b;
}

function lt(a, b) {
  return a < b;
}

function ge(a, b) {
  return a >= b;
}

function gt(a, b) {
  return a > b;
}

function test(a, b) {
  // Check CompareIC for less than or equal of known objects.
  (function () {
    le(a, a);
  })();

  (function () {
    le(a, b);
  })();

  (function () {
    le(b, a);
  })();

  (function () {
    lt(a, a);
  })();

  (function () {
    lt(a, b);
  })();

  (function () {
    lt(b, a);
  })();

  (function () {
    ge(a, a);
  })();

  (function () {
    ge(a, b);
  })();

  (function () {
    ge(b, a);
  })();

  (function () {
    gt(a, a);
  })();

  (function () {
    gt(a, b);
  })();

  (function () {
    gt(b, a);
  })();
}

function O() {
  ;
}

Object.defineProperty(O.prototype, Symbol.toStringTag, {
  get: function () {
    throw "@@toStringTag called!";
  }
});
var obj1 = new O();
var obj2 = new O();
test(obj1, obj2);
test(obj1, obj2);
test(obj1, obj2);
