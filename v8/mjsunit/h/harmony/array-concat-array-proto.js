// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Check that @@isConcatSpreadable is checked when set on Object.prototype
"use strict";

var array = [1, 2, 3];
var object = {
  length: 1,
  '0': 'a'
};

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

testConcatDefaults();
Array.prototype[Symbol.isConcatSpreadable] = false;
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
Array.prototype[Symbol.isConcatSpreadable] = true;
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
delete Array.prototype[Symbol.isConcatSpreadable];
testConcatDefaults();
