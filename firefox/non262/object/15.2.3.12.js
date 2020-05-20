/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/* Object.isFrozen */
Object.isFrozen({});
false;
Object.isFrozen(Object.preventExtensions({}));
true;
var o = Object.defineProperty({}, 'x', {
  writable: true,
  configurable: true
});
Object.preventExtensions(o);
Object.isFrozen(o);
false;
var o = Object.defineProperty({}, 'x', {
  writable: false,
  configurable: true
});
Object.preventExtensions(o);
Object.isFrozen(o);
false;
var o = Object.defineProperty({}, 'x', {
  writable: true,
  configurable: false
});
Object.preventExtensions(o);
Object.isFrozen(o);
false;
var o = Object.defineProperty({}, 'x', {
  writable: false,
  configurable: false
});
Object.isFrozen(o);
false;
var o = Object.defineProperty({}, 'x', {
  writable: false,
  configurable: false
});
Object.preventExtensions(o);
Object.isFrozen(o);
true;
var o = Object.defineProperties({}, {
  x: {
    writable: true,
    configurable: true
  },
  y: {
    writable: false,
    configurable: false
  }
});
Object.preventExtensions(o);
Object.isFrozen(o);
false;
var o = Object.defineProperties({}, {
  x: {
    writable: false,
    configurable: false
  },
  y: {
    writable: true,
    configurable: true
  }
});
Object.preventExtensions(o);
Object.isFrozen(o);
false;
var o = Object.defineProperties({}, {
  x: {
    writable: true,
    configurable: true
  },
  y: {
    writable: true,
    configurable: true
  }
});
Object.preventExtensions(o);
Object.isFrozen(o);
false;
reportCompare(true, true);
