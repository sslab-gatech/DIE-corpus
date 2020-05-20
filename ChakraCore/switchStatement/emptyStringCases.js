//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 *******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
 * Test with two switch statements containing empty case statements and repetition.
 */
function f(x) {
  /* Empty cases*/
  switch (x) {
    case 'abc':
    case 'def':
    case 'ghi':
      print('empty Cases');
      break;

    case 'stu':
      print('stu');
      break;

    default:
      print('Default cases');
      break;
  }
  /*Repeated empty cases*/


  switch (x) {
    case 'abc':
    case 'abc':
    case 'abc':
      print('abc');
      break;

    case 'def':
      print('first def');
      break;

    case 'def':
      print('second def');
      break;

    default:
      print('default');
      break;
  }
}

f('stu');
f('stu');
f('vxy');
f('z');
f('x');
f('abc');
f('def');
f('ghi');
f('jkl');
f('mno');
f('pqr');
f('saf');
