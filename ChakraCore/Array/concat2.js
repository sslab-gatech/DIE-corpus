//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function guarded_call(func) {
  try {
    func();
  } catch (e) {
    print(e.name + " : " + e.message);
  }
}

function dump_array(arr) {
  print("length: " + arr.length);

  for (var p in arr) {
    print("  " + p + ": " + arr[p]);
  }
}

function test_concat(size) {
  guarded_call(function () {
    var arr = new Array(size);
    arr[size - 1] = 100;
    print("- concat 101, 102, 103, 104, 105");
    arr = arr.concat(101, 102, 103, 104, 105);
    dump_array(arr);
    print("- arr.concat(arr)");
    arr = arr.concat(arr);
    dump_array(arr);
  });
}

print("-------concat Small-------------");
test_concat(2147483642); // Fix for MSRC 33319 changes concat to skip a fast path if the index we're copying into is a BigIndex.
// Disable the large portion of this test since this change makes such a test run for hours.
//print("-------concat Large-------------");
//test_concat(4294967294);

print("-------test prototype lookup-------------");

for (var i = 0; i < 10; i++) {
  Array.prototype[i] = 100 + i;
}

delete Array.prototype[3];
var a = [200, 201, 202, 203, 204];
delete a[1];
a[7] = 207;
print("a: " + a);
var r = a.concat(300, 301, 302, 303, 304);
print("r: " + r);
delete r[8];
print("r: " + r); // Now r[8] should come from prototype

for (var i = 0; i < 10; i++) {
  delete Array.prototype[i];
}

print("r: " + r); // r[8] gone, other entries not affected (verify not from prototype)
