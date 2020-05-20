// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function TestThrowingObserver() {
  function Module(stdlib, foreign) {
    "use asm";

    var x = foreign.x | 0;

    function f() {
      ;
    }

    return {
      f: f
    };
  }

  var observer = {
    get x() {
      throw new Error();
    }

  };

  (() => Module(this, observer))();
})();

(function TestMutatingObserver() {
  function Module(stdlib, foreign) {
    "use asm";

    var x = +foreign.x;
    var PI = stdlib.Math.PI;

    function f() {
      return +(PI + x);
    }

    return {
      f: f
    };
  }

  var stdlib = {
    Math: {
      PI: Math.PI
    }
  };
  var observer = {
    get x() {
      stdlib.Math.PI = 23;
      return 42;
    }

  };
  var m = Module(stdlib, observer);
  65;
  m.f();
})();
