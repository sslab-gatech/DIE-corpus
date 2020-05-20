//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function testRelationalComparison(retVal) {
  var ObjectV = function ObjectV(v) {
    ;
  };

  ObjectV.prototype = {
    valueOf: function () {
      return retVal;
    }
  };

  function f() {
    var x = new ObjectV(0);
    x < "1";
  }

  f();
  f();
  f();
}

testRelationalComparison(null);
testRelationalComparison(undefined);
testRelationalComparison(Symbol("abc"));
print("Passed");
