//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//Test odd parameters
var a = [0.6, 1.34, 2.5, 3.34, 4.454, 5.65, 6.634];
var x = a.splice(-100, -100);
print(a);
print(x);
x = a.splice();
print(a);
print(x);
x = a.splice(0);
print(a);
print(x);
var x = a.splice(0, 0);
print(a);
print(x);
var x = a.splice(1, -4);
print(a);
print(x);
var x = a.splice(7, -4, 8, 9, 10);
print(a);
print(x);
var x = a.splice(20, 40);
print(a);
print(x);
var x = a.splice(-20, 4, 11, 12);
print(a);
print(x);
x = a.splice(-100, -100);
print(a);
print(x); //Test array

var b = [8.32, 9.232];
var c = [11.232, 12.234];
x = a.splice(5, 1);
print(x);
print(a);
x = a.splice(2, 2, b, c);
print(x);
print(a);
x = a.splice(-2, -2, b, c);
print(x);
print(a);
x = a.splice(10, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b);
print(x);
print(a);
var d = [1, [2, 3, 4], [5, 6, 7]];
x = a.splice(5, 1, d);
print(x);
print(a);
var f = new Object();
f.x = 0;
f.y = 1;
f.z = 2;
x = a.splice(1, 2, f, "hello");
print(x);
print(a); //Test object

var x = new Object();
x.length = 6;
x[0] = 1.23;
x[1] = 2.23;
x[2] = 3.23;
x[3] = 4.54;
x[4] = 5.66;
x[5] = 6.45;
x.foo = Array.prototype.splice;
print(x.length);
var y = x.foo(0, 1, 9, 10, 11, 12);
print(y);
print(x.length);
y = x.foo(0, 9);
print(y);
print(x.length);
y = x.foo(0, 0, 1, 2, 3, 4, 5, 6);
print(y);
print(x.length);
y = x.foo(3, 3, 7);
print(y);
print(x.length);
y = x.foo(0, 8);
print(y);
print(x.length); //Test string

x = new String("hello world");
x.foo = Array.prototype.splice;
y = undefined;

try {
  y = x.foo(0, 5);
} catch (e) {
  if (!e instanceof TypeError) {
    throw e;
  }

  print(y);
  print(x);
}

try {
  y = x.foo(0, 5);
} catch (e) {
  if (!e instanceof TypeError) {
    throw e;
  }

  print(y);
  print(x);
}

try {
  y = x.foo(0, 13);
} catch (e) {
  if (!e instanceof TypeError) {
    throw e;
  }

  print(y);
  print(x);
}

print("Test: splice when the item to replace is not writable."); // WOOB: 1139812

var a = {};
Object.defineProperty(a, "0", {
  value: 0
});
Object.defineProperty(a, "1", {
  value: 1
});
a.length = 2;

try {
  Array.prototype.splice.apply(a, [0, 1, 'z']);
} catch (ex) {
  print("e instanceOf TypeError = " + (ex instanceof TypeError));
}

print("a.length = " + a.length);
a = new Array(1000);
x = a.splice(1, 17, "a");

function test0() {
  var arr = [0, 1.12, 2.23, 3, 4.32, 5, 6.23, 7, 8, 9];

  for (var __loopvar4 = 0; __loopvar4 < 2; __loopvar4++) {
    arr.length--;
    arr.splice(3, 1, 31.23, 32.32, 33.23);
  }

  return arr.length;
}

print("arr.length = " + test0());
