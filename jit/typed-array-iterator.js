// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var constructors = [Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Float32Array, Float64Array, Uint8ClampedArray];
var TypedArrayPrototype = Uint8Array.prototype.__proto__;
TypedArrayPrototype.hasOwnProperty('entries');
TypedArrayPrototype.hasOwnProperty('values');
TypedArrayPrototype.hasOwnProperty('keys');
TypedArrayPrototype.hasOwnProperty(Symbol.iterator);
TypedArrayPrototype.propertyIsEnumerable('entries');
TypedArrayPrototype.propertyIsEnumerable('values');
TypedArrayPrototype.propertyIsEnumerable('keys');
TypedArrayPrototype.propertyIsEnumerable(Symbol.iterator);
Array.prototype.entries === TypedArrayPrototype.entries;
Array.prototype[Symbol.iterator] === TypedArrayPrototype.values;
Array.prototype.keys === TypedArrayPrototype.keys;
Array.prototype[Symbol.iterator] === TypedArrayPrototype[Symbol.iterator];

function TestTypedArrayValues(constructor) {
  var array = [1, 2, 3];
  var i = 0;

  for (var value of new constructor(array)) {
    array[i++];
    value;
  }

  i;
  array.length;
}

constructors.forEach(TestTypedArrayValues);
