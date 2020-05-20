//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 *******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
 *   Testing for normal execution with all integers and bailing out
 */

/*
 ************************************************** TEST 1******************************************************
 *   Tests with all integer arguments
 */
function f(x) {
  switch (x) {
    case 1:
      print(1);
      break;

    case 2:
      print(2);
      break;

    case 3:
      print(3);
      break;

    case 4:
      print(4);
      break;

    case 5:
      print(5);
      break;

    case 6:
      print(6);
      break;

    case 7:
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

    case 11:
      print(11);
      break;

    case 12:
      print(12);
      break;

    case 13:
      print(13);
      break;

    case 14:
      print(14);
      break;

    case 15:
      print(15);
      break;

    case 16:
      print(16);
      break;

    case 17:
      print(17);
      break;

    case 18:
      print(18);
      break;

    case 19:
      print(19);
      break;

    case 20:
      print(20);
      break;

    default:
      print('default');
      break;
  }
}

for (i = 1; i <= 20; i++) {
  f(i);
}

f(100);
f(0); //making the switch to bail out on non-integer inputs

for (i = 0; i < 35; i++) {
  f(new Object());
}
/*
 *********************************************TEST2**********************************
 *   The first execution of the switch statement is with an object
 *   The profiler data is updated during the first time itself and hence the optimization is not performed during the first time jit itself
 */


function g(x) {
  switch (x) {
    case 1:
      print(1);
      break;

    case 2:
      print(2);
      break;

    case 3:
      print(3);
      break;

    case 4:
      print(4);
      break;

    case 5:
      print(5);
      break;

    case 6:
      print(6);
      break;

    case 7:
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

    case 11:
      print(11);
      break;

    case 12:
      print(12);
      break;

    case 13:
      print(13);
      break;

    case 14:
      print(14);
      break;

    case 15:
      print(15);
      break;

    case 16:
      print(16);
      break;

    case 17:
      print(17);
      break;

    case 18:
      print(18);
      break;

    case 19:
      print(19);
      break;

    case 20:
      print(20);
      break;

    default:
      print('default');
      break;
  }
}

for (i = 0; i < 35; i++) {
  g(new Object());
  g(1);
  g(-10);
  g(9);
  g(5);
}
