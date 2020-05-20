//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var leak;
var c = 0;

function Ctor() {
  this.b = 2;
  this.a = c + c;
}

function test1() {
  var a = new Ctor();
  return a + a;
}

print(test1());
print(test1());

Ctor.prototype.valueOf = function () {
  leak = this;
  return 40;
};

print(test1());
print(leak.a);
print(leak.b);

function test2() {
  var a = new Ctor();
  var f = a.a;
  var g = a.b;
  return f + g + a.a;
}

print(test2());
print(test2());
Object.defineProperty(Ctor.prototype, "b", {
  get: function () {
    print("get");
    return 3;
  },
  set: function () {
    leak = this;
    print("set");
  }
});
print(test2());
print(leak.a);
print(leak.b);

function test3() {
  var a = [1];
  a[1] = 2;
  return a[0] + a[1];
}

print(test3());
print(test3());
Object.defineProperty(Array.prototype, "1", {
  get: function () {
    print("get");
    return 4;
  },
  set: function () {
    leak = this;
    print("set");
  }
});
print(test3());
print(leak[0]);
print(leak[1]);
