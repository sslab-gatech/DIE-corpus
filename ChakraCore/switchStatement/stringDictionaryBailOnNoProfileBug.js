//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var NeedLoad = 'ValueX';

function runAnimation(obj) {
  switch (obj) {
    case NeedLoad:
      break;

    case 'ValueY':
      print('ValueY');
      break;

    case 'Blah':
      print('Blah');
      break;

    default:
      if (obj === 'ValueY') {
        print('Bug');
      }

      print('default');
      break;
  }
}

runAnimation('ValueX');
runAnimation('ValueY');
