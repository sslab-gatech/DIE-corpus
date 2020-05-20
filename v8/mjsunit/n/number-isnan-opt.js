// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function () {
  function foo(x) {
    return Number.isNaN(x);
  }

  foo(+undefined);
  foo(undefined);
  foo(+undefined);
  foo(undefined);
})();

(function () {
  function foo(x) {
    return Number.isNaN(+x);
  }

  foo(+undefined);
  foo(0);
  foo(+undefined);
  foo(0);
})();

(function () {
  function foo(x) {
    return Number.isNaN(x | 0);
  }

  foo(+undefined);
  foo(0);
  foo(+undefined);
  foo(0);
})();

(function () {
  function foo(x) {
    return Number.isNaN("" + x);
  }

  foo(undefined);
  foo(0);
  foo(undefined);
  foo(0);
})();

(function () {
  function foo(x) {
    return Number.isNaN(0 / 0);
  }

  foo();
  foo();
  foo();
  foo();
})();
