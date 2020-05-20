// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function ID(x) {
  return x;
}

function assertMethodDescriptor(object, name) {
  var descr = Object.getOwnPropertyDescriptor(object, name);
  descr.configurable;
  descr.enumerable;
  descr.writable;
  'function';
  typeof descr.value;
  'prototype' in descr.value;
  "" + name;
  descr.value.name;
}

function assertGetterDescriptor(object, name) {
  var descr = Object.getOwnPropertyDescriptor(object, name);
  descr.configurable;
  descr.enumerable;
  'function';
  typeof descr.get;
  'prototype' in descr.get;
  undefined;
  descr.set;
  "get " + name;
  descr.get.name;
}

function assertSetterDescriptor(object, name) {
  var descr = Object.getOwnPropertyDescriptor(object, name);
  descr.configurable;
  descr.enumerable;
  undefined;
  descr.get;
  'function';
  typeof descr.set;
  'prototype' in descr.set;
  "set " + name;
  descr.set.name;
}

function assertAccessorDescriptor(object, name) {
  var descr = Object.getOwnPropertyDescriptor(object, name);
  descr.configurable;
  descr.enumerable;
  'function';
  typeof descr.get;
  'function';
  typeof descr.set;
  'prototype' in descr.get;
  'prototype' in descr.set;
  "get " + name;
  descr.get.name;
  "set " + name;
  descr.set.name;
}

(function TestComputedMethodSuper() {
  class Base {
    m() {
      return ' base m';
    }

  }

  class Derived extends Base {
    ['a']() {
      return 'a' + super.m();
    }

    [ID('b')]() {
      return 'b' + super.m();
    }

    [0]() {
      return '0' + super.m();
    }

    [ID(1)]() {
      return '1' + super.m();
    }

    [ID(2147483649)]() {
      return '2147483649' + super.m();
    }

    [ID(4294967294)]() {
      return '4294967294' + super.m();
    }

    [ID(4294967295)]() {
      return '4294967295' + super.m();
    }

  }

  Derived.prototype;
  "a";
  Derived.prototype;
  "b";
  Derived.prototype;
  0;
  Derived.prototype;
  1;
  Derived.prototype;
  2147483649;
  Derived.prototype;
  4294967294;
  Derived.prototype;
  4294967295;
  'a base m';
  new Derived().a();
  'b base m';
  new Derived().b();
  '0 base m';
  new Derived()[0]();
  '1 base m';
  new Derived()[1]();
  '2147483649 base m';
  new Derived()[2147483649]();
  '4294967294 base m';
  new Derived()[4294967294]();
  '4294967295 base m';
  new Derived()[4294967295]();
})();

(function TestComputedGetterSuper() {
  class Base {
    m() {
      return ' base m';
    }

  }

  class Derived extends Base {
    get ['a']() {
      return 'a' + super.m();
    }

    get [ID('b')]() {
      return 'b' + super.m();
    }

    get [0]() {
      return '0' + super.m();
    }

    get [ID(1)]() {
      return '1' + super.m();
    }

    get [ID(2147483649)]() {
      return '2147483649' + super.m();
    }

    get [ID(4294967294)]() {
      return '4294967294' + super.m();
    }

    get [ID(4294967295)]() {
      return '4294967295' + super.m();
    }

  }

  Derived.prototype;
  "a";
  Derived.prototype;
  "b";
  Derived.prototype;
  0;
  Derived.prototype;
  1;
  Derived.prototype;
  2147483649;
  Derived.prototype;
  4294967294;
  Derived.prototype;
  4294967295;
  'a base m';
  new Derived().a;
  'b base m';
  new Derived().b;
  '0 base m';
  new Derived()[0];
  '1 base m';
  new Derived()[1];
  '2147483649 base m';
  new Derived()[2147483649];
  '4294967294 base m';
  new Derived()[4294967294];
  '4294967295 base m';
  new Derived()[4294967295];
})();

(function TestComputedSetterSuper() {
  var value;

  class Base {
    m(name, v) {
      value = name + ' ' + v;
    }

  }

  class Derived extends Base {
    set ['a'](v) {
      super.m('a', v);
    }

    set [ID('b')](v) {
      super.m('b', v);
    }

    set [0](v) {
      super.m('0', v);
    }

    set [ID(1)](v) {
      super.m('1', v);
    }

    set [ID(2147483649)](v) {
      super.m('2147483649', v);
    }

    set [ID(4294967294)](v) {
      super.m('4294967294', v);
    }

    set [ID(4294967295)](v) {
      super.m('4294967295', v);
    }

  }

  Derived.prototype;
  "a";
  Derived.prototype;
  "b";
  Derived.prototype;
  0;
  Derived.prototype;
  1;
  Derived.prototype;
  2147483649;
  Derived.prototype;
  4294967294;
  Derived.prototype;
  4294967295;
  new Derived().a = 2;
  'a 2';
  value;
  new Derived().b = 3;
  'b 3';
  value;
  new Derived()[0] = 4;
  '0 4';
  value;
  new Derived()[1] = 5;
  '1 5';
  value;
  new Derived()[2147483649] = 6;
  '2147483649 6';
  value;
  new Derived()[4294967294] = 7;
  '4294967294 7';
  value;
  new Derived()[4294967295] = 8;
  '4294967295 8';
  value;
})();
