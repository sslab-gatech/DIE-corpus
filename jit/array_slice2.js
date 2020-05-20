//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
print("-------slice sparse array-------------");

function dump_array(arr) {
  print("length: " + arr.length);

  for (var p in arr) {
    print("  " + p + ": " + arr[p]);
  }
}

print("-- arr1");
var arr = [];
arr[2147483647] = 100;
var newarr = arr.slice(0, 2147483648);
dump_array(newarr);
print("-- arr2");
var arr = [];
var base = 4294967290;

for (var i = 0; i < 10; i++) {
  arr[base + i] = 100 + i;
}

print("-src");
dump_array(arr);
print("-sliced");
var newarr = arr.slice(2147483648, 4294967299);
dump_array(newarr);
print("-------test prototype lookup-------------");

function test_slice(start, end) {
  for (var i = 0; i < 10; i++) {
    Array.prototype[i] = 100 + i;
  }

  delete Array.prototype[3];
  var a = [200, 201, 202, 203, 204];
  delete a[1];
  a[7] = 207;
  var astr = "" + a;
  var r = a.slice(start, end);

  for (var i = 0; i < 10; i++) {
    delete Array.prototype[i];
  }

  print(astr + " ==> [" + start + ".." + end + "]: " + r);
}

test_slice(0, 0);
test_slice(0, 5);
test_slice(0, 7);
test_slice(0, 8);
test_slice(0, 100);
test_slice(2, 0);
test_slice(2, 5);
test_slice(2, 7);
test_slice(2, 8);
test_slice(2, 100);
test_slice(7, 0);
test_slice(7, 5);
test_slice(7, 7);
test_slice(7, 8);
test_slice(7, 100);
test_slice(8, 0);
test_slice(8, 5);
test_slice(8, 7);
test_slice(8, 8);
test_slice(8, 100);
