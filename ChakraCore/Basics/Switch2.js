//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = {
  i: 1,
  j: 2,
  k: 3
};

switch (x.i) {
  case "1":
    print("error - found \"1\"");
    break;

  default:
    print("error - found default");
    break;

  case 1.000000001:
    print("error - found 1.000000001");
    break;

  case 1:
    print("found 1");
    break;
}

switch (x.q) {
  case undefined:
    print("found undefined");
    break;

  default:
    print("found a value");
}

x.f = function () {
  this.j++;
  return this.j;
};

q();

function q() {
  switch (x.j) {
    case 1:
      print("error - found 1");
      return;

    case x.f():
      print("error - found x.f()");
      return;

    case 2:
      print("found 2, x.j = " + x.j);
      return;

    case 3:
      print("error - found 3");
      return;
  }
}

var y = new Object();
y.z = x;
y.w = x;

switch (x) {
  case y.w:
    print("found y.w");
    break;

  case y.z:
    print("found y.z");
    break;
}
