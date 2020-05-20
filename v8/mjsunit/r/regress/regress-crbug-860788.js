// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --expose-async-hooks
try {
  Object.prototype.__defineGetter__(0, function () {
    ;
  });

  "x";
} catch (e) {
  print("Caught: " + e);
}

try {
  (function () {
    let asyncIds = [],
        triggerIds = [];

    async function foo() {
      ;
    }

    foo();
  })();
} catch (e) {
  print("Caught: " + e);
}

try {
  var obj = {
    prop: 7
  };
  "nonexistent(obj)";
} catch (e) {
  print("Caught: " + e);
}
