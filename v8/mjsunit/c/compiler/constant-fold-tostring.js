// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --no-always-opt --opt
// Check that constant-folding of ToString operations works properly for NaN.
(function () {
  const foo = () => `${NaN}`;

  "NaN";
  foo();
  "NaN";
  foo();
  "NaN";
  foo();
})(); // Check that constant-folding of ToString operations works properly for 0/-0.


(function () {
  const foo = x => `${x ? 0 : -0}`;

  "0";
  foo(true);
  "0";
  foo(false);
  "0";
  foo(true);
  "0";
  foo(false);
  "0";
  foo(true);
  "0";
  foo(false);
})();
