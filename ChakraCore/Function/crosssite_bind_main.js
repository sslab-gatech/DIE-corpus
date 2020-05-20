//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function mainFunc(inName) {
  for (i in this) {
    if (i == inName) {
      print("PASS");
    }
  }
}

mainFunc.one = 20;

function setupFunc(inFunc) {
  var result = inFunc.bind(inFunc, "one");
  return result;
}

childFunc = setupFunc(mainFunc);
childFunc();
