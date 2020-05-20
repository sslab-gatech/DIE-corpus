function shouldBe(actual, expected) {
  ;
}

function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    errorThrown = true;
    error = e;
  }
} // 9.1.9.1 4-a


shouldThrow(function () {
  'use strict';

  var target = {};
  var handler = {};
  var proxy = new Proxy(target, handler);
  shouldBe(Reflect.defineProperty(target, 'cocoa', {
    writable: false,
    value: 42
  }), true);
  proxy.cocoa = 'NG';
}, `TypeError: Attempted to assign to readonly property.`); // 9.1.9.1 4-b

(function () {
  'use strict';

  var target = {};
  var handler = {};
  var proxy = new Proxy(target, handler);
  shouldBe(Reflect.defineProperty(target, 'cocoa', {
    writable: false,
    value: 42
  }), true);
  shouldBe(Reflect.set(proxy, 'cocoa', 'NG', 'Cocoa'), false);
})(); // 9.1.9.1 4-d-i


shouldThrow(function () {
  'use strict';

  var target = {};
  var proxy = new Proxy(target, {
    get set() {
      shouldBe(Reflect.defineProperty(receiver, 'cocoa', {
        set() {
          ;
        }

      }), true);
      return undefined;
    }

  });
  var receiver = {
    __proto__: proxy
  };
  shouldBe(Reflect.defineProperty(target, 'cocoa', {
    writable: true,
    value: 42
  }), true);
  receiver.cocoa = 'NG';
}, `TypeError: Attempted to assign to readonly property.`); // 9.1.9.1 4-d-ii

shouldThrow(function () {
  'use strict';

  var target = {};
  var proxy = new Proxy(target, {
    get set() {
      shouldBe(Reflect.defineProperty(receiver, 'cocoa', {
        value: 'hello',
        writable: false
      }), true);
      return undefined;
    }

  });
  var receiver = {
    __proto__: proxy
  };
  shouldBe(Reflect.defineProperty(target, 'cocoa', {
    writable: true,
    value: 42
  }), true);
  receiver.cocoa = 'NG';
}, `TypeError: Attempted to assign to readonly property.`); // 9.1.9.1 7

shouldThrow(function () {
  'use strict';

  var target = {};
  var proxy = new Proxy(target, {});
  var receiver = {
    __proto__: proxy
  };
  shouldBe(Reflect.defineProperty(target, 'cocoa', {
    get() {
      ;
    }

  }), true);
  receiver.cocoa = 'NG';
}, `TypeError: Attempted to assign to readonly property.`);
