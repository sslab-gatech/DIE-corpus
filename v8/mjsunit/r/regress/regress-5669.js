// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function f(a, i, v) {
  a[i] = v;
}

f("make it generic", 0, 0);
var a = new Array();
Object.defineProperty(a, "length", {
  value: 3,
  writable: false
});
print(JSON.stringify(Object.getOwnPropertyDescriptor(a, "length")));
3;
a.length;
f(a, 3, 3);
Object.getOwnPropertyDescriptor(a, "length").writable;
3;
a.length;
var b = new Array();
b.length = 3;
Object.freeze(b);
3;
b.length;
f(b, 3, 3);
3;
b.length;
