//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = [1, 2, 2, 4, 5, +0, -0, NaN, 0, true, true, false];

for (i = -3; i < 15; i++) {
  print(x.lastIndexOf(i));

  for (j = -3; j < 15; j++) {
    print(x.lastIndexOf(x[i], j));
    print(x.lastIndexOf(i, j));
  }
}

var b = function () {
  ;
};

b.prototype = Array.prototype;
var y = new b();
var z = new Object();
var a = new Object();
y[0] = "abc";
y[1] = "def";
y[2] = "efg";
y[3] = true;
y[4] = true;
y[5] = false;
y[6] = a;
y[7] = a;
y[8] = null;
y.length = 10;
print(y.lastIndexOf("abc"));
print(y.lastIndexOf("abc", 3));
print(y.lastIndexOf("abc", 2));
print(y.lastIndexOf("abc", -2));
print(y.lastIndexOf("efg"));
print(y.lastIndexOf("efg", 6));
print(y.lastIndexOf("efg", 1));
print(y.lastIndexOf("efg", -3));
print(y.lastIndexOf("xyg"));
print(y.lastIndexOf("esg", 2));
print(y.lastIndexOf("eag", 2));
print(y.lastIndexOf("", -2));
print(y.lastIndexOf(true));
print(y.lastIndexOf(false));
print(y.lastIndexOf(new Boolean(true)));
print(y.lastIndexOf(a, 6));
print(y.lastIndexOf(a, 1));
print(y.lastIndexOf(a));
print(y.lastIndexOf(b));
print(y.lastIndexOf(null));
print(y.lastIndexOf()); //implicit calls

var a;
var arr = [10];
Object.defineProperty(Array.prototype, "4", {
  configurable: true,
  get: function () {
    a = true;
    return 30;
  }
});
a = false;
arr.length = 6;
var f = arr.lastIndexOf(30);
print(a);
