//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function foo(a) {
  foo.arguments[0] = "Changed";
  print("Arguments : " + foo.arguments[0]);
}

foo("Orig");

function foo2(a) {
  for (var i = 0; i < 1; i++) {
    foo2.arguments[0] = "Changed"; // Bailout point

    print("Arguments : " + foo2.arguments[0]);
  }
}

foo2("Orig");
