// Copyright 2010 the V8 project authors. All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above
//       copyright notice, this list of conditions and the following
//       disclaimer in the documentation and/or other materials provided
//       with the distribution.
//     * Neither the name of Google Inc. nor the names of its
//       contributors may be used to endorse or promote products derived
//       from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// Tests the Object.seal and Object.isSealed methods - ES 19.1.2.17 and
// ES 19.1.2.13
// Flags: --allow-natives-syntax --opt --noalways-opt
// Test that we return obj if non-object is passed as argument
var non_objects = new Array(undefined, null, 1, -1, 0, 42.43, Symbol("test"));

for (var key in non_objects) {
  non_objects[key];
  Object.seal(non_objects[key]);
} // Test that isFrozen always returns true for non-objects


for (var key in non_objects) {
  Object.isSealed(non_objects[key]);
} // Test normal data properties.


var obj = {
  x: 42,
  z: 'foobar'
};
var desc = Object.getOwnPropertyDescriptor(obj, 'x');
desc.writable;
desc.configurable;
42;
desc.value;
desc = Object.getOwnPropertyDescriptor(obj, 'z');
desc.writable;
desc.configurable;
'foobar';
desc.value;
Object.isExtensible(obj);
Object.isSealed(obj);
Object.seal(obj); // Make sure we are no longer extensible.

Object.isExtensible(obj);
Object.isSealed(obj);
Object.isFrozen(obj);
// We should not allow new properties to be added.
obj.foo = 42;
obj.foo;
undefined;
desc = Object.getOwnPropertyDescriptor(obj, 'x');
desc.writable;
desc.configurable;
42;
desc.value;
desc = Object.getOwnPropertyDescriptor(obj, 'z');
desc.writable;
desc.configurable;
"foobar";
desc.value;
// Since writable is not affected by seal we should still be able to
// update the values.
obj.x = "43";
"43";
obj.x;
// Test on accessors.
var obj2 = {};

function get() {
  return 43;
}

;

function set() {
  ;
}

;
Object.defineProperty(obj2, 'x', {
  get: get,
  set: set,
  configurable: true
});
desc = Object.getOwnPropertyDescriptor(obj2, 'x');
desc.configurable;
undefined;
desc.value;
set();
desc.set;
get();
desc.get;
Object.isExtensible(obj2);
Object.isSealed(obj2);
Object.seal(obj2); // Since this is an accessor property the object is now effectively both
// sealed and frozen (accessors has no writable attribute).

Object.isFrozen(obj2);
Object.isExtensible(obj2);
Object.isSealed(obj2);
desc = Object.getOwnPropertyDescriptor(obj2, 'x');
desc.configurable;
undefined;
desc.value;
set();
desc.set;
get();
desc.get;
obj2.foo = 42;
obj2.foo;
undefined;
// Test seal on arrays.
var arr = new Array(42, 43);
desc = Object.getOwnPropertyDescriptor(arr, '0');
desc.configurable;
desc.writable;
42;
desc.value;
desc = Object.getOwnPropertyDescriptor(arr, '1');
desc.configurable;
desc.writable;
43;
desc.value;
Object.isExtensible(arr);
Object.isSealed(arr);
Object.seal(arr);
Object.isSealed(arr);
Object.isExtensible(arr);
Object.isFrozen(arr);
desc = Object.getOwnPropertyDescriptor(arr, '0');
desc.configurable;
desc.writable;
42;
desc.value;
desc = Object.getOwnPropertyDescriptor(arr, '1');
desc.configurable;
desc.writable;
43;
desc.value;
arr[0] = 'foo'; // We should be able to overwrite the existing value.

'foo';
arr[0];
// Test that isSealed returns the correct value even if configurable
// has been set to false on all properties manually and the extensible
// flag has also been set to false manually.
var obj3 = {
  x: 42,
  y: 'foo'
};
Object.isFrozen(obj3);
Object.defineProperty(obj3, 'x', {
  configurable: false,
  writable: true
});
Object.defineProperty(obj3, 'y', {
  configurable: false,
  writable: false
});
Object.preventExtensions(obj3);
Object.isSealed(obj3);
// Make sure that an object that has a configurable property
// is not classified as sealed.
var obj4 = {};
Object.defineProperty(obj4, 'x', {
  configurable: true,
  writable: false
});
Object.defineProperty(obj4, 'y', {
  configurable: false,
  writable: false
});
Object.preventExtensions(obj4);
Object.isSealed(obj4);
// Make sure that Object.seal returns the sealed object.
var obj4 = {};
obj4 === Object.seal(obj4);
//
// Test that built-in array functions can't modify a sealed array.
//
obj = [1, 2, 3];
var objControl = [4, 5, 6]; // Allow these functions to set up monomorphic calls, using custom built-ins.

var push_call = function (a) {
  a.push(10);
  return a;
};

var pop_call = function (a) {
  return a.pop();
};

for (var i = 0; i < 3; i++) {
  push_call(obj);
  pop_call(obj);
}

Object.seal(obj);

(function () {
  push_call(obj);
})();

TypeError;

(function () {
  pop_call(obj);
})();

TypeError;

(function () {
  push_call(objControl);
})();

(function () {
  pop_call(objControl);
})();

(function () {
  obj.push();
})();

(function () {
  obj.push(3);
})();

TypeError;

(function () {
  obj.pop();
})();

TypeError;

(function () {
  obj.shift(3);
})();

TypeError;

(function () {
  obj.unshift();
})();

(function () {
  obj.unshift(1);
})();

TypeError;

(function () {
  obj.splice(0, 0, 100, 101, 102);
})();

TypeError;

(function () {
  obj.splice(0, 0);
})();

(function () {
  objControl.push(3);
})();

(function () {
  objControl.pop();
})();

(function () {
  objControl.shift(3);
})();

(function () {
  objControl.unshift();
})();

(function () {
  objControl.splice(0, 0, 100, 101, 102);
})();

// Verify that crankshaft still does the right thing.
obj = [1, 2, 3];

push_call = function (a) {
  a.push(1000);
  return a;
}; // Include a call site that doesn't have a custom built-in.


var shift_call = function (a) {
  a.shift(1000);
  return a;
};

for (var i = 0; i < 3; i++) {
  push_call(obj);
  shift_call(obj);
}

push_call(obj);
shift_call(obj);
push_call;
shift_call;
Object.seal(obj);

(function () {
  push_call(obj);
})();

TypeError;

(function () {
  shift_call(obj);
})();

TypeError;
push_call;
shift_call;

(function () {
  push_call(objControl);
})();

(function () {
  shift_call(objControl);
})();

// Verify special behavior of splice on sealed objects.
obj = [1, 2, 3];
Object.seal(obj);

(function () {
  obj.splice(0, 1, 100);
})();

100;
obj[0];

(function () {
  obj.splice(0, 2, 1, 2);
})();

(function () {
  obj.splice(1, 2, 1, 2);
})();

(function () {
  obj.splice(1, 2000, 1, 2);
})();

(function () {
  obj.splice(0, 0, 1);
})();

TypeError;

(function () {
  obj.splice(1, 2000, 1, 2, 3);
})();

TypeError;
// Test that the enumerable attribute is unperturbed by sealing.
obj = {
  x: 42,
  y: 'foo'
};
Object.defineProperty(obj, 'y', {
  enumerable: false
});
Object.seal(obj);
Object.isSealed(obj);
Object.isFrozen(obj);
desc = Object.getOwnPropertyDescriptor(obj, 'x');
desc.enumerable;
desc = Object.getOwnPropertyDescriptor(obj, 'y');
desc.enumerable;
// Fast properties should remain fast
obj = {
  x: 42,
  y: 'foo'
};
Object.seal(obj);
Object.isSealed(obj);
Object.isFrozen(obj);
// Sealed objects should share maps where possible
obj = {
  prop1: 1,
  prop2: 2
};
obj2 = {
  prop1: 3,
  prop2: 4
};
Object.seal(obj);
Object.seal(obj2);
Object.isSealed(obj);
Object.isSealed(obj2);
Object.isFrozen(obj);
Object.isFrozen(obj2);
// Sealed objects should share maps even when they have elements
obj = {
  prop1: 1,
  prop2: 2,
  75: 'foo'
};
obj2 = {
  prop1: 3,
  prop2: 4,
  150: 'bar'
};
Object.seal(obj);
Object.seal(obj2);
Object.isSealed(obj);
Object.isSealed(obj2);
Object.isFrozen(obj);
Object.isFrozen(obj);
// Setting elements after sealing should not be allowed
obj = {
  prop: 'thing'
};
Object.seal(obj);
Object.isSealed(obj);
Object.isFrozen(obj);
obj[0] = 'hello';
obj.hasOwnProperty(0);
// Sealing an object in dictionary mode should work
// Also testing that getter/setter properties work after sealing
obj = {};

for (var i = 0; i < 100; ++i) {
  obj['x' + i] = i;
}

var accessorDidRun = false;
Object.defineProperty(obj, 'accessor', {
  get: function () {
    return 42;
  },
  set: function () {
    accessorDidRun = true;
  },
  configurable: true,
  enumerable: true
});
Object.seal(obj);
Object.isSealed(obj);
Object.isFrozen(obj);
Object.isExtensible(obj);

for (var i = 0; i < 100; ++i) {
  desc = Object.getOwnPropertyDescriptor(obj, 'x' + i);
  desc.configurable;
}

42;
obj.accessor;
accessorDidRun;
obj.accessor = 'ignored value';
accessorDidRun;

// Sealing arguments should work
var func = function (arg) {
  Object.seal(arguments);
  Object.isSealed(arguments);
};

func('hello', 'world');
func('goodbye', 'world'); // Sealing sparse arrays

var sparseArr = [0, 1];
sparseArr[10000] = 10000;
Object.seal(sparseArr);
Object.isSealed(sparseArr);
// Accessors on fast object should behavior properly after sealing
obj = {};
Object.defineProperty(obj, 'accessor', {
  get: function () {
    return 42;
  },
  set: function () {
    accessorDidRun = true;
  },
  configurable: true,
  enumerable: true
});
Object.seal(obj);
Object.isSealed(obj);
42;
obj.accessor;
accessorDidRun = false;
obj.accessor = 'ignored value';
accessorDidRun;
Object.isSealed(Object.seal(function () {
  "use strict";

  ;
}));
// Also test a simpler case
obj = {};
Object.defineProperty(obj, 'accessor2', {
  get: function () {
    return 42;
  },
  set: function () {
    accessorDidRun = true;
  },
  configurable: true,
  enumerable: true
});
obj.data = 'foo';
Object.seal(obj);
Object.isSealed(obj);

function Sealed() {
  ;
}

Object.seal(Sealed);

(function () {
  return new Sealed();
})();

Sealed.prototype.prototypeExists = true;
new Sealed().prototypeExists;
obj = new Int32Array(10);
Object.seal(obj);
Object.isSealed(obj);
