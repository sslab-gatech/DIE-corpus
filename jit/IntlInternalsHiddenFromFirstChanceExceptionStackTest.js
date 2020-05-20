//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function testFirstChanceException() {
  var formatter = new Intl.NumberFormat("INVALID CURRENCY CODE");
}

try {
  testFirstChanceException();
} catch (ex) {
  console.log(ex.stack);
}
