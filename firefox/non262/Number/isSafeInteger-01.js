// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 1003764;
var summary = "ES6 (draft Draft May 22, 2014) ES6 20.1.2.5 Number.isSafeInteger(number)";
print(BUGNUMBER + ": " + summary);
Number.isSafeInteger.length;
1;
Number.isSafeInteger({});
false;
Number.isSafeInteger(NaN);
false;
Number.isSafeInteger(+Infinity);
false;
Number.isSafeInteger(-Infinity);
false;
Number.isSafeInteger(-1);
true;
Number.isSafeInteger(+0);
true;
Number.isSafeInteger(-0);
true;
Number.isSafeInteger(1);
true;
Number.isSafeInteger(3.2);
false;
Number.isSafeInteger(Math.pow(2, 53) - 2);
true;
Number.isSafeInteger(Math.pow(2, 53) - 1);
true;
Number.isSafeInteger(Math.pow(2, 53));
false;
Number.isSafeInteger(Math.pow(2, 53) + 1);
false;
Number.isSafeInteger(Math.pow(2, 53) + 2);
false;
Number.isSafeInteger(-Math.pow(2, 53) - 2);
false;
Number.isSafeInteger(-Math.pow(2, 53) - 1);
false;
Number.isSafeInteger(-Math.pow(2, 53));
false;
Number.isSafeInteger(-Math.pow(2, 53) + 1);
true;
Number.isSafeInteger(-Math.pow(2, 53) + 2);
true;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
