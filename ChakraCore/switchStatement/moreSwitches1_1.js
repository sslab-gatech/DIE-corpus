//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 *******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
 * Test with two switch statements.
 */
function f(x, y) {
  //This switch contains - a string, a float and integers as its cases.
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

    case 'hello':
      //string object
      print('hello');
      break;

    case 5:
      print(5);
      break;

    case 6:
      print(6);
      break;

    case 7.1:
      //float
      print(7);
      break;

    case 8:
      print(8);
      break;

    case 9:
      print(9);
      break;

    default:
      print('default');
      break;
  } //This switch contains just integers and a object at the middle.


  switch (y) {
    case 11:
      print(10);
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

    case f:
      // object
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

f(1, 12);
f(2, 13);
f(3, 15);
f(8, 16);
f(5, 16); //executing the first switch with non-integers

for (i = 0; i < 2; i++) {
  f(new Object(), 12);
} //executing the second with float and non integers.


for (i = 0; i < 2; i++) {
  f(new Object(), 1.1);
  f(new Object(), new Object());
}
