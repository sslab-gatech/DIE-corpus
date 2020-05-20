//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var r = typeof this;

function test1() {
  console.log(r);
}

test1();

function test2() {
  function foo() {
    return typeof this;
  }

  console.log(foo());
  console.log(foo.call(foo));

  function bar() {
    "use strict";

    return typeof this;
  }

  console.log(bar());
  console.log(bar.call(bar));
}

test2();

function test3() {
  var out = 'wrong';

  function foo() {
    out = typeof new.target;
  }

  foo();
  console.log(out);
  new foo();
  console.log(out);
}

test3();
