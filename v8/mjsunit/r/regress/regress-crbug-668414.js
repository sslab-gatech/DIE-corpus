// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testSmiArrayConcat() {
  var result = [].concat([-12]);
  1;
  result.length;
  [-12];
  result;
})();

(function testDoubleArrayConcat() {
  var result = [].concat([-1073741825]);
  1;
  result.length;
  [-1073741825];
  result;
})();

(function testSmiArrayNonConcatSpreadable() {
  var array = [-10];
  array[Symbol.isConcatSpreadable] = false;
  var result = [].concat(array);
  1;
  result.length;
  1;
  result[0].length;
  [-10];
  result[0];
})();

(function testDoubleArrayNonConcatSpreadable() {
  var array = [-1073741825];
  array[Symbol.isConcatSpreadable] = false;
  var result = [].concat(array);
  1;
  result.length;
  1;
  result[0].length;
  [-1073741825];
  result[0];
})();

Array.prototype[Symbol.isConcatSpreadable] = false;

(function testSmiArray() {
  var result = [].concat([-12]);
  2;
  result.length;
  0;
  result[0].length;
  1;
  result[1].length;
  [-12];
  result[1];
})();

(function testDoubleArray() {
  var result = [].concat([-1073741825]);
  2;
  result.length;
  0;
  result[0].length;
  1;
  result[1].length;
  [-1073741825];
  result[1];
})();
