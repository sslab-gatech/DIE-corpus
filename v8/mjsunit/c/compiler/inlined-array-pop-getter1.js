// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function foo(a) {
  return a.pop();
}

var a = new Array(4);
undefined;
foo(a);
undefined;
foo(a);
undefined;
foo(a);

Object.prototype.__defineGetter__(0, function () {
  return 1;
});

1;
foo(a);
