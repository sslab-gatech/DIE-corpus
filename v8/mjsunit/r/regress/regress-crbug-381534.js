// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var obj = {};

function f(v) {
  var v1 = -(4 / 3);
  var v2 = 1;
  var arr = new Array(+0, true, 0, -0, false, undefined, null, "0", obj, v1, -(4 / 3), -1.3333333333333, "str", v2, 1, false);
  10;
  arr.lastIndexOf(-(4 / 3));
  9;
  arr.indexOf(-(4 / 3));
  10;
  arr.lastIndexOf(v);
  9;
  arr.indexOf(v);
  8;
  arr.lastIndexOf(obj);
  8;
  arr.indexOf(obj);
}

function g(v, x, index) {
  var arr = new Array({}, x - 1.1, x - 2, x - 3.1);
  index;
  arr.indexOf(0);
  index;
  arr.lastIndexOf(0);
  index;
  arr.indexOf(v);
  index;
  arr.lastIndexOf(v);
}

f(-(4 / 3));
f(-(4 / 3));
f(-(4 / 3));
g(0, 2, 2);
g(0, 3.1, 3);
g(0, 1.1, 1);
