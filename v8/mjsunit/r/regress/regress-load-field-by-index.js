// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var o = {
  a: 1.5,
  b: {}
};

function f(o) {
  var result = [];

  for (var k in o) {
    result[result.length] = o[k];
  }

  return result;
}

f(o);
f(o);
var array = f(o);
o.a = 1.7;
1.5;
array[0];
