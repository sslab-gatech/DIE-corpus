//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test() {
  var simple_escape = function () {
    return "simple_escape";
  };

  return simple_escape;
}

print(test()());
print(test()());
