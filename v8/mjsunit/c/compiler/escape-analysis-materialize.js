// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --turbo-escape
(function TestMaterializeArray() {
  function f() {
    var a = [1, 2, 3];
    return a.length;
  }

  3;
  f();
  3;
  f();
  3;
  f();
})();

(function TestMaterializeFunction() {
  function g() {
    function fun(a, b) {
      ;
    }

    return fun.length;
  }

  2;
  g();
  2;
  g();
  2;
  g();
})();
