//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function foo() {
  try {
    throw "foo error";
  } catch (e) {
    print("Caught e=" + e);
    {
      let e = 10;
      print("Caught e=" + e);
    }
    print("Caught e=" + e);
  }
}

function foo2() {
  try {
    throw "foo error";
  } catch (e) {
    print("Caught e=" + e);
    var e = 10;
    print("Caught e=" + e);
  }
}

function foo3() {
  try {
    throw "foo error";
  } catch (e) {
    print("Caught e=" + e);
    var e = 10;
    {
      try {
        e = 0;
      } catch (err) {
        print("Caught expected err=" + err);
      }

      let e = 20;
      print("Caught e=" + e);
    }
    print("Caught e=" + e);
  }
}

function foo4() {
  try {
    throw "foo error";
  } catch (e) {
    print("Caught e=" + e);
    {
      let e = 20;
      print("Caught e=" + e);
    }
    print("Caught e=" + e);
  }
}

function foo5() {
  try {
    throw "foo error";
  } catch (e) {
    print("Caught e=" + e);
    e = 10;
    {
      try {
        e = 0;
      } catch (err) {
        print("Caught expected err=" + err);
      }

      let e = 20;
      print("Caught e=" + e);
    }
    print("Caught e=" + e);
  }
}

print("foo():");
foo();
print("");
print("foo2():");
foo2();
print("");
print("foo3():");
foo3();
print("");
print("foo4():");
foo4();
print("");
print("foo5():");
foo5();
print("");
print("PASSED");
