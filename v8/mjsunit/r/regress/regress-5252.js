// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --ignition-osr
(function TestNonLoopyLoop() {
  function f() {
    do {
      return 23;
    } while (false);
  }

  23;
  f();
  23;
  f();
})();

(function TestNonLoopyGenerator() {
  function* g() {
    do {
      yield 23;
      yield 42;
    } while (false);

    return 999;
  }

  var gen = g();
  ({
    value: 23,
    done: false
  });
  gen.next();
  ({
    value: 42,
    done: false
  });
  gen.next();
  ({
    value: 999,
    done: true
  });
  gen.next();
})();
