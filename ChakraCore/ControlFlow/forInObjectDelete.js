//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("Delete current element");
var x = {
  a: 2,
  b: 3
};

for (var i in x) {
  if (x[i] == 2) {
    delete x[i];
  } else {
    print(x[i]);
  }
}

print("Delete former element");
var o = {
  a: 2,
  b: 3
};
var n = 0;

for (var i in o) {
  if (n++ == 1) {
    delete o.a;
  }

  print(i);
}
