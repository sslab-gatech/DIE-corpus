/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var BUGNUMBER = 1060873;
var summary = "Object.isExtensible() should return false when given primitive values as input";
print(BUGNUMBER + ": " + summary);
Object.isExtensible();
false;
Object.isExtensible(undefined);
false;
Object.isExtensible(null);
false;
Object.isExtensible(1);
false;
Object.isExtensible("foo");
false;
Object.isExtensible(true);
false;

if (typeof Symbol === "function") {
  Object.isExtensible(Symbol());
  false;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
