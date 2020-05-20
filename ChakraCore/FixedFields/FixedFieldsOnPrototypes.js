//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("Testing object literal as prototype:");
var objectLiteralProto = {
  add: function () {
    return this.x + this.y + " (original)";
  },
  subtract: function () {
    return this.x - this.y + " (original)";
  }
};
var objectWithObjectLiteralAsProto = Object.create(objectLiteralProto);
objectWithObjectLiteralAsProto.x = 0;
objectWithObjectLiteralAsProto.y = 1;

function testObjectLiteralAsProto() {
  print("x + y = " + objectWithObjectLiteralAsProto.add());
  print("x - y = " + objectWithObjectLiteralAsProto.subtract());
}

testObjectLiteralAsProto();
testObjectLiteralAsProto();

objectLiteralProto.subtract = function () {
  return this.x - this.y + " (overwritten)";
};

testObjectLiteralAsProto();

objectLiteralProto.add = function () {
  return this.x + this.y + " (overwritten)";
};

testObjectLiteralAsProto();
var objectLiteralProto = {
  add: function () {
    return this.x + this.y + " (original)";
  },
  subtract: function (object) {
    return object.x - object.y + " (original)";
  }
};
var objectWithObjectLiteralAsProto = Object.create(objectLiteralProto);
objectWithObjectLiteralAsProto.x = 0;
objectWithObjectLiteralAsProto.y = 1;

function testObjectLiteralProto() {
  print("x + y = " + objectWithObjectLiteralAsProto.add()); // Calling a prototype method directly on the prototype object.

  print("x - y = " + objectLiteralProto.subtract(objectWithObjectLiteralAsProto));
}

testObjectLiteralProto();
testObjectLiteralProto();

objectLiteralProto.subtract = function (object) {
  return object.x - object.y + " (overwritten)";
};

testObjectLiteralProto();
print();
print("Testing the String prototype:");

String.prototype.identity = function (value) {
  return value;
};

function testStringPrototype() {
  var s = "I'm a string, I believe.";
  print("s.identity() = " + s.identity(s));
  print("s.indexOf(\"s\") = " + s.indexOf("s"));
}

testStringPrototype();
testStringPrototype();

String.prototype.indexOf = function (searchString, position) {
  return -1;
};

testStringPrototype();

String.prototype.identity = function (value) {
  return "To me you're just a number.";
};

testStringPrototype();
print();
print("Testing the global object as prototype:");

function globalFixedFunction1() {
  print("globalFixedFunction1: original");
}

var globalFixedFunction2 = function () {
  print("globalFixedFunction2: original");
};

function createObjectWithGlobalAsProto() {
  return Object.create(this);
}

var objectWithGlobalAsProto = createObjectWithGlobalAsProto();

function testGlobalAsProto() {
  objectWithGlobalAsProto.globalFixedFunction1();
  objectWithGlobalAsProto.globalFixedFunction2();
}

testGlobalAsProto();
testGlobalAsProto();

globalFixedFunction1 = function () {
  print("globalFixedFunction1: overwritten");
};

globalFixedFunction2 = function () {
  print("globalFixedFunction2: overwritten");
};

testGlobalAsProto();
print();
