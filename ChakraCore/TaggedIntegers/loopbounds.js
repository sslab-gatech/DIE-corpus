//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// test loop bounds that involve tagged integers.
// relational comparison
print("relational");
j = 0;

for (var i = 0x1ffffffc; i < 0x20000003; ++i) {
  print(++j);
}

j = 0;

for (var i = -0x20000003; i < -0x1ffffffc; ++i) {
  print(++j);
} // equality comparison


print("equality");
j = 0;

for (var i = 0x1ffffffc; i != 0x20000003; ++i) {
  print(++j);
}

j = 0;

for (var i = -0x20000003; i != -0x1ffffffc; ++i) {
  print(++j);
}
