// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --opt
(function () {
  function eq(a, b) {
    return a == b;
  }

  var o = {
    [Symbol.toPrimitive]: () => "o"
  };
  eq(o, o);
  eq(o, o);
  eq(o, o);
  eq("o", o);
  eq(o, "o");
  eq(o, o);
  eq("o", o);
  eq(o, "o");
  eq();
})();

(function () {
  function ne(a, b) {
    return a != b;
  }

  var o = {
    [Symbol.toPrimitive]: () => "o"
  };
  ne(o, o);
  ne(o, o);
  ne(o, o);
  ne("o", o);
  ne(o, "o");
  ne(o, o);
  ne("o", o);
  ne(o, "o");
  ne();
})();

(function () {
  function eq(a, b) {
    return a == b;
  }

  var a = {};
  var b = {
    b
  };

  var u = function () {
    ;
  };

  eq(a, a);
  eq(b, b);
  eq(a, b);
  eq(b, a);
  eq(a, a);
  eq(b, b);
  eq(a, b);
  eq(b, a);
  eq(a, a);
  eq(b, b);
  eq(a, b);
  eq(b, a);
  eq(null, u);
  eq(undefined, u);
  eq(u, null);
  eq(u, undefined);
  eq(a, a);
  eq(b, b);
  eq(a, b);
  eq(b, a);
  eq(null, u);
  eq(undefined, u);
  eq(u, null);
  eq(u, undefined);
  eq();
})();

(function () {
  function ne(a, b) {
    return a != b;
  }

  var a = {};
  var b = {
    b
  };

  var u = function () {
    ;
  };

  ne(a, a);
  ne(b, b);
  ne(a, b);
  ne(b, a);
  ne(a, a);
  ne(b, b);
  ne(a, b);
  ne(b, a);
  ne(a, a);
  ne(b, b);
  ne(a, b);
  ne(b, a);
  ne(null, u);
  ne(undefined, u);
  ne(u, null);
  ne(u, undefined);
  ne(a, a);
  ne(b, b);
  ne(a, b);
  ne(b, a);
  ne(null, u);
  ne(undefined, u);
  ne(u, null);
  ne(u, undefined);
  ne();
})();
