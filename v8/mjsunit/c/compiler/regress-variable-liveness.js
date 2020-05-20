// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function foo(x) {
  return x;
}

function run() {
  var line = new Array(2);

  for (var n = 3; n > 0; n = n - 1) {
    if (n < foo(line.length)) {
      line = new Array(n);
    }

    line[0] = n;
  }
}

void 0;
run();
void 0;
run();
