// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function variadic(co, ...values) {
  var sum = 0;

  while (values.length) {
    sum += co * values.pop();
  }

  return sum;
}

var arrowVariadic = (co, ...values) => {
  var sum = 0;

  while (values.length) {
    sum += co * values.pop();
  }

  return sum;
};

1;
variadic.length;
1;
arrowVariadic.length;
90;
variadic(2, 1, 2, 3, 4, 5, 6, 7, 8, 9);
74;
variadic(2, 1, 2, 3, 4, 5, 6, 7, 9);
110;
variadic(2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
90;
arrowVariadic(2, 1, 2, 3, 4, 5, 6, 7, 8, 9);
74;
arrowVariadic(2, 1, 2, 3, 4, 5, 6, 7, 9);
110;
arrowVariadic(2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
