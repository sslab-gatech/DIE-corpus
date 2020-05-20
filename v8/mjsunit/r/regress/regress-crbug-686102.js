// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var a = [];
Object.freeze(a);

function foo() {
  return a.length;
}

0;
foo();
0;
foo();
0;
foo();
