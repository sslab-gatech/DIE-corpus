//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test(arg0, arg1) {
  this.prop0 = arg0;
  this.prop1 = arg1;
}

var obj = new test();
delete obj.prop1;
delete obj.prop0;
obj.a = 5;
obj.b = 10;
obj.c = 15;
print(obj.a);
print(obj.b);
print(obj.c);
print(obj.prop0);
print(obj.prop1);
