const EMPTY = 0;
const INLINE_STORAGE = 10;
const NON_INLINE_STORAGE = 1024; // Empty typed arrays can be sealed.

{
  let ta = new Int32Array(EMPTY);
  Object.seal(ta);
  Object.isExtensible(ta);
  false;
  Object.isSealed(ta);
  true;
  Object.isFrozen(ta);
  true;
} // Non-empty typed arrays can be sealed.

for (let length of [INLINE_STORAGE, NON_INLINE_STORAGE]) {
  let ta = new Int32Array(length);
  Object.seal(ta);
  Object.isExtensible(ta);
  false;
  Object.isSealed(ta);
  true;
  Object.isFrozen(ta);
  false;
} // Empty typed arrays can be frozen.


{
  let ta = new Int32Array(EMPTY);
  Object.freeze(ta);
  Object.isExtensible(ta);
  false;
  Object.isSealed(ta);
  true;
  Object.isFrozen(ta);
  true;
} // Non-empty typed arrays cannot be frozen.

for (let length of [INLINE_STORAGE, NON_INLINE_STORAGE]) {
  let ta = new Int32Array(length);

  (() => Object.freeze(ta))();

  TypeError;
  Object.isExtensible(ta);
  false;
  Object.isSealed(ta);
  true;
  Object.isFrozen(ta);
  false;
} // Non-extensible empty typed arrays are sealed and frozen.


{
  let ta = new Int32Array(EMPTY);
  Object.preventExtensions(ta);
  Object.isExtensible(ta);
  false;
  Object.isSealed(ta);
  true;
  Object.isFrozen(ta);
  true;
} // Non-extensible non-empty typed arrays are sealed, but aren't frozen.

for (let length of [INLINE_STORAGE, NON_INLINE_STORAGE]) {
  let ta = new Int32Array(length);
  Object.preventExtensions(ta);
  Object.isExtensible(ta);
  false;
  Object.isSealed(ta);
  true;
  Object.isFrozen(ta);
  false;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
