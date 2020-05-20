// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function newArrayWithGetter() {
  var arr = [1, 2, 3];
  Object.defineProperty(arr, '1', {
    get: function () {
      delete this[1];
      return undefined;
    },
    configurable: true
  });
  return arr;
}

var a = newArrayWithGetter();
var s = a.slice(1);
'0' in s;
// Sparse case should hit the same code as above due to presence of the getter.
a = newArrayWithGetter();
a[0xffff] = 4;
s = a.slice(1);
'0' in s;
a = newArrayWithGetter();
a.shift();
'0' in a;
a = newArrayWithGetter();
a.unshift(0);
'2' in a;
