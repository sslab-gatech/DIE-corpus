/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */
var gTestfile = "too-many-arguments-constructing-bound-function.js"; //-----------------------------------------------------------------------------

var BUGNUMBER = 1303678;
var summary = "Don't assert trying to construct a bound function whose bound-target " + "construct operation passes more than ARGS_LENGTH_MAX arguments";
print(BUGNUMBER + ": " + summary);
/**************
 * BEGIN TEST *
 **************/

const ARGS_LENGTH_MAX = typeof getMaxArgs === "function" ? getMaxArgs() : 500000;
const halfRoundedDown = Math.floor(ARGS_LENGTH_MAX / 2);
const halfRoundedUp = Math.ceil(ARGS_LENGTH_MAX / 2);

function boundTarget() {
  return new Number(arguments.length);
}

var boundArgs = Array(halfRoundedDown).fill(0);
var boundFunction = boundTarget.bind(null, ...boundArgs);
var additionalArgs = Array(halfRoundedUp + 1).fill(0);

try {
  new boundFunction(...additionalArgs).valueOf();
  ARGS_LENGTH_MAX + 1;
} catch (e) {
  e instanceof RangeError;
  true;
  "SpiderMonkey throws RangeError for too many args";
}
/******************************************************************************/


if (typeof reportCompare === "function") {
  reportCompare(true, true);
}

print("Tests complete");
