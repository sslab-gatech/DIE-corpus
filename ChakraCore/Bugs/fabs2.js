//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
This file is executed from fabs1.js

fabs from ucrtbase.dll doesn't restore the FPU Control word correctly when passed a NaN.
Causing an assertion failure in SmartFPUControl. The change special-handles NaN without calling fabs
*/
function testOp(av) {
  return Math.abs(av);
}

print(testOp(123.334) === 123.334);
print(testOp(-123.334) === 123.334);
print(isNaN(testOp(NaN)));
print(isNaN(testOp(-NaN)));
print(testOp(Infinity) === Infinity);
print(testOp(-Infinity) === Infinity);
print(testOp(0.0) === 0.0);
print(testOp(-0.0) === 0.0);
