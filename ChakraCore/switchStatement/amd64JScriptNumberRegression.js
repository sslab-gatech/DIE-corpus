//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var a = 1;
var b = 0;

var foo = function () {
  switch (a) {
    case b:
      print("b");
      break;

    case 1:
      print("1");
      break;

    case 2:
      print("2");
      break;

    case 3:
      print("3");
      break;

    case 4:
      print("4");
      break;
  }
};

var c = "3";
foo();
a = --c;
foo();
