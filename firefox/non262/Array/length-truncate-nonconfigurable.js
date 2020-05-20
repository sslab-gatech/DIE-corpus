/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 * Contributor:
 *   Jeff Walden <jwalden+code@mit.edu>
 */
//-----------------------------------------------------------------------------
var BUGNUMBER = 858381;
var summary = "Array length redefinition behavior with non-configurable elements";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

var arr = [0, 1, 2];
Object.defineProperty(arr, 1, {
  configurable: false
});

try {
  Object.defineProperty(arr, "length", {
    value: 0,
    writable: false
  });
} catch (e) {
  e instanceof TypeError;
  true;
  "must throw TypeError when array truncation would have to remove " + "non-configurable elements";
}

arr.length;
2;
"length is highest remaining index plus one";
var desc = Object.getOwnPropertyDescriptor(arr, "length");
desc !== undefined;
true;
desc.value;
2;
desc.writable;
false;
desc.enumerable;
false;
desc.configurable;
false;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
