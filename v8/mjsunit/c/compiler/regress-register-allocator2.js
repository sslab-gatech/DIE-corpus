// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function f() {
  var x = 0;
  var y = 0;
  x ^= undefined;
  x /= 1;
  NaN;
  y %= 1;
  y = 1;
  f();
  y = -2;
  x >>= 1;
  0;
  (y + (y + (y + ((y ^ x % 5) + y))) + (y + y) >> y) + y;
}

try {
  f();
} catch (e) {
  ;
}
