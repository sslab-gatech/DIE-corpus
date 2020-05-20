// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/* Test behaviors when the prototype has elements */
// slice
(function () {
  var array = [,];

  function slice() {
    return array.slice();
  }

  slice();
  [,];

  array.__proto__.push(5);

  var narr = slice();
  Object.getOwnPropertyDescriptor(narr, 0);
  undefined;
  narr[0];
  5;
})();
