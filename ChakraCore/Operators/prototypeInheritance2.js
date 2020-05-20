//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("Test 1: Math.E");
var obj = Object.create(Math);
obj.E = "foo";
print(obj.E);
print("Test 2: function length");

function myFunc(a, b, c, d) {
  ;
}

obj = Object.create(myFunc);
obj.length = "foo";
print(obj.length);
print("Test 3: Regular expression properties");
var regExp = new RegExp("/abc/g");
obj = Object.create(regExp);
obj.global = "foo";
print(obj.global);
obj.lastIndex = "foo";
print(obj.lastIndex);
print("Test 4: String length");
obj = Object.create(new String("test"));
obj.length = "foo";
print(obj.length);
