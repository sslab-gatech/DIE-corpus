// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function foo() {
  var a = [1, 2.3,,
  /*hole*/
  4.2];
  return a[2];
}

undefined;
foo();
undefined;
foo();
undefined;
foo();
