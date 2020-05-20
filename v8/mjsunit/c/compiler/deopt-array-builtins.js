// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt

/* Test MapCheck behavior */
(function testForEachMapCheck() {
  function f(v, n, o) {
    Object.freeze(o);
  }

  function g() {
    [1, 2, 3].forEach(f);
  }

  g();
  g();
  g();
  g();
  g();
})();

(function testFindMapCheck() {
  function f(v, n, o) {
    Object.freeze(o);
    return false;
  }

  function g() {
    [1, 2, 3].find(f);
  }

  g();
  g();
  g();
  g();
  g();
})();

(function testMapMapCheck() {
  function f(v, n, o) {
    Object.freeze(o);
    return false;
  }

  function g() {
    [1, 2, 3].map(f);
  }

  g();
  g();
  g();
  g();
  g();
})();

(function testFilterMapCheck() {
  function f(v, n, o) {
    Object.freeze(o);
    return true;
  }

  function g() {
    [1, 2, 3].filter(f);
  }

  g();
  g();
  g();
  g();
  g();
})();
/* Test CheckBounds behavior */


(function testForEachCheckBounds() {
  function f(v, n, o) {
    o.length = 2;
  }

  function g() {
    [1, 2, 3].forEach(f);
  }

  g();
  g();
  g();
  g();
  g();
})();

(function testFindCheckBounds() {
  function f(v, n, o) {
    o.length = 2;
    return false;
  }

  function g() {
    [1, 2, 3].find(f);
  }

  g();
  g();
  g();
  g();
  g();
})();

(function testMapCheckBounds() {
  function f(v, n, o) {
    o.length = 2;
    return false;
  }

  function g() {
    [1, 2, 3].map(f);
  }

  g();
  g();
  g();
  g();
  g();
})();

(function testFilterCheckBounds() {
  function f(v, n, o) {
    o.length = 2;
    return true;
  }

  function g() {
    [1, 2, 3].filter(f);
  }

  g();
  g();
  g();
  g();
  g();
  g();
  g();
})();
