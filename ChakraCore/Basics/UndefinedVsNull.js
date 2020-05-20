//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//
// Test Equals operator with abstract equality comparison algorithm (ES3.0: S11.9.1, S11.9.3)
//
if (undefined == null) {
  print("Algorithm says equivalent");
} else {
  print("Objects are not equivalent");
} //
// Test Strict Equals operator (ES3.0: S11.9.4)
//


if (undefined === null) {
  print("Same instance");
} else {
  print("Different instances");
}

if (undefined === undefined) {
  print("Same instance");
} else {
  print("Different instances");
}

if (null === null) {
  print("Same instance");
} else {
  print("Different instances");
}

function dump(a, index) {
  var value = a[index];

  if (value === undefined) {
    print("'undefined'");
  } else {
    if (value === null) {
      print("'null'");
    } else {
      print(value);
    }
  }
} //
// Create an array and grow it, ensuring that all empty slots are properly set to 'undefined'
//


var a = new Array(2);
dump(a, 0);
dump(a, 1);
dump(a, 10);
a[10] = 'A';
dump(a, 10);
dump(a, 5);
