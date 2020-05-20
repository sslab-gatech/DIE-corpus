//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  console.log(Object.hasOwnProperty('assign'));
  console.log(2, Object.assign.length);
}

t1();

function t2() {
  console.log({}, Object.assign(1));
  console.log({}, Object.assign(1, 2, 3));
  console.log({}, Object.assign({}, 2, 3));
}

t2();

function t3() {
  console.log({
    a: 1
  }, Object.assign({
    a: 1
  }, undefined));
  console.log({
    a: 1
  }, Object.assign({
    a: 1
  }, null));
}

t3();

function t4() {
  var o = {
    x: 10,
    y: 20,
    z: 30
  };
  console.log(o === Object.assign(o));
  console.log(o === Object.assign(o, {
    a: 1
  }));
  console.log(o === Object.assign(o, {
    b: 2
  }, {
    c: 3
  }));
}

t4();

function t5() {
  console.log({
    a: 1
  }, Object.assign({}, {
    a: 1
  }));
  console.log([1], Object.assign({}, [1]));
  console.log(new String("hello"), Object.assign({}, new String("hello")));
}

t5();

function t6() {
  console.log({
    a: 1,
    b: 2
  }, Object.assign({
    a: 1
  }, {
    b: 2
  }));
  console.log({
    a: 1,
    b: 2,
    c: 3
  }, Object.assign({
    a: 1
  }, {
    b: 2
  }, {
    c: 3
  }));
  console.log({
    a: 1,
    b: 2,
    c: 3,
    d: 4
  }, Object.assign({
    a: 1
  }, {
    b: 2
  }, {
    c: 3
  }, {
    d: 4
  }));
}

t6();

function t7() {
  console.log({
    a: 2
  }, Object.assign({
    a: 1
  }, {
    a: 2
  }));
  console.log({
    a: 1,
    b: 2,
    c: 3,
    z: 3
  }, Object.assign({
    a: 1,
    z: 1
  }, {
    b: 2,
    z: 2
  }, {
    c: 3,
    z: 3
  }));
}

t7();

function t8() {
  try {
    Object.assign({}, {
      get x() {
        throw "xyz";
      }

    });
    assert.fail("Exception is not thrown when GetOwnProperty fails");
  } catch (e) {
    ;
  }
}

t8();

function t9() {
  try {
    Object.assign({
      set x(a) {
        throw "xyz";
      }

    }, {
      x: 10
    });
    assert.fail("Exception is not thrown when SetProperty fails");
  } catch (e) {
    ;
  }
}

t9();

function t10() {
  console.log({
    x: undefined
  }, Object.assign({}, {
    x: 40
  }, {
    x: undefined
  }));
}

t10();

function t11() {
  var o2 = {
    y: 40
  };
  Object.defineProperty(o2, "x", {
    value: 50,
    enumerable: false
  });
  console.log({
    y: 40
  }, Object.assign({}, o2));
}

t11();

function t12() {
  console.log({
    x: 10,
    y: 40
  }, Object.assign(Object.create(Array.prototype), {
    x: 10,
    y: 40
  }));
}

t12();

function t13() {
  var o2 = {};
  var y = Symbol("y");
  o2[y] = 10;
  console.log(Object.assign({}, o2)[y] === 10);
  console.log(Object.assign({
    a: 1
  }, o2)[y] === 10);
  console.log(Object.assign({
    a: 1
  }, o2)[y] === 10);
}

t13();

function t14() {
  console.log([1, 2, 3], Object.assign([], [1, 2, 3]));
}

t14();

function t15() {
  function a() {
    'use strict';

    var o = Object.preventExtensions([, 0]);
    Object.assign(o, 'xo');
  }

  try {
    a();
  } catch (e) {
    ;
  }
}

t15();

function t16() {
  try {
    var o1 = "aaa";
    var o2 = "babbb";
    Object.assign(o1, o2);
  } catch (e) {
    ;
  }
}

t16();
