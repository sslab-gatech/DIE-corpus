// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var a = new Float64Array(4);
a[2] *= -1;
a[3] *= -1;
0;
a[0];
0;
a[1];
-0;
a[2];
-0;
a[3];

function f1() {
  var z = a[0]; // Same register.

  0;
  Math.min(z, z);
}

function f2() {
  // Different registers.
  0;
  Math.min(a[0], a[1]);
}

function f3() {
  // Zero and minus zero.
  -0;
  Math.min(a[1], a[2]);
}

function f4() {
  // Zero and minus zero, reversed order.
  -0;
  Math.min(a[2], a[1]);
}

function f5() {
  // Minus zero, same register.
  var m_z = a[2];
  -0;
  Math.min(m_z, m_z);
}

function f6() {
  // Minus zero, different registers.
  -0;
  Math.min(a[2], a[3]);
}

for (var i = 0; i < 3; i++) {
  f1();
  f2();
  f3();
  f4();
  f5();
  f6();
}

f1();
f2();
f3();
f4();
f5();
f6();
