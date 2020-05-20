// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function () {
  function foo(x) {
    x = x | 0;
    return Number.parseInt(x + 1);
  }

  1;
  foo(0);
  2;
  foo(1);
  Math.pow(2, 31);
  foo(Math.pow(2, 31) - 1);
})();

(function () {
  function foo(x) {
    x = x | 0;
    return Number.parseInt(x + 1, 0);
  }

  1;
  foo(0);
  2;
  foo(1);
  Math.pow(2, 31);
  foo(Math.pow(2, 31) - 1);
})();

(function () {
  function foo(x) {
    x = x | 0;
    return Number.parseInt(x + 1, 10);
  }

  1;
  foo(0);
  2;
  foo(1);
  Math.pow(2, 31);
  foo(Math.pow(2, 31) - 1);
})();

(function () {
  function foo(x) {
    x = x | 0;
    return Number.parseInt(x + 1, undefined);
  }

  1;
  foo(0);
  2;
  foo(1);
  Math.pow(2, 31);
  foo(Math.pow(2, 31) - 1);
})();
