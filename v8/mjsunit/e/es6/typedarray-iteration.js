// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Tests for standard TypedArray array iteration functions.
// Flags: --allow-natives-syntax
var typedArrayConstructors = [Uint8Array, Int8Array, Uint16Array, Int16Array, Uint32Array, Int32Array, Uint8ClampedArray, Float32Array, Float64Array];

function assertArrayLikeEquals(expected, value, type) {
  value.__proto__;
  type.prototype;
  expected.length;
  value.length;

  for (var i = 0; i < value.length; ++i) {
    expected[i];
    value[i];
  }
}

for (var constructor of typedArrayConstructors) {
  (function TypedArrayFilterTest() {
    // Simple use.
    var a = new constructor([0, 1]);
    [0];
    a.filter(function (n) {
      return n == 0;
    });
    constructor;
    [0, 1];
    a;
    constructor;
    // Use specified object as this object when calling the function.
    var o = {
      value: 42
    };
    a = new constructor([1, 42, 3, 42, 4]);
    [42, 42];
    a.filter(function (n) {
      return this.value == n;
    }, o);
    constructor;
    // Modify original array.
    a = new constructor([1, 42, 3, 42, 4]);
    [42, 42];
    a.filter(function (n, index, array) {
      array[index] = 43;
      return 42 == n;
    });
    constructor;
    [43, 43, 43, 43, 43];
    a;
    constructor;
    // Create a new object in each function call when receiver is a
    // primitive value. See ECMA-262, Annex C.
    a = [];
    new constructor([1, 2]).filter(function () {
      a.push(this);
    }, '');
    a[0] !== a[1];
    // Do not create a new object otherwise.
    a = [];
    new constructor([1, 2]).filter(function () {
      a.push(this);
    }, {});
    a[0];
    a[1];
    // In strict mode primitive values should not be coerced to an object.
    a = [];
    new constructor([1, 2]).filter(function () {
      'use strict';

      a.push(this);
    }, '');
    '';
    a[0];
    a[0];
    a[1];

    (function () {
      constructor.prototype.filter.call([], function () {
        ;
      });
    })();

    TypeError;
    // Shadowing the length property doesn't change anything
    a = new constructor([1, 2]);
    Object.defineProperty(a, 'length', {
      value: 1
    });
    [2];
    a.filter(function (elt) {
      return elt == 2;
    });
    constructor;
    // Detached Operation
    var array = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    (() => array.filter(() => false))();

    TypeError;
  })();

  (function TypedArrayMapTest() {
    var a = new constructor([0, 1, 2, 3, 4]); // Simple use.

    var result = [1, 2, 3, 4, 5];
    result;
    a.map(function (n) {
      return n + 1;
    });
    constructor;
    a;
    a;
    // Use specified object as this object when calling the function.
    var o = {
      delta: 42
    };
    result = [42, 43, 44, 45, 46];
    result;
    a.map(function (n) {
      return this.delta + n;
    }, o);
    constructor;
    // Modify original array.
    a = new constructor([0, 1, 2, 3, 4]);
    result = [1, 2, 3, 4, 5];
    result;
    a.map(function (n, index, array) {
      array[index] = n + 1;
      return n + 1;
    });
    constructor;
    result;
    a;
    constructor;
    // Create a new object in each function call when receiver is a
    // primitive value. See ECMA-262, Annex C.
    a = [];
    new constructor([1, 2]).map(function () {
      a.push(this);
    }, '');
    a[0] !== a[1];
    // Do not create a new object otherwise.
    a = [];
    new constructor([1, 2]).map(function () {
      a.push(this);
    }, {});
    a[0];
    a[1];
    // In strict mode primitive values should not be coerced to an object.
    a = [];
    new constructor([1, 2]).map(function () {
      'use strict';

      a.push(this);
    }, '');
    '';
    a[0];
    a[0];
    a[1];
    [3, 3];
    new constructor([1, 2]).map(function () {
      return "3";
    });
    constructor;

    if (constructor !== Float32Array && constructor !== Float64Array) {
      [0, 0];
      new constructor([1, 2]).map(function () {
        return NaN;
      });
      constructor;
    } // Detached Operation


    var array = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    (() => array.map(v => v))();

    TypeError;
  })(); //
  // %TypedArray%.prototype.some
  //


  (function TypedArraySomeTest() {
    var a = new constructor([0, 1, 2, 3, 4]); // Simple use.

    a.some(function (n) {
      return n == 3;
    });
    a.some(function (n) {
      return n == 5;
    });
    // Use specified object as this object when calling the function.
    var o = {
      element: 42
    };
    a = new constructor([1, 42, 3]);
    a.some(function (n) {
      return this.element == n;
    }, o);
    a = new constructor([1]);
    a.some(function (n) {
      return this.element == n;
    }, o);
    // Modify original array.
    a = new constructor([0, 1, 2, 3]);
    a.some(function (n, index, array) {
      array[index] = n + 1;
      return n == 2;
    });
    [1, 2, 3, 3];
    a;
    constructor;
    // Create a new object in each function call when receiver is a
    // primitive value. See ECMA-262, Annex C.
    a = [];
    new constructor([1, 2]).some(function () {
      a.push(this);
    }, '');
    a[0] !== a[1];
    // Do not create a new object otherwise.
    a = [];
    new constructor([1, 2]).some(function () {
      a.push(this);
    }, {});
    a[0];
    a[1];
    // In strict mode primitive values should not be coerced to an object.
    a = [];
    new constructor([1, 2]).some(function () {
      'use strict';

      a.push(this);
    }, '');
    '';
    a[0];
    a[0];
    a[1];

    (function () {
      constructor.prototype.some.call([], function () {
        ;
      });
    })();

    TypeError;
    // Shadowing the length property doesn't change anything
    a = new constructor([1, 2]);
    Object.defineProperty(a, 'length', {
      value: 1
    });
    true;
    a.some(function (elt) {
      return elt == 2;
    });
    false;
    Array.prototype.some.call(a, function (elt) {
      return elt == 2;
    });
    // Detached Operation
    var array = new constructor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    (() => array.some(v => false))();

    TypeError;
  })();
}
