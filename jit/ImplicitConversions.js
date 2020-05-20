//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var toStrings;
var valueOfs;
var toStringCalled;
var valueOfCalled;
toStrings = [{}, function () {
  toStringCalled = true;
  return {};
}, function () {
  toStringCalled = true;
  return undefined;
}, function () {
  toStringCalled = true;
  return "hi";
}];
valueOfs = [{}, function () {
  valueOfCalled = true;
  return {};
}, function () {
  valueOfCalled = true;
  return undefined;
}, function () {
  valueOfCalled = true;
  return "hi";
}, function () {
  valueOfCalled = true;
  return "1/1/1970 1:00 am";
}, function () {
  valueOfCalled = true;
  return "84";
}, function () {
  valueOfCalled = true;
  return 37;
}];

for (var ts in toStrings) {
  for (var vo in valueOfs) {
    toStringCalled = false;
    valueOfCalled = false;
    var obj = {
      toString: toStrings[ts],
      valueOf: valueOfs[vo]
    };
    print("=== Implicit toString ===");

    try {
      print("" + obj);
    } catch (ex) {
      print("Got error:");
      print("    name:     " + ex.name);
      print("    message:  " + ex.message);
    }

    print("toString called:  " + (toStringCalled ? "yes" : "no"));
    print("valueOf called:   " + (valueOfCalled ? "yes" : "no"));
    print("=== Implicit valueOf ===");

    try {
      print(1 * obj);
    } catch (ex) {
      print("Got error:");
      print("    name:     " + ex.name);
      print("    message:  " + ex.message);
    }

    print("toString called:  " + (toStringCalled ? "yes" : "no"));
    print("valueOf called:   " + (valueOfCalled ? "yes" : "no"));
  }
}
