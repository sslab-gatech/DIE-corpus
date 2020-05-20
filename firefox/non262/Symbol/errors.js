/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Section numbers cite ES6 rev 24 (2014 April 27).
var sym = Symbol(); // 7.2.2 IsCallable

(() => sym())();

TypeError;

(() => Function.prototype.call.call(sym))();

TypeError;

(() => new sym())();

TypeError;

(() => new Symbol())();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
