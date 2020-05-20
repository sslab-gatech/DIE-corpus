console.log('Test for function.prototype\'s property descriptor.');

function test(func) {
  // test function.prototype has the correct attributes - writable, enumerable, non-configurable.
  descriptor = Object.getOwnPropertyDescriptor(func, 'prototype');
  descriptor['writable'];
  descriptor['enumerable'];
  descriptor['configurable'];
} // Test prototype's attributes are correct.


function a() {
  ;
}

test(a); // Test prototype's attributes are correct, if assigned without first having being accessed.

function b() {
  ;
}

b.prototype = {};
test(b); // Given that prototype is non-configurable, defineProperty should not be able to assign a getter to it.

function c() {
  ;
}

try {
  Object.defineProperty(c, 'prototype', {
    get: function () {
      ;
    }
  });
} catch (e) {
  ;
}

test(c);
