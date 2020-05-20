// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
(function test() {
  function foo(a) {
    a.push(a.length = 2);
  }

  foo([1]);
  foo([1]);
  foo([1]);
  foo([1]);
  foo();
})();

(function testElementTypeCheckSmi() {
  function foo(a) {
    a.push('a');
  }

  foo([1]);
  foo([1]);
  foo([1]);
  foo([1]);
  foo();
})();

(function testElementTypeCheckDouble() {
  function foo(a) {
    a.push('a');
  }

  foo([0.3413312]);
  foo([0.3413312]);
  foo([0.3413312]);
  foo([0.3413312]);
  foo();
})();

(function test() {
  function bar(a) {
    a.x = 2;
  }

  ;

  function foo(a) {
    a.push(bar(a));
  }

  foo(["1"]);
  foo(["1"]);
  foo(["1"]);
  foo(["1"]);
  foo();
})();

(function test() {
  function foo(a) {
    a.push(a.length = 2);
  }

  foo([0.34234]);
  foo([0.34234]);
  foo([0.34234]);
  foo([0.34234]);
  foo();
})();

(function test() {
  const N = 128 * 1024;

  function foo(a) {
    a.push(1);
  }

  foo(new Array(N));
  foo(new Array(N));
  foo(new Array(N));
  foo(new Array(N));
  foo();
})();

(function test() {
  function mkArray() {
    const N = 128 * 1024;
    let a = [0.1];
    a.length = N;
    return a;
  }

  function foo(a) {
    a.push(0.23441233123);
  }

  foo(mkArray());
  foo(mkArray());
  foo(mkArray());
  foo(mkArray());
  foo();
})();
