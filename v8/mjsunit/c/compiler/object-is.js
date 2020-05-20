// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function () {
  function foo(o) {
    return Object.is(o, -0);
  }

  foo(-0);
  foo(0);
  foo(NaN);
  foo('');
  foo([]);
  foo({});
  foo(-0);
  foo(0);
  foo(NaN);
  foo('');
  foo([]);
  foo({});
})();

(function () {
  function foo(o) {
    return Object.is(-0, o);
  }

  foo(-0);
  foo(0);
  foo(NaN);
  foo('');
  foo([]);
  foo({});
  foo(-0);
  foo(0);
  foo(NaN);
  foo('');
  foo([]);
  foo({});
})();

(function () {
  function foo(o) {
    return Object.is(+o, -0);
  }

  foo(-0);
  foo(0);
  foo(NaN);
  foo(-0);
  foo(0);
  foo(NaN);
})();

(function () {
  function foo(o) {
    return Object.is(-0, +o);
  }

  foo(-0);
  foo(0);
  foo(NaN);
  foo(-0);
  foo(0);
  foo(NaN);
})();

(function () {
  function foo(o) {
    return Object.is(o, NaN);
  }

  foo(-0);
  foo(0);
  foo(NaN);
  foo('');
  foo([]);
  foo({});
  foo(-0);
  foo(0);
  foo(NaN);
  foo('');
  foo([]);
  foo({});
})();

(function () {
  function foo(o) {
    return Object.is(NaN, o);
  }

  foo(-0);
  foo(0);
  foo(NaN);
  foo('');
  foo([]);
  foo({});
  foo(-0);
  foo(0);
  foo(NaN);
  foo('');
  foo([]);
  foo({});
})();

(function () {
  function foo(o) {
    return Object.is(+o, NaN);
  }

  foo(-0);
  foo(0);
  foo(NaN);
  foo(-0);
  foo(0);
  foo(NaN);
})();

(function () {
  function foo(o) {
    return Object.is(NaN, +o);
  }

  foo(-0);
  foo(0);
  foo(NaN);
  foo(-0);
  foo(0);
  foo(NaN);
})();

(function () {
  function foo(o) {
    return Object.is(`${o}`, "foo");
  }

  foo("bar");
  foo("foo");
  foo("bar");
  foo("foo");
})();

(function () {
  function foo(o) {
    return Object.is(String(o), "foo");
  }

  foo("bar");
  foo("foo");
  foo("bar");
  foo("foo");
})();

(function () {
  function foo(o) {
    return Object.is(o, o);
  }

  foo(-0);
  foo(0);
  foo(NaN);
  foo('');
  foo([]);
  foo({});
  foo(-0);
  foo(0);
  foo(NaN);
  foo('');
  foo([]);
  foo({});
})();

(function () {
  function foo(o) {
    return Object.is(o | 0, 0);
  }

  foo(0);
  foo(-0);
  foo(NaN);
  foo(1);
  foo(0);
  foo(-0);
  foo(NaN);
  foo(1);
})();

(function () {
  const s = Symbol();

  function foo() {
    return Object.is(s, Symbol());
  }

  foo();
  foo();
  foo();
})();
