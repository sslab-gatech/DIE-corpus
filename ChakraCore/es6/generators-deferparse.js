//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
try {
  function f1() {
    class c extends BaseClass {
      *f3(a) {
        ;
      }

    }
  }

  ;
  WScript.Echo('FAILED');
} catch (e) {
  if (e instanceof SyntaxError) {
    WScript.Echo('PASSED');
  } else {
    WScript.Echo('FAILED');
  }
}
