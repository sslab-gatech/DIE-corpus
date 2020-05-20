//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var a = 0x40000000;
var b = 0x40000001;
var c = 0x3fffffff;
test(a, b, c);
a = 0xfffffffe;
b = 0xffffffff;
c = 0x0;
test(a, b, c);
a = 0x40000000;
b = 0x40000001;
c = 0;
test(a, b, c);

function test(a, b, c) {
  print(a.toString(16));
  print(b.toString(16));
  print(c.toString(16));

  if (a < b) {
    print("less");
  } else {
    print("greater");
  }

  if (a > b) {
    print("greater");
  } else {
    print("less");
  }

  if (a < c) {
    print("less");
  } else {
    print("greater");
  }

  if (a > c) {
    print("greater");
  } else {
    print("less");
  }

  if (b < c) {
    print("less");
  } else {
    print("greater");
  }

  if (b > c) {
    print("less");
  } else {
    print("greater");
  }
}
