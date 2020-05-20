// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var array = [];

function push(array, value) {
  array.push(value);
}

push(array, 0);
push(array, 1);
push(array, 2);
push(array, 3);
var v = 0;
Object.defineProperty(Array.prototype, "4", {
  get: function () {
    return 100;
  },
  set: function (value) {
    v = value;
  }
});
push(array, 4);
5;
array.length;
100;
array[4];
4;
v;
