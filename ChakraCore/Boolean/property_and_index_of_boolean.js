//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Number tests
var flag = true;
flag.a = 12;
print(undefined == flag.a);
var flag = true;

try {
  "use strict";

  flag.a = 1;
} catch (e) {
  ;
}

var flag = true;
flag['a'] = 12;
print(undefined == flag.a);
var flag = true;

try {
  "use strict";

  flag['a'] = 1;
} catch (e) {
  ;
}

var flag = true;
flag[66] = 12;
print(undefined == flag.a);
var flag = true;

try {
  "use strict";

  flag[66] = 1;
} catch (e) {
  ;
}
