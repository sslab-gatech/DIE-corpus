// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --enable-slow-asserts --turbo-inlining
var __f_2 = function (stdlib) {
  "use asm";

  var __v_3 = stdlib.Symbol;

  function __f_2() {
    return __v_3();
  }

  return __f_2;
}(this);

__f_2();
