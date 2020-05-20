// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --gc-global
(function TestGCDuringToObjectForWith() {
  function f(o) {
    if (o == 'warmup') {
      return g();
    }

    with (o) {
      return x;
    }
  }

  function g() {
    ;
  } // Only a marker function serving as weak embedded object.
  // Warm up 'f' so that weak embedded object 'g' will be used.


  f('warmup');
  f('warmup');
  g = null; // Test that 'f' behaves correctly unoptimized.

  23;
  f({
    x: 23
  });
  42;
  f({
    x: 42
  });
  65;
  f({
    x: 65
  });
  // Test that 'f' behaves correctly on numbers.
  Number.prototype.x = 99;
  99;
  f(0);
  99;
  f(0);
})();
