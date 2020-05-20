//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var f = false;
var t = true;

if (!f) {
  print("test 1");
}

if (!!!f) {
  print("test 2");
}

if (t) {
  print("test 3");
}

if (!!t) {
  print("test 4");
}
