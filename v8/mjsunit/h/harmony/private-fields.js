// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-private-fields --allow-natives-syntax
"use strict";

{
  class C {
    a;

    getA() {
      return this.a;
    }

  }

  undefined;
  C.a;
  let c = new C();
  undefined;
  c.a;
  undefined;
  c.getA();
}
{
  class C {
    a = 1;

    getA() {
      return this.a;
    }

  }

  undefined;
  C.a;
  let c = new C();
  undefined;
  c.a;
  1;
  c.getA();
}
{
  class C {
    a = 1;
    b = this.a;

    getB() {
      return this.b;
    }

  }

  let c = new C();
  1;
  c.getB();
}
{
  class C {
    a = 1;

    getA() {
      return this.a;
    }

    constructor() {
      1;
      this.a;
      this.a = 5;
    }

  }

  let c = new C();
  5;
  c.getA();
}
{
  class C {
    a = this;
    b = () => this;

    getA() {
      return this.a;
    }

    getB() {
      return this.b;
    }

  }

  let c1 = new C();
  c1;
  c1.getA();
  c1;
  c1.getB()();
  let c2 = new C();
  c1;
  c1.getB().call(c2);
}
{
  class C {
    a = this;
    b = function () {
      return this;
    };

    getA() {
      return this.a;
    }

    getB() {
      return this.b;
    }

  }

  let c1 = new C();
  c1;
  c1.getA();
  c1;
  c1.getB().call(c1);
  let c2 = new C();
  c2;
  c1.getB().call(c2);
}
{
  class C {
    a = function () {
      return 1;
    };

    getA() {
      return this.a;
    }

  }

  let c = new C();
  'a';
  c.getA().name;
}
{
  let d = function () {
    return new.target;
  };

  class C {
    c = d;

    getC() {
      return this.c;
    }

  }

  let c = new C();
  undefined;
  c.getC()();
  new d();
  new (c.getC())();
}
{
  class C {
    b = new.target;
    c = () => new.target;

    getB() {
      return this.b;
    }

    getC() {
      return this.c;
    }

  }

  let c = new C();
  undefined;
  c.getB();
  undefined;
  c.getC()();
}
{
  class C {
    a = 1;
    b = () => this.a;

    getB() {
      return this.b;
    }

  }

  let c1 = new C();
  1;
  c1.getB()();
}
{
  class C {
    a = 1;

    getA(instance) {
      return instance.a;
    }

  }

  class B {}

  let c = new C();
  undefined;
  c.a;
  1;
  c.getA(c);

  (() => c.getA(new B()))();

  TypeError;
}
{
  class A {
    a = 1;

    getA() {
      return this.a;
    }

  }

  class B extends A {}

  let b = new B();
  1;
  b.getA();
}
{
  let prototypeLookup = false;

  class A {
    set a(val) {
      prototypeLookup = true;
    }

    get a() {
      return undefined;
    }

  }

  class C extends A {
    a = 1;

    getA() {
      return this.a;
    }

  }

  let c = new C();
  1;
  c.getA();
  false;
  prototypeLookup;
}
{
  class A {
    constructor() {
      this.a = 1;
    }

  }

  class B extends A {
    b = this.a;

    getB() {
      return this.b;
    }

  }

  let b = new B();
  1;
  b.getB();
}
{
  class A {
    a = 1;

    getA() {
      return this.a;
    }

  }

  class B extends A {
    b = super.getA();

    getB() {
      return this.b;
    }

  }

  let b = new B();
  1;
  b.getB();
}
{
  class A {
    a = 1;

    getA() {
      return this.a;
    }

  }

  class B extends A {
    a = 2;

    get_A() {
      return this.a;
    }

  }

  let a = new A();
  let b = new B();
  1;
  a.getA();
  1;
  b.getA();
  2;
  b.get_A();
}
{
  let foo = undefined;

  class A {
    a = 1;

    constructor() {
      foo = this.a;
    }

  }

  let a = new A();
  1;
  foo;
}
{
  let foo = undefined;

  class A extends class {} {
    a = 1;

    constructor() {
      super();
      foo = this.a;
    }

  }

  let a = new A();
  1;
  foo;
}
{
  function makeClass() {
    return class {
      a;

      setA(val) {
        this.a = val;
      }

      getA() {
        return this.a;
      }

    };
  }

  let classA = makeClass();
  let a = new classA();
  let classB = makeClass();
  let b = new classB();
  undefined;
  a.getA();
  undefined;
  b.getA();
  a.setA(3);
  3;
  a.getA();
  undefined;
  b.getA();
  b.setA(5);
  3;
  a.getA();
  5;
  b.getA();

  (() => a.getA.call(b))();

  TypeError;

  (() => b.getA.call(a))();

  TypeError;
}
{
  let value = undefined;
  new class {
    a = 1;

    getA() {
      return this.a;
    }

    constructor() {
      new class {
        a = 2;

        constructor() {
          value = this.a;
        }

      }();
    }

  }();
  2;
  value;
}
{
  class A {
    a = 1;
    b = class {
      getA() {
        return this.a;
      }

      get_A(val) {
        return val.a;
      }

    };
  }

  let a = new A();
  let b = new a.b();
  1;
  b.getA.call(a);
  1;
  b.get_A(a);
}
{
  class C {
    b = this.a;
    a = 1;
  }

  (() => new C())();

  TypeError;
}
{
  class C {
    b = this.a;
    a = 1;
  }

  (() => new C())();

  TypeError;
}
{
  let symbol = Symbol();

  class C {
    a = 1;
    [symbol] = 1;

    getA() {
      return this.a;
    }

    setA(val) {
      this.a = val;
    }

  }

  var p = new Proxy(new C(), {
    get: function (target, name) {
      if (typeof arg === 'symbol') {}

      return target[name];
    }
  });

  (() => p.getA())();

  TypeError;

  (() => p.setA(1))();

  TypeError;
  1;
  p[symbol];
}
{
  class C {
    b = Object.freeze(this);
    a = 1;

    getA() {
      return this.a;
    }

  }

  let c = new C();
  1;
  c.getA();
}
{
  class C {
    a = 1;

    setA(another, val) {
      another.a = val;
    }

    getA(another) {
      return another.a;
    }

  }

  let c = new C();

  (() => c.setA({}, 2))();

  TypeError;
  c.setA(c, 3);
  3;
  c.getA(c);
}
{
  class A {
    constructor(arg) {
      return arg;
    }

  }

  class C extends A {
    x = 1;

    constructor(arg) {
      super(arg);
    }

    getX(arg) {
      return arg.x;
    }

  }

  let leaker = new Proxy({}, {});
  let c = new C(leaker);
  1;
  C.prototype.getX(leaker);
  c;
  leaker;
  c = new C();

  (() => new C(c))();

  TypeError;
  new C(1);
}
{
  class C {
    a = 1;
    b;

    getA() {
      return this.b().a;
    }

  }

  let c = new C();

  c.b = () => c;

  1;
  c.getA();
}
{
  class C {
    a = 1;
    b;

    getA(arg) {
      return arg.b().a;
    }

  }

  let c = new C();

  c.b = () => c;

  1;
  c.getA(c);
}
{
  class C {
    a = 1;

    getA() {
      return eval('this.a');
    }

  }

  let c = new C();
  1;
  c.getA();
}
{
  var C;
  eval('C = class {a = 1;getA() { return eval(\'this.a\'); }}');
  let c = new C();
  1;
  c.getA();
}
{
  class C {
    a = 1;

    getA() {
      return this.a;
    }

    setA() {
      eval('this.a = 4');
    }

  }

  let c = new C();
  1;
  c.getA();
  c.setA();
  4;
  c.getA();
}
{
  class C {
    getA() {
      return eval('this.a');
    }

  }

  let c = new C();

  (() => c.getA())();

  SyntaxError;
}
