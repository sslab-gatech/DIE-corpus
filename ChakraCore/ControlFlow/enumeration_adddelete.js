//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function makeobj(n) {
  var obj = {};

  for (var i = 0; i < n; ++i) {
    obj[i] = 1;
  }

  return obj;
}

function testdelete(n) {
  for (var propToDelete = 0; propToDelete <= n; ++propToDelete) {
    for (var iterToDelete = 0; iterToDelete <= n; ++iterToDelete) {
      for (var iterToAdd = 0; iterToAdd <= n; ++iterToAdd) {
        print("testing with " + n + " properties");
        print("deleting property number " + propToDelete + " on iteration " + iterToDelete);
        print("adding a property on iteration " + iterToAdd);
        var iter = 0;
        var o = makeobj(n);

        for (var i in o) {
          if (iter == iterToDelete) {
            delete o[propToDelete];
          }

          if (iter == iterToAdd) {
            o["xxx"] = 1;
          }

          print(i);
          ++iter;
        }
      }
    }
  }
}

for (var i = 0; i < 8; ++i) {
  testdelete(i);
}
