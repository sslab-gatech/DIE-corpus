//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var stackAlloc = true;
var g;

function Ctor() {
  ;
}

function test(p) {
  var a;

  if (stackAlloc) {
    a = new Ctor();
    a.z = p + 0.1; // stack number

    a.escape = p + 0.2; // non stack number
  } else {
    a = new Ctor();
    g = a;
    a.z = p + 0.1; // non stack number

    a.escape = p + 0.2; // non stack number
  }

  a.x = a.z + 0.2; // non stack number

  var c;

  if (stackAlloc) {
    c = a; // alias
  } else {
    c = new Ctor();
  }

  c.y = p + 0.3; // Still non stack number

  return a.escape;
}

print(test(0.1));
stackAlloc = false;
print(test(0.1));
print(g.z);
print(g.x);
print(g.y);
stackAlloc = true;
print(test(0.1));
stackAlloc = false;
print(test(0.1));
print(g.z);
print(g.x);
print(g.y);

function test2(p) {
  var a;

  if (stackAlloc) {
    a = new Ctor();
    a.x = 1.1 + p; // stack number
  } else {
    a = new Ctor();
    a.x = 1.2 + p; // stack number
  }

  a.y = 1.3 + p; // stack number

  var c = a;
  c.z = 1.4 + p; // stack number
}

print("Test 2");
stackAlloc = true;
test2(0.1);
stackAlloc = false;
test2(0.1);
stackAlloc = true;
test2(0.1);
stackAlloc = false;
test2(0.1);

function test3(p) {
  // Test loop dependencies
  var a = new Ctor();
  a.x = p + 1.1; // stack number

  a.y = p + 1.2; // stack number

  for (var i = 0; i < 2; i++) {
    var n = a.x;
    a.x = n + 1.1; // stack number;

    var q = a.y;
    a.y = i + 1.4; // not stack number, because q is a reference to this number and it is still live

    a.z = q;
    print("kill field hoist/copy prop");
  }

  var temp = a.y + 1.3;
  var temp2 = a.z + 1.3;
  print(temp);
  print(temp2);
}

print("Test 3");
test3(0.1);
test3(0.1);
test3(0.1);
var name = "y";

function test4(p) {
  // Test array load escape
  var a = new Ctor();
  a.x = p + 1.1; // non-stack number since we don't know what name is

  a.y = a.x + 1.1; // non-stack number since we don't know what name is

  return a[name];
}

print("Test 4");
print(test4(0.1));
print(test4(0.1));
print(test4(0.1));
print("Test 5");

function test5(p) {
  // Test array load not escape
  var a = new Ctor();
  a.x = p + 1.1; // stack number

  a.y = a.x + 1.1; // stack number

  a[0] = p + 1.2; // not stack number

  print(a[0]); // non-escape use (as array index is known int

  return a[name] + 1.1;
}

print(test5(0.1));
print(test5(0.1));
print(test5(0.1));
print("Test 6");

function test6(p) {
  var a = new Ctor(); // theoretically these can be mark temp, but the dependencies in the loop confuses the algorithm

  a.x = p + 1.1;
  a.y = p + 1.2;

  for (var i = 0; i < 2; i++) {
    var n = a[name];
    a.y = i + 1.4; // not stack number, because n

    a.z = n;
  }

  print(a.z + 0.1);
}

test6(0.1);
test6(0.1);
test6(0.1);
print("Test 7");

var func = function (p) {
  return p + 4.4;
};

function test7(p) {
  var lit = {
    prop1: p + 1.1,
    "14": 4.4,
    prop2: p + 2.2,
    prop1: p + 0.1,
    prop5: func(p),
    prop3: p + 3.3
  }; // stack numbers

  return lit.prop1 + lit.prop5;
}

print(test7(1));
print(test7(1));

var func = function (p) {
  return p + 5.5;
};

print(test7(1));
print("Test 8");
var obj = {};

var func = function (p) {
  var alias = obj;
  var lit = {
    prop1: p + 0.1
  }; // temp object and number

  var prop1;

  for (var i = 0; i < 1; i++) {
    prop1 = lit.prop1; // hoisted field load, escape store
  }

  alias.prop1 = prop1;
};

func(0.1);
func(0.1);
func(0.1);
print(obj.prop1);
