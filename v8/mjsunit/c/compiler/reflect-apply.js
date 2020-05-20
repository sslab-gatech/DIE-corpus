// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Test Reflect.apply with wrong number of arguments.
(function () {
  "use strict";

  function bar() {
    return this;
  }

  function foo() {
    return Reflect.apply(bar);
  }

  foo();
  foo();
  foo();
})();

(function () {
  "use strict";

  function bar() {
    return this;
  }

  function foo() {
    return Reflect.apply(bar, this);
  }

  foo();
  foo();
  foo();
})();

(function () {
  "use strict";

  function bar() {
    return this;
  }

  function foo() {
    return Reflect.apply(bar, this, arguments, this);
  }

  42;
  foo.call(42);
  42;
  foo.call(42);
  42;
  foo.call(42);
})(); // Test Reflect.apply within try/catch.


(function () {
  "use strict";

  function foo(bar) {
    try {
      return Reflect.apply(bar, bar, arguments);
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
      return Reflect.apply(bar, bar, bar);
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
})(); // Test proper order of callable check and array-like iteration
// in Reflect.apply.


(function () {
  var dummy_length_counter = 0;
  var dummy = {
    get length() {
      ++dummy_length_counter;
      return 0;
    }

  };

  function foo() {
    return Reflect.apply(undefined, this, dummy);
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
    return Reflect.apply(null, this, dummy);
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
    return Reflect.apply(null, this, dummy);
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
