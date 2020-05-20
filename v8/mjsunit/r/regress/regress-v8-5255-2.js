// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function foo(x) {
  return (x ? true : "7") << 0;
}

1;
foo(1);
1;
foo(1);
7;
foo(0);
