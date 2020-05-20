//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var re = /x/i;
var desc = Object.getOwnPropertyDescriptor(re, "options");
var expected = true ? {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "i"
} : {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "i"
};
print(expected, desc);
