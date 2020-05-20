//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test0(a, b) {
  a += 0x7fffffff;
  return a & b;
}

print("test0: " + test0(1, 1));
print("test0: " + test0(1, 1.1));

function test0slot(a, b) {
  return a + 0x7fffffff & b | a;

  function test0slota() {
    a;
  }
}

print("test0slot: " + test0slot(1, 1));
print("test0slot: " + test0slot(1, 1.1));

function test1(a, b) {
  a += 0x7fffffff;
  var c = b & 0;
  a += b;
  return a & 0x7fffffff | c;
}

print("test1: " + test1(1, 1));
print("test1: " + test1(1, 1.1));

function test1slot(a, b) {
  var c = b & 0;
  return a + 0x7fffffff + c & 0x7fffffff | a | c;

  function test1slota() {
    a;
  }
}

print("test1slot: " + test1slot(1, 1));
print("test1slot: " + test1slot(1, 1.1));

function test2(a, b) {
  a += 0x7fffffff;
  a += b;
  return a & 0x7fffffff;
}

print("test2: " + test2(1, 1));
print("test2: " + test2(1, 1.1));

function test2slot(a, b) {
  return a + 0x7fffffff + b & 0x7fffffff | a;

  function test2slota() {
    a;
  }
}

print("test2slot: " + test2slot(1, 1));
print("test2slot: " + test2slot(1, 1.1));

function test3(a) {
  a += 0x7fffffff;
  a += 1.1;
  return a & 0x7fffffff;
}

print("test3: " + test3(1));
print("test3: " + test3(1));

function test3slot(a) {
  return a + 0x7fffffff + 1.1 & 0x7fffffff | a;

  function test3slota() {
    a;
  }
}

print("test3slot: " + test3slot(1));
print("test3slot: " + test3slot(1));

function test4() {
  return ~-0;
}

print("test4: " + test4());
print("test4: " + test4());

function test5() {
  var i = 0;
  var g = 1;
  test5a();
  g = 2.2;
  return test5a();

  function test5a() {
    return g < (g & -i) ? 0 : 1;
  }
}

;
print("test5: " + test5());

for (var i = 0; i < 100; ++i) {
  test5();
}

print("test5: " + test5()); ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
