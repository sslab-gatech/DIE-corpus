//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 *******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
 *   Testing for normal execution with repeat integers and empty case statements
 */

/*
 ************************************************** TEST 1******************************************************
 *   Tests with all integer arguments
 */
function f(x) {
  switch (x) {
    case 1:
    case 2:
    case 2:
    case 4:
    case 4:
      print(5);
      break;

    case 4:
      print(6);
      break;

    case 6:
      print(7);
      break;

    case 8:
      print(8);
      break;

    case 9:
      print(9);
      break;

    case 10:
      print(10);
      break;

    default:
      print('default');
      break;
  }
}

f(1);

for (i = 1; i <= 10; i++) {
  f(i);
}
