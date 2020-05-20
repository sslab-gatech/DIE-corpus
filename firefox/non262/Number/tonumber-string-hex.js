/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommonn.org/licenses/publicdomain/
 */
var BUGNUMBER = 872853;
var summary = 'Various tests of ToNumber(string), particularly +"0x" being NaN';
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

+"0x";
NaN;
+"\t0x";
NaN;
+"0x\n";
NaN;
+"\n0x\t";
NaN;
+"0x0";
0;
+"0xa";
10;
+"0xff";
255;
+"-0x";
NaN;
+"-0xa";
NaN;
+"-0xff";
NaN;
+"0xInfinity";
NaN;
+"+Infinity";
Infinity;
+"-Infinity";
-Infinity;
+"\t+Infinity";
Infinity;
+"-Infinity\n";
-Infinity;
+"+ Infinity";
NaN;
+"- Infinity";
NaN;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
