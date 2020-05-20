//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Use do..while as a statement inside if..else
var a = 10;

do {
  print(3);
} while (false);

var b = 20;
with (a) {
  do {
    print(4);
  } while (false);
}

for (var i = 0; i < 5; i++) {
  do {
    "5." + i;
  } while (false);
} // do..while as the last statement ended by EOF


do {
  print(6);
} while (false);
