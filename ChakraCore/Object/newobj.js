//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
OldObject = Object;

Object = function () {
  this.hello = "yay";
};

var o = new Object();
print(o.hello);
var o2 = {
  hello2: "yay2"
};
print(o2.hello);
print(o2.hello2);
