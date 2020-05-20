//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var i;
Object.prototype.u = "o.p.u";
Object.prototype.x = "o.p.x";
Object.prototype.y = "o.p.y";
Object.prototype.z = "o.p.z";

var f1 = function () {
  ;
};

f1.prototype.x = "f.p.x";
f1.prototype.q = "f.p.q";
f1.prototype.z = "f.p.z";
f1.prototype.r = "f.p.r";
var a1 = new f1();
a1.x = "a.x";
a1.q = "a.q";
a1.u = "a.q";

for (i in a1) {
  print(i + ":" + a1[i]);
}

var a = new Object();
a.x = "hello";
a.y = "world";
var o = new foo();
o.pqr = "pqr";
print("Object a");

for (i in a) {
  print(i);
}

print("Math");

for (i in Math) {
  print(i);
}

print("Array");

for (i in Array) {
  print(i);
}

print("Array.prototype");

for (i in Array.prototype) {
  print(i);
}

print("Date");

for (i in Date) {
  print(i);
}

print("Number");

for (i in Number) {
  print(i);
}

print("String");

for (i in String) {
  print(i);
}

print("Object.prototype");
Object.prototype.z = "me too";

for (i in Object.prototype) {
  print(i);
}

print("Object");

for (i in Object) {
  print(i);
}

print("Array.prototype.sort");

for (i in Array.prototype.sort) {
  print(i);
}

print("function foo");

function foo() {
  this.xyz = "xyz";
}

for (i in foo) {
  print(i);
}

Array.prototype.sort.x = "hello";
var o = Array.prototype.sort;

for (i in Array.prototype.sort) {
  print(i);
}

print("me here");
print("prototype chain");
Object.prototype.x = 10;

function f() {
  ;
}

function g() {
  ;
}

g.prototype = new f();
y = new g();

for (i in y) {
  print(i);
}

var aString = "StringType";
String.prototype.zz = "s.p.zz";
var bString = new String("StringObject");
bString.xx = "bString.xx";
bString.yy = "bString.yy";
print("Literal String");

for (i in aString) {
  print(i);
}

print("String Object");

for (i in bString) {
  print(i);
}

function Person() {
  ;
}

Person.prototype[5] = 20;
var a = new Person();

for (var i in a) {
  print(i);
}

Array.prototype[3] = 3;
var a = new Array();

for (var i in a) {
  print(i);
}

for (i in null) {
  print(i);
}
