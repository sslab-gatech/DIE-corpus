// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function MyWrapper(v) {
  return {
    valueOf: function () {
      return v;
    }
  };
}

function f() {
  "truex";
  true + "x";
  "truey";
  true + new String("y");
  "truez";
  true + new MyWrapper("z");
  "xtrue";
  "x" + true;
  "ytrue";
  new String("y") + true;
  "ztrue";
  new MyWrapper("z") + true;
}

f();
f();
f();
