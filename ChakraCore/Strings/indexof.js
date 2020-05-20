//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var str = "abbbagfedcabbba";
print(str.indexOf("abb"));
print(str.indexOf("abb", 1));
print(str.indexOf("abb", 2));
print(str.indexOf("bba", 3));
print(str.indexOf("bba", 4));
print(str.indexOf("xyz"));
print(str.indexOf("bgf"));
print(str.indexOf("acde"));
print(str.indexOf("edca"));
print(str.indexOf(""));
print(str.indexOf("", 11));
var str2 = "\0\0dcba\0";
print(str2.indexOf("\0\0"));
print(str2.indexOf("\0dc"));
print(str2.indexOf("ba\0"));
var str3 = "abb";
print(str3.indexOf("abbbagfedcabbba"));
var str4 = "\u0100\u0111\u0112\u0113";
print(str4.indexOf("\u0112\u0113")); //implicit calls

var a = 1;
var b = 2;
var obj = {
  toString: function () {
    a = 3;
    return "Hello World";
  }
};
a = b;
Object.prototype.indexOf = String.prototype.indexOf;
var f = obj.indexOf("e");
print(a);
