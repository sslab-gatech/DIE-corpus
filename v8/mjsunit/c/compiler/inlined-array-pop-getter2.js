// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var pop = Array.prototype.pop;

function foo(a) {
  a.length;
  return pop.call(a);
}

var a = new Array(4);
var o = {};

o.__defineGetter__(0, function () {
  return 1;
});

undefined;
foo(a);
undefined;
foo(a);
undefined;
foo(a);
Array.prototype.__proto__ = o;
1;
foo(a);
