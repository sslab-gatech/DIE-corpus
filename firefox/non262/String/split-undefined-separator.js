/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var BUGNUMBER = 614608;
var summary = "String.prototype.split with undefined separator";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

function assertEqArr(a1, a2) {
  a1.length;
  a2.length;

  for (var i = 0; i < a1.length; i++) {
    a1[i];
    a2[i];
  }
}

var s = '--undefined--undefined--';
s.split(undefined, undefined);
[s];
s.split(undefined, -1);
[s];
s.split(undefined, 1);
[s];
s.split("undefined", 1);
["--"];
s.split("-", 0);
[];
s.split(undefined, 0);
[];
s.split(s, 0);
[];

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("All tests passed!");
