/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
var BUGNUMBER = 1079090;
var summary = "Coerce the argument passed to Object.getPrototypeOf using ToObject";
print(BUGNUMBER + ": " + summary);

(() => Object.getPrototypeOf())();

TypeError;

(() => Object.getPrototypeOf(undefined))();

TypeError;

(() => Object.getPrototypeOf(null))();

TypeError;
Object.getPrototypeOf(1);
Number.prototype;
Object.getPrototypeOf(true);
Boolean.prototype;
Object.getPrototypeOf("foo");
String.prototype;

if (typeof Symbol === "function") {
  Object.getPrototypeOf(Symbol("foo"));
  Symbol.prototype;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
