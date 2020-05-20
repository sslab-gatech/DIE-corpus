//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test(param, func) {
  function func() {
    return param;
  }

  return func();
}

print(test("test1"));
print(test("test2"));
