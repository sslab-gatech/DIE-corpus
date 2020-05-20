//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 *******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
 * Test with two switch statements.
 */
function f(x, y) {
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

    case 'pqr':
      print('pqr');
      break;

    case 'stu':
      print('stu');
      break;

    case 'vxy':
      print('vxy');
      break;

    case 'z':
      print('z');
      break;

    default:
      print('default');
      break;
  }
}

f('abc');
f(new Object());
f(new Object());
