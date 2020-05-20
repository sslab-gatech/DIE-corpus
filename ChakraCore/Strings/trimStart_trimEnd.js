//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  // NOTE: See comments in test/UnitTestFramework/UnitTestFramework.js for more info about what assertions you can use
  console.log(String.prototype.trimLeft, String.prototype.trimStart);
}

t1();

function t2() {
  console.log(String.prototype.trimRight, String.prototype.trimEnd);
}

t2();

function t3() {
  console.log(String.prototype.trimLeft.name, 'trimStart');
}

t3();

function t4() {
  console.log(String.prototype.trimRight.name, 'trimEnd');
}

t4();

function t5() {
  console.log(String.prototype.trimStart.name, 'trimStart');
}

t5();

function t6() {
  console.log(String.prototype.trimEnd.name, 'trimEnd');
}

t6();
