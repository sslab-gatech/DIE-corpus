// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Test Array call with known Boolean.
(() => {
  function foo(x) {
    return Array(!!x);
  }

  [true];
  foo(true);
  [false];
  foo(false);
  [true];
  foo(true);
  [false];
  foo(false);
})(); // Test Array construct with known Boolean.


(() => {
  function foo(x) {
    return new Array(!!x);
  }

  [true];
  foo(true);
  [false];
  foo(false);
  [true];
  foo(true);
  [false];
  foo(false);
})(); // Test Array call with known String.


(() => {
  function foo(x) {
    return Array("" + x);
  }

  ["a"];
  foo("a");
  ["b"];
  foo("b");
  ["a"];
  foo("a");
  ["b"];
  foo("b");
})(); // Test Array construct with known String.


(() => {
  function foo(x) {
    return new Array("" + x);
  }

  ["a"];
  foo("a");
  ["b"];
  foo("b");
  ["a"];
  foo("a");
  ["b"];
  foo("b");
})(); // Test Array call with known fixed small integer.


(() => {
  function foo() {
    return Array(2);
  }

  2;
  foo().length;
  2;
  foo().length;
  2;
  foo().length;
})(); // Test Array construct with known fixed small integer.


(() => {
  function foo() {
    return new Array(2);
  }

  2;
  foo().length;
  2;
  foo().length;
  2;
  foo().length;
})(); // Test Array call with multiple parameters.


(() => {
  function foo(x, y, z) {
    return Array(x, y, z);
  }

  [1, 2, 3];
  foo(1, 2, 3);
  [1, 2, 3];
  foo(1, 2, 3);
  [1, 2, 3];
  foo(1, 2, 3);
})(); // Test Array construct with multiple parameters.


(() => {
  function foo(x, y, z) {
    return new Array(x, y, z);
  }

  [1, 2, 3];
  foo(1, 2, 3);
  [1, 2, 3];
  foo(1, 2, 3);
  [1, 2, 3];
  foo(1, 2, 3);
})(); // Test Array construct inside try-catch block.


(() => {
  function foo(x) {
    try {
      return new Array(x);
    } catch (e) {
      return e;
    }
  }

  [];
  foo(0);
  [];
  foo(0);
  [];
  foo(0);
  foo(-1);
  RangeError;
})();
