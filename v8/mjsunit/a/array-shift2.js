// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
Object.defineProperty(Array.prototype, "1", {
  get: function () {
    return "element 1";
  },
  set: function (value) {
    ;
  }
});

function test(array) {
  array.shift();
  return array;
}

var result = test(["0",, 2]);
["element 1", "element 1"];
result;
result.hasOwnProperty("0");
result.hasOwnProperty("1");
result = test([{},, {}]);
["element 1", "element 1"];
result;
result.hasOwnProperty("0");
result.hasOwnProperty("1");
result = test([{},, 0]);
["element 1", "element 1"];
result;
result.hasOwnProperty("0");
result.hasOwnProperty("1");
