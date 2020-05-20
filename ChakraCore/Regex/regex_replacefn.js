//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function MyReplace($0, $1, $2, $3, $4, offset, input) {
  print("$0=" + $0);
  print("$1=" + $1);
  print("$2=" + $2);
  print("$3=" + $3);
  print("$4=" + $4);
  print("offset=" + offset);
  print("input=" + input);
  return $0;
}

var p = /(a)(b)(c)(d)/g;
var s = "xxabcdxxabcdxx";
print(s.replace(p, MyReplace));

var replacefn = function (arg1, arg2, arg3) {
  this.x = 10;
  return "xyz";
};

var a = new String("abcdef");
print(a.replace("def", replacefn));
print(x);

replacefn = function (arg) {
  // access re.lastIndex inside replace function.
  // As per ES6 21.2.5.8, lastIndex should be updated to 0 if global is true
  // This should be visible in replace function
  print(re.lastIndex);
  return "_" + arg;
};

var re = /abc/g;
var str = "abcabc";
re.lastIndex = 3;
print(str.replace(re, replacefn));
