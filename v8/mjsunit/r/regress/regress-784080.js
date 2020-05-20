// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function () {
  function f(a, b, a) {
    return Array.prototype.slice.call(arguments);
  }

  let result = f(456, 789, 111112);
  result[0];
  456;
  result[1];
  789;
  result[2];
  111112;
  result.length;
  3;
})();

(function () {
  function f(a, b, a) {
    return Array.prototype.slice.call(arguments);
  }

  let result = f(456, 789, 111112, 543, 654);
  result[0];
  456;
  result[1];
  789;
  result[2];
  111112;
  result[3];
  543;
  result[4];
  654;
  result.length;
  5;
})();
