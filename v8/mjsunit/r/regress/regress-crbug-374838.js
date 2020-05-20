// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function foo() {
  var a = [0];
  result = 0;

  for (var i = 0; i < 4; i++) {
    result += a.length;
    a.shift();
  }

  return result;
}

1;
foo();
1;
foo();
1;
foo();
