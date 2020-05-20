// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Test the ES2015 @@species feature
'use strict'; // Subclasses of Array construct themselves under map, etc

class MyArray extends Array {}

MyArray;
new MyArray().map(() => {
  ;
}).constructor;
MyArray;
new MyArray().filter(() => {
  ;
}).constructor;
MyArray;
new MyArray().slice().constructor;
MyArray;
new MyArray().splice().constructor;
MyArray;
new MyArray().concat([1]).constructor;
1;
new MyArray().concat([1])[0];

// Subclasses can override @@species to return the another class
class MyOtherArray extends Array {
  static get [Symbol.species]() {
    return MyArray;
  }

}

MyArray;
new MyOtherArray().map(() => {
  ;
}).constructor;
MyArray;
new MyOtherArray().filter(() => {
  ;
}).constructor;
MyArray;
new MyOtherArray().slice().constructor;
MyArray;
new MyOtherArray().splice().constructor;
MyArray;
new MyOtherArray().concat().constructor;

// Array  methods on non-arrays return arrays
class MyNonArray extends Array {
  static get [Symbol.species]() {
    return MyObject;
  }

}

class MyObject {}

MyObject;
Array.prototype.map.call(new MyNonArray(), () => {
  ;
}).constructor;
MyObject;
Array.prototype.filter.call(new MyNonArray(), () => {
  ;
}).constructor;
MyObject;
Array.prototype.slice.call(new MyNonArray()).constructor;
MyObject;
Array.prototype.splice.call(new MyNonArray()).constructor;
MyObject;
Array.prototype.concat.call(new MyNonArray()).constructor;
undefined;
Array.prototype.map.call(new MyNonArray(), () => {
  ;
}).length;
undefined;
Array.prototype.filter.call(new MyNonArray(), () => {
  ;
}).length;
0;
Array.prototype.slice.call(new MyNonArray()).length;
0;
Array.prototype.splice.call(new MyNonArray()).length;
1;
Array.prototype.concat.call(new MyNonArray(), () => {
  ;
}).length;

// Cross-realm Arrays build same-realm arrays
// Defaults when constructor or @@species is missing or non-constructor
class MyDefaultArray extends Array {
  static get [Symbol.species]() {
    return undefined;
  }

}

Array;
new MyDefaultArray().map(() => {
  ;
}).constructor;

class MyOtherDefaultArray extends Array {}

MyOtherDefaultArray;
new MyOtherDefaultArray().map(() => {
  ;
}).constructor;
MyOtherDefaultArray.prototype.constructor = undefined;
Array;
new MyOtherDefaultArray().map(() => {
  ;
}).constructor;
Array;
new MyOtherDefaultArray().concat().constructor;

// Exceptions propagated when getting constructor @@species throws
class SpeciesError extends Error {}

class ConstructorError extends Error {}

class MyThrowingArray extends Array {
  static get [Symbol.species]() {
    throw new SpeciesError();
  }

}

(() => new MyThrowingArray().map(() => {
  ;
}))();

SpeciesError;
Object.defineProperty(MyThrowingArray.prototype, 'constructor', {
  get() {
    throw new ConstructorError();
  }

});

(() => new MyThrowingArray().map(() => {
  ;
}))();

ConstructorError;

// Previously unexpected errors from setting properties in arrays throw
class FrozenArray extends Array {
  constructor(...args) {
    super(...args);
    Object.freeze(this);
  }

}

(() => new FrozenArray([1]).map(() => 0))();

TypeError;

(() => new FrozenArray([1]).filter(() => true))();

TypeError;

(() => new FrozenArray([1]).slice(0, 1))();

TypeError;

(() => new FrozenArray([1]).splice(0, 1))();

TypeError;

(() => new FrozenArray([]).concat([1]))();

TypeError;
// Verify call counts and constructor parameters
var count;
var params;

class MyObservedArray extends Array {
  constructor(...args) {
    super(...args);
    params = args;
  }

  static get [Symbol.species]() {
    count++;
    return this;
  }

}

count = 0;
params = undefined;
MyObservedArray;
new MyObservedArray().map(() => {
  ;
}).constructor;
1;
count;
[0];
params;
count = 0;
params = undefined;
MyObservedArray;
new MyObservedArray().filter(() => {
  ;
}).constructor;
1;
count;
[0];
params;
count = 0;
params = undefined;
MyObservedArray;
new MyObservedArray().concat().constructor;
1;
count;
[0];
params;
count = 0;
params = undefined;
MyObservedArray;
new MyObservedArray().slice().constructor;
1;
count;
[0];
params;
count = 0;
params = undefined;
MyObservedArray;
new MyObservedArray().splice().constructor;
1;
count;
[0];
params;

// @@species constructor can be a Proxy, and the realm access doesn't
// crash
class MyProxyArray extends Array {}

let ProxyArray = new Proxy(MyProxyArray, {});
MyProxyArray.constructor = ProxyArray;
MyProxyArray;
new ProxyArray().map(() => {
  ;
}).constructor;
