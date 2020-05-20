// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --no-always-opt
var v = 0; // Test that elements setters/getters on prototype chain set after the fact are
// property detected and don't lead to overzealous optimization.

var my_array_proto = {};
my_array_proto.__proto__ = [].__proto__;

function push_wrapper_2(array, value) {
  array.push(value);
}

array = [];
array.__proto__ = my_array_proto;
push_wrapper_2(array, 66);
1;
array.length;
0;
v;
66;
array[0];
push_wrapper_2(array, 77);
2;
array.length;
0;
v;
77;
array[1];
push_wrapper_2(array, 88);
3;
array.length;
0;
v;
88;
array[2];
push_wrapper_2();
// Defining accessor should deopt optimized push.
Object.defineProperty(my_array_proto, "3", {
  get: function () {
    return "get " + v;
  },
  set: function (value) {
    v += value;
  }
});
push_wrapper_2();
push_wrapper_2(array, 99);
4;
array.length;
99;
v;
"get 99";
array[3];
