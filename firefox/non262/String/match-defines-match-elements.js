/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var BUGNUMBER = 677820;
var summary = "String.prototype.match must define matches on the returned array, not set " + "them";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var called = false;

function setterFunction(v) {
  called = true;
}

function getterFunction(v) {
  return "getter";
}

Object.defineProperty(Array.prototype, 1, {
  get: getterFunction,
  set: setterFunction
});
called;
false;
var matches = "abcdef".match(/./g);
called;
false;
matches.length;
6;
matches[0];
"a";
matches[1];
"b";
matches[2];
"c";
matches[3];
"d";
matches[4];
"e";
matches[5];
"f";
var desc = Object.getOwnPropertyDescriptor(Array.prototype, 1);
desc.get;
getterFunction();
desc.set;
setterFunction();
desc.enumerable;
false;
desc.configurable;
false;
[][1];
"getter";
called;
false;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
