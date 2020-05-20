// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function bar(x) {
  "use strict";

  return this + x;
}

function foo(f) {
  var a = bar.bind(42, 1);
  return f() ? 0 : a;
}

function t() {
  return true;
}

0;
foo(t);
0;
foo(t);
var a = foo(_ => false);
43;
a();
