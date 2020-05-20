// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
const object1 = {
  [Symbol.toPrimitive]() {
    return 1;
  }

};
const thrower = {
  [Symbol.toPrimitive]() {
    throw new Error();
  }

}; // Test that JSAdd is not context-sensitive.

(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y + x);
  }

  1;
  foo(0);
  2;
  foo(object1);

  (() => foo(thrower))();

  1;
  foo(0);
  2;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSSubtract is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y - x);
  }

  1;
  foo(0);
  0;
  foo(object1);

  (() => foo(thrower))();

  1;
  foo(0);
  0;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSMultiply is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y * x);
  }

  1;
  foo(1);
  1;
  foo(object1);

  (() => foo(thrower))();

  1;
  foo(1);
  1;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSDivide is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y / x);
  }

  1;
  foo(1);
  1;
  foo(object1);

  (() => foo(thrower))();

  1;
  foo(1);
  1;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSModulus is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y % x);
  }

  0;
  foo(1);
  0;
  foo(object1);

  (() => foo(thrower))();

  0;
  foo(1);
  0;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSExponentiate is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y ** x);
  }

  1;
  foo(1);
  1;
  foo(object1);

  (() => foo(thrower))();

  1;
  foo(1);
  1;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSBitwiseOr is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y | x);
  }

  1;
  foo(1);
  1;
  foo(object1);

  (() => foo(thrower))();

  1;
  foo(1);
  1;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSBitwiseAnd is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y & x);
  }

  1;
  foo(1);
  1;
  foo(object1);

  (() => foo(thrower))();

  1;
  foo(1);
  1;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSBitwiseXor is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y ^ x);
  }

  0;
  foo(1);
  0;
  foo(object1);

  (() => foo(thrower))();

  0;
  foo(1);
  0;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSShiftLeft is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y << x);
  }

  2;
  foo(1);
  2;
  foo(object1);

  (() => foo(thrower))();

  2;
  foo(1);
  2;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSShiftRight is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y >> x);
  }

  0;
  foo(1);
  0;
  foo(object1);

  (() => foo(thrower))();

  0;
  foo(1);
  0;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSShiftRightLogical is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y >>> x);
  }

  0;
  foo(1);
  0;
  foo(object1);

  (() => foo(thrower))();

  0;
  foo(1);
  0;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSEqual is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y == x);
  }

  foo(0);
  foo(object1);

  (() => foo(thrower))();

  foo(0);
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSLessThan is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y < x);
  }

  foo(0);
  foo(object1);

  (() => foo(thrower))();

  foo(0);
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSGreaterThan is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => x > y);
  }

  foo(0);
  foo(object1);

  (() => foo(thrower))();

  foo(0);
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSLessThanOrEqual is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => y <= x);
  }

  foo(0);
  foo(object1);

  (() => foo(thrower))();

  foo(0);
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSGreaterThanOrEqual is not context-sensitive.


(function () {
  function bar(fn) {
    return fn(1);
  }

  function foo(x) {
    return bar(y => x >= y);
  }

  foo(0);
  foo(object1);

  (() => foo(thrower))();

  foo(0);
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSInstanceOf is not context-sensitive.


(function () {
  function bar(fn) {
    return fn({});
  }

  function foo(c) {
    return bar(o => o instanceof c);
  }

  foo(Object);
  foo(Array);

  (() => foo({
    [Symbol.hasInstance]() {
      throw new Error();
    }

  }))();

  foo(Object);
  foo(Array);

  (() => foo({
    [Symbol.hasInstance]() {
      throw new Error();
    }

  }))();
})(); // Test that JSBitwiseNot is not context-sensitive.


(function () {
  function bar(fn) {
    return fn();
  }

  function foo(x) {
    return bar(() => ~x);
  }

  0;
  foo(-1);
  ~1;
  foo(object1);

  (() => foo(thrower))();

  0;
  foo(-1);
  ~1;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSNegate is not context-sensitive.


(function () {
  function bar(fn) {
    return fn();
  }

  function foo(x) {
    return bar(() => -x);
  }

  1;
  foo(-1);
  -1;
  foo(object1);

  (() => foo(thrower))();

  1;
  foo(-1);
  -1;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSIncrement is not context-sensitive.


(function () {
  function bar(fn) {
    return fn();
  }

  function foo(x) {
    return bar(() => ++x);
  }

  1;
  foo(0);
  2;
  foo(object1);

  (() => foo(thrower))();

  1;
  foo(0);
  2;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSDecrement is not context-sensitive.


(function () {
  function bar(fn) {
    return fn();
  }

  function foo(x) {
    return bar(() => --x);
  }

  1;
  foo(2);
  0;
  foo(object1);

  (() => foo(thrower))();

  1;
  foo(2);
  0;
  foo(object1);

  (() => foo(thrower))();
})(); // Test that JSCreateArguments[UnmappedArguments] is not context-sensitive.


(function () {
  function bar(fn) {
    return fn();
  }

  function foo() {
    "use strict";

    return bar(() => arguments)[0];
  }

  0;
  foo(0, 1);
  1;
  foo(1, 2);
  undefined;
  foo();
  0;
  foo(0, 1);
  1;
  foo(1, 2);
  undefined;
  foo();
})(); // Test that JSCreateArguments[RestParameters] is not context-sensitive.


(function () {
  function bar(fn) {
    return fn();
  }

  function foo(...args) {
    return bar(() => args)[0];
  }

  0;
  foo(0, 1);
  1;
  foo(1, 2);
  undefined;
  foo();
  0;
  foo(0, 1);
  1;
  foo(1, 2);
  undefined;
  foo();
})(); // Test that JSLoadGlobal/JSStoreGlobal are not context-sensitive.


(function (global) {
  var actualValue = 'Some value';
  Object.defineProperty(global, 'globalValue', {
    configurable: true,
    enumerable: true,
    get: function () {
      return actualValue;
    },
    set: function (v) {
      actualValue = v;
    }
  });

  function bar(fn) {
    return fn();
  }

  function foo(v) {
    return bar(() => {
      const o = globalValue;
      globalValue = v;
      return o;
    });
  }

  'Some value';
  foo('Another value');
  'Another value';
  actualValue;
  'Another value';
  foo('Some value');
  'Some value';
  actualValue;
  'Some value';
  foo('Another value');
  'Another value';
  actualValue;
  'Another value';
  foo('Some value');
  'Some value';
  actualValue;
})(this); // Test that for..in is not context-sensitive.


(function () {
  function bar(fn) {
    return fn();
  }

  function foo(o) {
    return bar(() => {
      var s = "";

      for (var k in o) {
        s += k;
      }

      return s;
    });
  }

  'abc';
  foo({
    a: 1,
    b: 2,
    c: 3
  });
  'ab';
  foo(Object.create({
    a: 1,
    b: 2
  }));
  'abc';
  foo({
    a: 1,
    b: 2,
    c: 3
  });
  "ab";
  foo(Object.create({
    a: 1,
    b: 2
  }));
})(); // Test that most generator operations are not context-sensitive.


(function () {
  function bar(fn) {
    let s = undefined;

    for (const x of fn()) {
      if (s === undefined) {
        s = x;
      } else {
        s += x;
      }
    }

    return s;
  }

  function foo(x, y, z) {
    return bar(function* () {
      yield x;
      yield y;
      yield z;
    });
  }

  6;
  foo(1, 2, 3);
  "abc";
  foo("a", "b", "c");
  6;
  foo(1, 2, 3);
  "abc";
  foo("a", "b", "c");
})();
