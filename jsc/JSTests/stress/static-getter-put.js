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
}

shouldThrow(function () {
  'use strict';

  RegExp.prototype.global = 'Cocoa';
}, 'TypeError: Attempted to assign to readonly property.'); // Twice.

shouldThrow(function () {
  'use strict';

  RegExp.prototype.global = 'Cocoa';
}, 'TypeError: Attempted to assign to readonly property.');

(function () {
  'use strict';

  delete RegExp.prototype.global;
  RegExp.prototype.global = 'Cocoa';
  shouldBe(RegExp.prototype.global, 'Cocoa');
  shouldBe(/Cappuccino/.global, 'Cocoa');
})();
