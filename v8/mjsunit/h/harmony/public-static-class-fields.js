// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-public-fields --harmony-static-fields
"use strict";

{
  class C {
    static a;
  }

  undefined;
  C.a;
  let descriptor = Object.getOwnPropertyDescriptor(C, 'a');
  C.hasOwnProperty('a');
  descriptor.writable;
  descriptor.enumerable;
  descriptor.configurable;
  let c = new C();
  undefined;
  c.a;
}
{
  let x = 'a';

  class C {
    static a;
    static hasOwnProperty = function () {
      return 1;
    };
    static b = x;
    static c = 1;
  }

  undefined;
  C.a;
  'a';
  C.b;
  1;
  C.c;
  1;
  C.hasOwnProperty();
  let c = new C();
  undefined;
  c.a;
  undefined;
  c.b;
  undefined;
  c.c;
}
{
  (() => {
    class C {
      static x = Object.freeze(this);
      static c = 42;
    }
  })();

  TypeError;
}
{
  class C {
    static c = this;
    static d = () => this;
  }

  C;
  C.c;
  C;
  C.d();
  let c = new C();
  undefined;
  c.c;
  undefined;
  c.d;
}
{
  class C {
    static c = 1;
    static d = this.c;
  }

  1;
  C.c;
  1;
  C.d;
  let c = new C();
  undefined;
  c.c;
  undefined;
  c.d;
}
{
  class C {
    static b = 1;
    static c = () => this.b;
  }

  1;
  C.b;
  1;
  C.c();
  let c = new C();
  undefined;
  c.c;
}
{
  let x = 'a';

  class C {
    static b = 1;
    static c = () => this.b;
    static e = () => x;
  }

  1;
  C.b;
  'a';
  C.e();
  let a = {
    b: 2
  };
  1;
  C.c.call(a);
  let c = new C();
  undefined;
  c.b;
  undefined;
  c.c;
}
{
  let x = 'a';

  class C {
    static c = 1;
    static d = function () {
      return this.c;
    };
    static e = function () {
      return x;
    };
  }

  1;
  C.c;
  1;
  C.d();
  'a';
  C.e();
  C.c = 2;
  2;
  C.d();
  let a = {
    c: 3
  };
  3;
  C.d.call(a);
  C.d.bind(undefined);
  let c = new C();
  undefined;
  c.c;
  undefined;
  c.d;
  undefined;
  c.e;
}
{
  class C {
    static c = function () {
      return 1;
    };
  }

  'c';
  C.c.name;
}
{
  let d = function () {
    return new.target;
  };

  class C {
    static c = d;
  }

  undefined;
  C.c();
  new d();
  new C.c();
}
{
  class C {
    static c = () => new.target;
  }

  undefined;
  C.c();
}
{
  class C {
    static c = () => {
      let b;

      class A {
        constructor() {
          b = new.target;
        }

      }

      ;
      new A();
      A;
      b;
    };
  }

  C.c();
}
{
  class C {
    static c = new.target;
  }

  undefined;
  C.c;
}
{
  class B {
    static d = 1;
    static b = () => this.d;
  }

  class C extends B {
    static c = super.d;
    static d = () => super.d;
    static e = () => super.b();
  }

  1;
  C.c;
  1;
  C.d();
  1;
  C.e();
}
{
  let foo = undefined;

  class B {
    static set d(x) {
      foo = x;
    }

  }

  class C extends B {
    static d = 2;
  }

  undefined;
  foo;
  2;
  C.d;
}
{
  let C = class {
    static c;
  };
  "C";
  C.name;
}
{
  class C {
    static c = new C();
  }

  C.c instanceof C;
}

(function test() {
  function makeC() {
    var x = 1;
    return class {
      static a = () => () => x;
    };
  }

  let C = makeC();
  let f = C.a();
  1;
  f();
})();

{
  let c = "c";

  class C {
    static ["a"] = 1;
    static ["b"];
    static [c];
  }

  1;
  C.a;
  undefined;
  C.b;
  undefined;
  C[c];
}
{
  let log = [];

  function run(i) {
    log.push(i);
    return i;
  }

  class C {
    static [run(1)] = run(6);
    static [run(2)] = run(7);

    [run(3)]() {
      run(9);
    }

    static [run(4)] = run(8);

    static [run(5)]() {
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
      static [run(1)] = run(6);
      static [run(2)] = run(7);

      [run(3)]() {
        run(9);
      }

      static [run(4)] = run(8);

      static [run(5)]() {
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
  let log = [];

  function run(i) {
    log.push(i);
    return i;
  }

  class C {
    [run(1)] = run(7);
    [run(2)] = run(8);

    [run(3)]() {
      run(9);
    }

    static [run(4)] = run(6);

    [run(5)]() {
      throw new Error('should not execute');
    }

  }

  let c = new C();
  c[3]();
  [1, 2, 3, 4, 5, 6, 7, 8, 9];
  log;
}

function y() {
  // This tests lazy parsing.
  return function () {
    let log = [];

    function run(i) {
      log.push(i);
      return i;
    }

    class C {
      [run(1)] = run(7);
      [run(2)] = run(8);

      [run(3)]() {
        run(9);
      }

      static [run(4)] = run(6);

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

y()();
{
  class C {}

  class D {
    static [C];
  }

  (() => {
    class X {
      static [X];
    }
  })();

  undefined;
  D[C];
}
{
  function t() {
    return class {
      static ['x'] = 2;
    };
  }

  let klass = t();
  let obj = new klass();
  2;
  klass.x;
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

    static [x] = 2;
    static b = 3;
    static d;
  }

  2;
  C.a;
  3;
  C.b;
  undefined;
  C.d;
  undefined;
  C.c;
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
  function t() {
    return class {
      ['x'] = 1;
      static ['x'] = 2;
    };
  }

  let klass = t();
  let obj = new klass();
  1;
  obj.x;
  2;
  klass.x;
}
{
  class X {
    static p = function () {
      return arguments[0];
    };
  }

  1;
  X.p(1);
}
{
  class X {
    static t = () => {
      function p() {
        return arguments[0];
      }

      ;
      return p;
    };
  }

  let p = X.t();
  1;
  p(1);
}
{
  class X {
    static t = () => {
      function p() {
        return eval("arguments[0]");
      }

      ;
      return p;
    };
  }

  let p = X.t();
  1;
  p(1);
}
{
  class X {
    static p = eval("(function() { return arguments[0]; })(1)");
  }

  1;
  X.p;
}
{
  let p = {
    z: class {
      static y = this.name;
    }
  };
  p.z.y;
  'z';
  let q = {
    ["z"]: class {
      static y = this.name;
    }
  };
  q.z.y;
  'z';
  const C = class {
    static x = this.name;
  };
  C.x;
  'C';
}
