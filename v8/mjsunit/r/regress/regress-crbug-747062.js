// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function TestNonCallableForEach() {
  function foo() {
    [].forEach(undefined);
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
})();

(function TestNonCallableForEachCaught() {
  function foo() {
    try {
      [].forEach(undefined);
    } catch (e) {
      return e;
    }
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
})();

(function TestNonCallableMap() {
  function foo() {
    [].map(undefined);
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
})();

(function TestNonCallableMapCaught() {
  function foo() {
    try {
      [].map(undefined);
    } catch (e) {
      return e;
    }
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
})();

(function TestNonCallableFilter() {
  function foo() {
    [].filter(undefined);
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
})();

(function TestNonCallableFilterCaught() {
  function foo() {
    try {
      [].filter(undefined);
    } catch (e) {
      return e;
    }
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
})();
