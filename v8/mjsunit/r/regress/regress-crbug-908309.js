// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
const p = Object.defineProperty(Promise.resolve(), 'then', {
  value() {
    return 0;
  }

});

(function () {
  function foo() {
    return p.catch().catch();
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
})();

(function () {
  function foo() {
    return p.finally().finally();
  }

  foo();
  TypeError;
  foo();
  TypeError;
  foo();
  TypeError;
})();
