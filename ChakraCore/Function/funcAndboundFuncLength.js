//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function lengthDefaultState(func, paramCount, identifier) {
  "use strict";

  const descriptor = Object.getOwnPropertyDescriptor(func, "length");
  console.log(descriptor.configurable);
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(func.hasOwnProperty("length"));
  console.log(func.length, paramCount);

  try {
    {
      func.length = 5;
    }
  } catch (e) {
    ;
  }
}

function deleteLength(func, identifier) {
  "use strict";

  try {
    delete func.length;
  } catch (e) {
    ;
  }

  console.log(!func.hasOwnProperty("length"));
  console.log(0, func.length);

  try {
    {
      func.length = 5;
    }
  } catch (e) {
    ;
  }

  console.log(!func.hasOwnProperty("length"));
  console.log(0, func.length);
  reDefineLengthStrict(func, identifier);
}

function reDefineLengthStrict(func, identifier) {
  "use strict";

  const initialValue = func.length;

  try {
    {
      func.length = initialValue - 1;
    }
  } catch (e) {
    ;
  }

  console.log(initialValue, func.length);
  Object.defineProperty(func, "length", {
    enumerable: true,
    writable: true,
    value: initialValue + 1
  });
  const descriptor = Object.getOwnPropertyDescriptor(func, "length");
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(initialValue + 1, func.length);
  func.length = initialValue - 1;
  console.log(initialValue - 1, func.length);
}

function reDefineLength(func, identifier) {
  const initialValue = func.length;

  try {
    func.length = initialValue - 1;
  } catch (e) {
    ;
  }

  console.log(initialValue, func.length);
  Object.defineProperty(func, "length", {
    enumerable: true,
    writable: true,
    value: initialValue + 1
  });
  const descriptor = Object.getOwnPropertyDescriptor(func, "length");
  console.log(descriptor.writable);
  console.log(descriptor.enumerable);
  console.log(initialValue + 1, func.length);
  func.length = initialValue - 1;
  console.log(initialValue - 1, func.length);
}

function t1() {
  function normalFunction(a, b) {
    ;
  }

  const anonymousFunction = function (a, b, c) {
    ;
  };

  const lambda = (a, b, c, d) => {
    ;
  };

  const anonGen = function* (a, b) {
    ;
  };

  function* genFunc() {
    ;
  }

  async function asyncFunc(a) {
    ;
  }

  const anonAsync = async function () {
    ;
  };

  lengthDefaultState(normalFunction, 2, "function");
  lengthDefaultState(anonymousFunction, 3, "Anonymous function");
  lengthDefaultState(lambda, 4, "Lambda function");
  lengthDefaultState(anonGen, 2, "Anonymous generator");
  lengthDefaultState(genFunc, 0, "Generator function");
  lengthDefaultState(anonAsync, 0, "Anonymous async function");
  lengthDefaultState(asyncFunc, 1, "Async function");
  deleteLength(normalFunction, "function");
  deleteLength(anonymousFunction, "Anonymous function");
  deleteLength(lambda, "Lambda function");
  deleteLength(anonGen, "Anonymous generator");
  deleteLength(genFunc, "Generator function");
  deleteLength(anonAsync, "Anonymous async function");
  deleteLength(asyncFunc, "Async function");
}

t1();

function t2() {
  function normalFunction(a, b) {
    ;
  }

  const anonymousFunction = function (a, b, c) {
    ;
  };

  const lambda = (a, b, c, d) => {
    ;
  };

  const anonGen = function* (a, b) {
    ;
  };

  function* genFunc() {
    ;
  }

  async function asyncFunc(a) {
    ;
  }

  const anonAsync = async function () {
    ;
  };

  reDefineLength(normalFunction, "function");
  reDefineLength(anonymousFunction, "Anonymous function");
  reDefineLength(lambda, "Lambda function");
  reDefineLength(anonGen, "Lambda function");
  reDefineLength(genFunc, "Lambda function");
  reDefineLength(asyncFunc, "Lambda function");
  reDefineLength(anonAsync, "Lambda function");
}

t2();

function t3() {
  function normalFunction(a, b) {
    ;
  }

  const anonymousFunction = function (a, b, c) {
    ;
  };

  const lambda = (a, b, c, d) => {
    ;
  };

  function* genFunc(a, b, c, d, e) {
    ;
  }

  async function asyncFunc(a, b) {
    ;
  }

  const boundNormal = normalFunction.bind({}, 1);
  const boundAnon = anonymousFunction.bind({}, 1, 1, 1, 1);
  const boundLambda = lambda.bind({}, 1, 1);
  const boundGen = genFunc.bind({}, 1, 1, 1, 1);
  const boundAsync = asyncFunc.bind({}, 1);
  lengthDefaultState(boundNormal, 1, "Bound Function");
  lengthDefaultState(boundAnon, 0, "Anonymous Bound Function");
  lengthDefaultState(boundLambda, 2, "Bound Lambda Function");
  lengthDefaultState(boundGen, 1, "Bound Generator Function");
  lengthDefaultState(boundAsync, 1, "Bound Async Function");
  deleteLength(boundNormal, "Bound Function");
  deleteLength(boundAnon, "Anonymous Bound Function");
  deleteLength(boundLambda, "Bound Lambda Function");
  deleteLength(boundGen, 1, "Bound Generator Function");
  deleteLength(boundAsync, 1, "Bound Async Function");
}

t3();

function t4() {
  function normalFunction(a, b) {
    ;
  }

  const anonymousFunction = function (a, b, c) {
    ;
  };

  const lambda = (a, b, c, d) => {
    ;
  };

  const boundNormal = normalFunction.bind({}, 1);
  const boundAnon = anonymousFunction.bind({}, 1, 1, 1, 1);
  const boundLambda = lambda.bind({}, 1, 1);
  reDefineLength(boundNormal, "Bound Function");
  reDefineLength(boundAnon, "Anonymous Bound Function");
  reDefineLength(boundLambda, "Bound Lambda Function");
}

t4();

function t5() {
  const targ = function (a, b) {
    ;
  };

  let testBound = targ.bind({});
  console.log(testBound.length, 2);
  Object.defineProperty(targ, "length", {
    value: 5,
    writable: true
  });
  testBound = targ.bind({});
  console.log(testBound.length, 5);
  testBound = targ.bind({}, 1, 2);
  console.log(testBound.length, 3);
  targ.length = 1;
  console.log(testBound.length, 3);
  testBound = targ.bind({}, 1, 2);
  console.log(testBound.length, 0);
  delete targ.length;
  testBound = targ.bind({});
  console.log(testBound.length, 0);
}

t5();
