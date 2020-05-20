//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test() {
  function foo() {
    var x = 100; //create a stack allocated func 

    function bar() {
      return x;
    }

    count = bar;
  }

  var count = {};
  foo();
  console.log(count());
}

test();
