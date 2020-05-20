//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 *******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
 * Test with one switch statement containing strings, objects and integers.
 */
function f(x, y) {
  //This switch contains - a strings, a int in the middle
  switch (x) {
    case 'abc':
      print('abc');
      break;

    case 'def':
      print('def');
      break;

    case 'ghi':
      print('ghi');
      break;

    case 'jkl':
      print('jkl');
      break;

    case 'mno':
      print('mno');
      break;

    case 2:
      print('pqr');
      break;

    case 'stu':
      print('stu');
      break;

    case 'vxy':
      print('vxy');
      break;

    case f:
      print('z');
      break;

    case 'x':
      print('x');
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
