/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var gTestfile = 'isPrototypeOf.js';
var BUGNUMBER = 619283;
var summary = "Object.prototype.isPrototypeOf";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

function expectThrowTypeError(fun) {
  try {
    var r = fun();
    throw new Error("didn't throw TypeError, returned " + r);
  } catch (e) {
    e instanceof TypeError;
    true;
    "didn't throw TypeError, got: " + e;
  }
}

var isPrototypeOf = Object.prototype.isPrototypeOf;
/*
 * 1. If V is not an Object, return false.
 */

isPrototypeOf();
false;
isPrototypeOf(1);
false;
isPrototypeOf(Number.MAX_VALUE);
false;
isPrototypeOf(NaN);
false;
isPrototypeOf("");
false;
isPrototypeOf("sesquicentennial");
false;
isPrototypeOf(true);
false;
isPrototypeOf(false);
false;
isPrototypeOf(0.72);
false;
isPrototypeOf(undefined);
false;
isPrototypeOf(null);
false;

/*
 * 2. Let O be the result of calling ToObject passing the this value as the
 *    argument.
 */
var protoGlobal = Object.create(this);
expectThrowTypeError(function () {
  isPrototypeOf.call(null, {});
});
expectThrowTypeError(function () {
  isPrototypeOf.call(undefined, {});
});
expectThrowTypeError(function () {
  isPrototypeOf({});
});
expectThrowTypeError(function () {
  isPrototypeOf.call(null, protoGlobal);
});
expectThrowTypeError(function () {
  isPrototypeOf.call(undefined, protoGlobal);
});
expectThrowTypeError(function () {
  isPrototypeOf(protoGlobal);
});
/*
 * 3. Repeat
 */

/*
 * 3a. Let V be the value of the [[Prototype]] internal property of V.
 * 3b. If V is null, return false.
 */

Object.prototype.isPrototypeOf(Object.prototype);
false;
String.prototype.isPrototypeOf({});
false;
Object.prototype.isPrototypeOf(Object.create(null));
false;
Object.prototype.isPrototypeOf({});
true;
this.isPrototypeOf(protoGlobal);
true;
Object.prototype.isPrototypeOf({});
true;
Object.prototype.isPrototypeOf(new Number(17));
true;
Object.prototype.isPrototypeOf(function () {
  ;
});
true;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
