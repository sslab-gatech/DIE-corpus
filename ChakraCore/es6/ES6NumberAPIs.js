//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Number API extensions tests -- verifies the API shape and basic functionality
function t1() {
  console.log(Number.hasOwnProperty('EPSILON'));
  console.log(Number.hasOwnProperty('MAX_SAFE_INTEGER'));
  console.log(Number.hasOwnProperty('MIN_SAFE_INTEGER'));
  console.log(Number.hasOwnProperty('parseInt'));
  console.log(Number.hasOwnProperty('parseFloat'));
  console.log(Number.hasOwnProperty('isNaN'));
  console.log(Number.hasOwnProperty('isFinite'));
  console.log(Number.hasOwnProperty('isInteger'));
  console.log(Number.hasOwnProperty('isSafeInteger'));
  console.log(Number.parseInt.length === 2);
  console.log(Number.parseFloat.length === 1);
  console.log(Number.isNaN.length === 1);
  console.log(Number.isFinite.length === 1);
  console.log(Number.isInteger.length === 1);
  console.log(Number.isSafeInteger.length === 1);
}

t1();

function t2() {
  var computedEpsilon = function () {
    var next, result;

    for (next = 1; 1 + next !== 1; next = next / 2) {
      result = next;
    }

    return result;
  }(); // Use areEqual because we want this value to be exact. That is, even though it is
  // floating point use a strict equality comparison instead of an epsilon check.


  console.log(Number.EPSILON, computedEpsilon);
}

t2();

function t3() {
  console.log(Number.MAX_SAFE_INTEGER, 9007199254740991);
  console.log(Number.MIN_SAFE_INTEGER, -9007199254740991);
}

t3();

function t4() {
  // Just do a small sample of tests since we know the implementation of parseInt is the exact same as the global parseInt function
  console.log(0, Number.parseInt("0"));
  console.log(-1, Number.parseInt("-1"));
  console.log(128, Number.parseInt("10000000", 2));
  console.log(16, Number.parseInt("g", new String("17")));
  console.log(parseInt, Number.parseInt);
}

t4();

function t5() {
  // Just do a small sample of tests since we know the implementation of parseFloat is the exact same as the global parseFloat function
  console.log(0, Number.parseFloat("0"));
  console.log(-1, Number.parseFloat("-1"));
  console.log(3.14159, Number.parseFloat("3.14159"));
  console.log(parseFloat, Number.parseFloat);
}

t5();

function t6() {
  console.log(Number.isNaN(NaN));
  console.log(Number.isNaN(0 / 0));
  console.log(Number.isNaN(123));
  console.log(Number.isNaN(-3.14159));
  console.log(Number.isNaN(Infinity));
  console.log(Number.isNaN(-Infinity));
  console.log(Number.isNaN(undefined));
  console.log(Number.isNaN(null));
  console.log(Number.isNaN(new Number(0)));
  console.log(Number.isNaN(new Number(NaN)));
  console.log(Number.isNaN("1234"));
  console.log(Number.isNaN("NaN"));
  console.log(Number.isNaN("Apple"));
}

t6();

function t7() {
  console.log(Number.isFinite(0));
  console.log(Number.isFinite(123));
  console.log(Number.isFinite(-3.14159));
  console.log(Number.isFinite(Number.MAX_SAFE_INTEGER));
  console.log(Number.isFinite(Number.MIN_SAFE_INTEGER));
  console.log(Number.isFinite(Infinity));
  console.log(Number.isFinite(-Infinity));
  console.log(Number.isFinite(NaN));
  console.log(Number.isFinite(undefined));
  console.log(Number.isFinite(null));
  console.log(Number.isFinite(new Number(0)));
  console.log(Number.isFinite(new Number(Infinity)));
  console.log(Number.isFinite("1234"));
  console.log(Number.isFinite("Infinity"));
  console.log(Number.isFinite("NaN"));
  console.log(Number.isFinite("Apple"));
}

t7();

function t8() {
  console.log(Number.isInteger(0));
  console.log(Number.isInteger(-0));
  console.log(Number.isInteger(1));
  console.log(Number.isInteger(-1));
  console.log(Number.isInteger(12345));
  console.log(Number.isInteger(Number.MAX_SAFE_INTEGER));
  console.log(Number.isInteger(Number.MIN_SAFE_INTEGER));
  console.log(Number.isInteger(Number.MAX_SAFE_INTEGER - 1000));
  console.log(Number.isInteger(Number.MAX_SAFE_INTEGER + 1000));
  console.log(Number.isInteger(Infinity));
  console.log(Number.isInteger(-Infinity));
  console.log(Number.isInteger(0.5));
  console.log(Number.isInteger(-0.5));
  console.log(Number.isInteger(3.14159));
  console.log(Number.isInteger(Number.MAX_SAFE_INTEGER / 2));
  console.log(Number.isInteger(NaN));
  console.log(Number.isInteger(undefined));
  console.log(Number.isInteger(null));
  console.log(Number.isInteger("12345"));
  console.log(Number.isInteger("3.14159"));
  console.log(Number.isInteger("NaN"));
  console.log(Number.isInteger(new Number(125)));
  console.log(Number.isInteger(new Number(65.536)));
  console.log(Number.isInteger(new Number(Infinity)));
}

t8();

function t9() {
  console.log(Number.isSafeInteger(0));
  console.log(Number.isSafeInteger(-0));
  console.log(Number.isSafeInteger(1));
  console.log(Number.isSafeInteger(-1));
  console.log(Number.isSafeInteger(12345));
  console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
  console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER));
  console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER - 1000));
  console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER + 1000));
  console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1000));
  console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1000));
  console.log(Number.isSafeInteger(Infinity));
  console.log(Number.isSafeInteger(-Infinity));
  console.log(Number.isSafeInteger(0.5));
  console.log(Number.isSafeInteger(-0.5));
  console.log(Number.isSafeInteger(3.14159));
  console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER / 2));
  console.log(Number.isSafeInteger(NaN));
  console.log(Number.isSafeInteger(undefined));
  console.log(Number.isSafeInteger(null));
  console.log(Number.isSafeInteger("12345"));
  console.log(Number.isSafeInteger("3.14159"));
  console.log(Number.isSafeInteger("NaN"));
  console.log(Number.isSafeInteger(new Number(125)));
  console.log(Number.isSafeInteger(new Number(65.536)));
  console.log(Number.isSafeInteger(new Number(Infinity)));
}

t9();
