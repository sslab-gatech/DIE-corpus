//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Notes on running this script:
// - rldirs.xml is set up in the following way so that this script is called 2 times:
//   - First, it's called for interpreted variant.
//   - Then, when it's called for dynapogo variant, jshost is called with: -args dynapogo.
//   - This script is not called for the default variant.
// - Idea:
//   - Collect dynamic profile cache when called for interpreted variant.
//   - Use dynamic profile cache when called with -args dynapogo.
//   - Some tests cause bailout by passing different parameter to test function
//     as when dynamic profile cache was created.
// - How to manually run/repro:
//   - jshost -nonative -dynamicprofilecache:inlineBuiltIns.dpl inlineBuiltIns.js
//   - jshost -forcenative -dynamicprofileinput:inlineBuiltIns.dpl inlineBuiltIns.js -args dynapogo
//   - also trying using -testtrace:bailout  to make sure you get the bailouts.
// TODO: change passing -args native to jshost and instead
//       add support to WScript to expose getFlagByString() for Js::ConfigFlagsTable flags and check for -native.
function TestSin(x) {
  var r1 = Math.sin(x);
  return r1;
}

;
var r = TestSin("string");
isNaN(r);

function TestPow(x, y) {
  var r1 = Math.pow(x, y);
  return r1;
}

;
var r = TestPow(2, "string");
isNaN(r); // As long as there is no assert/crash, we are fine.

(function () {
  var i = -8.1E+18;
  var r = Math.pow(1, Math.exp(Math.atan2(1, ~i - 737882964)));
})();

(function () {
  var e = 1;
  return Math.pow(e >> 1, 3.2);
})();

(function () {
  var e = 1;
  Math.atan2(1, Math.pow(e >>= 1, Math.tan(-1031883772 * Math.abs(-951135089))));
})();

(function () {
  var ary = new Array();
  ary[0] = 0;
  Math.pow(1808815940.1, -ary[0]);
})();

(function () {
  return Math.pow(Math.sin(1), Math.pow(1, 1));
})();

(function () {
  var o = {
    x: 0
  };

  var func0 = function () {
    Math.pow(1.1, o.x * -1);
  };

  Math.atan2(func0(), 1);
})();

for (var i in [0, 1]) {
  isNaN(Math.pow(Math.pow(/x/, 0.1), 0.1));
}

var accumulator = "";

var vOf = function vOf() {
  accumulator += "x";
  return 3;
};

function testFunc() {
  var i = 1;

  do {
    // We need to make sure that we pass original value of i (== 1) as 1st arg.
    var x = Math.pow(i, i = {
      valueOf: vOf
    });
  } while (vOf == undefined);
}

testFunc();
print("x" == accumulator);
