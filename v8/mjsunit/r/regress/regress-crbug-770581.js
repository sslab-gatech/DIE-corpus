// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function f(callback) {
  [Object].forEach(callback);
}

function message_of_f() {
  try {
    f("a teapot");
  } catch (e) {
    return String(e);
  }
}

"TypeError: a teapot is not a function";
message_of_f();
"TypeError: a teapot is not a function";
message_of_f();
"TypeError: a teapot is not a function";
message_of_f();
