// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --turbo-escape
function g(a) {
  if (a) {
    return arguments;
  }

  return 23;
}

function f() {
  return g(false);
}

23;
f();
23;
f();
23;
f();
