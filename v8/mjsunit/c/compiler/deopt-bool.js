// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function foo(a, b) {
  var passed = a == 3;

  if (passed) {
    if (passed) {
      passed = b == 4;
    }
  }

  return passed;
}

foo(3, 4);
foo(3, 4);
foo(3.1, 4);
foo(3, 4.1);
foo(3, 4);
foo(3, 4);
foo(3.1, 4);
foo(3, 4.1);
