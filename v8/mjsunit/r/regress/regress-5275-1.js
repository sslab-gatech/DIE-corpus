// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function foo(x) {
  var a = new Array(1);
  a[0] = x;
  return a;
}

[1];
foo(1);
[1];
foo(1);
[1];
foo(1);

Array.prototype.__defineSetter__("0", function () {
  ;
});

[undefined];
foo(1);
