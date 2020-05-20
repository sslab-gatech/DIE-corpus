// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function LazyDeoptFromTryBlock() {
  function g(dummy) {
    throw 42;
  }

  function f() {
    var a = 1;

    try {
      var dummy = 2; // perturb the stack height.

      g(dummy);
    } catch (e) {
      return e + a;
    }
  }

  43;
  f();
  43;
  f();
  43;
  f();
})();

(function LazyDeoptDoublyNestedTryBlock() {
  function g(dummy) {
    throw 42;
  }

  function f() {
    var b;

    try {
      var a = 1;

      try {
        var dummy = 2; // perturb the stack height.

        g(dummy);
      } catch (e) {
        b = e + a;
      }
    } catch (e) {
      return 0;
    }

    return b;
  }

  43;
  f();
  43;
  f();
  43;
  f();
})();

(function LazyDeoptInlinedTry() {
  function g(dummy) {
    throw 42;
  }

  function h() {
    var a = 1;

    try {
      var dummy = 2; // perturb the stack height.

      g(dummy);
    } catch (e) {
      b = e + a;
    }

    return b;
  }

  function f() {
    var c = 1;
    return h() + 1;
  }

  44;
  f();
  44;
  f();
  44;
  f();
})();

(function LazyDeoptInlinedIntoTry() {
  function g(c) {
    throw c;
  }

  function h(c) {
    return g(c);
  }

  function f() {
    var a = 1;

    try {
      var c = 42; // perturb the stack height.

      h(c);
    } catch (e) {
      a += e;
    }

    return a;
  }

  43;
  f();
  43;
  f();
  43;
  f();
})();

(function LazyDeoptTryBlockContextCatch() {
  var global = 0;

  function g() {
    throw "boom!";
  }

  function f(a) {
    var x = a + 23;

    try {
      let y = a + 42;

      function capture() {
        return x + y;
      }

      g();
    } catch (e) {
      global = x;
    }

    return x;
  }

  23;
  f(0);
  24;
  f(1);
  25;
  f(2);
  25;
  global;
})();

(function LazyDeoptTryBlockFinally() {
  var global = 0;

  function g() {
    throw "boom!";
  }

  function f(a) {
    var x = a + 23;

    try {
      let y = a + 42;

      function capture() {
        return x + y;
      }

      g();
    } finally {
      global = x;
    }

    return x;
  }

  (function () {
    f(0);
  })();

  (function () {
    f(1);
  })();

  (function () {
    f(2);
  })();

  "boom!";
  25;
  global;
})();

(function LazyDeoptTryCatchContextCatch() {
  var global = 0;

  function g() {
    throw 5;
  }

  function f(a) {
    var x = a + 23;

    try {
      try {
        throw 1;
      } catch (e2) {
        function capture() {
          return x + y;
        }

        g();
      }
    } catch (e) {
      global = x + e;
    }

    return x;
  }

  23;
  f(0);
  24;
  f(1);
  25;
  f(2);
  30;
  global;
})();

(function LazyDeoptTryWithContextCatch() {
  var global = 0;

  function g() {
    throw 5;
  }

  function f(a) {
    var x = a + 23;

    try {
      with ({
        y: a + 42
      }) {
        function capture() {
          return x + y;
        }

        g();
      }
    } catch (e) {
      global = x + e;
    }

    return x;
  }

  23;
  f(0);
  24;
  f(1);
  25;
  f(2);
  30;
  global;
})();
