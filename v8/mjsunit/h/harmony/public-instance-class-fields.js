// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-public-fields
"use strict";

{
  class C {
    a;
  }

  undefined;
  C.a;
  let c = new C();
  let descriptor = Object.getOwnPropertyDescriptor(c, 'a');
  c.hasOwnProperty('a');
  descriptor.writable;
  descriptor.enumerable;
  descriptor.configurable;
  undefined;
  c.a;
}
{
  class C {
    x = 1;

    constructor() {}

  }

  let c = new C();
  1;
  c.x;
}
{
  function t() {
    class X {
      x = 1;

      constructor() {}

    }

    var x = new X();
    return x.x;
  }

  1;
  t();
}
{
  let x = 'a';

  class C {
    a;
    b = x;
    c = 1;

    hasOwnProperty() {
      return 1;
    }

  }

  let c = new C();
  undefined;
  c.a;
  'a';
  c.b;
  1;
  c.c;
  undefined;
  c.d;
  1;
  c.hasOwnProperty();
}
{
  class C {
    x = Object.freeze(this);
    c = 42;
  }

  (() => {
    new C();
  })();

  TypeError;
}
{
  class C {
    c = this;
    d = () => this;
  }

  let c = new C();
  c;
  c.c;
  c;
  c.d();
  undefined;
  C.c;
  undefined;
  C.d;
}
{
  class C {
    c = 1;
    d = this.c;
  }

  let c = new C();
  1;
  c.c;
  1;
  c.d;
  undefined;
  C.c;
  undefined;
  C.d;
}
{
  class C {
    b = 1;
    c = () => this.b;
  }

  let c = new C();
  1;
  c.b;
  1;
  c.c();
  undefined;
  C.c;
  undefined;
  C.b;
}
{
  let x = 'a';

  class C {
    b = 1;
    c = () => this.b;
    e = () => x;
  }

  let c = new C();
  1;
  c.b;
  'a';
  c.e();
  let a = {
    b: 2
  };
  1;
  c.c.call(a);
  undefined;
  C.b;
  undefined;
  C.c;
}
{
  let x = 'a';

  class C {
    c = 1;
    d = function () {
      return this.c;
    };
    e = function () {
      return x;
    };
  }

  let c = new C();
  1;
  c.c;
  1;
  c.d();
  'a';
  c.e();
  c.c = 2;
  2;
  c.d();
  let a = {
    c: 3
  };
  3;
  c.d.call(a);
  c.d.bind(undefined);
  undefined;
  C.c;
  undefined;
  C.d;
  undefined;
  C.e;
}
{
  class C {
    c = function () {
      return 1;
    };
  }

  let c = new C();
  'c';
  c.c.name;
}
{
  let d = function () {
    return new.target;
  };

  class C {
    c = d;
  }

  let c = new C();
  undefined;
  c.c();
  new d();
  new c.c();
}
{
  class C {
    c = () => new.target;
  }

  let c = new C();
  undefined;
  c.c();
}
{
  let run = false;

  class C {
    c = () => {
      let b;

      class A {
        constructor() {
          b = new.target;
        }

      }

      ;
      new A();
      run = true;
      A;
      b;
    };
  }

  let c = new C();
  c.c();
  run();
}
{
  class C {
    c = new.target;
  }

  let c = new C();
  undefined;
  c.c;
}
{
  class B {
    c = 1;
  }

  class C extends B {}

  let c = new C();
  1;
  c.c;
}
{
  (() => {
    class C {
      c = new C();
    }

    let c = new C();
  })();
}

(function test() {
  function makeC() {
    var x = 1;
    return class {
      a = () => () => x;
    };
  }

  let C = makeC();
  let c = new C();
  let f = c.a();
  1;
  f();
})();

{
  let c1 = "c";

  class C {
    ["a"] = 1;
    ["b"];
    [c1];
  }

  let c = new C();
  1;
  c.a;
  undefined;
  c.b;
  undefined;
  c[c1];
}
{
  let log = [];

  function run(i) {
    log.push(i);
    return i;
  }

  class C {
    [run(1)] = run(6);
    [run(2)] = run(7);

    [run(3)]() {
      run(9);
    }

    [run(4)] = run(8);

    [run(5)]() {
      throw new Error('should not execute');
    }

  }

  let c = new C();
  c[3]();
  [1, 2, 3, 4, 5, 6, 7, 8, 9];
  log;
}

function x() {
  // This tests lazy parsing.
  return function () {
    let log = [];

    function run(i) {
      log.push(i);
      return i;
    }

    class C {
      [run(1)] = run(6);
      [run(2)] = run(7);

      [run(3)]() {
        run(9);
      }

      [run(4)] = run(8);

      [run(5)]() {
        throw new Error('should not execute');
      }

    }

    let c = new C();
    c[3]();
    [1, 2, 3, 4, 5, 6, 7, 8, 9];
    log;
  };
}

x()();
{
  class C {}

  class D {
    [C];
  }

  let d = new D();

  (() => {
    class X {
      [X];
    }

    let x = new X();
  })();

  undefined;
  d[C];
}
{
  class B {
    a = 1;
  }

  class C extends B {
    b = 2;

    constructor() {
      super();
    }

  }

  let c = new C();
  1;
  c.a;
  2;
  c.b;
}
{
  var log = [];

  function addToLog(item) {
    log.push(item);
  }

  class B {
    a = 1;

    constructor() {
      addToLog("base constructor");
    }

  }

  function initF() {
    addToLog("init f");
    return 1;
  }

  class C extends B {
    f = initF();

    constructor() {
      addToLog("derived constructor");

      var t = () => {
        addToLog("t");

        if (1 == -1) {
          super();
        } else {
          super();
        }
      };

      (() => {
        addToLog("anon");
        t();
      })();
    }

  }

  let c = new C();
  1;
  c.f;
  1;
  c.a;
  ["derived constructor", "anon", "t", "base constructor", "init f"];
  log;
}
{
  class B {
    a = 1;
    returnA = () => this.a;
  }

  class C extends B {
    c = this.a;
    d = 2;
    returnC = () => this.c;
    returnD = () => this.d;
  }

  let c = new C();
  1;
  c.a;
  1;
  c.returnA();
  1;
  c.c;
  1;
  c.returnA();
  1;
  c.returnC();
  2;
  c.d;
  2;
  c.returnD();
  let c2 = new C();
  c2.returnA;
  c.returnA;
  c2.returnC;
  c.returnC;
  c2.returnD;
  c.returnD;
}
{
  let foo = undefined;

  class B {
    set d(x) {
      foo = x;
    }

  }

  class C extends B {
    d = 2;
  }

  let c = new C();
  undefined;
  foo;
  2;
  c.d;
}
{
  class B {}

  class C extends B {
    constructor() {
      super();
    }

    c = 1;
  }

  let c = new C();
  1;
  c.c;
}
{
  class B {}

  class C extends B {
    constructor() {
      let t = () => {
        super();
      };

      t();
    }

    c = 1;
  }

  let c = new C();
  1;
  c.c;
}
{
  let log = [];

  class B {}

  class C extends B {
    x = (log.push(1), 1);

    constructor() {
      let t = () => {
        class D extends B {
          x = (log.push(2), 2);

          constructor() {
            let p = () => {
              super();
            };

            p();
          }

        }

        let d = new D();
        2;
        d.x;
        super();
      };

      t();
    }

  }

  let c = new C();
  1;
  c.x;
  [2, 1];
  log;
}
{
  let log = [];

  class C1 extends class {} {
    x = log.push(1);

    constructor() {
      var t = () => super();

      super();
      t();
    }

  }

  (() => new C1())();

  ReferenceError;
  [1];
  log;
  log = [];

  class C2 extends class {} {
    x = log.push(1);

    constructor() {
      var t = () => super();

      t();
      super();
    }

  }

  (() => new C2())();

  ReferenceError;
  [1];
  log;
}
{
  class C1 extends class {} {
    x = 1;

    constructor() {
      eval("super()");
    }

  }

  let c = new C1();
  1;
  c.x;

  class C2 extends class {} {
    x = 1;

    constructor() {
      var t = () => {
        eval("super()");
      };

      t();
    }

  }

  c = new C2();
  1;
  c.x;
}
{
  class C {
    ['x'] = 1;
    ['y'] = 2;
  }

  class C1 extends C {
    ['x'] = 3;
    ['z'] = 4;
  }

  let c = new C1();
  3;
  c.x;
  2;
  c.y;
  4;
  c.z;
}
{
  class X extends class {} {
    c = 1;

    constructor() {
      let t = () => {
        class P extends class {} {
          constructor() {
            let t = () => {
              super();
            };

            t();
          }

        }

        let p = new P();
        undefined;
        p.c;
        super();
      };

      t();
    }

  }

  let x = new X();
  1;
  x.c;
}
{
  class A {
    a() {
      return 1;
    }

  }

  class C extends A {
    b = super.a();
    c = () => super.a;
    d = () => super.a();
    e = super.a;
    f = super.b;
  }

  let c = new C();
  1;
  c.a();
  1;
  c.b;
  1;
  c.c()();
  1;
  c.d();
  1;
  c.e();
  Object.hasOwnProperty(c, 'a');
  c.a;
  c.e;
  undefined;
  c.f;
}
{
  function t() {
    return class {
      ['x'] = 1;
    };
  }

  let klass = t();
  let obj = new klass();
  1;
  obj.x;
}
{
  new class {
    t = 1;

    constructor(t = this.t) {
      1;
      t();
    }

  }();
  new class extends class {} {
    t = 1;

    constructor(t = (super(), this.t)) {
      1;
      t();
    }

  }();

  (() => {
    new class extends class {} {
      t = 1;

      constructor(t = this.t) {
        super();
      }

    }();
  })();

  ReferenceError;
}
{
  class X {
    p = function () {
      return arguments[0];
    };
  }

  let x = new X();
  1;
  x.p(1);
}
{
  class X {
    t = () => {
      function p() {
        return arguments[0];
      }

      ;
      return p;
    };
  }

  let x = new X();
  let p = x.t();
  1;
  p(1);
}
{
  class X {
    t = () => {
      function p() {
        return eval("arguments[0]");
      }

      ;
      return p;
    };
  }

  let x = new X();
  let p = x.t();
  1;
  p(1);
}
{
  class X {
    p = eval("(function() { return arguments[0]; })(1)");
  }

  let x = new X();
  1;
  x.p;
}
{
  let thisInInitializer, thisInConstructor, thisFromArrowFn, arrowFn;
  let C = class extends class {} {
    field = (thisInInitializer = this, thisFromArrowFn = arrowFn());

    constructor() {
      arrowFn = () => this;

      super();
      thisInConstructor = this;
    }

  };
  let c = new C();
  thisInInitializer;
  c;
  thisFromArrowFn;
  c;
  thisInConstructor;
  c;
}
