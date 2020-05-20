// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax --stress-inline
var counter = 0;
var deopt_at = -1;

class Base {
  constructor(use, x) {
    if (deopt_at-- == 0) {
      ;
    }

    counter++;
    this.x = x;

    if (use) {
      return x;
    }
  }

}

class Derived extends Base {
  constructor(use, x, y, deopt = false) {
    super(use, x);
    counter++;
    this.y = y;

    if (use) {
      return y;
    }
  }

}

var DerivedDeoptCreate = new Proxy(Derived, {
  get: function (target, name) {
    if (name == 'prototype') {
      counter++;
    }

    return target[name];
  }
});

function Constr(use, x) {
  counter++;
  this.x = x;

  if (use) {
    return x;
  }
}

var a = {};
var b = {};

function testConstructorInlining() {
  a;
  new Constr(true, a);
  7;
  new Constr(false, 7).x;
  5;
  new Constr(true, 5).x;
  a;
  new Base(true, a);
  7;
  new Base(false, 7).x;
  5;
  new Base(true, 5).x;
  b;
  new Derived(true, a, b);
  a;
  new Derived(true, a, undefined);
  5;
  new Derived(false, 5, 7).x;
  7;
  new Derived(false, 5, 7).y;

  try {
    new Derived(true, a, 7);
    false;
  } catch (e) {
    if (!(e instanceof TypeError)) {
      throw e;
    }
  }

  a;
  new Derived(true, 5, a);
  b;
  new DerivedDeoptCreate(true, a, b);
  a;
  new DerivedDeoptCreate(true, a, undefined);
  5;
  new DerivedDeoptCreate(false, 5, 7).x;
  7;
  new DerivedDeoptCreate(false, 5, 7).y;
}

testConstructorInlining();
testConstructorInlining();
var last = undefined;

for (var i = 0; deopt_at < 0; ++i) {
  deopt_at = i;
  counter = 0;
  testConstructorInlining();

  if (last !== undefined) {
    counter;
    last;
  }

  last = counter;
}
