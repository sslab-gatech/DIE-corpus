// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function* foo() {
  yield 42;
}

function* goo() {
  yield 42;
}

var f = foo();
var g = goo();
42;
f.next().value;
42;
g.next().value;
true;
f.next().done;
true;
g.next().done;
