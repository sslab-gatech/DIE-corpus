//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// https://github.com/Microsoft/ChakraCore/issues/1340
function find(arr, value) {
  var result = -1;

  for (var i in arr) {
    print(i);

    if (arr[i] == value) {
      result = i;
      break;
    }
  }

  return result;
}

var arr = [0, 1, 2, 3, 4, 5];
find(arr, 3);

function propCacheTest() {
  var obj = new Object();

  for (var i = 0; i < 10; i++) {
    obj["randomprop" + i] = i;
  }

  var propArray = new Array();

  for (var prop in obj) {
    propArray[propArray.length] = prop;
  }

  for (var prop in Array) {
    ;
  }

  obj = null;
  return propArray;
}

var props = propCacheTest();
gc();

for (var i = 0; i < props.length; i++) {
  props[i];
}
