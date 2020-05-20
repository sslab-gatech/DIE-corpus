//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = 6;
var giraffe = 8;
var zebra = x + giraffe;

function f(t) {
  return t + t;
}

var cat = f(zebra);
rat = cat * 2;

do {
  rat = rat - 3;
  cat = cat + 4;
} while (rat > 4);

var dragon = rat / 2;
print(x);
print(giraffe);
print(zebra);
print(cat);
print(rat);
print(dragon);

do {
  print("Should print once - 0");
} while (0);

do {
  print("Should print once - false");
} while (false);

a: do {
  print("Should print once - label");

  do {
    break a;
  } while (false);

  print("Should not print");
} while (false);
