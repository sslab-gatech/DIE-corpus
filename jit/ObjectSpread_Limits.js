//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  function testRange(start, end) {
    let arr = [];

    for (i = start; i < end; i++) {
      arr[i] = i;
    }

    let obj = { ...arr
    };
    end - start === Object.keys(obj).length;

    for (var propName in obj) {
      propValue = obj[propName];
      propName === propValue.toString();
    }
  }

  ;
  testRange(2 ** 31 - 100, 2 ** 31 + 100);
  testRange(2 ** 32 - 100, 2 ** 32 + 100);
}

t1();
