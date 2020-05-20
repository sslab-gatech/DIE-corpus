//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Tests for ERRDeclOutOfBlock "Const and let must be declared inside of block"
var a = 1;

function test() {
  if (a) {
    for (let x in [1]) {
      /* no error */
      break;
    }
  }

  ;

  for (var y in [1]) {
    for (let x in [1]) {
      /* no error */
      break;
    }
  }

  ;

  do {
    for (let x in [1]) {
      /* no error */
      break;
    }
  } while (!a);

  if (a) {
    for (let x = 0; x < 1; x++) {
      /* no error */
      break;
    }
  }

  ;

  for (var y in [1]) {
    for (let x = 0; x < 1; x++) {
      /* no error */
      break;
    }
  }

  ;

  do {
    for (let x = 0; x < 1; x++) {
      /* no error */
      break;
    }
  } while (!a);
}

;
test();
