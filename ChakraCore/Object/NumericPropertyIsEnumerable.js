//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function verify(act, exp, msg) {
  if (act != exp) {
    print(act + " " + msg);
  } else {
    print("pass");
  }
}

;
var myobj = {
  a: "apple",
  101: 1
};
verify(myobj.propertyIsEnumerable('a'), true, "property should be enumerable");
verify(myobj.propertyIsEnumerable(101), true, "numeric property should be enumerable");
verify(myobj.propertyIsEnumerable("101"), true, "numeric property should be enumerable");
verify(myobj.propertyIsEnumerable("10"), false, "non-existent numeric property should not be enumerable");

for (o in myobj) {
  verify(myobj.propertyIsEnumerable(o), true, "for...in loop propertyIsEnumerable enum testing");
}
