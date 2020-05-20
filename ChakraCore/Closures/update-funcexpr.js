//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test1() {
  function foo1() {
    foo1 = 42;
    console.log(typeof foo1 == "number");
    console.log(42 === foo1);
  }

  foo1();

  function foo2() {
    foo2 &= 0;
    console.log(typeof foo2 == "number");
    console.log(0 === foo2);
  }

  foo2();

  function foo3() {
    foo3 <<= 0;
    console.log(typeof foo3 == "number");
    console.log(0 === foo3);
  }

  foo3();

  function foo4() {
    let x = foo4++;
    console.log(isNaN(x));
    console.log(isNaN(foo4));
  }

  foo4();

  function foo5() {
    ++foo5;
    console.log(isNaN(foo5));
  }

  foo5();
}

test1();

function test2() {
  (function foo1() {
    foo1 = 42;
    console.log(typeof foo1 == "function");
  })();

  (function foo2() {
    foo2 &= 0;
    console.log(typeof foo2 == "function");
  })();

  (function foo3() {
    foo3 <<= 0;
    console.log(typeof foo3 == "function");
  })();

  (function foo4() {
    let x = foo4++;
    console.log(isNaN(x));
    console.log(typeof foo4 == "function");
  })();

  (function foo5() {
    ++foo5;
    console.log(typeof foo5 == "function");
  })();
}

test2();
