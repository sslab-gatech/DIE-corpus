//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var escape;

function test(param) {
  var nested = function () {
    return param;
  };

  escape = nested;
}

test("test1");
print(escape());
test("test2");
print(escape());
