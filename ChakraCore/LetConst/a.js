//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
if (true) {
  const c = 1;
  print(c);
}

print(function (x) {
  let y = arguments;
  return y;
}(1)[0]);
let a = 'a';

(function (a) {
  print(a);
})();

print(a);
