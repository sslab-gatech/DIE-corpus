// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function TestForOfName() {
  var result = 0;
  var index;

  for (index of [1, 2, 3, 4, 5]) {
    result += index;
  }

  result;
  15;
  index;
  5;
})();

(function TestForOfProperty() {
  var O = {};
  var result = 0;

  for (O.index of [1, 2, 3, 4, 5]) {
    result += O.index;
  }

  result;
  15;
  O.index;
  5;
})();
