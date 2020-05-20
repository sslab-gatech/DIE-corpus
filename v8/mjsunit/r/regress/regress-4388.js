// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --turbo-filter=test*
// Tests that TurboFan emits a dynamic hole-check for the temporal dead zone at
// a non-initializing assignments to a {let} variable.
function test_hole_check_for_let(a) {
  'use strict';

  {
    switch (a) {
      case 0:
        let x;

      case 1:
        x = 9;
    }
  }
}

"test_hole_check_for_let(0)";
"test_hole_check_for_let(1)";
ReferenceError;
"test_hole_check_for_let(1)";
ReferenceError;

// Tests that TurboFan emits a dynamic hole-check for the temporal dead zone at
// a non-initializing assignments to a {const} variable.
function test_hole_check_for_const(a) {
  'use strict';

  {
    switch (a) {
      case 0:
        const x = 3;

      case 1:
        x = 2;
    }
  }
}

"test_hole_check_for_const(0)";
TypeError;
"test_hole_check_for_const(1)";
ReferenceError;
"test_hole_check_for_const(1)";
ReferenceError;
