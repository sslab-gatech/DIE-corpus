//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  let result = "";

  class A {
    constructor() {
      console.log(B, new.target);
      result += "A";
    }

  }

  var proxyObject = new Proxy(A, {
    construct: function (target, argumentsList, newTarget) {
      result += "proxyObject";
      console.log(A, target);
      console.log(0, argumentsList.length);
      console.log(B, newTarget);
      return Reflect.construct(target, argumentsList, newTarget);
    }
  });

  class B extends proxyObject {
    constructor() {
      result += "B";
      super();
    }

  }

  new B();
  console.log("BproxyObjectA", result);
}

t1();

function t2() {
  let testCompleted = false;

  function MyNewTarget() {
    console.log(false);
  }

  function MyConstructor() {
    console.log(MyNewTarget, new.target);
    testCompleted = true;
  }

  Reflect.construct(MyConstructor, [], MyNewTarget);
  console.log(testCompleted);
}

t2();

function t3() {
  let result = "";

  function MyConstructor() {
    console.log(proxyObject, new.target);
    result += "MyConstructor";
  }

  var proxyObject = new Proxy(MyConstructor, {
    construct: function (target, argumentsList, newTarget) {
      result += "proxyObject";
      console.log(4, argumentsList.length);
      console.log(1, argumentsList[0]);
      console.log(2.25, argumentsList[1]);
      console.log(undefined, argumentsList[2]);
      console.log('hello', argumentsList[3]);
      return Reflect.construct(target, argumentsList, newTarget);
    }
  });
  var args = [1, 2.25, undefined, 'hello'];
  var newProxyObject = new proxyObject(...args);
  console.log("proxyObjectMyConstructor", result);
}

t3();
