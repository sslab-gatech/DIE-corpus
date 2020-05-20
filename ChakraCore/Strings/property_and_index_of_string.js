//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Number tests
{
  var str = "x";
  str.a = 12;
  print(undefined, str.a);
}
{
  var str = "x";
  "use strict";

  str.a = 1;
}
{
  var str = "x";
  str['a'] = 12;
  print(undefined, str.a);
}
{
  var str = "x";
  "use strict";

  str['a'] = 1;
}
{
  var str = "x";
  str[66] = 12;
  print(undefined, str.a);
}
{
  var str = "x";
  "use strict";

  str[66] = 1;
}
