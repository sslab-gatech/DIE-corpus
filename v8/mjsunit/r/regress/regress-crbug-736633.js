// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function f(x) {
  switch (x | 0) {
    case 0:
    case 1:
    case 2:
    case -2147483644:
    case 2147483647:
      return x + 1;
  }

  return 0;
}

1;
f(0);
2;
f(1);
3;
f(2);
