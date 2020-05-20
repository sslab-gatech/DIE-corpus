// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --noalways-opt
const undetectable = function () {
  ;
}; // Known undetectable abstract equality.


(function () {
  const a = undetectable;
  const b = {};

  function foo() {
    return a == b;
  }

  foo();
  foo();
  foo();
})(); // Known undetectable/null abstract equality.


(function () {
  const a = undetectable;
  const b = null;

  function foo() {
    return a == b;
  }

  foo();
  foo();
  foo();
})(); // Known undetectable/receiver abstract equality.


(function () {
  const a = null;
  const b = undetectable;

  function foo() {
    return a == b;
  }

  foo();
  foo();
  foo();
})(); // Known undetectable/undefined abstract equality.


(function () {
  const a = undetectable;
  const b = undefined;

  function foo() {
    return a == b;
  }

  foo();
  foo();
  foo();
})(); // Known undefined/undetectable abstract equality.


(function () {
  const a = undefined;
  const b = undetectable;

  function foo() {
    return a == b;
  }

  foo();
  foo();
  foo();
})(); // Known undetectable on one side strict equality with receiver.


(function () {
  const a = {};
  const b = undetectable;

  function foo(a) {
    return a == b;
  }

  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(1);
  foo();
})(); // Unknown undetectable on one side strict equality with receiver.


(function () {
  const a = undetectable;
  const b = {};

  function foo(a, b) {
    return a == b;
  }

  foo(b, b);
  foo(a, b);
  foo(a, a);
  foo(b, a);
  foo(a, null);
  foo(b, null);
  foo(b, b);
  foo(a, b);
  foo(a, a);
  foo(b, a);
  foo(a, null);
  foo(b, null);
  foo();
  foo(1);
  foo();
})();
