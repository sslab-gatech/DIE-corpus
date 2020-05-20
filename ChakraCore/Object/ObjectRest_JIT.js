//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  function f() {
    let {
      a,
      ...rest
    } = {
      a: 1,
      b: 2
    };
    return rest;
  }

  f();
  let rest = f();
  console.log(2, rest.b);
}

t1();

function t2() {
  function f({
    a,
    ...rest
  }) {
    return rest;
  }

  f({
    a: 1,
    b: 2
  });
  let rest = f({
    a: 1,
    b: 2
  });
  console.log(2, rest.b);
}

t2();

function t3() {
  const obj = {
    a: 2
  };

  function f(x) {
    const a = obj.a;
    const { ...unused
    } = x;
    return a + obj.a;
  } // Train it that ...x is not reentrant, so it emits code that assumes the second obj.a matches the first


  const result = f({});
  console.log(4, result); // Now call with a getter and verify that it bails out when the previous assumption is invalidated

  const reentrantResult = f({
    get b() {
      obj.a = 3;
    }

  });
  console.log(5, reentrantResult);
}

t3();
