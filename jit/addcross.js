//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//
// This test includes Date.toString output. Don't use a baseline.
//
function foo() {
  ;
}

var all = [undefined, null, true, false, new Boolean(true), new Boolean(false), NaN, +0, -0, 0, 1, 10.0, 10.1, Number.MAX_VALUE, Number.MIN_VALUE, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, new Number(NaN), new Number(+0), new Number(-0), new Number(0), new Number(1), new Number(10.0), new Number(10.1), new Number(Number.MAX_VALUE), new Number(Number.MIN_VALUE), new Number(Number.NaN), new Number(Number.POSITIVE_INFINITY), new Number(Number.NEGATIVE_INFINITY), "", "hello", "hel" + "lo", new String(""), new String("hello"), new String("he" + "llo"), new Object(), [1, 2, 3], new Object(), [1, 2, 3], foo, new Date("2011-12-14T12:47:42.658Z")];

function addcross(a1, a2) {
  for (var i = 0; i < a1.length; ++i) {
    for (var j = 0; j < a2.length; ++j) {
      print("a[" + i + "](" + a1[i] + ") + a[" + j + "](" + a2[j] + ") = " + (a1[i] + a2[j]));
    }
  }
}

print("==== self var + crosscontext var ====");
addcross(this.all, all);
print();
print("==== crosscontext var + self var ====");
addcross(all, this.all);
