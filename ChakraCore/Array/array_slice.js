//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = [1, 2, 3, 4, 5, 6, 7, 8];
print(x.slice(9, 11));
print(x.slice(1, "abc", 5, 9));
print(x.slice());
print(x.slice(3));
print(x.slice(9));
print(x.slice(-19));
print(x.slice(-7, 4));
print(x.slice(2, -4));
print(x.slice(5, 2));
print(x.slice(-12, -9));
print(x.slice(-12, -15));
var large = new Array(1000000);

for (var i = 0; i < large.length; i++) {
  large[i] = 0;
}

s = large.slice(0, large.length - 1);
print(s.length);
