//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var r;
var globalX;
var a = new Array(10);
var o = {
  x: 1,
  y: 2
}; // Delete a uninitialized global variable

r = delete globalX;
print(r);
print(globalX);
var explicitVar = 10;
r = delete explicitVar;
print(r);
print(explicitVar);
implicitVar = 20;
r = delete implicitVar;
print(r);

try {
  print(implicitVar);
} catch (e) {
  ;
}

Array.prototype[2] = 100;
a[1] = 200;
print(a[1]);
r = delete a[1];
print(r);
print(a[1]);
print(a[2]);
r = delete a[2];
print(r);
print(a[2]);
print(o.x);
r = delete o.x;
print(r);
print(o.x);
r = delete o.x;
print(r);
print(o.z);
r = delete o.z;
print(r);
print(o.z);
