//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//****************Test0 creates a SimpleDictionaryTypeHandler****************
var B = 6;

function test0() {
  return B;
}

print(test0()); //JIT test() with fixedDataProp

print(test0());
B++; //Should bail out during this call

print(test0()); //****************Test 1 creates a PathTypeHandler****************

var obj = {
  A: 1
};

function test1() {
  return obj.A;
}

print(test1());
print(test1());
obj.A = 2; //Bails out here, since a new property is added.

print(test1()); //*******************Test2: Creates a DictionaryTypeHandler****************

Object.prototype.C = 5;

function test2() {
  return C;
}

print(test2());
print(test2());
C = 2;
print(test2());
