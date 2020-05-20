console.log("This test checks whether various seal/freeze/preventExtentions work on a regular object.");

function obj() {
  // Add an accessor property to check 'isFrozen' returns the correct result for objects with accessors.
  return Object.defineProperty({
    a: 1,
    b: 2
  }, 'g', {
    get: function () {
      return "getter";
    }
  });
}

function test(obj) {
  obj.c = 3;
  obj.b = 4;
  delete obj.a;
  var result = "";

  for (key in obj) {
    result += "(" + key + ":" + obj[key] + ")";
  }

  if (Object.isSealed(obj)) {
    result += "S";
  }

  if (Object.isFrozen(obj)) {
    result += "F";
  }

  if (Object.isExtensible(obj)) {
    result += "E";
  }

  return result;
}

function seal(obj) {
  Object.seal(obj);
  return obj;
}

function freeze(obj) {
  Object.freeze(obj);
  return obj;
}

function preventExtensions(obj) {
  Object.preventExtensions(obj);
  return obj;
}

function inextensible() {
  ;
}

function sealed() {
  ;
}

function frozen() {
  ;
}

;
preventExtensions(inextensible);
seal(sealed);
freeze(frozen);
new inextensible();
new sealed();
new frozen();
inextensible.prototype.prototypeExists = true;
sealed.prototype.prototypeExists = true;
frozen.prototype.prototypeExists = true;
new inextensible().prototypeExists;
new sealed().prototypeExists;
new frozen().prototypeExists;
test(obj());
test(preventExtensions(obj()));
test(seal(obj()));
test(freeze(obj())); // check that we can preventExtensions on a host function.

Object.preventExtensions(Math.sin);

try {
  var o = {};
  Object.preventExtensions(o);
  o.__proto__ = {
    newProp: "Should not see this"
  };
  o.newProp;
  ;
} catch (e) {
  ;
}

try {
  "use strict";

  var o = {};
  Object.preventExtensions(o);
  o.__proto__ = {
    newProp: "Should not see this"
  };
  o.newProp;
  ;
} catch (e) {
  ;
} // check that we can still access static properties on an object after calling preventExtensions.


Object.preventExtensions(Math);
Math.sqrt(4); // Should not be able to add properties to a preventExtensions array.

try {
  var arr = Object.preventExtensions([]);
  arr[0] = 42;
  arr[0];
} catch (e) {
  ;
}

var arr = Object.preventExtensions([]);
arr[0] = 42;
arr.length; // In strict mode, this throws.

try {
  "use strict";

  var arr = Object.preventExtensions([]);
  arr[0] = 42;
  arr[0];
} catch (e) {
  ;
} // A read-only property on the prototype should prevent a [[Put]] .


function Constructor() {
  ;
}

Constructor.prototype.foo = 1;
Object.freeze(Constructor.prototype);
var obj = new Constructor();
obj.foo = 2;
obj.foo; // Check that freezing a function works correctly.

var func = freeze(function foo() {
  ;
});
Object.isFrozen(func);
func.prototype = 42;
func.prototype === 42;
Object.getOwnPropertyDescriptor(func, "prototype").writable; // Check that freezing a strict function works correctly.

var strictFunc = freeze(function foo() {
  "use strict";

  ;
});
Object.isFrozen(strictFunc);
strictFunc.prototype = 42;
strictFunc.prototype === 42;
Object.getOwnPropertyDescriptor(strictFunc, "prototype").writable; // Check that freezing array objects works correctly.

var array = freeze([0, 1, 2]);
Object.isFrozen(array);
array[0] = 3;
array[0];
Object.getOwnPropertyDescriptor(array, "length").writable; // Check that freezing arguments objects works correctly.

var args = freeze(function () {
  return arguments;
}(0, 1, 2));
Object.isFrozen(args);
args[0] = 3;
args[0];
Object.getOwnPropertyDescriptor(args, "length").writable;
Object.getOwnPropertyDescriptor(args, "callee").writable; // Check that freeze still works if preventExtensions has been called on the object.

function preventExtensionsFreezeIsFrozen(x) {
  Object.preventExtensions(x);
  Object.freeze(x);
  return Object.isFrozen(x);
}

preventExtensionsFreezeIsFrozen(function foo() {
  ;
});
preventExtensionsFreezeIsFrozen(function foo() {
  "use strict";

  ;
});
preventExtensionsFreezeIsFrozen([0, 1, 2]);
preventExtensionsFreezeIsFrozen(function () {
  return arguments;
}(0, 1, 2));
Object.getOwnPropertyDescriptor(freeze({
  0: 0
}), 0).configurable;
Object.getOwnPropertyDescriptor(freeze({
  10000001: 0
}), 10000001).configurable;
