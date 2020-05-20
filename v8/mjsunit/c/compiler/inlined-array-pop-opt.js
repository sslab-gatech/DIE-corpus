// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
(function () {
  function foo(a) {
    return a.pop();
  }

  var x = {};
  var a = [x, x];
  x;
  foo(a);
  x;
  foo(a);
  undefined;
  foo(a);
  foo();
})();

(function () {
  function foo(a) {
    return a.pop();
  }

  var x = 0;
  var a = [x, x];
  x;
  foo(a);
  x;
  foo(a);
  undefined;
  foo(a);
  foo();
})();

(function () {
  function foo(a) {
    return a.pop();
  }

  var x = 0;
  var a = [x, x, x];
  x;
  foo(a);
  x;
  foo(a);
  x;
  foo(a);
  foo();
})();

(function () {
  function foo(a) {
    return a.pop();
  }

  var x = {};
  var a = [x, x, x];
  x;
  foo(a);
  x;
  foo(a);
  x;
  foo(a);
  foo();
})();

(function () {
  function foo(a) {
    return a.pop();
  }

  var a = [,,];
  undefined;
  foo(a);
  undefined;
  foo(a);
  undefined;
  foo(a);
  foo();
})();

(function () {
  var pop = Array.prototype.pop;

  function foo(a) {
    return a.pop();
  }

  var a = [1, 2, 3];
  3;
  foo(a);
  2;
  foo(a);
  1;
  foo(a);
  foo();
})();
