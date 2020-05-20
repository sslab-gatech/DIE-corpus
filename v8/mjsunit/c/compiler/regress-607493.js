// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function ForInTryCatchContrinueOsr() {
  var a = [1];

  function g() {
    for (var x in a) {
      try {
        return;
      } catch (e) {
        continue;
      }
    }
  }

  g();
})();

(function ForInContinueNestedOsr() {
  var a = [1];

  function g() {
    for (var x in a) {
      if (x) {
        ;
      }

      continue;
    }
  }

  g();
})();
