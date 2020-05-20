//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*Path Type Handler*/
var obj = {
  A: 1,
  B: 2 // PTH

};

function test0() {
  return obj.A;
}

print(test0());
print(test0());
obj.A = 99;
print(test0());
/*Simple Dictionary Type Handler*/

var obj = {
  A: 1 // PTH

};
Object.defineProperty(obj, "B", {
  enumerable: true,
  configurable: false,
  writable: false,
  value: 20
}); //SDTH

function test1() {
  return obj.B;
}

print(test1());
print(test1());
obj.B = 99;
print(test1());
