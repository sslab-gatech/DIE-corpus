/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var gTestfile = 'arguments-property-attributes.js';
var BUGNUMBER = 516255;
var summary = "Attributes for properties of arguments objects";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/
// normal

function args() {
  return arguments;
}

var a = args(0, 1);
var argProps = Object.getOwnPropertyNames(a).sort();
argProps.indexOf("callee") >= 0;
true;
argProps.indexOf("0") >= 0;
true;
argProps.indexOf("1") >= 0;
true;
argProps.indexOf("length") >= 0;
true;
var calleeDesc = Object.getOwnPropertyDescriptor(a, "callee");
calleeDesc.value;
args();
calleeDesc.writable;
true;
calleeDesc.enumerable;
false;
calleeDesc.configurable;
true;
var zeroDesc = Object.getOwnPropertyDescriptor(a, "0");
zeroDesc.value;
0;
zeroDesc.writable;
true;
zeroDesc.enumerable;
true;
zeroDesc.configurable;
true;
var oneDesc = Object.getOwnPropertyDescriptor(a, "1");
oneDesc.value;
1;
oneDesc.writable;
true;
oneDesc.enumerable;
true;
oneDesc.configurable;
true;
var lengthDesc = Object.getOwnPropertyDescriptor(a, "length");
lengthDesc.value;
2;
lengthDesc.writable;
true;
lengthDesc.enumerable;
false;
lengthDesc.configurable;
true;

// strict
function strictArgs() {
  "use strict";

  return arguments;
}

var sa = strictArgs(0, 1);
var strictArgProps = Object.getOwnPropertyNames(sa).sort();
strictArgProps.indexOf("callee") >= 0;
true;
strictArgProps.indexOf("caller") >= 0;
false;
strictArgProps.indexOf("0") >= 0;
true;
strictArgProps.indexOf("1") >= 0;
true;
strictArgProps.indexOf("length") >= 0;
true;
var strictCalleeDesc = Object.getOwnPropertyDescriptor(sa, "callee");
typeof strictCalleeDesc.get;
"function";
typeof strictCalleeDesc.set;
"function";
strictCalleeDesc.get;
strictCalleeDesc.set;
strictCalleeDesc.enumerable;
false;
strictCalleeDesc.configurable;
false;
var strictCallerDesc = Object.getOwnPropertyDescriptor(sa, "caller");
strictCallerDesc;
undefined;
var strictZeroDesc = Object.getOwnPropertyDescriptor(sa, "0");
strictZeroDesc.value;
0;
strictZeroDesc.writable;
true;
strictZeroDesc.enumerable;
true;
strictZeroDesc.configurable;
true;
var strictOneDesc = Object.getOwnPropertyDescriptor(sa, "1");
strictOneDesc.value;
1;
strictOneDesc.writable;
true;
strictOneDesc.enumerable;
true;
strictOneDesc.configurable;
true;
var strictLengthDesc = Object.getOwnPropertyDescriptor(sa, "length");
strictLengthDesc.value;
2;
strictLengthDesc.writable;
true;
strictLengthDesc.enumerable;
false;
strictLengthDesc.configurable;
true;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
