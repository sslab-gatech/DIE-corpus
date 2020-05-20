// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function f() {
  "function";
  typeof f;
})();

(function f() {
  var f; // Variable shadows function name.

  "undefined";
  typeof f;
})();

(function f() {
  var f;
  "undefined";
  typeof f;
  with ({}) {
    ;
  } // Force context allocation of both variable and function name.
})();

"undefined";
typeof f;

// var initialization is intercepted by with scope.
(function () {
  var o = {
    a: 1
  };
  with (o) {
    var a = 2;
  }
  "undefined";
  typeof a;
  2;
  o.a;
})();
