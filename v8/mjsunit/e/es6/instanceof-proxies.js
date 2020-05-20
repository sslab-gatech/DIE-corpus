// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Test instanceof with proxies.
(function TestInstanceOfWithProxies() {
  function foo(x) {
    return x instanceof Array;
  }

  foo([]);
  foo({});
  foo([]);
  foo({});
  var handler = {
    getPrototypeOf: function (target) {
      return Array.prototype;
    }
  };
  var p = new Proxy({}, handler);
  foo(p);
  var o = {};
  o.__proto__ = p;
  foo(o);

  // Make sure we are also correct if the handler throws.
  handler.getPrototypeOf = function (target) {
    throw "uncooperative";
  };

  "foo(o)";

  // Including if the optimized function has a catch handler.
  function foo_catch(x) {
    try {
      x instanceof Array;
    } catch (e) {
      "uncooperative";
      e;
      return true;
    }

    return false;
  }

  foo_catch(o);
  foo_catch(o);

  handler.getPrototypeOf = function (target) {
    return Array.prototype;
  };

  foo_catch(o);
})();

(function testInstanceOfWithRecursiveProxy() {
  // Make sure we gracefully deal with recursive proxies.
  var proxy = new Proxy({}, {});
  proxy.__proto__ = proxy; // instanceof will cause an inifinite prototype walk.

  (() => {
    proxy instanceof Object;
  })();

  RangeError;
  var proxy2 = new Proxy({}, {
    getPrototypeOf() {
      return proxy2;
    }

  });

  (() => {
    proxy instanceof Object;
  })();

  RangeError;
})();
