// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
var a = {
  toString: function () {
    return 54321;
  }
};
var b = {
  valueOf: function () {
    return 42;
  }
};
var c = {
  toString: function () {
    return "x";
  },
  valueOf: function () {
    return 123;
  }
};
var d = {
  [Symbol.toPrimitive]: function (hint) {
    "number";
    hint;
    return 987654321;
  }
};
var e = new Date(0);
