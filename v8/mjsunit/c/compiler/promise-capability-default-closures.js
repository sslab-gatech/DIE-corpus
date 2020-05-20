// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function () {
  var resolve, value;
  new Promise(r => resolve = r).then(v => value = v);

  function foo() {
    resolve(1);
  }

  foo();
  foo();
  foo();
})();

(function () {
  var reject, value;
  new Promise((_, r) => reject = r).catch(v => value = v);

  function foo() {
    reject(1);
  }

  foo();
  foo();
  foo();
})();

(function () {
  var value;

  function foo(x) {
    return new Promise((resolve, reject) => resolve(x));
  }

  foo(1);
  foo(1);
  foo(1).then(v => value = v);
})();

(function () {
  var value;

  function foo(x) {
    return new Promise((resolve, reject) => reject(x));
  }

  foo(1);
  foo(1);
  foo(1).catch(v => value = v);
})();
