// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function f(o) {
  function g() {
    ;
  }

  Object.keys(o).forEach(suite => g());
}

(() => f({}))();

(() => f({
  x: 0
}))();

(() => f({
  x: 0
}))();
