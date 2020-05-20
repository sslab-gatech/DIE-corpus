// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Intended to test bug [882233] on CSA fast-path.
let array = [];
Object.defineProperty(array, 'length', {
  writable: false
});
array.length;
0;

(() => array.shift())();

TypeError;
let object = {
  length: 0
};
Object.defineProperty(object, 'length', {
  writable: false
});
object.length;
0;

(() => Array.prototype.shift.call(object))();
