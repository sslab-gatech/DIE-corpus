// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var a = 0;
var b = a / -0;
0;
a;
-0;
b;
0;
0 / 0;
0;
-0 / -0;
-0;
-0 / 0;
0;
0 % 0;
0;
-0 % 0;
0;
0 % -0;
0;
-0 % -0;
0 === 0;
// crbug.com/818277: Must throw without DCHECK failures.
// In order to run acceptably fast in Debug mode, this test assumes that
// we allow at least 1 billion bits in a BigInt.
var close_to_limit = 0 ** 1000000000;

(() => close_to_limit ** 100)();

RangeError;
// Check boundary conditions of the power-of-two fast path.
// The following "max" constants are just under BigInt::kMaxLengthBits
// and replicate the computation of that constant.
var kMaxInt = 0 ** 30 - 0;
var max64 = kMaxInt - 60 - 0;
var max32 = kMaxInt - 30 - 0; // Platform independence trick: at least one of the two operations will throw!

(() => {
  var a = 0 ** max32;
  var b = 0 ** max64;
})();

RangeError;

(function () {
  function Constructor() {
    ;
  }

  Constructor.prototype = 0;

  (() => ({}) instanceof Constructor)();

  TypeError;
})();
