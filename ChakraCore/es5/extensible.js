//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print(Object.preventExtensions.length);
print(Object.isExtensible({}));
var a = {
  x: 20,
  y: 30
};
Object.preventExtensions(a);
SafeCall(function () {
  a.z = 50;
});
print(Object.getOwnPropertyNames(a));
print(Object.isExtensible(a));
var a = {
  x: 20,
  y: 30
};
Object.preventExtensions(a);
SafeCall(function () {
  delete a.x;
});
print(a.x);
print(Object.isExtensible(a));
var a = {
  x: 20,
  y: 30
};
Object.preventExtensions(a);
SafeCall(function () {
  a.x = 40;
});
SafeCall(function () {
  a.y = 60;
});
print(Object.getOwnPropertyNames(a));
print(Object.isExtensible(a));
print(a.x);
Object.preventExtensions(this);
var newVar1 = 4; // No exception here, since var decl is hoisted

var a = {
  x: 20,
  y: 30
};
Object.preventExtensions(a);
delete a.x;
Object.defineProperty(a, "y", {
  configurable: false
});
print(Object.isSealed(a));
Object.defineProperty(a, "y", {
  writable: false
});
print(Object.isFrozen(a));
var a = {
  get x() {
    return 0;
  },

  y: 30
};
Object.preventExtensions(a);
delete a.x;
Object.defineProperty(a, "y", {
  configurable: false
});
print(Object.isSealed(a));
Object.defineProperty(a, "y", {
  writable: false
});
print(Object.isFrozen(a));

function SafeCall(f) {
  try {
    f();
  } catch (e) {
    print("Exception: " + e.name);
  }
}

Object.preventExtensions(this);
this[10] = 10; //GlobalObject set after preventExtensions
