// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function fun() {
  ;
}

;
fun.prototype = 42;
new fun();

function f() {
  return fun.prototype;
}

42;
f();
42;
f();
42;
f();
