//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
//
// Tests the relationship between a parent and child object.
//
function printt(x, str) {
  print("=== " + str + " ===");
  print("x.q:    " + x.q);
  print("x[3]:   " + x[3]);
  print("x[4]:   " + x[4]);
  print("x[50]:  " + x[50]);
  print("x.p1:   " + x.p1);
  print("x.p2:   " + x.p2);
  print("x[\"m\"]: " + x["m"]);
  print("");
}

var z = new Array(10);

for (var i = 0; i < 10; ++i) {
  z[i] = i;
}

z.p1 = "test";
z.p2 = 3;

function F(x) {
  this[x] = 1;
}

F.prototype = z;
var x = new F("q");
printt(x, "after object creation");
z.m = 14;
printt(x, "after adding new property to parent");
F.prototype = new String("glah");
printt(x, "after modifying constructor's prototype");
z.m--;
print(x, "after modifying parent");
z.p1 = undefined;
z[3] = undefined;
z[4] <<= 2;
z[50] = 42;
printt(x, "after undefining properties on parent");
z.p1 = new String("new p1");
printt(x, "after re-adding property on parent");
x.p1 = "x's p1";
z.p1 = undefined;
printt(x, "after re-defining property on object");
