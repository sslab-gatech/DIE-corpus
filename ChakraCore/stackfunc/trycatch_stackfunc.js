//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test(param) {
  var nested = function () {
    return param;
  };

  try {
    var inner = function () {
      return nested();
    };

    print(inner());
  } catch (e) {
    ;
  }

  print(inner());
}

test("test1");
test("test2");
