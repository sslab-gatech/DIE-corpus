// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --noalways-opt
// Known symbols abstract equality.
(function () {
  const a = Symbol("a");
  const b = Symbol("b");

  function foo() {
    return a == b;
  }

  foo();
  foo();
  foo();
})(); // Known symbols abstract in-equality.


(function () {
  const a = Symbol("a");
  const b = Symbol("b");

  function foo() {
    return a != b;
  }

  foo();
  foo();
  foo();
})(); // Known symbol on one side abstract equality.


(function () {
  const a = Symbol("a");
  const b = Symbol("b");

  function foo(a) {
    return a == b;
  } // Warmup


  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo();
  foo("a");
  foo();
  foo("a");
  foo();
})(); // Known symbol on one side abstract in-equality.


(function () {
  const a = Symbol("a");
  const b = Symbol("b");

  function foo(a) {
    return a != b;
  } // Warmup


  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo("a");
  foo();
  foo("a");
  foo();
})(); // Feedback based symbol abstract equality.


(function () {
  const a = Symbol("a");
  const b = Symbol("b");

  function foo(a, b) {
    return a == b;
  } // Warmup


  foo(b, b);
  foo(a, b);
  foo(a, a);
  foo(b, a);
  foo(a, a);
  foo(b, a);
  foo("a", b);
  foo();
  foo("a", b);
  foo();
})(); // Feedback based symbol abstract in-equality.


(function () {
  const a = Symbol("a");
  const b = Symbol("b");

  function foo(a, b) {
    return a != b;
  }

  foo(b, b);
  foo(a, b);
  foo(a, a);
  foo(b, a);
  foo(a, a);
  foo(b, a);
  foo("a", b);
  foo();
  foo("a", b);
  foo();
})();
