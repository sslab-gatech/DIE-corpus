// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
// Ensure that we properly check for properties on the prototypes.
function foo(o) {
  var s = "";

  for (var i in o) {
    s += i;
  }

  return s;
}

var o = {
  a: 1,
  b: 2,
  c: 3
};
"abc";
foo(o);
"abc";
foo(o);
"abc";
foo(o);
Object.prototype.d = 4;
"abcd";
foo(o);
