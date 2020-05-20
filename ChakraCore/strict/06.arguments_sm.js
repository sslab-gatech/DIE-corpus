//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
"use strict";

(function Test1(x, y) {
  print(x + " " + arguments[0]);
  print(y + " " + arguments[1]);
  x = 100;
  y = 200;
  print(x + " " + arguments[0]);
  print(y + " " + arguments[1]);
})(10, 20);

(function Test2(x, y) {
  print(x + " " + arguments[0]);
  print(y + " " + arguments[1]);
  arguments[0] = 100;
  arguments[1] = 200;
  print(x + " " + arguments[0]);
  print(y + " " + arguments[1]);
})(10, 20);
