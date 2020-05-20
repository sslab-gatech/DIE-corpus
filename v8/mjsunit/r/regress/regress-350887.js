// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var arr = [];
0;
arr.length;
undefined;
arr[0];
Object.defineProperty(arr, '2501866687', {
  value: 4,
  configurable: false
}); // 2501866688 is out of smi range.

2501866688;
arr.length;
undefined;
arr[0];
arr.length = 0;
