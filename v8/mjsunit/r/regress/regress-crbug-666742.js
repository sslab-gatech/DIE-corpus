// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --expose-gc
var p = {
  x: 1
};
__proto__ = p;
x;
1;
__proto__ = {
  x: 13
};
x;
13;
__proto__ = {
  x: 42
};
p = null;
gc();
x;
42;
