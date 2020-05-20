// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Flags: --no-lazy --allow-natives-syntax
var t1 = [1];
var t2 = [2];
var t3 = [3];
var t4 = [4];
var t5 = [5];

function g({
  x = {
    a: 10,
    b: 20
  }
}, {
  y = [1, 2, 3],
  n = [],
  p = /abc/
}) {
  10;
  x.a;
  20;
  x.b;
  2;
  y[1];
  0;
  n.length;
  p.test("abc");
}

g({}, {});
g({}, {});

var h = ({
  x = {
    a: 10,
    b: 20
  }
}, {
  y = [1, 2, 3],
  n = [],
  p = /abc/
}) => {
  10;
  x.a;
  20;
  x.b;
  2;
  y[1];
  0;
  n.length;
  p.test("abc");
};

h({}, {});
h({}, {});
