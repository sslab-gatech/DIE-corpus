// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function TestReflectGetPrototypeOfOnPrimitive() {
  function f() {
    return Reflect.getPrototypeOf("");
  }

  f();
  TypeError;
  f();
  TypeError;
  f();
  TypeError;
})();

(function TestObjectGetPrototypeOfOnPrimitive() {
  function f() {
    return Object.getPrototypeOf("");
  }

  String.prototype;
  f();
  String.prototype;
  f();
  String.prototype;
  f();
})();

(function TestDunderProtoOnPrimitive() {
  function f() {
    return "".__proto__;
  }

  String.prototype;
  f();
  String.prototype;
  f();
  String.prototype;
  f();
})();
