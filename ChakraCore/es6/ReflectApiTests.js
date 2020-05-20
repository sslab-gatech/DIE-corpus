//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
function t1() {
  var receiver = {};

  var fn = function () {
    ;
  };

  Object.defineProperty(receiver, 'p', {
    set: fn
  });
  console.log(Reflect.set({}, 'p', 42, receiver));
  console.log(Reflect.set({
    p: 43
  }, 'p', 42, receiver));
}

t1();

function t2() {
  function foo() {
    ;
  }

  try {
    Reflect.apply();
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo);
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined);
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, undefined);
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, null);
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, false);
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, 1);
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, Number(42));
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, {});
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, []);
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, new Int32Array());
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, new Error());
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, new Proxy({}, {}));
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, new Promise(r => r()));
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, new Number(42));
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, Function("return 123"));
  } catch (e) {
    ;
  }

  try {
    Reflect.apply(foo, undefined, new Function("return 123"));
  } catch (e) {
    ;
  }
}

t2();

function t3() {
  function foo() {
    ;
  }

  try {
    Reflect.construct();
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo);
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, undefined);
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, null);
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, false);
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, 1);
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, Number(42));
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, {});
  } catch (e) {
    ;
  }

  ;

  try {
    Reflect.construct(foo, []);
  } catch (e) {
    ;
  }

  ;

  try {
    Reflect.construct(foo, [], Array);
  } catch (e) {
    ;
  }

  ;

  try {
    Reflect.construct(foo, new Int32Array());
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, new Error());
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, new Proxy({}, {}));
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, new Promise(r => r()));
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, new Number(42));
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, Function("return 123"));
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(foo, new Function("return 123"));
  } catch (e) {
    ;
  }

  try {
    Reflect.construct(Reflect.apply, undefined);
  } catch (e) {
    ;
  }
}

t3();

function t4() {
  var o = {};
  var internPrototype;

  function fn() {
    console.log(new.target, Array);
    this.o = o;
    internPrototype = Object.getPrototypeOf(this);
  }

  var result = Reflect.construct(fn, [], Array);
  console.log(Object.getPrototypeOf(result), Array.prototype);
  console.log(internPrototype, Array.prototype);
  console.log(result.o, o);

  class A1 {
    constructor() {
      console.log(new.target, Array);
      console.log(this instanceof Array);
    }

  }

  var result = Reflect.construct(A1, [], Array);

  class A2 {}

  class B2 extends A2 {
    constructor() {
      console.log(new.target, Array);
      super();
      /* Initialize this */

      console.log(this instanceof Array);
    }

  }

  var result = Reflect.construct(B2, [], Array);

  class A3 {}

  class B3 extends A3 {
    constructor() {
      console.log(new.target, B3);
      super();
      console.log(this instanceof A3);
      console.log(this instanceof B3);
    }

  }

  var result = Reflect.construct(B3, [], B3);
}

t4();
