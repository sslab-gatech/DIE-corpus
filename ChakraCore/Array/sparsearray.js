//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
var a = new Array(0x15000); //makes this sparse

var i = 0;

for (var i = 50; i < 60; i++) {
  a[i] = i + 10;
}

for (var i = 0; i < 10; i++) {
  a[i] = i + 20;
}

for (var i = 100; i < 110; i++) {
  a[i] = i * 10;
}

var b = new Array(0x15000); //makes this sparse

for (var i = 50; i < 60; i++) {
  a[i] = i + 10;
}

for (var i = 0; i < 10; i++) {
  a[i] = i + 20;
}

for (var i = 100; i < 110; i++) {
  a[i] = i + 40;
}

var c = a.concat(b);
print(c[50]);
print(c[0]);
print(a.shift());
print(a[7]);
print(a[8]);
print(a.shift());
print(a.length);
var d = a.slice(10);
print(d[41]);
print(d[90]);
a.splice(45, 3, "a", "b", "c");
print(a[45]);
print(a[46]);
print(a[50]);
print(a[100]);
print(a.length);
var x = [];
x[0xFFFFFFFF] = 0;
print(x[0xFFFFFFFF], x.length);
x[0xFFFFFFFE] = 1;
print(x[0xFFFFFFFE], x.length === 0xFFFFFFFF);
x[0xFFFFFFFD] = 2;
print(x[0xFFFFFFFD], x.length === 0xFFFFFFFF);

function errors() {
  try {
    var e1 = new Array(-0.0);
    print("[-0.0].length = " + e1.length);
  } catch (e) {
    print("[-0.0]: error");
  }

  try {
    var e1 = new Array(-0.01);
    print("[-0.01].length = " + e1.length);
  } catch (e) {
    print("[-0.01]: error");
  }

  try {
    var e1 = new Array(0.01);
    print("[0.01].length = " + e1.length);
  } catch (e) {
    print("[0.01]: error");
  }

  try {
    var e1 = new Array(4294967295.0);
    print("[4294967295.0].length = " + e1.length);
  } catch (e) {
    print("[4294967295.0]: error");
  }

  try {
    var e1 = new Array(4294967294.9);
    print("[4294967294.9].length = " + e1.length);
  } catch (e) {
    print("[4294967294.9]: error");
  }

  try {
    var e1 = new Array(4294967296.0);
    print("[4294967296.0].length = " + e1.length);
  } catch (e) {
    print("[4294967296.0]: error");
  }
} // Very special case of a sparse array with single element at index > 0x7fffffff.


var sparse = [];
sparse[0x80000000] = "hello";

if (sparse[1] != undefined) {
  print("Bad element in sparse array");
}

sparse[0] = "here i am";
print(sparse[0]);
errors(); // Regress Win8 611708

(function () {
  print("Win8 611708: bound size to max array length");
  var a = [];
  a[0xfffffffd] = 1; // A segment at boundary

  a[0] = 0; // Change "last" accessed segment

  a[0xfffffffe] = 2; // Trigger the original assertion
  // Some more verification

  a[0xffffffff] = 3;

  for (var i = 0; i < 10; i++) {
    a[0x100000000 + i] = i;
  }

  print("length:", a.length);

  for (var p in a) {
    print(p + ":", a[p]);
  }
})();
