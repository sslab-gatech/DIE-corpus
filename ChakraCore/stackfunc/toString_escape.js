//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var escape;

Function.prototype.toString = function () {
  escape = this;
  return "toString";
};

function test3(param) {
  var func3 = function () {
    return param;
  };

  return func3 + "3";
}

console.log(test3("test1"));
console.log(escape());
console.log(test3("test2"));
console.log(escape());
