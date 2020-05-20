// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var undetectable = function () {
  ;
};

function foo(a) {
  const o = a ? foo : undetectable;
  return typeof o === 'function';
}

foo(false);
foo(false);
foo(false);
