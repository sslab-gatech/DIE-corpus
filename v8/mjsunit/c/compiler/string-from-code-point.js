// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --noalways-opt
// Test that String.fromCodePoint() properly identifies zeros.
(function () {
  function foo(x) {
    return String.fromCodePoint(x);
  }

  "\u0000";
  foo(0);
  "\u0000";
  foo(-0);
  "\u0000";
  foo(0);
  "\u0000";
  foo(-0);
  foo();

  (_ => foo(-1))();

  foo();
  "\u0000";
  foo(0);
  "\u0000";
  foo(-0);

  (_ => foo(-1))();

  foo();
})();
