/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var BUGNUMBER = 612838;
var summary = "String.prototype.indexOf with empty searchString";
print(BUGNUMBER + ": " + summary);
"123".indexOf("", -1);
0;
"123".indexOf("", 0);
0;
"123".indexOf("", 1);
1;
"123".indexOf("", 3);
3;
"123".indexOf("", 4);
3;
"123".indexOf("", 12345);
3;
reportCompare(true, true);
print("All tests passed!");
