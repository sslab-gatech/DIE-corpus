// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testFunctionNames() {
  let descriptor = {
    value: '',
    writable: false,
    enumerable: false,
    configurable: true
  }; // Functions have a "name" property by default.

  descriptor;
  Object.getOwnPropertyDescriptor(function () {
    ;
  }, 'name');
  let a = {
    fn: function () {
      ;
    }
  };
  'fn';
  a.fn.name;
  descriptor.value = 'fn';
  descriptor;
  Object.getOwnPropertyDescriptor(a.fn, 'name');
  let b = {
    __proto__: function () {
      ;
    }
  };
  '';
  b.__proto__.name;
  descriptor.value = '';
  descriptor;
  Object.getOwnPropertyDescriptor(b.__proto__, 'name');
  let c = {
    fn: function F() {
      ;
    }
  };
  'F';
  c.fn.name;
  descriptor.value = 'F';
  descriptor;
  Object.getOwnPropertyDescriptor(c.fn, 'name');
  let d = {
    __proto__: function E() {
      ;
    }
  };
  'E';
  d.__proto__.name;
  descriptor.value = 'E';
  descriptor;
  Object.getOwnPropertyDescriptor(d.__proto__, 'name');
})();

(function testClassNames() {
  let descriptor = {
    value: '',
    writable: false,
    enumerable: false,
    configurable: true
  }; // Anonymous classes do not have a "name" property by default.

  undefined;
  Object.getOwnPropertyDescriptor(class {}, 'name');
  descriptor.value = 'C';
  descriptor;
  Object.getOwnPropertyDescriptor(class C {}, 'name');
  let a = {
    fn: class {}
  };
  'fn';
  a.fn.name;
  descriptor.value = 'fn';
  descriptor;
  Object.getOwnPropertyDescriptor(a.fn, 'name');
  let b = {
    __proto__: class {}
  };
  '';
  b.__proto__.name;
  undefined;
  Object.getOwnPropertyDescriptor(b.__proto__, 'name');
  let c = {
    fn: class F {}
  };
  'F';
  c.fn.name;
  descriptor.value = 'F';
  descriptor;
  Object.getOwnPropertyDescriptor(c.fn, 'name');
  let d = {
    __proto__: class F {}
  };
  'F';
  d.__proto__.name;
  descriptor.value = 'F';
  descriptor;
  Object.getOwnPropertyDescriptor(d.__proto__, 'name');
})();
