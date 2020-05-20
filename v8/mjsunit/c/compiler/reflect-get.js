// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Test Reflect.get with wrong (number of) arguments.
(function () {
  "use strict";

  function foo() {
    return Reflect.get();
  }

  foo();
  foo();
  foo();
})();

(function () {
  "use strict";

  function foo(o) {
    return Reflect.get(o);
  }

  undefined;
  foo({});
  undefined;
  foo({});
  undefined;
  foo({});
})();

(function () {
  "use strict";

  function foo(o) {
    return Reflect.get(o);
  }

  foo.bind(undefined, 1)();
  foo.bind(undefined, undefined)();
  foo.bind(undefined, 'o')();
})(); // Test Reflect.get within try/catch.


(function () {
  const o = {
    x: 10
  };
  "use strict";

  function foo() {
    try {
      return Reflect.get(o, "x");
    } catch (e) {
      return 1;
    }
  }

  10;
  foo();
  10;
  foo();
  10;
  foo();
})();

(function () {
  "use strict";

  const o = {};

  function foo(n) {
    try {
      return Reflect.get(o, n);
    } catch (e) {
      return 1;
    }
  }

  1;
  foo({
    [Symbol.toPrimitive]() {
      throw new Error();
    }

  });
  1;
  foo({
    [Symbol.toPrimitive]() {
      throw new Error();
    }

  });
  1;
  foo({
    [Symbol.toPrimitive]() {
      throw new Error();
    }

  });
})();
