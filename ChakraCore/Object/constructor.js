//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
Object.prototype.oString = Object.prototype.toString;
Array.prototype.oString = Object.prototype.toString;
Boolean.prototype.oString = Object.prototype.toString;
Date.prototype.oString = Object.prototype.toString;
Function.prototype.oString = Object.prototype.toString;
Number.prototype.oString = Object.prototype.toString;
RegExp.prototype.oString = Object.prototype.toString;
String.prototype.oString = Object.prototype.toString;
var x = 0;

function foo() {
  ;
}

Object.prototype.protoFunc = function () {
  ;
};

var customPrototype = {
  protoFunc: function () {
    ;
  } // Constructor with only this statements

};

function constr(arg1, arg2) {
  this.a = arg1;
  this.b = arg1;
} // Constructor with more than only this statements


function constr1(arg1, arg2) {
  if (!arg1) {
    arg1 = 0;
  }

  if (!arg2) {
    arg2 = 0;
  }

  this.a = arg1;
  this.b = arg1;
}

function body() {
  var arr = [];

  for (var i = 0; i < 2; i++) {
    arr.push(new constr(1, 2, 3)); // with arg constructor cache

    arr.push(new constr()); // no arg constructor cache test

    arr.push(new constr1(1, 2, 3)); // with arg constructor cache

    arr.push(new constr1()); // no arg constructor cache test
  }

  return arr;
}

var arrayOfObjects = body();
Dump(arrayOfObjects);
constr.prototype = customPrototype;
constr1.prototype = customPrototype;
arrayOfObjects = body();
Dump(arrayOfObjects);
constr.prototype = 1;
constr1.prototype = 1;
arrayOfObjects = body();
Dump(arrayOfObjects);
delete constr.prototype;
delete constr1.prototype;
arrayOfObjects = body();
Dump(arrayOfObjects);

function Dump(arrayOfObjects) {
  for (var j = 0; j < arrayOfObjects.length; j++) {
    arrayOfObjects[j].protoFunc();
  }
}

function crossContextObject() {
  this.prop = "property";
}

function createObject() {
  var o = new crossContextObject();
  return o;
}

var obj = new crossContextObject();
print(obj.prop);
obj = new crossContextObject();
print(obj.prop);
obj = createObject();
print(obj.prop);
obj = createObject();
print(obj.prop);
obj = new crossContextObject();
print(obj.prop);
