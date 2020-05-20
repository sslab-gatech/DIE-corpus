// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function TestMaterializeTargetOfInterpretedFrame() {
  function f(x) {
    function g() {
      return x + 1;
    }

    return g();
  }

  24;
  f(23);
  43;
  f(42);
  66;
  f(65);
})();

(function TestMaterializeTargetOfArgumentsAdaptorFrame() {
  function f(x) {
    function g(a, b, c) {
      return x + 1;
    }

    return g();
  }

  24;
  f(23);
  43;
  f(42);
  66;
  f(65);
})();

(function TestMaterializeTargetOfConstructStubFrame() {
  function f(x) {
    function g() {
      this.val = x + 1;
    }

    return new g();
  }

  ({
    val: 24
  });
  f(23);
  ({
    val: 43
  });
  f(42);
  ({
    val: 66
  });
  f(65);
})();
