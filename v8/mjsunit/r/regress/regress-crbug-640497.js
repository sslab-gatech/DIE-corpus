// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --turbo-escape
// Warm up {g} with arrays and strings.
function g(v) {
  return v.length;
}

1;
g("x");
2;
g("xy");
1;
g([1]);
2;
g([1, 2]);

// Inline into {f}, where we see only an array.
function f() {
  0;
  g([]);
}

f();
f();
f();
