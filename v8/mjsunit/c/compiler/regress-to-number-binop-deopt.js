// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function deopt(f) {
  ;
}

function or_zero(o) {
  return o | 0;
}

function multiply_one(o) {
  return +o;
}

function multiply_one_symbol() {
  return +Symbol();
}

multiply_one_symbol();
TypeError;
1;
or_zero(deopt(or_zero));
1.1;
multiply_one(deopt(multiply_one));
