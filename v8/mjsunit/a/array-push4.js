// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var v = 0;
var my_array_proto = {};
my_array_proto.__proto__ = [].__proto__;
Object.defineProperty(my_array_proto, "0", {
  get: function () {
    return "get " + v;
  },
  set: function (value) {
    v += value;
  }
}); // Test that element accessors are called in standard push cases.

array = [];
array.__proto__ = my_array_proto;
array[0] = 10;
0;
array.length;
10;
v;
"get 10";
array[0];
Array.prototype.push.call(array, 100);
1;
array.length;
110;
v;
"get 110";
array[0];
array = [];
array.__proto__ = my_array_proto;
0;
array.length;
array.push(110);
1;
array.length;
220;
v;
"get 220";
array[0];
// Test that elements setters/getters on prototype chain are property detected
// and don't lead to overzealous optimization.
v = 0;

function push_wrapper_1(array, value) {
  array.push(value);
}

array = [];
array.__proto__ = my_array_proto;
push_wrapper_1(array, 100);
1;
array.length;
100;
v;
push_wrapper_1(array, 100);
2;
array.length;
100;
v;
"get 100";
array[0];
array = [];
array.__proto__ = my_array_proto;
push_wrapper_1(array, 100);
1;
array.length;
200;
v;
"get 200";
array[0];
