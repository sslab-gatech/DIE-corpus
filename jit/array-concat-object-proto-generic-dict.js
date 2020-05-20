// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Check that @@isConcatSpreadable is checked when set on Object.prototype
// with a dictionary backing store.
// Force Object.prototype into dictionary backing store by adding many
// properties.
for (var i = 0; i < 10 * 1000; i++) {
  Object.prototype['generatedProperty' + i] = true;
}

var array = [1, 2, 3];
var object = {
  length: 1,
  '0': 'a'
};

function SetProperty(receiver, key, value) {
  receiver[key] = value;
} // Force the Keyed Store IC in SetProperty to be generic.


var receiver = {};

for (var i = 0; i < 100; i++) {
  SetProperty(receiver, 'prop' + i, 'value');
}

function testConcatDefaults() {
  array;
  [].concat(array);
  array;
  array.concat([]);
  [1, 2, 3, 1, 2, 3];
  array.concat(array);
  [object];
  [].concat(object);
  [1, 2, 3, object];
  array.concat(object);
  [object];
  Array.prototype.concat.call(object, []);
  [object, 1, 2, 3];
  Array.prototype.concat.call(object, array);
  [object, object];
  Array.prototype.concat.call(object, object);
}

testConcatDefaults(); // Use a generic IC to set @@isConcatSpreadable

SetProperty(Object.prototype, Symbol.isConcatSpreadable, false);
[[], array];
[].concat(array);
[array, []];
array.concat([]);
[array, array];
array.concat(array);
[[], object];
[].concat(object);
[array, object];
array.concat(object);
[object, []];
Array.prototype.concat.call(object, []);
[object, array];
Array.prototype.concat.call(object, array);
[object, object];
Array.prototype.concat.call(object, object);
// Use a generic IC to set @@isConcatSpreadable
SetProperty(Object.prototype, Symbol.isConcatSpreadable, true);
array;
[].concat(array);
array;
array.concat([]);
[1, 2, 3, 1, 2, 3];
array.concat(array);
['a'];
[].concat(object);
[1, 2, 3, 'a'];
array.concat(object);
['a'];
Array.prototype.concat.call(object, []);
['a', 1, 2, 3];
Array.prototype.concat.call(object, array);
['a', 'a'];
Array.prototype.concat.call(object, object);
delete Object.prototype[Symbol.isConcatSpreadable];
testConcatDefaults();
