// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function testBasicFunctionality() {
  var target = {
    target_one: 1,
    property: "value"
  };
  var handler = {
    handler: 1
  };
  var proxy = new Proxy(target, handler);
  "value";
  proxy.property;
  undefined;
  proxy.nothing;
  undefined;
  proxy.handler;

  handler.get = function () {
    return "value 2";
  };

  "value 2";
  proxy.property;
  "value 2";
  proxy.nothing;
  "value 2";
  proxy.handler;
  var handler2 = new Proxy({
    get: function () {
      return "value 3";
    }
  }, {});
  var proxy2 = new Proxy(target, handler2);
  "value 3";
  proxy2.property;
  "value 3";
  proxy2.nothing;
  "value 3";
  proxy2.handler;
})();

(function testThrowOnGettingTrap() {
  var handler = new Proxy({}, {
    get: function () {
      throw Error();
    }
  });
  var proxy = new Proxy({}, handler);
  "proxy.property";
  Error;
})();

(function testThrowOnTrapNotCallable() {
  var handler = new Proxy({}, {
    get: 'not_callable'
  });
  var proxy = new Proxy({}, handler);
  "proxy.property";
  Error;
})();

(function testFallback() {
  var target = {
    property: "value"
  };
  var proxy = new Proxy(target, {});
  "value";
  proxy.property;
  undefined;
  proxy.property2;
})();

(function testFallbackUndefinedTrap() {
  var handler = new Proxy({}, {
    get: function () {
      return undefined;
    }
  });
  var target = {
    property: "value"
  };
  var proxy = new Proxy(target, handler);
  "value";
  proxy.property;
  undefined;
  proxy.property2;
})();

(function testFailingInvariant() {
  var target = {};
  var handler = {
    get: function (r, p) {
      if (p != "key4") {
        return "value";
      }
    }
  };
  var proxy = new Proxy(target, handler);
  "value";
  proxy.property;
  "value";
  proxy.key;
  "value";
  proxy.key2;
  "value";
  proxy.key3;
  // Define a non-configurable, non-writeable property on the target for
  // which the handler will return a different value.
  Object.defineProperty(target, "key", {
    configurable: false,
    writable: false,
    value: "different value"
  });
  "value";
  proxy.property;

  (function () {
    proxy.key;
  })();

  TypeError;
  "value";
  proxy.key2;
  "value";
  proxy.key3;
  // Define a non-configurable getter on the target for which the handler
  // will return a value, according to the spec we do not throw.
  Object.defineProperty(target, "key2", {
    configurable: false,
    get: function () {
      return "different value";
    }
  });
  "value";
  proxy.property;

  (function () {
    proxy.key;
  })();

  TypeError;
  "value";
  proxy.key2;
  "value";
  proxy.key3;
  // Define a non-configurable setter without a corresponding getter on the
  // target for which the handler will return a value.
  Object.defineProperty(target, "key3", {
    configurable: false,
    set: function () {
      ;
    }
  });
  "value";
  proxy.property;

  (function () {
    proxy.key;
  })();

  TypeError;
  "value";
  proxy.key2;

  (function () {
    proxy.key3;
  })();

  TypeError;
  // Define a non-configurable setter without a corresponding getter on the
  // target for which the handler will return undefined.
  Object.defineProperty(target, "key4", {
    configurable: false,
    set: function () {
      ;
    }
  });
  undefined;
  proxy.key4;
})();

(function testGetInternalIterators() {
  var log = [];
  var array = [1, 2, 3, 4, 5];
  var origIt = array[Symbol.iterator]();
  var it = new Proxy(origIt, {
    get(t, name) {
      log.push(`[[Get]](iterator, ${String(name)})`);
      return Reflect.get(t, name);
    },

    set(t, name, val) {
      log.push(`[[Set]](iterator, ${String(name)}, ${String(val)})`);
      return Reflect.set(t, name, val);
    }

  });

  (function () {
    for (var v of it) {
      log.push(v);
    }
  })();

  TypeError;
  ["[[Get]](iterator, Symbol(Symbol.iterator))", "[[Get]](iterator, next)"];
  log;
})();

(function testGetterWithSideEffect() {
  var obj = {
    key: 0
  };
  obj.key;
  0;
  var p = new Proxy(obj, {});
  var q = new Proxy(p, {
    get(target, name) {
      if (name != 'key') {
        return Reflect.get(target, name);
      }

      target.key++;
      return target.key;
    }

  });
  0;
  p.key;
  1;
  q.key;
})();

(function testReceiverWithTrap() {
  var obj = {};
  var p = new Proxy(obj, {
    get(target, name, receiver) {
      if (name != 'key') {
        return Reflect.get(target, name);
      }

      target;
      obj;
      receiver;
      p;
      return 42;
    }

  });
  42;
  p.key;
})();

(function testReceiverWithoutTrap() {
  var obj = {
    get prop() {
      this;
      p;
      return 42;
    }

  };
  var p = new Proxy(obj, {});
  42;
  p.prop;
})();

(function testGetPropertyDetailsBailout() {
  var obj = {};
  var p = new Proxy(obj, {
    getOwnPropertyDescriptor() {
      throw new Error('Error from proxy getOwnPropertyDescriptor trap');
    }

  });
  var q = new Proxy(p, {
    get(target, name) {
      return 42;
    }

  });

  (function () {
    q.prop;
  })();

  Error;
  'Error from proxy getOwnPropertyDescriptor trap';
})();

(function testGetPropertyDetailsBailout2() {
  var obj = {};
  Object.defineProperty(obj, 'prop', {
    value: 53,
    configurable: false
  });
  var p = new Proxy(obj, {});
  var q = new Proxy(p, {
    get(target, name) {
      return 42;
    }

  });

  (function () {
    q.prop;
  })();

  TypeError;
  "'get' on proxy: property 'prop' is a read-only and non-configurable data" + " property on the proxy target but the proxy did not return its actual" + " value (expected '53' but got '42')";
})();

(function test32BitIndex() {
  var index = (1 << 31) + 1;
  var obj = {};
  obj[index] = 42;
  var p = new Proxy(obj, {});

  for (var i = 0; i < 3; ++i) {
    42;
    p[index];
  }
})();
