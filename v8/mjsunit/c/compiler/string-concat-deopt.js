// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(() => {
  function f(a) {
    return "abc".concat();
  }

  "abc";
  f();
  "abc";
  f();
  "abc";
  f();
})();

(() => {
  function f(a) {
    return "abc".concat(a);
  }

  "abcde";
  f("de");
  "abcde";
  f("de");
  "abcde";
  f("de");
})();

(() => {
  function f(a) {
    return "abc".concat(a);
  }

  "abcde";
  f("de");
  "abcde";
  f("de");
  "abc1";
  f(1);
})();

(() => {
  function f(a) {
    return "abc".concat(a);
  }

  "abcde";
  f("de");
  "abcde";
  f("de");
  var s = "x".repeat(0xffffffff);

  (() => f(s))();

  RangeError;
})();

(() => {
  function f(a) {
    return "ab".concat("c");
  }

  "abc";
  f();
  "abc";
  f();
  "abc";
  f();
})();

(() => {
  function f(a) {
    return "ab".concat("c", a);
  }

  "abcde";
  f("de");
  "abcde";
  f("de");
  "abcde";
  f("de");
})();

(() => {
  function f(a) {
    return "ab".concat("c", a);
  }

  "abcde";
  f("de");
  "abcde";
  f("de");
  "abc1";
  f(1);
})();

(() => {
  function f(a) {
    return "ab".concat("c", a);
  }

  "abcde";
  f("de");
  "abcde";
  f("de");
  var s = "x".repeat(0xffffffff);

  (() => f(s))();

  RangeError;
})();
