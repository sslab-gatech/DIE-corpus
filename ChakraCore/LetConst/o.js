//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
const a = 5;

for (var x = 0; x < 10; x++) {
  const a = 666;
  print(a);
}

const b = 10;
print(a);
print(b);
