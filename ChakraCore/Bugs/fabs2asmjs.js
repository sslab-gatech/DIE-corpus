//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
This file is executed from fabs1.js

fabs from ucrtbase.dll doesn't restore the FPU Control word correctly when passed a NaN.
Causing an assertion failure in SmartFPUControl. The change special-handles NaN without calling fabs
*/
function AsmModule(stdlib, foreign, heap) {
  "use asm";

  var abs = stdlib.Math.abs;

  function testOp(av) {
    av = +av;
    return +abs(av);
  }

  ;
  return {
    testOp: testOp
  };
}

var asmModule = AsmModule({
  Math: Math
}, {}, new ArrayBuffer(1 << 20));
print(asmModule.testOp(-123.334) === 123.334);
print(isNaN(asmModule.testOp(NaN)));
print(isNaN(asmModule.testOp(-NaN)));
print(asmModule.testOp(Infinity) === Infinity);
print(asmModule.testOp(-Infinity) === Infinity);
print(asmModule.testOp(0.0) === 0.0);
print(asmModule.testOp(-0.0) === 0.0);
