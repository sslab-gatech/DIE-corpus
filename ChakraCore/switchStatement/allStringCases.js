//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------

/*
 *******************************UNIT TEST FOR SWITCH CASE OPTIMIZATION*******************************
 * Test with three switch statements.
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
  /* Switch with one case statement*/


  switch (y) {
    case 'abc':
      print('abc');
      break;
  }
}

f('abc', 'abc');
f('def', 'def');
f('ghi', 'ghi');
f('jkl', 'jkl');
f('mno', 'mno');
f('pqr', 'pqr');
f('stu', 'stu');
f('vxy', 'vxy');
f('z', 'z');
f('saf', 'asf');
