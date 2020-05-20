//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// Tests for Object.setPrototypeOf and Object#__proto__ ES6 behavior
var pd = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
var __proto__set = pd.set;
var __proto__get = pd.get;

function t1() {
  console.log('function', typeof __proto__set);
  console.log('function', typeof __proto__get);
}

t1();

function t2() {
  try {
    __proto__set.call();
  } catch (e) {
    ;
  }

  try {
    __proto__set.call(undefined);
  } catch (e) {
    ;
  }

  try {
    __proto__set.call(null);
  } catch (e) {
    ;
  }

  try {
    __proto__get.call();
  } catch (e) {
    ;
  }

  try {
    __proto__get.call(undefined);
  } catch (e) {
    ;
  }

  try {
    __proto__get.call(null);
  } catch (e) {
    ;
  }
}

t2();

function t3() {
  var p = {};
  var o = Object.create(p);
  console.log(undefined, __proto__set.call(o));
  console.log(p, __proto__get.call(o));
  console.log(undefined, __proto__set.call(o, undefined));
  console.log(p, __proto__get.call(o));
  console.log(undefined, __proto__set.call(o, 5));
  console.log(p, __proto__get.call(o));
  var n = 5;
  console.log(undefined, __proto__set.call(n, {}));
  console.log(Number.prototype, __proto__get.call(n));
}

t3();

function t4() {
  var p = {};
  var o = Object.create(p);
  console.log(undefined, __proto__set.call(o, null));
  console.log(null, __proto__get.call(o));
  console.log(undefined, __proto__set.call(o, p));
  console.log(p, __proto__get.call(o));
}

t4();

function t5() {
  try {
    Object.setPrototypeOf();
  } catch (e) {
    ;
  }

  try {
    Object.setPrototypeOf(undefined);
  } catch (e) {
    ;
  }

  try {
    Object.setPrototypeOf(null);
  } catch (e) {
    ;
  }

  try {
    Object.setPrototypeOf({});
  } catch (e) {
    ;
  }

  try {
    Object.setPrototypeOf({}, undefined);
  } catch (e) {
    ;
  }

  try {
    Object.setPrototypeOf({}, 5);
  } catch (e) {
    ;
  }

  try {
    Object.getPrototypeOf();
  } catch (e) {
    ;
  }

  try {
    Object.getPrototypeOf(undefined);
  } catch (e) {
    ;
  }

  try {
    Object.getPrototypeOf(null);
  } catch (e) {
    ;
  }
}

t5();

function t6() {
  var n = 5;
  console.log(5, Object.setPrototypeOf(n, {}));
  console.log(Number.prototype, Object.getPrototypeOf(n));
}

t6();

function t7() {
  var p = {};
  var o = Object.create(p);
  console.log(o, Object.setPrototypeOf(o, null));
  console.log(null, Object.getPrototypeOf(o));
  console.log(o, Object.setPrototypeOf(o, p));
  console.log(p, Object.getPrototypeOf(o));
}

t7();

function t8() {
  function main() {
    var l0 = {
      a: -1,
      b: 0x414141
    };
    l0.a = l0.a + l0.a;
    l0.y = {};

    l0.__defineGetter__('z', function () {
      delete l0.a;
      return 5;
    });

    l0.a = l0.a - l0.z;
    l0.__proto__ = l0.y;
    l0.z = l0.z / l0.a;
    var o = {};
    o.a = 42;
    l0.y.__proto__ = o;
    return l0.a;
  }

  for (var i = 0; i < 20; i++) {
    console.log(42, main());
  }
}

t8();
