// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --noalways-opt
// Known receivers strict equality.
(function () {
  const a = {};
  const b = {};

  function foo() {
    return a === b;
  }

  foo();
  foo();
  foo();
})(); // Known receiver/null strict equality.


(function () {
  const a = {};
  const b = null;

  function foo() {
    return a === b;
  }

  foo();
  foo();
  foo();
})(); // Known receiver/undefined strict equality.


(function () {
  const a = {};
  const b = undefined;

  function foo() {
    return a === b;
  }

  foo();
  foo();
  foo();
})(); // Known receiver on one side strict equality.


(function () {
  const a = {};
  const b = {};

  function foo(a) {
    return a === b;
  }

  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(b);
  foo(a);
})(); // Known receiver on one side strict equality.


(function () {
  const a = {};
  const b = null;

  function foo(a) {
    return a === b;
  }

  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(b);
  foo(a);
})(); // Known receiver on one side strict equality.


(function () {
  const a = {};
  const b = undefined;

  function foo(a) {
    return a === b;
  }

  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(b);
  foo(a);
})(); // Feedback based receiver strict equality.


(function () {
  const a = {};
  const b = {};

  function foo(a, b) {
    return a === b;
  }

  foo(b, b);
  foo(a, b);
  foo(a, a);
  foo(b, a);
  foo(a, a);
  foo(b, a);
  foo(null, b);
  foo();
})(); // Feedback based receiver/null strict equality.


(function () {
  const a = {};
  const b = null;

  function foo(a, b) {
    return a === b;
  }

  foo(b, b);
  foo(a, b);
  foo(a, a);
  foo(b, a);
  foo(a, a);
  foo(b, a);
  foo(1, b);
  foo();
})(); // Feedback based receiver/undefined strict equality.


(function () {
  const a = {};
  const b = undefined;

  function foo(a, b) {
    return a === b;
  }

  foo(b, b);
  foo(a, b);
  foo(a, a);
  foo(b, a);
  foo(a, a);
  foo(b, a);
  foo(1, b);
  foo();
})();
