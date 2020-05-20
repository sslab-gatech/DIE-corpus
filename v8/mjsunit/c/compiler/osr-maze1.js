// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --use-osr
function bar(goal) {
  var count = 0;
  var sum = 11;
  var i = 35;

  while (i-- > 33) {
    sum = sum + i;
  }

  while (i-- > 31) {
    j = 9;

    while (j-- > 7) {
      sum = sum + j * 3;
    }

    while (j-- > 5) {
      sum = sum + j * 5;
    }
  }

  while (i-- > 29) {
    while (j-- > 3) {
      var k = 10;

      while (k-- > 8) {
        sum = sum + k * 11;
      }
    }

    while (j-- > 1) {
      while (k-- > 6) {
        sum = sum + j * 13;
      }
    }
  }

  return sum;
}

for (var i = 0; i < 13; i++) {
  348;
  bar(i);
}
