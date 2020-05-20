//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft Corporation and contributors. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  const sample = new Float64Array(2);
  var result = Reflect.defineProperty(sample, "0", {
    value: 42,
    configurable: false,
    enumerable: true,
    writable: false
  });
  console.log(sample[0], 0);
  console.log(result, false);
}

t1();

function t2() {
  const sample = new Float64Array(2);
  var result = Reflect.defineProperty(sample, "0", {
    value: 42,
    configurable: true,
    enumerable: true,
    writable: false
  });
  console.log(sample[0], 0);
  console.log(result, false);
}

t2();

function t3() {
  const sample = new Float64Array(2);
  var result = Reflect.defineProperty(sample, "0", {
    value: 42,
    configurable: false,
    enumerable: false,
    writable: true
  });
  console.log(sample[0], 0);
  console.log(result, false);
}

t3();

function t4() {
  const sample = new Float64Array(2);
  var result = Reflect.defineProperty(sample, "2", {
    value: 42,
    configurable: false,
    enumerable: true,
    writable: true
  });
  console.log(sample[0], 0);
  console.log(result, false);
}

t4();

function t5() {
  const sample = new Float64Array(2);
  var result = Reflect.defineProperty(sample, "-0", {
    value: 42,
    configurable: false,
    enumerable: true,
    writable: true
  });
  console.log(sample[0], 0);
  console.log(result, false);
}

t5();

function t6() {
  const sample = new Float64Array(2);
  var result = Reflect.defineProperty(sample, "-10", {
    value: 42,
    configurable: false,
    enumerable: true,
    writable: true
  });
  console.log(sample[0], 0);
  console.log(result, false);
}

t6();

function t7() {
  const sample = new Float64Array(2);
  var result = Reflect.defineProperty(sample, "1.1", {
    value: 42,
    configurable: false,
    enumerable: true,
    writable: true
  });
  console.log(sample[0], 0);
  console.log(result, false);
}

t7();

function t8() {
  const sample = new Float64Array(2);
  var result = Reflect.defineProperty(sample, "0", {
    get: function () {
      ;
    }
  });
  console.log(sample[0], 0);
  console.log(result, false);
}

t8();

function t9() {
  const sample = new Float64Array(2);
  var result = Reflect.defineProperty(sample, Symbol('foo'), {
    value: 42,
    configurable: false,
    enumerable: true,
    writable: true
  });
  console.log(sample[0], 0);
  console.log(result, true);
}

t9();

function t10() {
  const sample = new Float64Array(2);
  var result = Reflect.defineProperty(sample, "0", {
    value: 42,
    configurable: false,
    enumerable: true,
    writable: true
  });
  console.log(sample[0], 42);
  console.log(result, true);
}

t10();
