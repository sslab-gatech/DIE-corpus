/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var gTestfile = '__proto__.js';
var BUGNUMBER = 770344;
var summary = "__proto__ as accessor";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var protoDesc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
protoDesc !== null;
true;
typeof protoDesc;
"object";
protoDesc.hasOwnProperty("get");
true;
protoDesc.hasOwnProperty("set");
true;
protoDesc.hasOwnProperty("enumerable");
true;
protoDesc.hasOwnProperty("configurable");
true;
protoDesc.hasOwnProperty("value");
false;
protoDesc.hasOwnProperty("writable");
false;
protoDesc.configurable;
true;
protoDesc.enumerable;
false;
typeof protoDesc.get;
"function";
protoDesc.get + "";
typeof protoDesc.set;
"function";
protoDesc.set + "";
delete Object.prototype.__proto__;
true;
Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
undefined;
var obj = {};
obj.__proto__ = 5;
Object.getPrototypeOf(obj);
Object.prototype;
obj.hasOwnProperty("__proto__");
true;
var desc = Object.getOwnPropertyDescriptor(obj, "__proto__");
desc !== null;
true;
typeof desc;
"object";
desc.value;
5;
desc.writable;
true;
desc.enumerable;
true;
desc.configurable;
true;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
