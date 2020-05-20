// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
const limit = 0xffff + 1;

(function () {
  function foo() {
    try {
      new Int8Array(limit);
    } catch (e) {
      return e.stack;
    }
  }

  /new Int8Array/.test(foo());
  /new Int8Array/.test(foo());
  /new Int8Array/.test(foo());
})();

(function () {
  function foo() {
    try {
      new Uint8Array(limit);
    } catch (e) {
      return e.stack;
    }
  }

  /new Uint8Array/.test(foo());
  /new Uint8Array/.test(foo());
  /new Uint8Array/.test(foo());
})();

(function () {
  function foo() {
    try {
      new Uint8ClampedArray(limit);
    } catch (e) {
      return e.stack;
    }
  }

  /new Uint8ClampedArray/.test(foo());
  /new Uint8ClampedArray/.test(foo());
  /new Uint8ClampedArray/.test(foo());
})();

(function () {
  function foo() {
    try {
      new Int16Array(limit);
    } catch (e) {
      return e.stack;
    }
  }

  /new Int16Array/.test(foo());
  /new Int16Array/.test(foo());
  /new Int16Array/.test(foo());
})();

(function () {
  function foo() {
    try {
      new Uint16Array(limit);
    } catch (e) {
      return e.stack;
    }
  }

  /new Uint16Array/.test(foo());
  /new Uint16Array/.test(foo());
  /new Uint16Array/.test(foo());
})();

(function () {
  function foo() {
    try {
      new Int32Array(limit);
    } catch (e) {
      return e.stack;
    }
  }

  /new Int32Array/.test(foo());
  /new Int32Array/.test(foo());
  /new Int32Array/.test(foo());
})();

(function () {
  function foo() {
    try {
      new Uint32Array(limit);
    } catch (e) {
      return e.stack;
    }
  }

  /new Uint32Array/.test(foo());
  /new Uint32Array/.test(foo());
  /new Uint32Array/.test(foo());
})();

(function () {
  function foo() {
    try {
      new Float32Array(limit);
    } catch (e) {
      return e.stack;
    }
  }

  /new Float32Array/.test(foo());
  /new Float32Array/.test(foo());
  /new Float32Array/.test(foo());
})();

(function () {
  function foo() {
    try {
      new Float64Array(limit);
    } catch (e) {
      return e.stack;
    }
  }

  /new Float64Array/.test(foo());
  /new Float64Array/.test(foo());
  /new Float64Array/.test(foo());
})();

(function () {
  function foo() {
    try {
      new BigInt64Array(limit);
    } catch (e) {
      return e.stack;
    }
  }

  /new BigInt64Array/.test(foo());
  /new BigInt64Array/.test(foo());
  /new BigInt64Array/.test(foo());
})();

(function () {
  function foo() {
    try {
      new BigUint64Array(limit);
    } catch (e) {
      return e.stack;
    }
  }

  /new BigUint64Array/.test(foo());
  /new BigUint64Array/.test(foo());
  /new BigUint64Array/.test(foo());
})();
