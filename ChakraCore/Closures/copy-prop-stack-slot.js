//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function f() {
  var actualContent = "";
  var actualIndex = "";

  function testArgument() {
    for (var a in arguments) {
      actualContent += arguments[a];
      actualIndex += a;
    }
  }

  testArgument(12, 13, 14, 15);
  WScript.Echo(actualContent);
  WScript.Echo(actualIndex);
}

;
f();
