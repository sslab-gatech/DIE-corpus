//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function globalFixedFunction1() {
  print("globalFixedFunction1: original");
}

var globalFixedFunction2 = function () {
  print("globalFixedFunction2: original");
};

function testGlobal() {
  globalFixedFunction1();
  globalFixedFunction2();
}

print("Testing the global object:");
testGlobal();
testGlobal();

globalFixedFunction1 = function () {
  print("globalFixedFunction1: overwritten");
};

globalFixedFunction2 = function () {
  print("globalFixedFunction2: overwritten");
};

testGlobal();
print();
print("Testing object literal:");
var objectLiteral = {
  unique1: 0,
  x: 0,
  y: 1,
  add: function () {
    return this.x + this.y + " (original)";
  },
  subtract: function () {
    return this.x - this.y + " (original)";
  }
};

function testObjectLiteral() {
  print("x + y = " + objectLiteral.add());
  print("x - y = " + objectLiteral.subtract());
}

testObjectLiteral();
testObjectLiteral();

objectLiteral.add = function () {
  return this.x + this.y + " (overwritten)";
};

testObjectLiteral();
print();
print("Testing Object.defineProperty with accessors:");
var object = {};
Object.defineProperty(object, "x", {
  get: function () {
    return "0 (original)";
  },
  configurable: true
});

function testObjectDefineProperty() {
  print("x = " + object.x);
}

testObjectDefineProperty();
testObjectDefineProperty();
Object.defineProperty(object, "x", {
  get: function () {
    return "1 (overwritten)";
  }
});
testObjectDefineProperty();
print();
print("Testing the Math object:");

Math.identity = function (value) {
  return value;
};

function testMathObject() {
  print("Math.sin(Math.PI) = " + Math.sin(Math.PI));
  print("Math.identity(Math.PI) = " + Math.identity(Math.PI));
}

testMathObject();
testMathObject();

Math.identity = function (value) {
  return -value;
};

testMathObject();

Math.sin = function (value) {
  return -value;
};

testMathObject();
print();
print("Testing the Object constructor:");

Object.identity = function (value) {
  return value;
};

function testObjectConstructor() {
  var o = {};
  Object.seal(o);
  print("Object.identity(o) = " + Object.identity(o));
  print("Object.isSealed(o) = " + Object.isSealed(o));
}

testObjectConstructor();
testObjectConstructor();

Object.identity = function (value) {
  return "I don't know you anymore...";
};

testObjectConstructor();

Object.seal = function (object) {
  return false;
};

testObjectConstructor();

Object.isSealed = function (object) {
  return "With the magic of JavaScript I pronounce you sealed!";
};

testObjectConstructor();
print();
