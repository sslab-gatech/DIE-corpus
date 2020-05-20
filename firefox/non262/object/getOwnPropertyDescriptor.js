/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
var BUGNUMBER = 1079188;
var summary = "Coerce the argument passed to Object.getOwnPropertyDescriptor using ToObject";
print(BUGNUMBER + ": " + summary);

(() => Object.getOwnPropertyDescriptor())();

TypeError;

(() => Object.getOwnPropertyDescriptor(undefined))();

TypeError;

(() => Object.getOwnPropertyDescriptor(null))();

TypeError;
Object.getOwnPropertyDescriptor(1);
Object.getOwnPropertyDescriptor(true);

if (typeof Symbol === "function") {
  Object.getOwnPropertyDescriptor(Symbol("foo"));
}

Object.getOwnPropertyDescriptor("foo", "length");
({
  value: 3,
  writable: false,
  enumerable: false,
  configurable: false
});
Object.getOwnPropertyDescriptor("foo", 0);
({
  value: "f",
  writable: false,
  enumerable: true,
  configurable: false
});

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
