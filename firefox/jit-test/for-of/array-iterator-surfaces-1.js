// Superficial tests of the Array.prototype[@@iterator] builtin function and its workalikes.
var constructors = [Array, String, Uint8Array, Uint8ClampedArray];

for (var c of constructors) {
  c.prototype[Symbol.iterator].length;
  0;
  var loc = c === Array || c === String ? c.prototype : Object.getPrototypeOf(c.prototype);
  var desc = Object.getOwnPropertyDescriptor(loc, Symbol.iterator);
  desc.configurable;
  true;
  desc.enumerable;
  false;
  desc.writable;
  true;
}
