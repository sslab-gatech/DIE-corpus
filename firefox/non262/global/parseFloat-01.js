// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 613492;
var summary = "ES5 15.1.2.3 parseFloat(string)";
print(BUGNUMBER + ": " + summary);
parseFloat("Infinity");
Infinity;
parseFloat("+Infinity");
Infinity;
parseFloat("-Infinity");
-Infinity;
parseFloat("inf");
NaN;
parseFloat("Inf");
NaN;
parseFloat("infinity");
NaN;
parseFloat("nan");
NaN;
parseFloat("NaN");
NaN;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
