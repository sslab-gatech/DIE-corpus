//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var o = new Object();
o.x = 5;
o.y = "why";
print(o["x"]);
var s = "y";
print(o[s]);
o["y"] = "yes";
print(o.y);

for (field in o) {
  print(o[field]);
}
