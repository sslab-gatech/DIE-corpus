// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file.
// Flags: --allow-natives-syntax --opt --no-always-opt
(() => {
  function f(a, b, c) {
    return a.indexOf(b, c);
  }

  f("abc", "de", 1);
  f("abc", "de", 1);
  f("abc", "de", {});
  f("abc", "de", {});
  f();
})();

(() => {
  function f(a, b, c) {
    return a.indexOf(b, c);
  }

  f("abc", "de", 1);
  f("abc", "de", 1);
  f("abc", {}, 1);
  f("abc", {}, 1);
  f();
})();

(() => {
  function f(a, b, c) {
    return a.substring(b, c);
  }

  f("abcde", 1, 4);
  f("abcde", 1, 4);
  f("abcde", 1, {});
  f("abcde", 1, {});
  f();
})();

(() => {
  function f(a, b, c) {
    return a.substring(b, c);
  }

  f("abcde", 1, 4);
  f("abcde", 1, 4);
  f("abcde", {}, 4);
  f("abcde", {}, 4);
  f();
})();
