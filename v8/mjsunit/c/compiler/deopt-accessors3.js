// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var o = {
  v: 1
};
var deopt = false;
Object.defineProperty(o, "x", {
  get: function () {
    return this.v;
  },
  set: function (v) {
    this.v = v;

    if (deopt) {
      ;
    }
  }
});

function foo(o) {
  var x = "x";
  return o[x]++;
}

1;
foo(o);
2;
foo(o);
deopt = true;
3;
foo(o);
