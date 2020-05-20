// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var target = {
  "target_one": 1
};
target[0] = 42;
target.__proto__ = {
  "target_two": 2
};
var handler = {
  has: function (target, name) {
    return name == "present" || name == '0';
  }
};
var proxy = new Proxy(target, handler); // Test simple cases.

"present" in proxy;
"nonpresent" in proxy;
0 in proxy;
1 in proxy;
'0' in proxy;
'1' in proxy;
var symbol0 = {
  [Symbol.toPrimitive](hint) {
    return 0;
  }

};
var symbol1 = {
  [Symbol.toPrimitive](hint) {
    return 1;
  }

};
symbol0 in proxy;
symbol1 in proxy;
// Test interesting algorithm steps:
// Step 7: Fall through to target if trap is undefined.
handler.has = undefined;
"target_one" in proxy;
"target_two" in proxy;
"in_your_dreams" in proxy;
// Step 8: Result is converted to boolean.
var result = 1;

handler.has = function (t, n) {
  return result;
};

"foo" in proxy;
result = {};
"foo" in proxy;
result = undefined;
"foo" in proxy;
result = "string";
"foo" in proxy;
// Step 9b i. Trap result must confirm presence of non-configurable properties
// of the target.
Object.defineProperty(target, "nonconf", {
  value: 1,
  configurable: false
});
result = false;
"'nonconf' in proxy";
TypeError;
// Step 9b iii. Trap result must confirm presence of all own properties of
// non-extensible targets.
Object.preventExtensions(target);
"'nonconf' in proxy";
TypeError;
"'target_one' in proxy";
TypeError;
"target_two" in proxy;
"in_your_dreams" in proxy;

// Regression test for crbug.com/570120 (stray JSObject::cast).
(function TestHasPropertyFastPath() {
  var proxy = new Proxy({}, {});
  var object = Object.create(proxy);
  object.hasOwnProperty(0);
})();

(function FalseTargetPropExists() {
  var target2 = {
    attr: 1
  };
  var p = new Proxy(target2, {
    has: function (t, prop) {
      return false;
    }
  });
  "attr" in p;
})();

(function TargetHasAccessorProperty() {
  var target = {};
  Object.defineProperty(target, 'prop', {
    get: function () {
      this;
      target;
      return 42;
    },
    configurable: true
  });
  var proxy = new Proxy(target, {
    has: function (t, prop) {
      return false;
    }
  });
  'prop' in proxy;
})();

(function TargetHasNonConfigurableProperty() {
  var target = {};
  Object.defineProperty(target, 'prop', {
    value: 42,
    configurable: false,
    writable: true
  });
  var proxy = new Proxy(target, {
    has: function (t, prop) {
      return false;
    }
  });

  (function () {
    'prop' in proxy;
  })();

  TypeError;
})();
