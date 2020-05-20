// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 886949;
var summary = "ES6 (draft May 2013) 15.7.3.10 Number.parseFloat(string)";
print(BUGNUMBER + ": " + summary);
Number.parseFloat("Infinity");
Infinity;
Number.parseFloat("+Infinity");
Infinity;
Number.parseFloat("-Infinity");
-Infinity;
Number.parseFloat("inf");
NaN;
Number.parseFloat("Inf");
NaN;
Number.parseFloat("infinity");
NaN;
Number.parseFloat("nan");
NaN;
Number.parseFloat("NaN");
NaN;
Number.parseFloat();
parseFloat;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
