//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
for (a in this) {
  if (a === "SCA" || a === "ImageData") {
    continue;
  }

  print(a);
}

const x = 10;
print(x);
{
  const x = 20;
  print(x);
}
print(x);

for (a in this) {
  if (a === "SCA" || a === "ImageData") {
    continue;
  }

  print(a);
}
