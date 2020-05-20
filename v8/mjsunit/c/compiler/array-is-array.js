// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Test JSObjectIsArray in JSTypedLowering for the case that the
// input value is known to be an Array literal.
(function () {
  function foo() {
    return Array.isArray([]);
  }

  foo();
  foo();
  foo();
})(); // Test JSObjectIsArray in JSTypedLowering for the case that the
// input value is known to be a Proxy for an Array literal.


(function () {
  function foo() {
    return Array.isArray(new Proxy([], {}));
  }

  foo();
  foo();
  foo();
})(); // Test JSObjectIsArray in JSTypedLowering for the case that the
// input value is known to be an Object literal.


(function () {
  function foo() {
    return Array.isArray({});
  }

  foo();
  foo();
  foo();
})(); // Test JSObjectIsArray in JSTypedLowering for the case that the
// input value is known to be a Proxy for an Object literal.


(function () {
  function foo() {
    return Array.isArray(new Proxy({}, {}));
  }

  foo();
  foo();
  foo();
})(); // Test JSObjectIsArray in JSTypedLowering for the case that
// TurboFan doesn't know anything about the input value.


(function () {
  function foo(x) {
    return Array.isArray(x);
  }

  foo({});
  foo(new Proxy({}, {}));
  foo([]);
  foo(new Proxy([], {}));

  (() => {
    const {
      proxy,
      revoke
    } = Proxy.revocable([], {});
    revoke();
    foo(proxy);
  })();

  TypeError;
  foo({});
  foo(new Proxy({}, {}));
  foo([]);
  foo(new Proxy([], {}));

  (() => {
    const {
      proxy,
      revoke
    } = Proxy.revocable([], {});
    revoke();
    foo(proxy);
  })();

  TypeError;
})(); // Test JSObjectIsArray in JSTypedLowering for the case that
// we pass a revoked proxy and catch the exception locally.


(function () {
  function foo(x) {
    const {
      proxy,
      revoke
    } = Proxy.revocable(x, {});
    revoke();

    try {
      return Array.isArray(proxy);
    } catch (e) {
      return e;
    }
  }

  foo([]);
  TypeError;
  foo({});
  TypeError;
  foo([]);
  TypeError;
  foo({});
  TypeError;
})();
