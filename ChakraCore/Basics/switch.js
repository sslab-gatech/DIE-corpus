//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = {
  i: 0,
  j: 1
};

x.f = function (q) {
  print("x.f(" + q + ")");
  this.j++;
  return q;
};

switch (x.i) {
  default:
    print("default");
    break;

  case x.f(1.0):
    print(1.0);
    break;

  case x.f(x.i):
  case x.f(j):
    print(x.i);
    break;
}

switch (x.j) {
  default:
  case "melon":
    print("melon?");
    break;

  case x.f(0):
    print("0");
    break;
}

print("x.i = " + x.i);
print("x.j = " + x.j);

switch (Math.sqrt(x.i)) {
  case Math.cos(x.j):
    break;

  case 1 ? 2 : 3:
    break;

  case "melon":
    break;

  default:
    print('here we are');
}

(function () {
  var f = 0;

  switch (f) {
    case (f = 1) ? 0 : 0:
      print("pass");
      break;

    default:
      print("fail");
      break;
  }

  ;
})();
