//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function check(cond, test) {
  if (!cond) {
    print("Failed test: " + test);
  }
}

var f = new Boolean(false);
check(f == false, "f equals false");
check(f !== false, "f strict-not-equals false");
check(!f == false, "!f equals false");
print("done");
