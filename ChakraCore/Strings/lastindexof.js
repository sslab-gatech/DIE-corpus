//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var str = "abbbacdefgabbba";
print(str.lastIndexOf("bba"));
print(str.lastIndexOf("bba", str.length - 1));
print(str.lastIndexOf("bba", str.length - 2));
print(str.lastIndexOf("bba", str.length - 3));
print(str.lastIndexOf("bba", str.length - 4));
print(str.lastIndexOf("xyz"));
print(str.lastIndexOf("fgb"));
print(str.lastIndexOf("edca"));
print(str.lastIndexOf("acde"));
print(str.lastIndexOf(""));
print(str.lastIndexOf("", 4));
var str2 = "\0abcd\0\0";
print(str2.lastIndexOf("\0\0"));
print(str2.lastIndexOf("cd\0"));
print(str2.lastIndexOf("\0ab"));
var str3 = "\u0100\u0111\u0112\u0113";
print(str3.lastIndexOf("\u0112\u0113"));
var str4 = "\u0061\u0062\u0063\u3042\u3044";
print(str4.lastIndexOf("\u3042\u3044", 1));
print(str4.lastIndexOf("\u3042\u3044"));
print(str4.lastIndexOf("\u3042\u3044", 4));
print("\u3042\u3044\u0061".lastIndexOf("\u3042\u3044", 3));
print(str4.lastIndexOf("\u3044\0", 5)); //implicit calls

var a = 1;
var b = 2;
var obj = {
  toString: function () {
    a = 3;
    return "Hello World";
  }
};
a = b;
Object.prototype.concat = String.prototype.concat;
var f = obj.concat("abc");
print(a);
