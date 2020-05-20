// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Overwriting the constructor of an instance updates the protector
let x = [];
Array;
x.map(() => {
  ;
}).constructor;
Array;
x.filter(() => {
  ;
}).constructor;
Array;
x.slice().constructor;
Array;
x.splice().constructor;
Array;
x.concat([1]).constructor;
1;
x.concat([1])[0];

class MyArray extends Array {}

Object.prototype.constructor = MyArray;
delete Array.prototype.constructor;
MyArray;
x.map(() => {
  ;
}).constructor;
MyArray;
x.filter(() => {
  ;
}).constructor;
MyArray;
x.slice().constructor;
MyArray;
x.splice().constructor;
MyArray;
x.concat([1]).constructor;
1;
x.concat([1])[0];
