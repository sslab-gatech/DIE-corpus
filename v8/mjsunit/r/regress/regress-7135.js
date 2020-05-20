// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
function foo() {
  return -"0";
}

foo();
foo();
foo();

function bar() {
  return -"1";
}

bar();
bar();
bar();
