//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test0() {
  var IntArr1 = new Array();
  IntArr1[9] = 9;

  for (var v1 = 10; v1 >= 0; v1--) {
    Object.prototype[v1] = "d";
  }

  Object.defineProperty(Array.prototype, '4', {
    value: "four"
  });
  return IntArr1.slice().toString();
}

var a = test0(); //interpreted

var b = test0();
print(a == b);
print("d,d,d,d,four,d,d,d,d,9" == b);
