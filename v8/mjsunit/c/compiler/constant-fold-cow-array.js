// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --no-always-opt --opt
// Check that we properly deoptimize TurboFan'ed code when we constant-fold
// elements from a COW array and we change the length of the array.
(function () {
  const a = [1, 2, 3];

  const foo = () => a[0];

  1;
  foo();
  1;
  foo();
  1;
  foo();
  foo;
  a.length = 1;
  1;
  foo();
  foo;
})(); // Check that we properly deoptimize TurboFan'ed code when we constant-fold
// elements from a COW array and we change the element of the array.


(function () {
  const a = [1, 2, 3];

  const foo = () => a[0];

  1;
  foo();
  1;
  foo();
  1;
  foo();
  foo;
  a[0] = 42;
  42;
  foo();
  foo;
})();
