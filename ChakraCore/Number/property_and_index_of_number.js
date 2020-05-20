//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Number tests
var one = 1;
one.a = 12;
print(undefined, one.a);

(function () {
  var one = 1;
  "use strict";

  one.a = 1;
})();

var one = 1;
one['a'] = 12;
print(undefined, one.a);

(function () {
  var one = 1;
  "use strict";

  one['a'] = 1;
})();

var one = 1;
one[66] = 12;
print(undefined, one.a);

(function () {
  var one = 1;
  "use strict";

  one[66] = 1;
})();
