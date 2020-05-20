//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
try {
  function test() {
    function* f() {
      "use strict";

      ;
    }
  }

  ;
  test();
} catch (e) {
  console.log(e);
}
