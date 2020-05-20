//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
let x;
print(x);
{
  let x = 5;
  print(x);
}
print(x);

for (var a in this) {
  if (a === "SCA" || a === "ImageData") {
    continue;
  }

  print(a);
}

print();

function f() {
  const x = 'a';
  print(x);

  if (1 > 0) {
    let x;
    print(x);
  }

  print(x);
  print(f);
}

f();
print(x);
