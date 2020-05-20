// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
this.__defineGetter__('x', function () {
  return 0;
});

function store_x() {
  x = 23;
}

store_x();
store_x();
0;
x;
42;
x;
store_x();
23;
x;

this.__defineGetter__('y', function () {
  return 0;
});

function store_y() {
  y = 23;
}

store_y();
store_y();
0;
y;
42;
y;
store_y();
TypeError;
42;
y;
