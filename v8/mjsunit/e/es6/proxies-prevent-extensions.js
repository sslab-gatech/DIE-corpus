// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function () {
  // No trap.
  var target = {};
  var handler = {};
  var proxy = new Proxy(target, handler);
  Reflect.isExtensible(target);
  Reflect.isExtensible(proxy);
  Reflect.preventExtensions(proxy);
  Reflect.isExtensible(target);
  Reflect.isExtensible(proxy);
})();

(function () {
  // "Undefined" trap.
  var target = {};
  var handler = {
    preventExtensions: null
  };
  var proxy = new Proxy(target, handler);
  Reflect.isExtensible(target);
  Reflect.isExtensible(proxy);
  Reflect.preventExtensions(proxy);
  Reflect.isExtensible(target);
  Reflect.isExtensible(proxy);
})();

(function () {
  // Invalid trap.
  var target = {};
  var handler = {
    preventExtensions: 42
  };
  var proxy = new Proxy(target, handler);

  (() => {
    Reflect.preventExtensions(proxy);
  })();

  TypeError;
})();

(function () {
  var target = {};
  var handler = {
    isExtensible() {
      return "bla";
    }

  };
  var proxy = new Proxy(target, handler); // Trap returns trueish and target is extensible.

  Reflect.isExtensible(proxy);
  // Trap returns trueish but target is not extensible.
  Reflect.preventExtensions(target);

  (() => {
    Reflect.isExtensible(proxy);
  })();

  TypeError;
})();

(function () {
  // Trap returns falsish.
  var target = {};
  var handler = {
    preventExtensions() {
      return 0;
    }

  };
  var proxy = new Proxy(target, handler);
  Reflect.preventExtensions(proxy);
  Reflect.preventExtensions(target);
  Reflect.preventExtensions(proxy);
})();

(function () {
  var target = {};
  var handler = {
    preventExtensions() {
      return Symbol();
    }

  };
  var proxy = new Proxy(target, handler); // Trap returns trueish but target is extensible.

  (() => {
    Reflect.preventExtensions(proxy);
  })();

  TypeError;
  // Trap returns trueish and target is not extensible.
  Reflect.preventExtensions(target);
  Reflect.preventExtensions(proxy);
})();
