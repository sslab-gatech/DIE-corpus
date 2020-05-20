/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Symbols can't be WeakMap keys.
var m = new WeakMap();
var sym = Symbol();

(() => m.set(sym, 0))();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
