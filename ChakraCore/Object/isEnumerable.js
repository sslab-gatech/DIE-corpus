//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = {
  f: function () {
    return "hello";
  }
};
print(x.propertyIsEnumerable("f"));
print(x.propertyIsEnumerable("g"));
var e = new Array();
print(Array.propertyIsEnumerable("length"));
print(e.propertyIsEnumerable("length"));
