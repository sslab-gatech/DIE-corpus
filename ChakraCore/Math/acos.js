//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// interesting floating point limits
checkNaN(NaN);
checkNaN(5.1);
checkNaN(-2);
check(+0, 1);
check(Math.PI / 2, 0);
check(Math.PI / 3, 0.5);
checkNaN(+Infinity);
checkNaN(-Infinity);

if (!isNaN(Math.acos())) {
  print("error: Math.acos() is not NaN");
}

print("done");

function check(result, n) {
  var rs = Math.acos(n);

  if (Math.abs(rs - result) > 0.00000000001) {
    print("acos(" + n + ") != " + result);
    print(" wrong result is acos(" + n + ") = " + rs);
  }
}

function checkNaN(x) {
  var rs = Math.acos(x);

  if (!isNaN(rs)) {
    print("acos(" + x + ") !=  NaN");
    print(" wrong result is acos(" + x + ") = " + rs);
  }
}
