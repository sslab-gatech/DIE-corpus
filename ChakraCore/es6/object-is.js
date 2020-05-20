//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  console.log(Object.hasOwnProperty('is'));
  console.log(2, Object.is.length);
}

t1();

function t2() {
  console.log(Object.is(undefined, undefined));
  console.log(Object.is(undefined, null));
  console.log(Object.is(undefined, false));
  console.log(Object.is(undefined, ""));
  console.log(Object.is(undefined, Symbol()));
  console.log(Object.is(undefined, 0));
  console.log(Object.is(undefined, {}));
}

t2();

function t3() {
  console.log(Object.is(null, undefined));
  console.log(Object.is(null, null));
  console.log(Object.is(null, false));
  console.log(Object.is(null, ""));
  console.log(Object.is(null, Symbol()));
  console.log(Object.is(null, 0));
  console.log(Object.is(null, {}));
}

t3();

function t4() {
  console.log(Object.is(0, undefined));
  console.log(Object.is(0, null));
  console.log(Object.is(0, false));
  console.log(Object.is(0, ""));
  console.log(Object.is(0, Symbol()));
  console.log(Object.is(0, 0));
  console.log(Object.is(0, {}));
  console.log(Object.is(NaN, NaN));
  console.log(Object.is(+0, -0));
  console.log(Object.is(-0, +0));
  console.log(Object.is(10, 10));
  console.log(Object.is(10, -10));
  console.log(Object.is(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY));
  console.log(Object.is(Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY));
  console.log(Object.is(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY));
}

t4();

function t5() {
  console.log(Object.is("", undefined));
  console.log(Object.is("", null));
  console.log(Object.is("", false));
  console.log(Object.is("", ""));
  console.log(Object.is("", Symbol()));
  console.log(Object.is("", 0));
  console.log(Object.is("", {}));
  console.log(Object.is("abc", "abc"));
  console.log(Object.is("abc", "xyz"));
}

t5();

function t6() {
  console.log(Object.is(false, undefined));
  console.log(Object.is(false, null));
  console.log(Object.is(false, false));
  console.log(Object.is(false, ""));
  console.log(Object.is(false, Symbol()));
  console.log(Object.is(false, 0));
  console.log(Object.is(false, {}));
  console.log(Object.is(true, true));
  console.log(Object.is(false, true));
}

t6();

function t7() {
  var sym = Symbol();
  console.log(Object.is(sym, undefined));
  console.log(Object.is(sym, null));
  console.log(Object.is(sym, false));
  console.log(Object.is(sym, ""));
  console.log(Object.is(sym, sym));
  console.log(Object.is(sym, 0));
  console.log(Object.is(sym, {}));
  console.log(Object.is(sym, Symbol()));
}

t7();

function t8() {
  var o = {};
  console.log(Object.is(o, undefined));
  console.log(Object.is(o, null));
  console.log(Object.is(o, false));
  console.log(Object.is(o, ""));
  console.log(Object.is(o, Symbol()));
  console.log(Object.is(o, 0));
  console.log(Object.is(o, o));
  console.log(Object.is(o, {}));
}

t8();

function t9() {
  function f() {
    ;
  }

  function g() {
    ;
  }

  var obj1 = {
    f
  },
      obj2 = {
    f
  };
  var bf = f.bind();
  var bft = f.bind({});
  console.log(Object.is(obj1.f, obj2.f));
  console.log(Object.is(Object.getOwnPropertyDescriptor(f.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(f.__proto__, "caller").set));
  console.log(Object.is(Object.getOwnPropertyDescriptor(f.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(f.__proto__, "caller").get));
  console.log(Object.is(Object.getOwnPropertyDescriptor(f.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(g.__proto__, "arguments").set));
  console.log(Object.is(Object.getOwnPropertyDescriptor(f.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(g.__proto__, "caller").set));
  console.log(Object.is(Object.getOwnPropertyDescriptor(f.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(g.__proto__, "caller").get));
  console.log(Object.is(Object.getOwnPropertyDescriptor(bf.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").set));
  console.log(Object.is(Object.getOwnPropertyDescriptor(bf.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").get));
  console.log(Object.is(Object.getOwnPropertyDescriptor(bft.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").get));
}

t9();

function t10() {
  'use strict';

  function f() {
    'use strict';

    ;
  }

  var bf = f.bind();
  var bft = f.bind({});
  console.log(Object.is(Object.getOwnPropertyDescriptor(Function.prototype, "arguments").set, Object.getOwnPropertyDescriptor(Function.prototype, "caller").set));
  console.log(Object.is(Object.getOwnPropertyDescriptor(Function.prototype, "arguments").set, Object.getOwnPropertyDescriptor(Function.prototype, "caller").get));
  console.log(Object.is(Object.getOwnPropertyDescriptor(bf.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").set));
  console.log(Object.is(Object.getOwnPropertyDescriptor(bf.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").get));
  console.log(Object.is(Object.getOwnPropertyDescriptor(bft.__proto__, "arguments").set, Object.getOwnPropertyDescriptor(bf.__proto__, "caller").get));
}

t10();

function t11() {
  console.log(Object.is());
  console.log(Object.is(undefined));
  console.log(Object.is(null));
  console.log(Object.is(false));
  console.log(Object.is(""));
  console.log(Object.is(Symbol()));
  console.log(Object.is(0));
  console.log(Object.is({}));
  console.log(Object.is(0, 0, 1));
  console.log(Object.is("", 0, false));
}

t11();
