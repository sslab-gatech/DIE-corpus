//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test0(a) {
  a[1];
  a.reverse();
  return a[0];
}

print("test0: " + test0([2, 3]));
print("test0: " + test0([2, 3]));

function test1(a) {
  a[1];
  a.shift();
  return a[0];
}

print("test1: " + test1([2, 3]));
print("test1: " + test1([2, 3]));

function test2(a) {
  a[1];
  var b = a.slice(0, 0);
  return a[0];
}

print("test2: " + test2([2, 3]));
print("test2: " + test2([2, 3]));

function test3(a) {
  a[1];
  a.splice(0, 0);
  return a[0];
}

print("test3: " + test3([2, 3]));
print("test3: " + test3([2, 3]));

function test4(a) {
  a[1];
  a.unshift();
  return a[0];
}

print("test4: " + test4([2, 3]));
print("test4: " + test4([2, 3]));
