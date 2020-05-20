//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var x = [1, 2, 2, 4, 5, +0, -0, NaN, 0, true, true, false];

for (i = -3; i < 15; i++) {
  print(x.indexOf(i));

  for (j = -3; j < 15; j++) {
    print(x.indexOf(x[i], j));
    print(x.indexOf(i, j));
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
print(y.indexOf("abc"));
print(y.indexOf("abc", 3));
print(y.indexOf("abc", 2));
print(y.indexOf("abc", -2));
print(y.indexOf("efg"));
print(y.indexOf("efg", 6));
print(y.indexOf("efg", 1));
print(y.indexOf("efg", -3));
print(y.indexOf("xyg"));
print(y.indexOf("esg", 2));
print(y.indexOf("eag", 2));
print(y.indexOf("", -2));
print(y.indexOf(true));
print(y.indexOf(false));
print(y.indexOf(new Boolean(true)));
print(y.indexOf(a, 6));
print(y.indexOf(a, 1));
print(y.indexOf(a));
print(y.indexOf(b));
print(y.indexOf(null));
print(y.indexOf()); //implicit calls

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
var f = arr.indexOf(30);
print(a); //Float array with gaps

var floatArray = new Array(5.5, 5.6);
floatArray[6] = 5.6;
print(floatArray.indexOf(5.7)); // Cases where we do/don't have to resume after failing to find the value in the head segment.
// Run with -forcearraybtree to really stress these.

var gap = [0, 1];
print(gap.indexOf(4));
Array.prototype[2] = 'foo';
print(gap.indexOf('foo'));
gap[5] = 4;
print(gap.indexOf('foo'));
print(gap.indexOf(4));
gap = [0, 1.1];
print(gap.indexOf(4));
Array.prototype[2] = 'bar';
print(gap.indexOf('bar'));
gap[5] = 4;
print(gap.indexOf(4));
print(gap.indexOf('bar'));
gap = [0, 'test'];
print(gap.indexOf(4));
Array.prototype[2] = 4;
print(gap.indexOf(4));
gap[5] = 4;
print(gap.indexOf(4));
delete Array.prototype[2];
print(gap.indexOf(4));
