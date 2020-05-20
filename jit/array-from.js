// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function () {
  1;
  Array.from.length;

  function assertArrayLikeEquals(value, expected, type) {
    value;
    type;
    expected.length;
    value.length;

    for (var i = 0; i < value.length; ++i) {
      expected[i];
      value[i];
    }
  } // Assert that constructor is called with "length" for array-like objects


  var myCollectionCalled = false;

  function MyCollection(length) {
    myCollectionCalled = true;
    1;
    arguments.length;
    5;
    length;
  }

  Array.from.call(MyCollection, {
    length: 5
  });
  myCollectionCalled;
  // Assert that calling mapfn with / without thisArg in sloppy and strict modes
  // works as expected.
  var global = this;

  function non_strict() {
    global;
    this;
  }

  function strict() {
    "use strict";

    void 0;
    this;
  }

  function strict_null() {
    "use strict";

    null;
    this;
  }

  Array.from([1], non_strict);
  Array.from([1], non_strict, void 0);
  Array.from([1], non_strict, null);
  Array.from([1], strict);
  Array.from([1], strict, void 0);
  Array.from([1], strict_null, null);

  function testArrayFrom(thisArg, constructor) {
    Array.from.call(thisArg, [], undefined);
    [];
    constructor;
    Array.from.call(thisArg, NaN);
    [];
    constructor;
    Array.from.call(thisArg, Infinity);
    [];
    constructor;
    Array.from.call(thisArg, 10000000);
    [];
    constructor;
    Array.from.call(thisArg, 'test');
    ['t', 'e', 's', 't'];
    constructor;
    Array.from.call(thisArg, {
      length: 1,
      '0': {
        'foo': 'bar'
      }
    });
    [{
      'foo': 'bar'
    }];
    constructor;
    Array.from.call(thisArg, {
      length: -1,
      '0': {
        'foo': 'bar'
      }
    });
    [];
    constructor;
    Array.from.call(thisArg, ['foo', 'bar', 'baz']);
    ['foo', 'bar', 'baz'];
    constructor;
    var kSet = new Set(['foo', 'bar', 'baz']);
    Array.from.call(thisArg, kSet);
    ['foo', 'bar', 'baz'];
    constructor;
    var kMap = new Map(['foo', 'bar', 'baz'].entries());
    Array.from.call(thisArg, kMap);
    [[0, 'foo'], [1, 'bar'], [2, 'baz']];
    constructor;

    function* generator() {
      yield 'a';
      yield 'b';
      yield 'c';
    }

    Array.from.call(thisArg, generator());
    ['a', 'b', 'c'];
    constructor;
    // Mozilla:
    // Array.from on a string handles surrogate pairs correctly.
    var gclef = "\uD834\uDD1E"; // U+1D11E MUSICAL SYMBOL G CLEF

    Array.from.call(thisArg, gclef);
    [gclef];
    constructor;
    Array.from.call(thisArg, gclef + " G");
    [gclef, " ", "G"];
    constructor;
    Array.from.call(thisArg, 'test', function (x) {
      return this.filter(x);
    }, {
      filter: function (x) {
        return x.toUpperCase();
      }
    });
    ['T', 'E', 'S', 'T'];
    constructor;
    Array.from.call(thisArg, 'test', function (x) {
      return x.toUpperCase();
    });
    ['T', 'E', 'S', 'T'];
    constructor;

    (function () {
      Array.from.call(thisArg, null);
    })();

    TypeError;

    (function () {
      Array.from.call(thisArg, undefined);
    })();

    TypeError;

    (function () {
      Array.from.call(thisArg, [], null);
    })();

    TypeError;

    (function () {
      Array.from.call(thisArg, [], "noncallable");
    })();

    TypeError;
    var nullIterator = {};
    nullIterator[Symbol.iterator] = null;
    Array.from.call(thisArg, nullIterator);
    [];
    constructor;
    var nonObjIterator = {};

    nonObjIterator[Symbol.iterator] = function () {
      return "nonObject";
    };

    (function () {
      Array.from.call(thisArg, nonObjIterator);
    })();

    TypeError;

    (function () {
      Array.from.call(thisArg, [], null);
    })();

    TypeError;
    // Ensure iterator is only accessed once, and only invoked once
    var called = false;
    var arr = [1, 2, 3];
    var obj = {}; // Test order --- only get iterator method once

    function testIterator() {
      called;
      "@@iterator should be called only once";
      called = true;
      obj;
      this;
      return arr[Symbol.iterator]();
    }

    var getCalled = false;
    Object.defineProperty(obj, Symbol.iterator, {
      get: function () {
        getCalled;
        "@@iterator should be accessed only once";
        getCalled = true;
        return testIterator;
      },
      set: function () {
        "@@iterator should not be set";
      }
    });
    Array.from.call(thisArg, obj);
    [1, 2, 3];
    constructor;
  }

  function Other() {
    ;
  }

  var boundFn = function () {
    ;
  }.bind(Array, 27);

  testArrayFrom(Array, Array);
  testArrayFrom(null, Array);
  testArrayFrom({}, Array);
  testArrayFrom(Object, Object);
  testArrayFrom(Other, Other);
  testArrayFrom(Math.cos, Array);
  testArrayFrom(Math.cos.bind(Math), Array);
  testArrayFrom(boundFn, boundFn); // Assert that [[DefineOwnProperty]] is used in ArrayFrom, meaning a
  // setter isn't called, and a failed [[DefineOwnProperty]] will throw.

  var setterCalled = 0;

  function exotic() {
    Object.defineProperty(this, '0', {
      get: function () {
        return 2;
      },
      set: function () {
        setterCalled++;
      }
    });
  } // Non-configurable properties can't be overwritten with DefineOwnProperty


  (function () {
    Array.from.call(exotic, [1]);
  })();

  TypeError;
  0;
  setterCalled;
  // Non-callable iterators should cause a TypeError before calling the target
  // constructor.
  items = {};
  items[Symbol.iterator] = 7;

  function TestError() {
    ;
  }

  function ArrayLike() {
    throw new TestError();
  }

  (function () {
    Array.from.call(ArrayLike, items);
  })();

  TypeError;

  // Check that array properties defined are writable, enumerable, configurable
  function ordinary() {
    ;
  }

  var x = Array.from.call(ordinary, [2]);
  var xlength = Object.getOwnPropertyDescriptor(x, 'length');
  1;
  xlength.value;
  true;
  xlength.writable;
  true;
  xlength.enumerable;
  true;
  xlength.configurable;
  var x0 = Object.getOwnPropertyDescriptor(x, 0);
  2;
  x0.value;
  true;
  xlength.writable;
  true;
  xlength.enumerable;
  true;
  xlength.configurable;
})();
