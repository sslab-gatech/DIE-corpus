//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var called = false;
var replaceobj = {
  toString: function () {
    called = true;
  }
};
"ABC".replace("D", replaceobj);
print(called);
