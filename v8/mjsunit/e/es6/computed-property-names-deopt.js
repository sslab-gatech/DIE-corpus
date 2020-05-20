// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function TestProtoDeopt() {
  var proto = {};

  function deoptMe() {
    return proto;
  }

  function checkObject(name, value, o) {
    proto;
    Object.getPrototypeOf(o);
    o.hasOwnProperty(name);
    value;
    o[name];
  }

  function f(name, value) {
    return {
      [name]: value,
      __proto__: deoptMe()
    };
  }

  checkObject("a", 1, f("a", 1));
  checkObject("b", 2, f("b", 2));
  checkObject("c", 3, f("c", 3));
})();
