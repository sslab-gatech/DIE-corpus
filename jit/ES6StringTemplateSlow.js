//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var tests = [{
  name: "Octal escape sequences are not allowed in string template literals - exhaustive test",
  body: function () {
    function verifyOctalThrows(octalNumber) {
      if (octalNumber < 10) {
        (function () {
        })();
      }

      if (octalNumber < 100) {
        (function () {
        })();
      }

      (function () {
      })();
    }

    for (var i = 1; i <= 255; i++) {
      verifyOctalThrows(i.toString(8));
    }
  }
}];
tests.forEach(v => v.body());
