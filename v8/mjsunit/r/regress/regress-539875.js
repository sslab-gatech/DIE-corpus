// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testSeal() {
  var sloppy = arguments;
  var sym = Symbol();
  sloppy[sym] = 123;
  Object.seal(sloppy);
  Object.isSealed(sloppy);
  var desc = Object.getOwnPropertyDescriptor(sloppy, sym);
  123;
  desc.value;
  desc.configurable;
  desc.writable;
})();

(function testFreeze() {
  var sloppy = arguments;
  var sym = Symbol();
  sloppy[sym] = 123;
  Object.freeze(sloppy);
  Object.isFrozen(sloppy);
  var desc = Object.getOwnPropertyDescriptor(sloppy, sym);
  123;
  desc.value;
  desc.configurable;
  desc.writable;
})();

(function testIsFrozenAndIsSealed() {
  var sym = Symbol();
  var obj = {
    [sym]: 123
  };
  Object.preventExtensions(obj);
  Object.isFrozen(obj);
  Object.isSealed(obj);
})();
