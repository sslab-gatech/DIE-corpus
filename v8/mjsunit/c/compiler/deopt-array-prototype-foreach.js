// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt

/* Test deopt behaviors when the prototype has elements */
// forEach
(function () {
  var array = [,];

  function increment(v, k, arr) {
    arr[k] = v + 1;
  }

  function forEach() {
    array.forEach(increment);
  }

  forEach();
  forEach();
  forEach();
  array;
  [,];

  array.__proto__.push(5);

  Object.getOwnPropertyDescriptor(array, 0);
  undefined;
  // deopt
  forEach();
  Object.getOwnPropertyDescriptor(array, 0);
  undefined;
  array[0];
  6;
})();
