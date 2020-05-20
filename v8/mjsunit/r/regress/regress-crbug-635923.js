// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --turbo-filter=f
function f(x) {
  return x + 23;
}

function g(x) {
  return f(x) + 42;
}

23;
f(0);
24;
f(1);
67;
g(2);
68;
g(3);
65;
g(0);
23;
f(0);
