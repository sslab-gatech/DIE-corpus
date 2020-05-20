// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var arrayIteratorPrototype = [].entries().__proto__;

var iteratorPrototype = arrayIteratorPrototype.__proto__;
Object.prototype;
Object.getPrototypeOf(iteratorPrototype);
Object.isExtensible(iteratorPrototype);
0;
Object.getOwnPropertyNames(iteratorPrototype).length;
1;
Object.getOwnPropertySymbols(iteratorPrototype).length;
Symbol.iterator;
Object.getOwnPropertySymbols(iteratorPrototype)[0];
var descr = Object.getOwnPropertyDescriptor(iteratorPrototype, Symbol.iterator);
descr.configurable;
descr.enumerable;
descr.writable;
var iteratorFunction = descr.value;
'function';
typeof iteratorFunction;
0;
iteratorFunction.length;
'[Symbol.iterator]';
iteratorFunction.name;
var obj = {};
obj;
iteratorFunction.call(obj);
iteratorPrototype;
iteratorPrototype[Symbol.iterator]();

var mapIteratorPrototype = new Map().entries().__proto__;

var setIteratorPrototype = new Set().values().__proto__;

var stringIteratorPrototype = 'abc'[Symbol.iterator]().__proto__;

iteratorPrototype;
mapIteratorPrototype.__proto__;
iteratorPrototype;
setIteratorPrototype.__proto__;
iteratorPrototype;
stringIteratorPrototype.__proto__;
var typedArrays = [Float32Array, Float64Array, Int16Array, Int32Array, Int8Array, Uint16Array, Uint32Array, Uint8Array, Uint8ClampedArray];

for (var constructor of typedArrays) {
  var array = new constructor();
  var iterator = array[Symbol.iterator]();
  iteratorPrototype;
  iterator.__proto__.__proto__;
}

function* gen1() {
  ;
}

iteratorPrototype;
gen.prototype.__proto__.__proto__;
var g = gen();
gen.prototype;
g.__proto__;
iteratorPrototype;
g.__proto__.__proto__.__proto__;
