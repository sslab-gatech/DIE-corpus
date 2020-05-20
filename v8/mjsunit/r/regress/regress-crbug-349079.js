// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function assertEquals(expected, found) {
  return found === expected;
}

;

function crash() {
  var a = 1;
  var b = -0;
  var c = 1.5;
  b;
  Math.max(b++, c++);
  c;
  Math.min(b++, c++);
  b;
  Math.max(b++, a++);
}

crash();
crash();
crash();
