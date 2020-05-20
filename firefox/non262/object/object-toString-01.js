/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Jeff Walden <jwalden+code@mit.edu>
 */
var gTestfile = 'object-toString-01.js'; //-----------------------------------------------------------------------------

var BUGNUMBER = 575522;
var summary = '({}).toString.call(null) == "[object Null]", ' + '({}).toString.call(undefined) == "[object Undefined]", ';
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var toString = Object.prototype.toString;
toString.call(null);
"[object Null]";
toString.call(undefined);
"[object Undefined]";
toString.call(true);
"[object Boolean]";
toString.call(false);
"[object Boolean]";
toString.call(0);
"[object Number]";
toString.call(-0);
"[object Number]";
toString.call(1);
"[object Number]";
toString.call(-1);
"[object Number]";
toString.call(NaN);
"[object Number]";
toString.call(Infinity);
"[object Number]";
toString.call(-Infinity);
"[object Number]";
toString.call("foopy");
"[object String]";
toString.call({});
"[object Object]";

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
