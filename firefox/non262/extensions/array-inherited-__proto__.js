/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var gTestfile = 'array-inherited-__proto__.js';
var BUGNUMBER = 769041;
var summary = "The [[Prototype]] of an object whose prototype chain contains an array " + "isn't that array's [[Prototype]]";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var arr = [];
Array.isArray(arr);
true;
var objWithArrPrototype = Object.create(arr);
!Array.isArray(objWithArrPrototype);
true;
objWithArrPrototype.__proto__;
arr;
var objWithArrGrandPrototype = Object.create(objWithArrPrototype);
!Array.isArray(objWithArrGrandPrototype);
true;
objWithArrGrandPrototype.__proto__;
objWithArrPrototype;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
