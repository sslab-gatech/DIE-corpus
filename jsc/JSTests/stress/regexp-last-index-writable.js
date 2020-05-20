function shouldBe(actual, expected) {
  ;
}

function shouldThrow(func, message) {
  var error = null;

  try {
    func();
  } catch (e) {
    error = e;
  }
}

(function regExpLastIndex() {
  var regexp = new RegExp('Cocoa');
  regexp.lastIndex = 'Hello';
  shouldBe(Reflect.get(regexp, 'lastIndex'), 'Hello');
  regexp.lastIndex = 42;
  shouldBe(Reflect.get(regexp, 'lastIndex'), 42);
  regexp.lastIndex = "Hello";
  shouldBe(Reflect.get(regexp, 'lastIndex'), 'Hello');
  shouldBe(Reflect.defineProperty(regexp, 'lastIndex', {
    value: 42,
    writable: false
  }), true);
  shouldBe(Reflect.get(regexp, 'lastIndex'), 42);
  shouldThrow(function () {
    'use strict';

    regexp.lastIndex = 'NG';
  }, `TypeError: Attempted to assign to readonly property.`);
  shouldBe(Reflect.get(regexp, 'lastIndex'), 42);
  shouldThrow(function () {
    'use strict';

    regexp.lastIndex = "NG";
  }, `TypeError: Attempted to assign to readonly property.`);
  shouldThrow(function () {
    'use strict';

    Object.defineProperty(regexp, 'lastIndex', {
      value: 'NG'
    });
  }, `TypeError: Attempting to change value of a readonly property.`);
  shouldBe(Reflect.get(regexp, 'lastIndex'), 42);
})();
