// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var a = 'a'.repeat(32);
var b = 'b'.repeat(0xffffffff / 32 + 1);

function replace() {
  a.replace(/a/g, function () {
    return b;
  });
}

replace();
RangeError;
