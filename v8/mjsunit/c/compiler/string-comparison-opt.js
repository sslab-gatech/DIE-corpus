// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in the LICENSE file.
// Flags: --allow-natives-syntax
(() => {
  function f(a) {
    return a.charAt(1) == "";
  }

  false;
  f("aaa");
  false;
  f("aaa");
})();

(() => {
  function f(a) {
    return a.charAt(1) < "";
  }

  false;
  f("aaa");
  false;
  f("aaa");
})();

(() => {
  function f(a) {
    return a.charAt(1) <= "";
  }

  false;
  f("aaa");
  false;
  f("aaa");
})();

(() => {
  function f(a) {
    return a.charAt(1) > "";
  }

  true;
  f("aaa");
  true;
  f("aaa");
})();

(() => {
  function f(a) {
    return a.charAt(1) >= "";
  }

  true;
  f("aaa");
  true;
  f("aaa");
})();

(() => {
  function f(a) {
    return a.charAt(1) == a.charAt(2);
  }

  false;
  f("aab");
  true;
  f("aaa");
  false;
  f("acb");
  false;
  f("aab");
  true;
  f("aaa");
  false;
  f("acb");
})();

(() => {
  function f(a) {
    return a.charAt(1) < a.charAt(2);
  }

  true;
  f("aab");
  false;
  f("aaa");
  false;
  f("acb");
  true;
  f("aab");
  false;
  f("aaa");
  false;
  f("acb");
})();

(() => {
  function f(a) {
    return a.charAt(1) <= a.charAt(2);
  }

  true;
  f("aab");
  true;
  f("aaa");
  false;
  f("acb");
  true;
  f("aab");
  true;
  f("aaa");
  false;
  f("acb");
})();

(() => {
  function f(a) {
    return a.charAt(1) > a.charAt(2);
  }

  false;
  f("aab");
  false;
  f("aaa");
  true;
  f("acb");
  false;
  f("aab");
  false;
  f("aaa");
  true;
  f("acb");
})();

(() => {
  function f(a) {
    return a.charAt(1) >= a.charAt(2);
  }

  false;
  f("aab");
  true;
  f("aaa");
  true;
  f("acb");
  false;
  f("aab");
  true;
  f("aaa");
  true;
  f("acb");
})();

(() => {
  function f(a) {
    return a.charAt(1) == "b";
  }

  false;
  f("aaa");
  true;
  f("bbb");
  false;
  f("ccc");
  false;
  f("aaa");
  true;
  f("bbb");
  false;
  f("ccc");
})();

(() => {
  function f(a) {
    return a.charAt(1) == "bb";
  }

  false;
  f("aaa");
  false;
  f("aaa");
})();

(() => {
  function f(a) {
    return a.charAt(1) < "b";
  }

  true;
  f("aaa");
  false;
  f("bbb");
  false;
  f("ccc");
  true;
  f("aaa");
  false;
  f("bbb");
  false;
  f("ccc");
})();

(() => {
  function f(a) {
    return a.charAt(1) < "bb";
  }

  true;
  f("aaa");
  true;
  f("bbb");
  false;
  f("ccc");
  true;
  f("aaa");
  true;
  f("bbb");
  false;
  f("ccc");
})();

(() => {
  function f(a) {
    return a.charAt(1) <= "b";
  }

  true;
  f("aaa");
  true;
  f("bbb");
  false;
  f("ccc");
  true;
  f("aaa");
  true;
  f("bbb");
  false;
  f("ccc");
})();

(() => {
  function f(a) {
    return a.charAt(1) <= "bb";
  }

  true;
  f("aaa");
  true;
  f("bbb");
  false;
  f("ccc");
  true;
  f("aaa");
  true;
  f("bbb");
  false;
  f("ccc");
})();

(() => {
  function f(a) {
    return a.charAt(1) > "b";
  }

  false;
  f("aaa");
  false;
  f("bbb");
  true;
  f("ccc");
  false;
  f("aaa");
  false;
  f("bbb");
  true;
  f("ccc");
})();

(() => {
  function f(a) {
    return a.charAt(1) > "bb";
  }

  false;
  f("aaa");
  false;
  f("bbb");
  true;
  f("ccc");
  false;
  f("aaa");
  false;
  f("bbb");
  true;
  f("ccc");
})();

(() => {
  function f(a) {
    return a.charAt(1) >= "b";
  }

  false;
  f("aaa");
  true;
  f("bbb");
  true;
  f("ccc");
  false;
  f("aaa");
  true;
  f("bbb");
  true;
  f("ccc");
})();

(() => {
  function f(a) {
    return a.charAt(1) >= "bb";
  }

  false;
  f("aaa");
  false;
  f("bbb");
  true;
  f("ccc");
  false;
  f("aaa");
  false;
  f("bbb");
  true;
  f("ccc");
})();
