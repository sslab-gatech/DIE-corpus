//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = 10;

function f() {
  const x = 5;
  {
    const x = "abacaba";
    print(x);
    {
      const x = 111111;
      print(x);
    }
    print(x);
    {
      const x = 222222;
      print(x);
    }
    print(x);
  }
  print(x);
}

;
f();
print(x);
