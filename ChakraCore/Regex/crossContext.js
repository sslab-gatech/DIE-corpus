//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = {
  're': /this/,
  'reg': /this/g,
  'rep': /(t)his/,
  'str': "this is a string.",
  'strObject': new String("this is a string.")
}; // �all this with -nonative
// Win8 628808: the following cases used to cause an assertion.

var str = "this is a sting";
var result = str.match(x.re);
var result = str.replace(x.re, null);
var result = str.split(x.re, 1);
var result = str.search(x.re);
var result = x.str.match(x.re);
var result = x.str.replace(x.re, null);
var result = x.str.split(x.re, 1);
var result = x.str.search(x.re);
var result = x.strObject.match(x.re);
var result = x.strObject.replace(x.re, null);
var result = x.strObject.split(x.re, 1);
var result = x.strObject.search(x.re);
var result = String.prototype.replace.call(x.strObject, /forceNoMatch/, ""); // The following cases are not impacted by Win8 628808, but it's worth verifying them for regressions in RegexHelper

var result = x.str.replace(x.str, "I");
var result = x.re.exec(x.str);
var result = x.str.split(x.str, 1);
var result = x.strObject.replace(x.strObject, "I");
var result = x.re.exec(x.strObject);
var result = x.strObject.split(x.strObject, 1);
x.reg.exec("_this_");
print(5, x.reg.lastIndex, "wrong x.reg.lastIndex");
"this".match(x.rep);
print("t", RegExp.$1, "RegExp.$1 in local context wasn't updated to the capture group");
var result = "this".match(x.re);
var expected = Array;
print(expected, result.constructor, "The result should be created in local context");
