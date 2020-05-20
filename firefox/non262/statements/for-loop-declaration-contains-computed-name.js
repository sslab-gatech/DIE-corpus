/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
var gTestfile = "for-loop-declaration-contains-computed-name.js";
var BUGNUMBER = 1233767;
var summary = "Support computed property names in destructuring declarations in " + "for-in/of loop heads";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var count;
count = 0;

for (var {
  [5]: x,
  [x]: y
} of [{
  5: 42,
  42: "hi"
}, {
  5: 17,
  17: 'fnord'
}]) {
  if (count === 0) {
    x;
    42;
    y;
    "hi";
  } else {
    x;
    17;
    y;
    "fnord";
  }

  count++;
}

count = 0;

for (var {
  length: x,
  [x - 1]: y
} in "foo") {
  x;
  1;
  "" + count;
  y;
  count++;
}
/******************************************************************************/


if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
