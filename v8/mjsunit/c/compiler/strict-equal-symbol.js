// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Known symbols strict equality.
(function () {
  const a = Symbol("a");
  const b = Symbol("b");

  function foo() {
    return a === b;
  }

  foo();
  foo();
  foo();
})(); // Known symbol on one side strict equality.


(function () {
  const a = Symbol("a");
  const b = Symbol("b");

  function foo(a) {
    return a === b;
  }

  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(b);
  foo(a);
})(); // Feedback based symbol strict equality.


(function () {
  const a = Symbol("a");
  const b = Symbol("b");

  function foo(a, b) {
    return a === b;
  }

  foo(b, b);
  foo(a, b);
  foo(a, a);
  foo(b, a);
  foo(a, a);
  foo(b, a);
})();
