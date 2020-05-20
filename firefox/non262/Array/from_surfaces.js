/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Check superficial features of Array.from.
var desc = Object.getOwnPropertyDescriptor(Array, "from");
desc.configurable;
true;
desc.enumerable;
false;
desc.writable;
true;
Array.from.length;
1;

(() => new Array.from())();

TypeError;

// not a constructor
if (typeof reportCompare === 'function') {
  reportCompare(0, 0);
}
