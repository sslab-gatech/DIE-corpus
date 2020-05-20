//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function getObject(propName) {
  var dummy = {};

  if (propName != undefined) {
    dummy[propName] = 0;
  }

  return dummy;
}

var propName = "p01";
var x = getObject(propName);
Object.preventExtensions(x);
var y = getObject(propName);
print(Object.isExtensible(x));
print(Object.isExtensible(y));
var propName = "p02_1";
var propName2 = "p02_2";

var f = function f(o) {
  var tepm = o[propName2];
  o[propName2] = 10;
};

var x = getObject(propName);
f(x);
var y = getObject(propName);
Object.preventExtensions(y);
f(y);
print(undefined == y[propName2]);
var propName = "p03";
var x = getObject(propName);
Object.preventExtensions(x);
delete x[propName];
var x = getObject(propName); // new object with same layout as previous one.

x[propName] = 2;
Object.preventExtensions(x); // Earlier bug: this was associated a with evolved type.

var newValue = 3;
x[propName] = newValue; // Can modify writable property but not on evolved type.

print(Object.isExtensible(x));
print(newValue == x[propName]);
var propName1 = "p04_1";
var propName2 = "p04_2";
var x = getObject(propName1);
delete x[propName1];
x[propName2] = propName2;
Object.preventExtensions(x);

try {
  Object.defineProperty(x, propName1, {
    value: 1
  });
} catch (e) {
  ;
}

var propName = "p05";
var x = getObject(propName);
Object.seal(x);
Object.defineProperty(x, propName, {
  writable: false,
  value: 100
}); // this should succeed

var y = getObject(propName);
Object.seal(y); // Now y shares same s.d.t.h as x used to before defineProperty on x.

var newValue = 200;
Object.defineProperty(y, propName, {
  writable: false,
  value: newValue
}); // this should succeed again (defineProperty on x should not corrupt shared t.h.)

print(newValue == y[propName]);
var propName = "p06";
var values = [0, 1, 2, 3];
var x = getObject(propName);
x[propName] = values[0];
Object.freeze(x);
x[propName] = values[1]; // this should not work

var y = getObject(propName);
Object.seal(y);
y[propName] = values[2]; // this should work

var z = getObject(propName);
Object.preventExtensions(z);
z[propName] = values[3]; // this should work

print([0, 2, 3] == [x[propName], y[propName], z[propName]]);
var propName1 = "p07_01";
var propName2 = "p07_02";
var origVal = 0;
var x = getObject(propName1);
var y = getObject(propName1);
x[propName1] = origVal;
y[propName1] = origVal;
Object.preventExtensions(x);
Object.preventExtensions(y);
Object.seal(y);
Object.freeze(y);
var val = 100;
x[propName1] = val; // This should succeed

x[propName2] = val; // This should not succeed: can't add new property to non-extensible

print(Object.isExtensible(x));
print(Object.isSealed(x));
print(val == x[propName1]);
print(undefined == x[propName2]);
Object.isFrozen(y), "Object.isFrozen(y)";
y[propName1] = val;
y[propName2] = val;
print(origVal == y[propName1]);
print(undefined == y[propName2]);
var numericPropName = 0;
var x = getObject();
Object.preventExtensions(x);
x[numericPropName] = 0;
print(undefined == x[numericPropName]);
var propName = "p09";
var numericPropName = 0;
var x = getObject(propName);
x[numericPropName] = 0;
Object.preventExtensions(x);
x[numericPropName + 1] = 1; // Should fail.

Object.defineProperty(x, numericPropName, {
  value: 2
}); // Another way to add a property, should fail as well.

print(undefined == x[numericPropName + 1]);
var newValue = 100;

var f = function f(o) {
  var temp = o[propName]; // create inline cache for read.

  o[propName] = newValue; // attempt to use inline cache, in particular, for read-only property.
};

var propName = "p10";
var x = getObject(propName);
var y = getObject(propName);
var z = getObject(propName);
Object.freeze(y);
Object.freeze(z);
f(x);
f(y);
f(y);
f(z);
print(newValue == x[propName]);
print(0 == y[propName]);
print(0 == z[propName]);
