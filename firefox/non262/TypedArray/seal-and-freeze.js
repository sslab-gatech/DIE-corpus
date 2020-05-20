"use strict"; // Seal

Object.isSealed(new Int32Array(2));
false;
Object.isSealed(new Int32Array(0));
false;
var array = new Int32Array(0);
Object.preventExtensions(array);
Object.isSealed(array);
true;
array = new Int32Array(1);
array.b = "test";
Object.preventExtensions(array);
Object.isSealed(array);
false;
Object.defineProperty(array, "b", {
  configurable: false
});
Object.isSealed(array);
true;
array = new Int32Array(2);
array.b = "test";
Object.seal(array);
Object.isSealed(array);
true;

(() => array.c = 15)();

TypeError;
Object.isFrozen(new Int32Array(2));
false;
Object.isFrozen(new Int32Array(0));
false;
// Empty non-extensible typed-array is trvially frozen
var array = new Int32Array(0);
Object.preventExtensions(array);
Object.isFrozen(array);
true;
array = new Int32Array(0);
array.b = "test";
Object.isFrozen(array);
false;
Object.preventExtensions(array);
Object.isFrozen(array);
false;
Object.defineProperty(array, "b", {
  configurable: false,
  writable: false
});
Object.isFrozen(array);
true;
// Non-empty typed arrays can never be frozen, because the elements stay writable
array = new Int32Array(1);

(() => Object.freeze(array))();

TypeError;
Object.isExtensible(array);
false;
Object.isFrozen(array);
false;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
