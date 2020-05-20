// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testNonConstructable() {
  var proxy = new Proxy({}, {});

  (function () {
    new proxy();
  })();

  TypeError;
  var proxy2 = new Proxy(proxy, {});

  (function () {
    proxy2();
  })();

  TypeError;
})();

(function testFailingConstructRevoked() {
  var pair = Proxy.revocable(Array, {});
  var instance = new pair.proxy();
  pair.revoke();

  (function () {
    new pair.proxy();
  })();

  TypeError;
})();

(function testFailingGetTrap() {
  var handler = {
    get() {
      throw TypeError();
    }

  };
  var proxy = new Proxy({}, {});
  var proxy2 = new Proxy({}, proxy);

  (function () {
    new proxy2();
  })();

  TypeError;
})();

(function testConstructFallback() {
  var called = false;

  function Target() {
    called = true;
    this.property1 = 'value1';
  }

  ;
  Target.prototype = {};
  var proxy = new Proxy(Target, {});
  called;
  var instance = new proxy();
  called;
  'value1';
  instance.property1;
  Target.prototype;
  Reflect.getPrototypeOf(instance);
  var proxy2 = new Proxy(proxy, {});
  called = false;
  var instance2 = new proxy2();
  called;
  'value1';
  instance2.property1;
  Target.prototype;
  Reflect.getPrototypeOf(instance);
})();

(function testConstructTrapDirectReturn() {
  function Target(a, b) {
    this.sum = a + b;
  }

  ;
  var handler = {
    construct(t, c, args) {
      return {
        sum: 42
      };
    }

  };
  var proxy = new Proxy(Target, handler);
  42;
  new proxy(1, 2).sum;
})();

(function testConstructTrap() {
  function Target(arg1, arg2) {
    this.arg1 = arg1;
    this.arg2 = arg2;
  }

  var seen_target, seen_arguments, seen_new_target;
  var handler = {
    construct(target, args, new_target) {
      seen_target = target;
      seen_arguments = args;
      seen_new_target = new_target;
      return Reflect.construct(target, args, new_target);
    }

  };
  var proxy = new Proxy(Target, handler);
  var instance = new proxy('a', 'b');
  Target();
  seen_target;
  ['a', 'b'];
  seen_arguments;
  proxy;
  seen_new_target;
  'a';
  instance.arg1;
  'b';
  instance.arg2;
  var instance2 = Reflect.construct(proxy, ['a1', 'b1'], Array);
  Target();
  seen_target;
  ['a1', 'b1'];
  seen_arguments;
  Array;
  seen_new_target;
  'a1';
  instance2.arg1;
  'b1';
  instance2.arg2;
})();

(function testConstructTrapNonConstructor() {
  function target() {
    ;
  }

  ;
  var p = new Proxy(target, {
    construct: function () {
      return 0;
    }
  });

  (function () {
    new p();
  })();

  TypeError;
  var handler = {
    construct(target, args, new_target) {
      return args;
    }

  }; // Proxy and handler are from this realm.

  var proxy = new Proxy(Array, handler);
  var result = new proxy();
  Array.prototype;
  Reflect.getPrototypeOf(result);
  // Proxy is from this realm, handler is from realm1.
  var otherProxy = new OtherProxy(Array, handler);
  var otherResult = new otherProxy();
  Array.prototype;
  Reflect.getPrototypeOf(otherResult);
  var otherResult2 = new otherProxy2();
  Array.prototype;
  Reflect.getPrototypeOf(otherResult2);
})();

(function testReflectConstructCrossReal() {
  // realm of the Reflect.construct function.
  Array.prototype;
  Reflect.getPrototypeOf(result);
  Reflect.getPrototypeOf(result2);
  Reflect.getPrototypeOf(result3);
  Reflect.getPrototypeOf(result4);
})();
