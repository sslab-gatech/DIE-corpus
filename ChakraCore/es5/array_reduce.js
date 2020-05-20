//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function returnSum(w, x, y, z) {
  print("accumulator:" + w + " value:" + x + " index:" + y + " Object:" + z);
  return w + x;
}

function returnSquare(w, x, y, z) {
  print("accumulator:" + w + " value:" + x + " index:" + y + " Object:" + z);
  return w + x * x;
}

function returnStringSquare(w, x, y, z) {
  print("accumulator:" + w + " value:" + x + " index:" + y + " Object:" + z);
  return w + x + x;
}

function returnRandom(w, x, y, z) {
  print("accumulator:" + w + " value:" + x + " index:" + y + " Object:" + z);
  return w + x + y;
}

Array.prototype[6] = 20;
var x = [1, 2, 3, 4, 5];
var y = x.reduce(returnSum, 0);
print(y);
x = [10, 20, 30, 40, 50];
y = x.reduce(returnSquare, 0);
print(y);
x = [10, 20, 30, 40, 50];
y = x.reduce(returnRandom);
print(y);
x = {
  0: "abc",
  1: "def",
  2: "xyz"
};
x.length = 3;
y = Array.prototype.reduce.call(x, returnSum, "");
print(y);
y = Array.prototype.reduce.call(x, returnStringSquare, "");
print(y);
y = Array.prototype.reduce.call(x, returnRandom, "");
print(y);
x = [10, 20, 30, 40, 50];
x[8] = 10;
y = x.reduce(returnSum, 30);
print(y);
