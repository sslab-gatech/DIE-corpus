//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function foo(x, x) {
  return x == 2;
}

if (foo(1, 2)) {
  print("Passed\n");
} else {
  print("FAILED\n");
}
