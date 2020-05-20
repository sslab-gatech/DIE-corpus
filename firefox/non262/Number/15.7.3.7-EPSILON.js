// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 885798;
var summary = "ES6 (draft May 2013) 15.7.3.7 Number.EPSILON";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/
// Test value

Number.EPSILON;
Math.pow(2, -52);
// Test property attributes
var descriptor = Object.getOwnPropertyDescriptor(Number, 'EPSILON');
descriptor.writable;
false;
descriptor.configurable;
false;
descriptor.enumerable;
false;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
