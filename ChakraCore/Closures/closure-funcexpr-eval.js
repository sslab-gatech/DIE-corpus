//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var functest;
var vartest = 0;

var value = function functest(arg) {
  if (arg) {
    return 1;
  }

  vartest = 1;

  functest = function (arg) {
    return 2;
  }; // this line does nothing as 'functest' is ReadOnly here


  return functest(true); // this is therefore tail recursion and returns 1
}(false);

print('vartest = ' + vartest);
print('value = ' + value);

var moobah = function moobah() {
  this.innerfb = function () {
    moobah.x = 'whatever';
  };

  this.innerfb();
  print(moobah.x);
};

moobah();
