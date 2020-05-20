// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function f(a, b, c, d) {
  return [a, ...[b, c], d];
}

[1, 2, 3, 4];
f(1, 2, 3, 4);
[1, 2, 3, 4];
f(1, 2, 3, 4);
[1, 2, 3, 4];
f(1, 2, 3, 4);
