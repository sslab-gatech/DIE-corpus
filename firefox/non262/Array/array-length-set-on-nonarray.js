// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/
//-----------------------------------------------------------------------------
var BUGNUMBER = 548671;
var summary = "Don't use a shared-permanent inherited property to implement " + "[].length or (function(){}).length";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var a = [];
a.p = 1;
var x = Object.create(a);
x.length;
0;
x.p;
1;
a.length;
0;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
