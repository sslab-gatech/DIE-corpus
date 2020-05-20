/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
var BUGNUMBER = 1073446;
var summary = "Object.preventExtensions() should return its argument with no conversion when the argument is a primitive value";
print(BUGNUMBER + ": " + summary);
Object.preventExtensions();
undefined;
Object.preventExtensions(undefined);
undefined;
Object.preventExtensions(null);
null;
Object.preventExtensions(1);
1;
Object.preventExtensions("foo");
"foo";
Object.preventExtensions(true);
true;

if (typeof Symbol === "function") {
  Object.preventExtensions(Symbol.for("foo"));
  Symbol.for("foo");
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
