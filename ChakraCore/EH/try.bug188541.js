//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function foo() {
  try {
    throw "foo error";
  } catch (e) {
    var e = 10;
    print("Caught e=" + e);
  }
}

function foo2() {
  var e;
  print("On entry: e=" + e);

  try {
    throw "foo error";
  } catch (e) {
    var e = 10;
    print("Caught e=" + e);
  }

  print("On exit: e=" + e);
}

function foo3() {
  var e;
  print("On entry: e=" + e);

  try {
    throw "foo error";
  } catch (e) {
    function err(e) {
      var e = 10;
      print("Caught e=" + e);
    }

    err(e);
  }

  print("On exit: e=" + e);
}

function foo4() {
  var e;
  print("On entry: e=" + e);

  try {
    throw "foo error";
  } catch (e) {
    var e = 10;
    {
      var e = 20;
      print("Caught e=" + e);
    }
    print("Caught e=" + e);
  }

  print("On exit: e=" + e);
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
print("PASSED");
