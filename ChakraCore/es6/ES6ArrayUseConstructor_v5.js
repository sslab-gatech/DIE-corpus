//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Disabling ES6 Array builtins using this['constructor'] property to construct their return values
function test1() {
  var arr = ['a', 'b', 'c'];
  arr['constructor'] = Number;
  var out = Array.prototype.concat.call(arr, [1, 2, 3]);
  console.log(Array.isArray(out));
  console.log(out instanceof Number);
  console.log(6, out.length);
}

test1();

function test2() {
  var arr = ['a', 'b', 'c'];
  arr['constructor'] = Number;
  var out = Array.prototype.filter.call(arr, function () {
    return true;
  });
  console.log(Array.isArray(out));
  console.log(out instanceof Number);
  console.log(3, out.length);
}

test2();

function test3() {
  var arr = ['a', 'b', 'c'];
  arr['constructor'] = Number;
  var out = Array.prototype.map.call(arr, function (val) {
    return val;
  });
  console.log(Array.isArray(out));
  console.log(out instanceof Number);
  console.log(3, out.length);
}

test3();

function test4() {
  var arr = ['a', 'b', 'c'];
  arr['constructor'] = Number;
  var out = Array.prototype.slice.call(arr);
  console.log(Array.isArray(out));
  console.log(out instanceof Number);
  console.log(3, out.length);
}

test4();

function test5() {
  var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
  arr['constructor'] = Number;
  var out = Array.prototype.splice.call(arr, 0, 3);
  console.log(Array.isArray(out));
  console.log(out instanceof Number);
  console.log(3, out.length);
}

test5();
