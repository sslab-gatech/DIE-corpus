//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = "x.original";

var reset = function () {
  x = "x.original";
};

var test = function () {
  var z = "z.original";

  function innerTest() {
    x = "x.overwritten";
    z = x;
  }

  innerTest();
  return z;
};

test();
reset();
test();
reset();

function makeGlobalPropertyReadOnly(p) {
  Object.defineProperty(this, p, {
    writable: false
  });
}

function reportGlobalPropertyDescriptor(p) {
  print(p + ".configurable = " + Object.getOwnPropertyDescriptor(this, p).configurable);
  print(p + ".writable = " + Object.getOwnPropertyDescriptor(this, p).writable);
}

reportGlobalPropertyDescriptor("x");
makeGlobalPropertyReadOnly("x");
reportGlobalPropertyDescriptor("x");
var result = test();
print("x: " + x);
print("result: " + result);
