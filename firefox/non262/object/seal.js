/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
var BUGNUMBER = 1075294;
var summary = "Object.seal() should return its argument with no conversion when the argument is a primitive value";
print(BUGNUMBER + ": " + summary);
Object.seal();
undefined;
Object.seal(undefined);
undefined;
Object.seal(null);
null;
Object.seal(1);
1;
Object.seal("foo");
"foo";
Object.seal(true);
true;

if (typeof Symbol === "function") {
  Object.seal(Symbol.for("foo"));
  Symbol.for("foo");
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
