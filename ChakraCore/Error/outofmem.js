//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
try {
  var longString = "A";

  for (var i = 0; i < 31; i++) {
    longString += longString;
  }

  print(longString.toString());
} catch (e) {
  print(e.name);
  print(e.message);
  print(e.description);
  print(e.number);
}
