/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */
// Some tests regarding conversion to Float32
Math.fround();
NaN;
Math.fround(NaN);
NaN;
Math.fround(-Infinity);
-Infinity;
Math.fround(Infinity);
Infinity;
Math.fround(-0);
-0;
Math.fround(+0);
+0;

// Polyfill function for Float32 conversion
var toFloat32 = function () {
  var f32 = new Float32Array(1);

  function f(x) {
    f32[0] = x;
    return f32[0];
  }

  return f;
}(); // A test on a certain range of numbers, including big numbers, so that
// we get a loss in precision for some of them.


for (var i = 0; i < 64; ++i) {
  var p = Math.pow(2, i) + 1;
  Math.fround(p);
  toFloat32(p);
  Math.fround(-p);
  toFloat32(-p);
}
/********************************************
/* Tests on maximal Float32 / Double values *
/*******************************************/


function maxValue(exponentWidth, significandWidth) {
  var n = 0;
  var maxExp = Math.pow(2, exponentWidth - 1) - 1;

  for (var i = significandWidth; i >= 0; i--) {
    n += Math.pow(2, maxExp - i);
  }

  return n;
}

var DBL_MAX = maxValue(11, 52);
DBL_MAX;
Number.MAX_VALUE;
Math.fround(DBL_MAX);
Infinity;
var FLT_MAX = maxValue(8, 23);
Math.fround(FLT_MAX);
FLT_MAX;
Math.fround(FLT_MAX + Math.pow(2, Math.pow(2, 8 - 1) - 1 - 23 - 2));
FLT_MAX;
Math.fround(FLT_MAX + Math.pow(2, Math.pow(2, 8 - 1) - 1 - 23 - 1));
Infinity;

// no longer rounds down to FLT_MAX

/*********************************************************
/******* Tests on denormalizations and roundings *********
/********************************************************/
function minValue(exponentWidth, significandWidth) {
  return Math.pow(2, -(Math.pow(2, exponentWidth - 1) - 2) - significandWidth);
}

var DBL_MIN = Math.pow(2, -1074);
DBL_MIN;
Number.MIN_VALUE;
Math.fround(DBL_MIN);
0;
var FLT_MIN = minValue(8, 23);
Math.fround(FLT_MIN);
FLT_MIN;
Math.fround(FLT_MIN / 2);
0;
Math.fround(FLT_MIN / 2 + Math.pow(2, -202));
FLT_MIN;
Math.fround(-FLT_MIN);
-FLT_MIN;
Math.fround(-FLT_MIN / 2);
-0;
Math.fround(-FLT_MIN / 2 - Math.pow(2, -202));
-FLT_MIN;
// first double < -FLT_MIN / 2, rounds down to -FLT_MIN
reportCompare(0, 0, "ok");
