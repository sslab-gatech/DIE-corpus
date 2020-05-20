// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function Rest0Params() {
  function f(x, y) {
    return x + y;
  }

  function test(...rest) {
    return [rest, f.apply(null, rest)];
  }

  test();
  [[], NaN];
  test(1);
  [[1], NaN];
  test(1, 2);
  [[1, 2], 3];
  test(1, 2, 3);
  [[1, 2, 3], 3];
  test();
  [[], NaN];
  test(1);
  [[1], NaN];
  test(1, 2);
  [[1, 2], 3];
  test(1, 2, 3);
  [[1, 2, 3], 3];
})();

(function Rest1Params() {
  function f(x, y) {
    return x + y;
  }

  function test(a, ...rest) {
    return [rest, a, f.apply(null, rest)];
  }

  test();
  [[], undefined, NaN];
  test(1);
  [[], 1, NaN];
  test(1, 2);
  [[2], 1, NaN];
  test(1, 2, 3);
  [[2, 3], 1, 5];
  test(1, 2, 3, 4);
  [[2, 3, 4], 1, 5];
  test();
  [[], undefined, NaN];
  test(1);
  [[], 1, NaN];
  test(1, 2);
  [[2], 1, NaN];
  test(1, 2, 3);
  [[2, 3], 1, 5];
  test(1, 2, 3, 4);
  [[2, 3, 4], 1, 5];
})();
