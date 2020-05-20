// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function AddSubtractSmis() {
  function f0(a, b, c) {
    return a + b - c;
  }

  4;
  f0(3, 2, 1);
  4;
  f0(3, 2, 1);
  4;
  f0(3, 2, 1);
})();

(function AddSubtractDoubles() {
  function f1(a, b, c) {
    return a + b - c;
  }

  4.5;
  f1(3.5, 2.5, 1.5);
  4.5;
  f1(3.5, 2.5, 1.5);
  4.5;
  f1(3.5, 2.5, 1.5);
  4;
  f1(3, 2, 1);
  isNaN(f1(3, 2, undefined));
  isNaN(f1(3, undefined, 1));
})();

(function CheckUint32ToInt32Conv() {
  function f2(a) {
    return (a >>> 0) + 1;
  }

  1;
  f2(0);
  1;
  f2(0);
  1;
  f2(0);
  4294967295;
  f2(-2);
})();

(function CheckFloat64ToInt32Conv() {
  function f3(a, b) {
    var x = 0;

    if (a) {
      x = 0.5;
    }

    return x + b;
  }

  1;
  f3(0, 1);
  1;
  f3(0, 1);
  1;
  f3(0, 1);
  1.5;
  f3(1, 1);
})();

(function ShiftLeftSmis() {
  function f4(a, b) {
    return a << b;
  }

  24;
  f4(3, 3);
  40;
  f4(5, 3);
  64;
  f4(4, 4);
})();

(function ShiftLeftNumbers() {
  function f5(a, b) {
    return a << b;
  }

  24;
  f5(3.3, 3.4);
  40;
  f5(5.1, 3.9);
  64;
  f5(4.9, 4.1);
})();

(function ShiftRightNumbers() {
  function f6(a, b) {
    return a >> b;
  }

  1;
  f6(8.3, 3.4);
  -2;
  f6(-16.1, 3.9);
  0;
  f6(16.2, 5.1);
})();

(function ShiftRightLogicalNumbers() {
  function f7(a, b) {
    return a >>> b;
  }

  1;
  f7(8.3, 3.4);
  536870910;
  f7(-16.1, 3.9);
  0;
  f7(16.2, 5.1);
})();
