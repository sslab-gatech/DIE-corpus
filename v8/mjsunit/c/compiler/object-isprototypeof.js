// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Test corner cases with null/undefined receivers.
(function () {
  function foo(x, y) {
    return Object.prototype.isPrototypeOf.call(x, y);
  }

  (() => foo(null, {}))();

  (() => foo(undefined, {}))();

  (() => foo(null, []))();

  (() => foo(undefined, []))();

  foo(null, 0);
  foo(undefined, 0);
  foo(null, "");
  foo(undefined, "");
  foo(null, null);
  foo(undefined, null);
  foo(null, undefined);
  foo(undefined, undefined);

  (() => foo(null, {}))();

  (() => foo(undefined, {}))();

  (() => foo(null, []))();

  (() => foo(undefined, []))();

  foo(null, 0);
  foo(undefined, 0);
  foo(null, "");
  foo(undefined, "");
  foo(null, null);
  foo(undefined, null);
  foo(null, undefined);
  foo(undefined, undefined);
})(); // Test general constructor prototype case.


(function () {
  function A() {
    ;
  }

  A.prototype = {};
  var a = new A();

  function foo(x) {
    return A.prototype.isPrototypeOf(x);
  }

  foo(0);
  foo("");
  foo(null);
  foo(undefined);
  foo({});
  foo([]);
  foo(a);
  foo(new A());
  foo({
    __proto__: a
  });
  foo({
    __proto__: A.prototype
  });
  foo(0);
  foo("");
  foo(null);
  foo(undefined);
  foo({});
  foo([]);
  foo(a);
  foo(new A());
  foo({
    __proto__: a
  });
  foo({
    __proto__: A.prototype
  });
})(); // Test known primitive values.


(function () {
  function A() {
    ;
  }

  A.prototype = {};
  var a = new A();

  function foo() {
    return A.prototype.isPrototypeOf(0);
  }

  foo();
  foo();
  foo();
})();

(function () {
  function A() {
    ;
  }

  A.prototype = {};
  var a = new A();

  function foo() {
    return A.prototype.isPrototypeOf(null);
  }

  foo();
  foo();
  foo();
})();

(function () {
  function A() {
    ;
  }

  A.prototype = {};
  var a = new A();

  function foo() {
    return A.prototype.isPrototypeOf(undefined);
  }

  foo();
  foo();
  foo();
})(); // Test constant-folded prototype chain checks.


(function () {
  function A() {
    ;
  }

  A.prototype = {};
  var a = new A();

  function foo() {
    return A.prototype.isPrototypeOf(a);
  }

  foo();
  foo();
  foo();
})();

(function () {
  function A() {
    ;
  }

  var a = new A();
  A.prototype = {};

  function foo() {
    return A.prototype.isPrototypeOf(a);
  }

  foo();
  foo();
  foo();
})(); // Test Array prototype chain checks.


(function () {
  var a = [];

  function foo() {
    return Array.prototype.isPrototypeOf(a);
  }

  foo();
  foo();
  foo();
})();

(function () {
  var a = [];

  function foo() {
    return Object.prototype.isPrototypeOf(a);
  }

  foo();
  foo();
  foo();
})();
