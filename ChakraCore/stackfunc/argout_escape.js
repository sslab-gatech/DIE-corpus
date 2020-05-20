//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var glo;

function escape(f) {
  glo = f;
}

function test(param) {
  escape(function () {
    return param;
  });
}

test("test1");
print(glo());
test("test2");
print(glo());
