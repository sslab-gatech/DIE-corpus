//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function verifyObjectDescriptors(descriptors, allTruePropName, allFalsePropName) {
  var allProperties = Object.getOwnPropertyNames(descriptors).concat(Object.getOwnPropertySymbols(descriptors));
  print([allTruePropName, allFalsePropName], allProperties, "Result should have one descriptor for each own property");
  print(descriptors.hasOwnProperty(allTruePropName), "Result should contain all own properties");
  print(descriptors.hasOwnProperty(allFalsePropName), "Result should contain all own properties");
  print(descriptors[allTruePropName].value, "fooAllTrue", "Result value attribute should match the value set by defineProperties");
  print(descriptors[allFalsePropName].value, "fooAllFalse", "Result value attribute should match the value set by defineProperties");
  var expectedProps = ['configurable', 'writable', 'enumerable'];

  for (var i in expectedProps) {
    print(descriptors[allTruePropName][expectedProps[i]]);
    print(descriptors[allFalsePropName][expectedProps[i]]);
  }
}

try {
  print(Object.hasOwnProperty("getOwnPropertyDescriptors"));
  print(Object.hasOwnProperty({}, "getOwnPropertyDescriptors"));
  Object.getOwnPropertyDescriptor({}, "getOwnPropertyDescriptors");
} catch (e) {
  ;
}

for (var p in {}) {
  print(p != "getOwnPropertyDescriptors");
}

print(1, Object.getOwnPropertyDescriptors.length, "Object.getOwnPropertyDescriptors requires exactly one parameter.");

try {
  Object.getOwnPropertyDescriptors();
  Object.getOwnPropertyDescriptors(null);
} catch (e) {
  ;
} // This test is adapted from https://github.com/tc39/proposal-object-getownpropertydescriptors/blob/master/test/built-ins/Object/getOwnPropertyDescriptors/has-accessors.js


var a = {
  get a() {
    ;
  },

  set a(value) {
    ;
  }

};
var b = Object.getOwnPropertyDescriptors(a);
print(b.a.get === Object.getOwnPropertyDescriptor(a, 'a').get);
print(b.a.set === Object.getOwnPropertyDescriptor(a, 'a').set);
var foo = {};
Object.defineProperties(foo, {
  "fooAllTrue": {
    configurable: true,
    enumerable: true,
    value: "fooAllTrue",
    writable: true
  },
  "fooAllFalse": {
    configurable: false,
    enumerable: false,
    value: "fooAllFalse",
    writable: false
  }
});
var desc = Object.getOwnPropertyDescriptors(foo);
print(desc instanceof Object, "Result must be an object");
verifyObjectDescriptors(desc, "fooAllTrue", "fooAllFalse");
var foo = {};
var allTrueNum = 1234;
var allFalseNum = 5678;
Object.defineProperties(foo, {
  [allTrueNum]: {
    configurable: true,
    enumerable: true,
    value: "fooAllTrue",
    writable: true
  },
  [allFalseNum]: {
    configurable: false,
    enumerable: false,
    value: "fooAllFalse",
    writable: false
  }
});
var desc = Object.getOwnPropertyDescriptors(foo);
print(desc instanceof Object, "Result must be an object");
verifyObjectDescriptors(desc, allTrueNum.toString(), allFalseNum.toString()); // Also verify that the properties are accessible as numbers

print(desc[allTrueNum].value, "fooAllTrue", "For properties with number names, resulting properties should be accessible with numeric names.");
print(desc[allFalseNum].value, "fooAllFalse", "For properties with number names, resulting properties should be accessible with numeric names.");
var foo = {};
var allTrueSymbol = Symbol("allTrue");
var allFalseSymbol = Symbol("allFalse");
Object.defineProperties(foo, {
  [allTrueSymbol]: {
    configurable: true,
    enumerable: true,
    value: "fooAllTrue",
    writable: true
  },
  [allFalseSymbol]: {
    configurable: false,
    enumerable: false,
    value: "fooAllFalse",
    writable: false
  }
});
var desc = Object.getOwnPropertyDescriptors(foo);
print(desc instanceof Object, "Result must be an object");
verifyObjectDescriptors(desc, allTrueSymbol, allFalseSymbol); // Adapted from: https://github.com/ljharb/test262/blob/c2eaa30b08fb1e041b7297e415b6bad8461f50dc/test/built-ins/Object/getOwnPropertyDescriptors/proxy-undefined-descriptor.js

var proxyHandler = {
  getOwnPropertyDescriptor: function () {
    ;
  }
};
var key = "a";
var obj = {};
obj[key] = "value";
var proxy = new Proxy(obj, proxyHandler);
var descriptor = Object.getOwnPropertyDescriptor(proxy, key);
print(undefined, descriptor, "Descriptor matches result of [[GetOwnPropertyDescriptor]] trap");
var result = Object.getOwnPropertyDescriptors(proxy);
print(result.hasOwnProperty(key));
