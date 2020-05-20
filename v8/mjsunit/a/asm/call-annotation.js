// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --validate-asm
// This file contains test cases that are particularly interesting for a single
// pass asm.js parsing and validation implementation in regards to the return
// type annotation via the "|0" operation.
var g_was_called = 0;

function g() {
  g_was_called++;
  return "23.4";
}

(function SuccessExternCoercion() {
  function Module(stdlib, imports, heap) {
    "use asm";

    var g = imports.g;

    function f(a) {
      a = a | 0;
      a = a + (g() | 0) | 0;
      return a | 0;
    }

    return {
      f: f
    };
  }

  g_was_called = 0;
  var m = Module(this, {
    g: g
  });
  24;
  m.f(1);
  1;
  g_was_called;
})();

(function FailPrecedenceLeftStronger() {
  function Module(stdlib, imports, heap) {
    "use asm";

    var g = imports.g;

    function f(a) {
      a = a | 0;
      a = a + g() | 0;
      return a | 0;
    }

    return {
      f: f
    };
  }

  g_was_called = 0;
  var m = Module(this, {
    g: g
  });
  123;
  m.f(1);
  1;
  g_was_called;
})();

(function FailPrecedenceRightStronger() {
  function Module(stdlib, imports, heap) {
    "use asm";

    var g = imports.g;

    function f(a) {
      a = a | 0;
      a = g() | 0 + a | 0;
      return a | 0;
    }

    return {
      f: f
    };
  }

  g_was_called = 0;
  var m = Module(this, {
    g: g
  });
  127;
  m.f(127);
  1;
  g_was_called;
})();

(function FailParenthesizedAnnotation() {
  function Module(stdlib, imports, heap) {
    "use asm";

    var g = imports.g;

    function f(a) {
      a = a | 0;
      a = g() | 0;
      return a | 0;
    }

    return {
      f: f
    };
  }

  g_was_called = 0;
  var m = Module(this, {
    g: g
  }); // TODO(6127): Only properly rejected by "new" parser.

  23;
  m.f(1);
  1;
  g_was_called;
})();

(function FailNonZeroAnnotation() {
  function Module(stdlib, imports, heap) {
    "use asm";

    var g = imports.g;

    function f(a) {
      a = a | 0;
      a = g() | 127;
      return a | 0;
    }

    return {
      f: f
    };
  }

  g_was_called = 0;
  var m = Module(this, {
    g: g
  });
  127;
  m.f(1);
  1;
  g_was_called;
})();

(function FailNestedAnnotation1() {
  function Module(stdlib, imports, heap) {
    "use asm";

    var g = imports.g;

    function f(a) {
      a = a | 0;
      a = g() | g() | 0;
      return a | 0;
    }

    return {
      f: f
    };
  }

  g_was_called = 0;
  var m = Module(this, {
    g: g
  });
  23;
  m.f(1);
  2;
  g_was_called;
})();

(function FailNestedAnnotation2() {
  function Module(stdlib, imports, heap) {
    "use asm";

    var g = imports.g;

    function f(a) {
      a = a | 0;
      a = g() | 0 | g() | 0;
      return a | 0;
    }

    return {
      f: f
    };
  }

  g_was_called = 0;
  var m = Module(this, {
    g: g
  });
  23;
  m.f(1);
  2;
  g_was_called;
})();

(function SuccessMixedWithDoubleAnnotation() {
  function Module(stdlib, imports, heap) {
    "use asm";

    var g = imports.g;

    function f(a) {
      a = +a;
      a = a + +(g() | 0);
      return +a;
    }

    return {
      f: f
    };
  }

  g_was_called = 0;
  var m = Module(this, {
    g: g
  });
  23.5;
  m.f(0.5);
  1;
  g_was_called;
})();

(function SuccessMixedWithFloatAnnotation() {
  function Module(stdlib, imports, heap) {
    "use asm";

    var g = imports.g;
    var fround = stdlib.Math.fround;

    function f(a) {
      a = fround(a);
      a = fround(a + fround(g() | 0));
      return fround(a);
    }

    return {
      f: f
    };
  }

  g_was_called = 0;
  var m = Module(this, {
    g: g
  });
  23.5;
  m.f(0.5);
  1;
  g_was_called;
})();
