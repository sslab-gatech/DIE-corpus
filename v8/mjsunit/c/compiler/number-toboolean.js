// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
// Test that NumberToBoolean properly passes the kIdentifyZeros truncation
// for Signed32 \/ MinusZero inputs.
(function () {
  function foo(x) {
    if (x * -2) {
      return 1;
    }

    return 0;
  }

  1;
  foo(1);
  1;
  foo(2);
  1;
  foo(1);
  1;
  foo(2);
  foo();
  0;
  foo(0);
  foo();
})(); // Test that NumberToBoolean properly passes the kIdentifyZeros truncation
// for Unsigned32 \/ MinusZero inputs.


(function () {
  function foo(x) {
    x = x | 0;

    if (Math.max(x * -2, 0)) {
      return 1;
    }

    return 0;
  }

  1;
  foo(-1);
  1;
  foo(-2);
  1;
  foo(-1);
  1;
  foo(-2);
  foo();
  0;
  foo(0);
  foo();
})();
