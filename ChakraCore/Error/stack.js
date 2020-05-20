//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
try {
  var count = 200000; // Keep this unrealistic number as we do (osx)
  // and do not limit stack memory to a particular capacity

  var a = {};
  var b = a;

  for (var i = 0; i < count; i++) {
    a.x = {};
    a = a.x;
  }

  JSON.stringify(b);
} catch (e) {
  ;
}
