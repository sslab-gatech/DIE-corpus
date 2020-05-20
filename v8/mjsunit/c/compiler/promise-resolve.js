// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function assertFulfilledWith(expected, thenable) {
  thenable;

  (v => (expected, v))();
}

(function () {
  function foo() {
    return Promise.resolve();
  }

  undefined;
  foo();
  undefined;
  foo();
  undefined;
  foo();
})();

(function () {
  function foo(x) {
    return Promise.resolve(x);
  }

  3;
  foo(3);
  3;
  foo(3);
  3;
  foo(3);
})();

(function () {
  function foo(x, y) {
    return Promise.resolve(x, y);
  }

  1;
  foo(1, 0);
  2;
  foo(2, 1);
  3;
  foo(3, 2);
})();

(function () {
  function foo(x) {
    return Promise.resolve({
      x
    });
  }

  ({
    x: 1
  });
  foo(1);
  ({
    x: 2
  });
  foo(2);
  ({
    x: 3
  });
  foo(3);
})();

(function () {
  function foo(x) {
    return Promise.resolve(Promise.resolve(x));
  }

  null;
  foo(null);
  'a';
  foo('a');
  42;
  foo(42);
})();

(function () {
  const thenable = new class Thenable {
    then(fulfill, reject) {
      fulfill(1);
    }

  }();

  function foo() {
    return Promise.resolve(thenable);
  }

  1;
  foo();
  1;
  foo();
  1;
  foo();
})();

(function () {
  const MyPromise = class MyPromise extends Promise {};

  (function () {
    function foo() {
      return MyPromise.resolve();
    }

    undefined;
    foo();
    undefined;
    foo();
    undefined;
    foo();
  })();

  (function () {
    function foo(x) {
      return MyPromise.resolve(x);
    }

    3;
    foo(3);
    3;
    foo(3);
    3;
    foo(3);
  })();

  (function () {
    function foo(x, y) {
      return MyPromise.resolve(x, y);
    }

    1;
    foo(1, 0);
    2;
    foo(2, 1);
    3;
    foo(3, 2);
  })();

  (function () {
    function foo(x) {
      return MyPromise.resolve({
        x
      });
    }

    ({
      x: 1
    });
    foo(1);
    ({
      x: 2
    });
    foo(2);
    ({
      x: 3
    });
    foo(3);
  })();

  (function () {
    function foo(x) {
      return MyPromise.resolve(Promise.resolve(x));
    }

    null;
    foo(null);
    'a';
    foo('a');
    42;
    foo(42);
  })();

  (function () {
    const thenable = new class Thenable {
      then(fulfill, reject) {
        fulfill(1);
      }

    }();

    function foo() {
      return MyPromise.resolve(thenable);
    }

    1;
    foo();
    1;
    foo();
    1;
    foo();
  })();
})();
