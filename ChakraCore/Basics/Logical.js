//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = 0;
var y = 1;
var z = x && print("Should have short-circuited '&&' (1)");
print("z == " + z + " (2)");
z = y || print("Should have short-circuited '||' (3)");
print("z == " + z + " (4)");
z = y && print("z == " + z + " (5)");
z = x || print("z == " + z + " (6)");
z = 1;

if (x || !(z = 0)) {
  print("z == " + z + " (7)");
}

z = 2;

if (y && !(z = 0)) {
  print("z == " + z + " (8)");
}

z = 0;

if (!y && (z = 3)) {
  print("Should not be here (9)");
}

print("z == " + z + " (10)");
z = 0;

if (!x || (z = 4)) {
  print("z == " + z + " (11)");
}
