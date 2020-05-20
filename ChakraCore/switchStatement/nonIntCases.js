//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 ******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*****************************
 */

/*
 ************************************************ TEST 1**********************************************
 ***Test - all the case statements containing non-integer items
 */
function f(x) {
  switch (x) {
    case f:
      print(1);
      break;

    case f:
      print(2);
      break;

    case f:
      print(3);
      break;

    case f:
      print(4);
      break;

    case f:
      print(5);
      break;

    case f:
      print(6);
      break;

    case f:
      print(7);
      break;

    case f:
      print(8);
      break;

    case f:
      print(9);
      break;

    case f:
      print(10);
      break;

    default:
      print('first switch default');
      break;
  }
}

for (i = 0; i < 5; i++) {
  f(11);
}
/*
 ************************************************ TEST 2**********************************************
 *Test with mixed type in case statements - Integers, objects, and expressions
 */


function g(x) {
  switch (x) {
    case f:
      print(1);
      break;

    case 2:
      print(2);
      break;

    case f:
      print(3);
      break;

    case 4:
      print(4);
      break;

    case 'hello':
      print('hello');
      break;

    case 5:
      print(5);
      break;

    case f:
      print('f');
      break;

    case 6:
      print(6);
      break;

    case 7:
      print(7);
      break;

    case 7 + 5:
      print(13);
      break;

    case 8:
      print(8);
      break;

    default:
      print('second switch default');
      break;
  }
}

g(1);
g(2);
g(3);
g(8);
g(5);
g(13);
g(new Object());
