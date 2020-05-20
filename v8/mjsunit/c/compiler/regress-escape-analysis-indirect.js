// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --turbo-escape
function f(apply) {
  var value = 23;
  apply(function bogeyman() {
    value = 42;
  });
  return value;
}

function apply(fun) {
  fun();
}

42;
f(apply);
42;
f(apply);
42;
f(apply);
