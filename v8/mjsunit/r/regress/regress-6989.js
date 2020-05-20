// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
(function () {
  function foo(o) {
    o["x"] = 1;
  }

  (() => foo(undefined))();

  (() => foo(undefined))();

  (() => foo(undefined))();

  foo();
})();

(function () {
  function foo(o) {
    o["x"] = 1;
  }

  (() => foo(null))();

  (() => foo(null))();

  (() => foo(null))();

  foo();
})();

(function () {
  function foo(o) {
    return o["x"];
  }

  (() => foo(undefined))();

  (() => foo(undefined))();

  (() => foo(undefined))();

  foo();
})();

(function () {
  function foo(o) {
    return o["x"];
  }

  (() => foo(null))();

  (() => foo(null))();

  (() => foo(null))();

  foo();
})();

(function () {
  function foo(o) {
    o.x = 1;
  }

  (() => foo(undefined))();

  (() => foo(undefined))();

  (() => foo(undefined))();

  foo();
})();

(function () {
  function foo(o) {
    o.x = 1;
  }

  (() => foo(null))();

  (() => foo(null))();

  (() => foo(null))();

  foo();
})();

(function () {
  function foo(o) {
    return o.x;
  }

  (() => foo(undefined))();

  (() => foo(undefined))();

  (() => foo(undefined))();

  foo();
})();

(function () {
  function foo(o) {
    return o.x;
  }

  (() => foo(null))();

  (() => foo(null))();

  (() => foo(null))();

  foo();
})();
