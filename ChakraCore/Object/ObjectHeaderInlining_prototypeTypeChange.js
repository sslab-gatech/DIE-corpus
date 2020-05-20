//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function TwoProperty(arg0, arg1) {
  this.prop2 = arg1;
  this.prop1 = arg0;
}

var obj = new TwoProperty(1, 2);
var protoObj = Object.create(obj);
print(protoObj.prop1);
print(protoObj.prop2);
obj.prop3 = 10;
print(protoObj.prop1);
print(protoObj.prop2);
print(protoObj.prop3);
