//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function test0(a) {
  switch (a) {
    //JumpTable
    case 14:
      print('14');
      break;

    case 16:
      print('16');
      break;
    //Binary Tree

    case 30:
      print('30');
      break;

    case 40:
      print('40');
      break;

    case 50:
      print('50');
      break;
    //JumpTable

    case 61:
      print('61');
      break;

    case 62:
      print('62');
      break;
    //JumpTable

    case 1:
      print('1');
      break;

    case 3:
      print('3');
      break;

    default:
      print('default');
  }
}

test0(1);
test0(1);
test0(3);
test0(14);
test0(16);
test0(30);
test0(40);
test0(50);
test0(61);
test0(62);
test0(10);
