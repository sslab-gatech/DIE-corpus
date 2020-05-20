//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// A specific case that was regressed
function testInlineParameterSideEffects() {
  function foo() {
    var a = 12345;
    var x = Math.pow(a, 1 >> (a = 0));
    return x;
  }

  var x = foo();
  print(x);
}

testInlineParameterSideEffects();

function testInlineWin8_748804() {
  var result;

  function decimalToHexString(n) {
    for (var i = 1; i >= 1; --i) {
      if (n >= Math.pow(16, i)) {
        var t = Math.floor(n / Math.pow(16, i));
        result = t;
        n = t * Math.pow(16, i);
      }
    }
  }

  decimalToHexString(0xDF);
  print(result);
}

testInlineWin8_748804();
