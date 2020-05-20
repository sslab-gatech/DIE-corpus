//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// interesting floating point limits
checkNaN(NaN);
check(+0, +0);
check(-0.0, -0.0);
checkNaN(+Infinity);
checkNaN(-Infinity);
check(1, Math.PI / 2);
check(0.5, Math.PI / 6);

if (!isNaN(Math.sin())) {
  print("error: Math.sin() is not NaN");
}

print("done");

function check(result, n) {
  var rs = Math.sin(n);

  if (Math.abs(rs - result) > 0.00000000001) {
    print("sin(" + n + ") != " + result);
    print(" wrong result is sin(" + n + ") = " + rs);
  }
}

function checkNaN(x) {
  var rs = Math.sin(x);

  if (!isNaN(rs)) {
    print("sin(" + x + ") !=  NaN");
    print(" wrong result is sin(" + x + ") = " + rs);
  }
}
