//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  var called = false;
  var proxy = new Proxy({}, {
    setPrototypeOf() {
      called = true;
      return false;
    }

  });

  try {
    Object.setPrototypeOf(proxy, {});
  } catch (e) {
    ;
  }

  console.log(called);
}

t1();

function t2() {
  var called = false;
  var proxy = new Proxy({}, {
    setPrototypeOf() {
      called = true;
      return false;
    }

  });

  try {
    proxy.__proto__ = {};
  } catch (e) {
    ;
  }

  console.log(called);
}

t2();
