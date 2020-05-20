//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function f() {
  var x = {
    y: 0
  };
  g.escape();

  function g() {
    return x.y;
  }
}

var foo;

Function.prototype.escape = function () {
  foo = this;
};

f();
foo() === 0;
