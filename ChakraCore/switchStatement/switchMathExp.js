//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 *******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
 *   Test with switch expressions as math exp.
 *   Contains 3 switch cases
 */
function f(x) {
  switch (x++) {
    // post increment
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

    default:
      print('default');
      break;
  }

  switch (++x) {
    //pre increment
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

    default:
      print('default');
      break;
  }

  switch (x + 10) {
    //math expression - adds 10 to x
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

for (i = 1; i <= 11; i++) {
  f(i);
} //causing bail out to happen


for (i = 0; i < 200; i++) {
  f(new Object());
  f(100);
  f(5);
}
