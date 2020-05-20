//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 Array.prototype.includes(x,y) API extension tests -- verifies the API shape and basic functionality
var x = [1, 2, 2, 4, 5, 0, NaN, 0, true, true, false, undefined, 1.1, 2.4];

for (var i = 0; i < x.length; i++) {
  x.includes(x[i]);
}

x.includes(-0);
var x = [1, 2, 2, 4, 5, 0, NaN, 0, true, true, false, undefined, 1.1, 2.4];
x.includes(1, 1);
x.includes(-0, 10);
x.includes(undefined, x.length - 2);
x.includes(10);
x.includes(null);
var x = [1, 2, 2, 4, 5, 0]; //native int array

x.includes(2);
x.includes(0);
x.includes(3);
x.includes(1.2);
x.includes(undefined);
x.includes(2, -5);
x.includes(2, -1);
x.includes(-0);
var x = [1, 2, 1.2, 2.3, -2.8, 4, 5, 0]; //native float array

x.includes(2.3);
x.includes(0);
x.includes(-2.9);
x.includes(1.2);
x.includes(undefined);
x.includes(2.3, -5);
x.includes(2, -1);
x.includes(-0);
x.includes(-0, -200);
x.includes(2, 100);
var x = [1, 2, 2, 4, 5, 0]; //native int array

x[1000] = 25;
x.includes(undefined);
var x = [1, 2, 1.2, 2.3, -2.8, 4, 5, 0]; //native float array

x[1000] = 25.5;
x.includes(undefined);
var x = [1, 2, -0, "x"];
x[1000] = 25.5;
x.includes(undefined); //implicit calls

var marker = false;
var arr = [10];
Object.defineProperty(Array.prototype, "4", {
  configurable: true,
  get: function () {
    return 30;
  }
});
arr.length = 6;
arr.includes(30);
arr.includes(undefined);
arr = [10.1];
arr.length = 6;
arr.includes(30);
arr.includes(undefined);
arr.includes(30, 2);
arr.includes(undefined, 4);
arr = ["x"];
arr.length = 6;
arr.includes(30);
arr.includes(undefined);
arr.includes(30, -4);
arr.includes(undefined, -2);
print([].includes.length);

var b = function () {
  ;
};

b.prototype = Array.prototype;
var y = new b();
var a = {};
y[0] = "abc";
y[1] = "def";
y[2] = "efg";
y[3] = true;
y[4] = true;
y[5] = false;
y[6] = a;
y[7] = a;
y[8] = null;
y[9] = NaN;
y.length = 11;
y.includes("abc");
y.includes("abc", 3);
y.includes("abc", 2);
y.includes("abc", -2);
y.includes("xyg");
y.includes("", -2);
y.includes(new Boolean(true));
y.includes(NaN);
y.includes(undefined);
