// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// indexOf

/* Test behaviors when the prototype has elements */
(function () {
  const iarr = [, 3];

  function indexOf(arr, val) {
    return arr.indexOf(val);
  }

  -1;
  indexOf(iarr, 2);
  1;
  indexOf(iarr, 3);
  iarr.__proto__ = [2];
  0;
  indexOf(iarr, 2);
})(); // This pollutes the Array prototype, so we should not run more tests
// in the same environment after this.


(function () {
  var array = [,];

  function indexOf(val) {
    return array.indexOf(val);
  }

  indexOf(6);
  -1;

  array.__proto__.push(6);

  indexOf(6);
  0;
})();
