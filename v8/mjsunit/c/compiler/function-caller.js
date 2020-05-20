// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function TestInlineAllocatedCaller() {
  function g() {
    var caller = g.caller;
    caller.foo = 23;
    23;
    caller.foo;
    23;
    g.caller.foo;
    caller();
    g.caller();
  }

  function f() {
    (function caller() {
      g();
    })();
  }

  f();
  f();
  f();
})();
