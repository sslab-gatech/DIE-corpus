//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var failed = 0;

function runtest(name, func, throwException) {
  try {
    func();

    if (throwException) {
      print(name + ": Test failed, unexpected no exception thrown");
      failed++;
    } else {
      print(name + ": Test passed, expected no exception thrown");
    }
  } catch (e) {
    if (!throwException || e.name != "TypeError" && e.name != "ReferenceError") {
      print(name + ": test failed, unexpected " + e.name + "-" + e.message);
      failed++;
    } else {
      print(name + ": Test passed, expected " + e.name + "-" + e.message);
    }
  }
}

function assert(cond) {
  if (!cond) {
    throw new Error("AssertFailed");
  }
} //-------------------------------------------------
// Test 1 - success, new plain function without prototype returning an object, so the result is the object returned
//-------------------------------------------------


function ReturnObject() {
  this.hello = "yay2";
  var o = new Object();
  o.obj = this;
  return o;
}

function test1() {
  var o = new ReturnObject();
  o.constructor == Object.prototype.constructor;
  o.hello == undefined;
  o.obj.constructor == ReturnObject;
  o.obj.hello == "yay2";
} //-------------------------------------------------
// Test 2 - success, new plain function without prototype returning int, so the result is the new object
//-------------------------------------------------


function ReturnInt() {
  this.hello = "yay3";
  return 3;
}

function test2() {
  var o = new ReturnInt();
  o.constructor == ReturnInt;
  o.hello == "yay3";
} //-------------------------------------------------
// Test 3 - success, new plain function without prototype returning float, so the result is the new object
//-------------------------------------------------


function ReturnFloat() {
  this.hello = "yay4";
  return 3.3;
}

function test3() {
  var o = new ReturnFloat();
  o.constructor == ReturnFloat;
  o.hello == "yay4";
} //-------------------------------------------------
// Test 4 - success, new plain function without prototype returning string, so the result is the new object
//-------------------------------------------------


function ReturnString() {
  this.hello = "yay5";
  return "blah" + this.hello;
}

function test4() {
  var o = new ReturnString();
  o.constructor == ReturnString;
  o.hello == "yay5";
} //-------------------------------------------------
// Test 5 - success, new plain function without prototype returning bool, so the result is the new object
//-------------------------------------------------


function ReturnBool() {
  this.hello = "yay6";
  return this.hello == "yay6";
}

function test5() {
  var o = new ReturnBool();
  o.constructor == ReturnBool;
  o.hello == "yay6";
}

runtest("test1", test1, false);
runtest("test2", test2, false);
runtest("test3", test3, false);
runtest("test4", test4, false);
runtest("test5", test5, false);

if (failed == 0) {
  print("Passed");
}
