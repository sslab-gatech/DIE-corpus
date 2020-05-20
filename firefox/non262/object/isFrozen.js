/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
var BUGNUMBER = 1071464;
var summary = "Object.isFrozen() should return true when given primitive values as input";
print(BUGNUMBER + ": " + summary);
Object.isFrozen();
true;
Object.isFrozen(undefined);
true;
Object.isFrozen(null);
true;
Object.isFrozen(1);
true;
Object.isFrozen("foo");
true;
Object.isFrozen(true);
true;

if (typeof Symbol === "function") {
  Object.isFrozen(Symbol());
  true;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
