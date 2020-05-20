// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --verify-heap --expose-gc
function f() {
  var o = [{
    [Symbol.toPrimitive]() {
      ;
    }

  }];
  return o.length;
}

1;
f();
1;
f();
1;
f();
gc();
