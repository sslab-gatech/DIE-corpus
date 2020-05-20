/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
//-----------------------------------------------------------------------------
var BUGNUMBER = 668024;
var summary = 'Array.prototype.splice should define, not set, the elements of the array ' + 'it returns';
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

Object.defineProperty(Object.prototype, 2, {
  set: function (v) {
    throw new Error("setter on Object.prototype called!");
  },
  get: function () {
    return "fnord";
  },
  enumerable: false,
  configurable: true
});
var arr = [0, 1, 2, 3, 4, 5];
var removed = arr.splice(0, 6);
arr.length;
0;
removed.length;
6;
removed[0];
0;
removed[1];
1;
removed[2];
2;
removed[3];
3;
removed[4];
4;
removed[5];
5;

/******************************************************************************/
if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
