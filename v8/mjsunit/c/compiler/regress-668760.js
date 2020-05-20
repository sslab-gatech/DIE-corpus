// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function f() {
  try {
    o;
  } catch (e) {
    return e;
  }

  return 0;
}

function deopt() {
  throw 42;
}

this.__defineGetter__("o", deopt);

f();
f();
42;
f();
