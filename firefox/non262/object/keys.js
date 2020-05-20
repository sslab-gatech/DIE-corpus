/*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */
var BUGNUMBER = 1038545;
var summary = "Coerce the argument passed to Object.keys using ToObject";
print(BUGNUMBER + ": " + summary);

(() => Object.keys())();

TypeError;

(() => Object.keys(undefined))();

TypeError;

(() => Object.keys(null))();

TypeError;
Object.keys(1);
[];
Object.keys(true);
[];

if (typeof Symbol === "function") {
  Object.keys(Symbol("foo"));
  [];
}

Object.keys("foo");
["0", "1", "2"];

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
