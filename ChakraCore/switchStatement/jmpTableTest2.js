//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//To test if BailOnNoProfile is working for MultiBr Instr created for consecutive integers
function test0(a) {
  switch (a) {
    case 14:
      print('14');
      break;

    case 15:
      print('16');
      break;

    case 1:
      print('1');
      break;

    default:
      print('default');
      break;
  }
}

test0(1);
test0(14);
