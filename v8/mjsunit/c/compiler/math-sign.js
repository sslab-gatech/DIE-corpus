// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function signInt32(i) {
  i = i | 0;
  return Math.sign(i);
}

signInt32(0);
signInt32(2);
1;
signInt32(1);
0;
signInt32(0);
-1;
signInt32(-1);
-1;
signInt32(-1);
1;
signInt32(2147483647);
-1;
signInt32(2147483648);
-1;
signInt32(-2147483648);
0;
signInt32(NaN);
0;
signInt32(undefined);
0;
signInt32(-0);

function signFloat64(i) {
  return Math.sign(+i);
}

signFloat64(0.1);
signFloat64(-0.1);
1;
signFloat64(1);
1;
signFloat64(0.001);
-1;
signFloat64(-0.002);
1;
signFloat64(1e100);
-1;
signFloat64(-2e100);
0;
signFloat64(0);
Infinity;
1 / signFloat64(0);
-1;
signFloat64(-1);
-1;
signFloat64(-1);
1;
signFloat64(2147483647);
1;
signFloat64(2147483648);
-1;
signFloat64(-2147483647);
-1;
signFloat64(-2147483648);
-1;
signFloat64(-2147483649);
-0;
signFloat64(-0);
NaN;
signFloat64(NaN);
NaN;
signFloat64(undefined);
1;
signFloat64(Infinity);
-1;
signFloat64(-Infinity);
