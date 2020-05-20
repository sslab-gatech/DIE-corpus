//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function AsmModule() {
  "use asm";

  function f1() {
    var i = 0;
    var count = 10;
    var x = 0;
    var e = 5;
    var f = 2;
    var g = 0;
    var k = 0;

    while ((i | 0) < (count | 0)) {
      g = e * f | 0;
      k = g + 7 | 0;
      x = x + k | 0;
      i = i + 1 | 0;
    }

    return x | 0;
  }

  return f1;
}

var f1 = AsmModule();
f1();
