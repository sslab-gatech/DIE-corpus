//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 ***************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*****************************
 *   Empty case statements
 */

/*
 ***************************************TEST 1*****************************************
 *  For empty test cases and an object present in the mid of empty test cases
 *
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
    // empty integer case statements intercepted by an object

    case 5:
    case 6:
    case f: // object case - optimization should break the flow here

    case 8:
    case 9:
      print(9);
      break;

    case f:
      print(10);
      break;

    case 11:
      print(11);
      break;

    case 12:
      print(12);
      break;
    //Following four case statements are empty case statements with just a single case block
    //(optimizer will generate special instructions for such kind)

    case 13:
    case 14:
    case 15:
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

    default:
      print('default');
      break;
  }
}

for (i = 1; i < 20; i++) {
  f(i);
}

f(100); //default

f(0); //default

/*
 *****************************************TEST 2****************************************************
 *   Test for case statements values in unsorted order
 *   Set of Empty case statements are placed on the top, middle and at the bottom of the switch statement
 */

function g(x) {
  switch (x) {
    /*empty case statements*/
    case 20:
    case 19:
    case 18:
    case 17:
      print(17);
      break;

    case 16:
      print(16);
      break;

    case 15:
      print(15);
      break;

    case 14:
      print(14);
      break;

    case 13:
      print(13);
      break;

    /*empty case statements*/

    case 12:
    case 11:
    case 10:
    case 9:
      print(9);
      break;

    case 8:
      print(8);
      break;

    case 7:
      print(7);
      break;

    case 6:
      print(6);
      break;

    /*empty case statements*/

    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    /* No default statement and no break at the end of the switch */

  }
}

g(1);
g(2);
g(3);
g(4);
g(5);
g(6);
g(7);
g(8);
g(9);
g(10);
g(11);
g(12);
g(13);
g(14);
g(15);
g(16);
g(17);
g(18);
g(19);
g(20);
g(100);
g(0);
/*
 ********************************TEST 3********************************
 ** All empty case statements
 */

function h(x) {
  switch (x) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    default:
      print('default');
      break;
  }
}

for (i = 0; i <= 13; i++) {
  h(i);
}

h('hello');

for (i = 14; i <= 18; i++) {
  h(i);
}
