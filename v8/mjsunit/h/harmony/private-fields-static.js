// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-private-fields --allow-natives-syntax
"use strict";

{
  class C {
    static a;

    static getA() {
      return this.a;
    }

  }

  undefined;
  C.a;
  undefined;
  C.getA();
  let c = new C();
  undefined;
  c.a;
}
{
  class C {
    static a = 1;

    static getA() {
      return this.a;
    }

  }

  undefined;
  C.a;
  1;
  C.getA();
  let c = new C();
  undefined;
  c.a;
}
{
  class C {
    static a = 1;
    static b = this.a;

    static getB() {
      return this.b;
    }

  }

  1;
  C.getB();
  let c = new C();
  undefined;
  c.getB;
}
{
  class C {
    static a = 1;

    static getA() {
      return this.a;
    }

    constructor() {
      (() => this.a)();

      TypeError;
      C.a = 2;
    }

  }

  1;
  C.getA();
  let c = new C();

  (() => C.prototype.getA.call(c))();

  2;
  C.getA();
}
{
  class C {
    static a = this;
    static b = () => this;

    static getA() {
      return this.a;
    }

    static getB() {
      return this.b;
    }

  }

  C;
  C.getA();
  C;
  C.getB()();
}
{
  class C {
    static a = this;
    static b = function () {
      return this;
    };

    static getA() {
      return this.a;
    }

    static getB() {
      return this.b;
    }

  }

  C;
  C.getA();
  C;
  C.getB().call(C);
  undefined;
  C.getB()();
}
{
  class C {
    static a = function () {
      return 1;
    };

    static getA() {
      return this.a;
    }

  }

  'a';
  C.getA().name;
}
{
  let d = function () {
    return new.target;
  };

  class C {
    static c = d;

    static getC() {
      return this.c;
    }

  }

  undefined;
  C.getC()();
  new d();
  new (C.getC())();
}
{
  class C {
    static a = 1;

    static getA(instance) {
      return instance.a;
    }

  }

  class B {}

  undefined;
  C.a;
  1;
  C.getA(C);

  (() => C.getA(B))();

  TypeError;
}
{
  class A {
    static a = 1;

    static getA() {
      return this.a;
    }

  }

  class B extends A {}

  (() => B.getA())();

  TypeError;
}
{
  class A {
    static a = 1;

    static getA() {
      return A.a;
    }

  }

  class B extends A {}

  1;
  B.getA();
}
{
  let prototypeLookup = false;

  class A {
    static set a(val) {
      prototypeLookup = true;
    }

    static get a() {
      return undefined;
    }

  }

  class C extends A {
    static a = 1;

    static getA() {
      return this.a;
    }

  }

  1;
  C.getA();
  false;
  prototypeLookup;
}
{
  class A {
    static a = 1;
  }

  class B extends A {
    static b = this.a;

    static getB() {
      return this.b;
    }

  }

  1;
  B.getB();
}
{
  class A {
    static a = 1;

    static getA() {
      return this.a;
    }

  }

  class B extends A {
    static getA() {
      return super.getA();
    }

  }

  (() => B.getA())();

  TypeError;
}
{
  class A {
    static a = 1;

    static getA() {
      return this.a;
    }

  }

  class B extends A {
    static a = 2;

    static get_A() {
      return this.a;
    }

  }

  1;
  A.getA();

  (() => B.getA())();

  TypeError;
  2;
  B.get_A();
}
{
  let foo = undefined;

  class A {
    static a = function () {
      foo = 1;
    }();
  }

  1;
  foo;
}
{
  let foo = undefined;

  class A extends class {} {
    static a = function () {
      foo = 1;
    }();
  }

  1;
  foo;
}
{
  function makeClass() {
    return class {
      static a;

      static setA(val) {
        this.a = val;
      }

      static getA() {
        return this.a;
      }

    };
  }

  let classA = makeClass();
  let classB = makeClass();
  undefined;
  classA.getA();
  undefined;
  classB.getA();
  classA.setA(3);
  3;
  classA.getA();
  undefined;
  classB.getA();
  classB.setA(5);
  3;
  classA.getA();
  5;
  classB.getA();

  (() => classA.getA.call(classB))();

  TypeError;

  (() => classB.getA.call(classA))();

  TypeError;
}
{
  let value = undefined;
  new class {
    static a = 1;

    static getA() {
      return this.a;
    }

    constructor() {
      new class C {
        static a = 2;

        constructor() {
          value = C.a;
        }

      }();
    }

  }();
  2;
  value;
}
{
  class A {
    static a = 1;
    static b = class {
      static getA() {
        return this.a;
      }

      static get_A(val) {
        return val.a;
      }

    };
  }

  1;
  A.b.getA.call(A);
  1;
  A.b.get_A(A);
}
{
  (() => class {
    static b = this.a;
    static a = 1;
  })();

  TypeError;
}
{
  let symbol = Symbol();

  class C {
    static a = 1;
    static [symbol] = 1;

    static getA() {
      return this.a;
    }

    static setA(val) {
      this.a = val;
    }

  }

  var p = new Proxy(C, {
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
    static b = Object.freeze(this);

    static getA() {
      return this.a;
    }

    static a = 1;
  }

  1;
  C.getA();
}
{
  class C {
    static a = 1;

    static getA() {
      return eval('this.a');
    }

  }

  1;
  C.getA();
}
{
  var C;
  eval('C = class { static a = 1; static getA() { return eval(\'this.a\'); }}');
  1;
  C.getA();
}
{
  class C {
    static a = 1;

    static getA() {
      return this.a;
    }

    static setA() {
      eval('this.a = 4');
    }

  }

  1;
  C.getA();
  C.setA();
  4;
  C.getA();
}
{
  class C {
    static getA() {
      return eval('this.a');
    }

  }

  (() => C.getA())();

  SyntaxError;
}
