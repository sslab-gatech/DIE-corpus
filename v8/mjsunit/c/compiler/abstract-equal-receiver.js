// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --noalways-opt
// Known receivers abstract equality.
(function () {
  const a = {};
  const b = {};

  function foo() {
    return a == b;
  }

  foo();
  foo();
  foo();
})(); // Known receiver/null abstract equality.


(function () {
  const a = {};
  const b = null;

  function foo() {
    return a == b;
  }

  foo();
  foo();
  foo();
})(); // Known null/receiver abstract equality.


(function () {
  const a = null;
  const b = {};

  function foo() {
    return a == b;
  }

  foo();
  foo();
  foo();
})(); // Known receiver/undefined abstract equality.


(function () {
  const a = {};
  const b = undefined;

  function foo() {
    return a == b;
  }

  foo();
  foo();
  foo();
})(); // Known undefined/receiver abstract equality.


(function () {
  const a = undefined;
  const b = {};

  function foo() {
    return a == b;
  }

  foo();
  foo();
  foo();
})(); // Known receiver on one side strict equality.


(function () {
  const a = {};
  const b = {};

  function foo(a) {
    return a == b;
  }

  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(null);
  foo();
})(); // Known receiver on one side strict equality with null.


(function () {
  const a = null;
  const b = {};

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
})(); // Known receiver on one side strict equality with undefined.


(function () {
  const a = undefined;
  const b = {};

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
})(); // Known null on one side strict equality with receiver.


(function () {
  const a = {};
  const b = null;

  function foo(a) {
    return a == b;
  }

  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(null);
  foo(undefined);
  foo();
  foo(1);
  foo();
})(); // Known undefined on one side strict equality with receiver.


(function () {
  const a = {};
  const b = undefined;

  function foo(a) {
    return a == b;
  }

  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(b);
  foo(a);
  foo(null);
  foo(undefined);
  foo();
  foo(1);
  foo();
})();
