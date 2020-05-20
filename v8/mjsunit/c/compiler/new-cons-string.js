// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --expose-externalize-string
(function () {
  function foo(s) {
    return "abcdefghijklm" + s;
  }

  isOneByteString(foo("0"));
  isOneByteString(foo("0"));
  isOneByteString(foo("0"));
})();

(function () {
  function foo(s) {
    return s + "abcdefghijklm";
  }

  isOneByteString(foo("0"));
  isOneByteString(foo("0"));
  isOneByteString(foo("0"));
})();

(function () {
  function foo(s) {
    return "abcdefghijklm" + s;
  }

  isOneByteString(foo("\u1234"));
  isOneByteString(foo("\u1234"));
  isOneByteString(foo("\u1234"));
})();

(function () {
  function foo(s) {
    return s + "abcdefghijklm";
  }

  isOneByteString(foo("\u1234"));
  isOneByteString(foo("\u1234"));
  isOneByteString(foo("\u1234"));
})();

(function () {
  function foo(s) {
    return "abcdefghijkl\u1234" + s;
  }

  isOneByteString(foo("0"));
  isOneByteString(foo("0"));
  isOneByteString(foo("0"));
})();

(function () {
  function foo(s) {
    return s + "abcdefghijkl\u1234";
  }

  isOneByteString(foo("0"));
  isOneByteString(foo("0"));
  isOneByteString(foo("0"));
})();
