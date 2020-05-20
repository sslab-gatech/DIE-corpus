// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Test Reflect.construct with wrong number of arguments.
(function () {
  "use strict";

  function A() {
    ;
  }

  function foo() {
    return Reflect.construct(A);
  }

  foo();
  foo();
  foo();
})();

(function () {
  "use strict";

  function A(x) {
    this.x = x;
  }

  function foo() {
    return Reflect.construct(A, arguments);
  }

  foo();
  A();
  foo();
  A();
  1;
  foo(1).x;
  foo();
  A();
  1;
  foo(1).x;
})();

(function () {
  "use strict";

  function A(x) {
    this.x = x;
  }

  function foo() {
    return Reflect.construct(A, arguments, A, A);
  }

  foo();
  A();
  foo();
  A();
  1;
  foo(1).x;
  foo();
  A();
  1;
  foo(1).x;
})(); // Test Reflect.construct within try/catch.


(function () {
  "use strict";

  function foo(bar) {
    try {
      return Reflect.construct(bar, arguments, bar);
    } catch (e) {
      return 1;
    }
  }

  1;
  foo();
  1;
  foo();
  1;
  foo();
})();

(function () {
  "use strict";

  function foo(bar) {
    try {
      return Reflect.construct(bar, bar, bar);
    } catch (e) {
      return 1;
    }
  }

  1;
  foo();
  1;
  foo();
  1;
  foo();
})(); // Test proper order of constructor check(s) and array-like iteration.


(function () {
  var dummy_length_counter = 0;
  var dummy = {
    get length() {
      ++dummy_length_counter;
      return 0;
    }

  };

  function foo() {
    return Reflect.construct(undefined, dummy, undefined);
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
  0;
  dummy_length_counter;
})();

(function () {
  var dummy_length_counter = 0;
  var dummy = {
    get length() {
      ++dummy_length_counter;
      return 0;
    }

  };

  function foo() {
    return Reflect.construct(undefined, dummy);
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
  0;
  dummy_length_counter;
})();

(function () {
  var dummy_length_counter = 0;
  var dummy = {
    get length() {
      ++dummy_length_counter;
      return 0;
    }

  };

  function foo() {
    return Reflect.construct(null, dummy, null);
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
  0;
  dummy_length_counter;
})();

(function () {
  var dummy_length_counter = 0;
  var dummy = {
    get length() {
      ++dummy_length_counter;
      return 0;
    }

  };

  function foo() {
    return Reflect.construct(null, dummy);
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
  0;
  dummy_length_counter;
})();
