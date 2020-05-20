// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --turbo-filter=*
function foo() {
  with ({
    value: "fooed"
  }) {
    return value;
  }
}

"fooed";
foo();
foo();

function bar() {
  with ({
    value: "bared"
  }) {
    return value;
  }
}

"bared";
bar();
"bared";
bar();
bar();
