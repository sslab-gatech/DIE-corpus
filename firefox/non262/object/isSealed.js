/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
var BUGNUMBER = 1062860;
var summary = "Object.isSealed() should return true when given primitive values as input";
print(BUGNUMBER + ": " + summary);
Object.isSealed();
true;
Object.isSealed(undefined);
true;
Object.isSealed(null);
true;
Object.isSealed(1);
true;
Object.isSealed("foo");
true;
Object.isSealed(true);
true;

if (typeof Symbol === "function") {
  Object.isSealed(Symbol());
  true;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
