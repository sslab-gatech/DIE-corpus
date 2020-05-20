// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Cross-origin property access throws
(() => f.a)();

TypeError;

(() => {
  'use strict';

  f.a = 1;
})();

TypeError;
undefined;
f2.a;
f2.a = 1;
1;
f2.a;
