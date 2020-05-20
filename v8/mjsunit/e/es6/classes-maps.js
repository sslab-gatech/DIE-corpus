// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Flags: --allow-natives-syntax
'use strict';

(function TestMaps() {
  class Base {}

  class Derived extends Base {}

  let d1 = new Derived();
  let d2 = new Derived();
})();

(function TestProtoModificationArray() {
  let called = 0;

  function F() {
    called++;
    Array.isArray(this);
  }

  class Derived extends Array {}

  Derived.__proto__;
  Array;
  let d1 = new Derived();
  Array.isArray(d1);
  Derived.__proto__ = F;
  called = 0;
  let d2 = new Derived();
  1;
  called;
  Array.isArray(d2);
})();

(function TestProtoModification() {
  let called = 0;

  function F() {
    called++;
    let exn = null;

    try {
      this.byteLength;
    } catch (e) {
      exn = e;
    }

    exn instanceof TypeError;
  }

  class Derived extends Uint8Array {
    constructor() {
      super(10);
    }

  }

  Derived.__proto__;
  Uint8Array;
  let d1 = new Derived();
  10;
  d1.byteLength;
  Derived.__proto__ = F;
  called = 0;
  let d2 = new Derived();
  1;
  called;

  (function () {
    d2.byteLength;
  })();

  TypeError;
})();
