// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
(function () {
  function foo(x, y) {
    return x << y;
  }

  foo(1.1, 0.1);
  foo(0.1, 1.1);
  foo(true, false);
  foo(undefined, 1.1);
  foo();
  foo(1.1, undefined);
  foo();
  foo(null, 1.1);
  foo();
  foo(1.1, null);
  foo();
  foo(true, 1.1);
  foo();
  foo(1.1, true);
  foo();
  foo(false, 1.1);
  foo();
  foo(1.1, false);
  foo();
})();

(function () {
  function foo(x, y) {
    return x >> y;
  }

  foo(1.1, 0.1);
  foo(0.1, 1.1);
  foo(true, false);
  foo(undefined, 1.1);
  foo();
  foo(1.1, undefined);
  foo();
  foo(null, 1.1);
  foo();
  foo(1.1, null);
  foo();
  foo(true, 1.1);
  foo();
  foo(1.1, true);
  foo();
  foo(false, 1.1);
  foo();
  foo(1.1, false);
  foo();
})();

(function () {
  function foo(x, y) {
    return x >>> y;
  }

  foo(1.1, 0.1);
  foo(0.1, 1.1);
  foo(true, false);
  foo(undefined, 1.1);
  foo();
  foo(1.1, undefined);
  foo();
  foo(null, 1.1);
  foo();
  foo(1.1, null);
  foo();
  foo(true, 1.1);
  foo();
  foo(1.1, true);
  foo();
  foo(false, 1.1);
  foo();
  foo(1.1, false);
  foo();
})();

(function () {
  function foo(x, y) {
    return x ^ y;
  }

  foo(1.1, 0.1);
  foo(0.1, 1.1);
  foo(true, false);
  foo(undefined, 1.1);
  foo();
  foo(1.1, undefined);
  foo();
  foo(null, 1.1);
  foo();
  foo(1.1, null);
  foo();
  foo(true, 1.1);
  foo();
  foo(1.1, true);
  foo();
  foo(false, 1.1);
  foo();
  foo(1.1, false);
  foo();
})();

(function () {
  function foo(x, y) {
    return x | y;
  }

  foo(1.1, 0.1);
  foo(0.1, 1.1);
  foo(true, false);
  foo(undefined, 1.1);
  foo();
  foo(1.1, undefined);
  foo();
  foo(null, 1.1);
  foo();
  foo(1.1, null);
  foo();
  foo(true, 1.1);
  foo();
  foo(1.1, true);
  foo();
  foo(false, 1.1);
  foo();
  foo(1.1, false);
  foo();
})();

(function () {
  function foo(x, y) {
    return x & y;
  }

  foo(1.1, 0.1);
  foo(0.1, 1.1);
  foo(true, false);
  foo(undefined, 1.1);
  foo();
  foo(1.1, undefined);
  foo();
  foo(null, 1.1);
  foo();
  foo(1.1, null);
  foo();
  foo(true, 1.1);
  foo();
  foo(1.1, true);
  foo();
  foo(false, 1.1);
  foo();
  foo(1.1, false);
  foo();
})();
