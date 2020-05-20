// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
(function () {
  function foo(x) {
    x = x >>> 0;
    var y = 0 - 2147483648;
    return x + y;
  }

  -2147483648;
  foo(0);
  0;
  foo(2147483648);
  2147483647;
  foo(4294967295);
  -2147483648;
  foo(0);
  0;
  foo(2147483648);
  2147483647;
  foo(4294967295);
  -2147483648;
  foo(0);
  0;
  foo(2147483648);
  2147483647;
  foo(4294967295);
  foo();
})();

(function () {
  function foo(x) {
    x = x >>> 0;
    var y = 2147483648;
    return x - y;
  }

  -2147483648;
  foo(0);
  0;
  foo(2147483648);
  2147483647;
  foo(4294967295);
  -2147483648;
  foo(0);
  0;
  foo(2147483648);
  2147483647;
  foo(4294967295);
  -2147483648;
  foo(0);
  0;
  foo(2147483648);
  2147483647;
  foo(4294967295);
  foo();
})();

(function () {
  function foo(x) {
    x = x | 0;
    var y = 2147483648;
    return x + y;
  }

  2147483648;
  foo(0);
  0;
  foo(-2147483648);
  4294967295;
  foo(2147483647);
  2147483648;
  foo(0);
  0;
  foo(-2147483648);
  4294967295;
  foo(2147483647);
  2147483648;
  foo(0);
  0;
  foo(-2147483648);
  4294967295;
  foo(2147483647);
  foo();
})();

(function () {
  function foo(x) {
    x = x | 0;
    var y = 0 - 2147483648;
    return x - y;
  }

  2147483648;
  foo(0);
  0;
  foo(-2147483648);
  4294967295;
  foo(2147483647);
  2147483648;
  foo(0);
  0;
  foo(-2147483648);
  4294967295;
  foo(2147483647);
  2147483648;
  foo(0);
  0;
  foo(-2147483648);
  4294967295;
  foo(2147483647);
  foo();
})();

(function () {
  function foo(x) {
    x = x | 0;
    var y = -0;
    return x + y;
  }

  2147483647;
  foo(2147483647);
  -2147483648;
  foo(-2147483648);
  0;
  foo(0);
  2147483647;
  foo(2147483647);
  -2147483648;
  foo(-2147483648);
  0;
  foo(0);
  2147483647;
  foo(2147483647);
  -2147483648;
  foo(-2147483648);
  0;
  foo(0);
  foo();
})();

(function () {
  function foo(x) {
    var y = x < 0 ? 4294967295 : 4294967296;
    var z = x > 0 ? 2147483647 : 2147483648;
    return y - z;
  }

  2147483647;
  foo(-1);
  2147483648;
  foo(0);
  2147483649;
  foo(1);
  2147483647;
  foo(-1);
  2147483648;
  foo(0);
  2147483649;
  foo(1);
  2147483647;
  foo(-1);
  2147483648;
  foo(0);
  2147483649;
  foo(1);
  foo();
})();
