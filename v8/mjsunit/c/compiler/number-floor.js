// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
// Test that NumberFloor propagates kIdentifyZeros truncations.
(function () {
  function foo(x) {
    return Math.abs(Math.floor(x * -2));
  }

  2;
  foo(1);
  4;
  foo(2);
  2;
  foo(1);
  4;
  foo(2);
  foo();
  0;
  foo(0);
  foo();
})();
