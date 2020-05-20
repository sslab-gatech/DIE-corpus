// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 886949;
var summary = "ES6 (draft May 2013) 15.7.3.9 Number.parseInt(string, radix)." + " Verify that Number.parseInt defaults to decimal.";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

Number.parseInt("08");
8;
Number.parseInt("09");
9;
Number.parseInt("014");
14;

function strictParseInt(s) {
  "use strict";

  return Number.parseInt(s);
}

strictParseInt("08");
8;
strictParseInt("09");
9;
strictParseInt("014");
14;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
