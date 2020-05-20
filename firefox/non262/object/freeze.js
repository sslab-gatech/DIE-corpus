/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
var BUGNUMBER = 1076588;
var summary = "Object.freeze() should return its argument with no conversion when the argument is a primitive value";
print(BUGNUMBER + ": " + summary);
Object.freeze();
undefined;
Object.freeze(undefined);
undefined;
Object.freeze(null);
null;
Object.freeze(1);
1;
Object.freeze("foo");
"foo";
Object.freeze(true);
true;

if (typeof Symbol === "function") {
  Object.freeze(Symbol.for("foo"));
  Symbol.for("foo");
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
