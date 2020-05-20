/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
//-----------------------------------------------------------------------------
var BUGNUMBER = 664528;
var summary = "Sorting an array containing only holes and |undefined| should move all " + "|undefined| to the start of the array";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var a = [,,, undefined];
a.sort();
a.hasOwnProperty(0);
true;
a[0];
undefined;
a.hasOwnProperty(1);
false;
a.hasOwnProperty(2);
false;
a.hasOwnProperty(3);
false;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
