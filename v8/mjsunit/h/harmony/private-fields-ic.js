// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-private-fields
{
  class X {
    x = 1;

    getX(arg) {
      return arg.x;
    }

    setX(arg, val) {
      arg.x = val;
    }

  }

  let x1 = new X();
  let y = new class {}(); // IC: 0 -> Error

  (() => x1.getX(y))();

  TypeError;

  (() => x1.getX(y))();

  TypeError;

  (() => x1.getX(y))();

  TypeError;

  (() => x1.setX(y, 2))();

  TypeError;

  (() => x1.setX(y, 3))();

  TypeError;

  (() => x1.setX(y, 4))();

  TypeError;
  1;
  x1.getX(x1);
  1;
  x1.getX(x1);
  1;
  x1.getX(x1);
  x1.setX(x1, 2);
  x1.setX(x1, 3);
  x1.setX(x1, 4);
}
{
  class X {
    x = 1;

    getX(arg) {
      return arg.x;
    }

    setX(arg, val) {
      arg.x = val;
    }

  }

  let x1 = new X(); // IC: 0 -> Monomorphic

  1;
  x1.getX(x1);
  1;
  x1.getX(x1);
  1;
  x1.getX(x1);
  x1.setX(x1, 2);
  x1.setX(x1, 3);
  x1.setX(x1, 4);
  let y = new class {}(); // IC: Monomorphic -> Error

  (() => x1.getX(y))();

  TypeError;

  (() => x1.getX(y))();

  TypeError;

  (() => x1.getX(y))();

  TypeError;

  (() => x1.setX(y, 2))();

  TypeError;

  (() => x1.setX(y, 3))();

  TypeError;

  (() => x1.setX(y, 4))();

  TypeError;
  let x3 = new X(); // IC: Monomorphic -> Monomorphic

  1;
  x1.getX(x3);
  1;
  x1.getX(x3);
  1;
  x1.getX(x3);
  x1.setX(x3, 2);
  x1.setX(x3, 3);
  x1.setX(x3, 4);
}
{
  class X {
    x = 1;

    getX(arg) {
      return arg.x;
    }

    setX(arg, val) {
      arg.x = val;
    }

  }

  let x1 = new X(); // IC: 0 -> Monomorphic

  1;
  x1.getX(x1);
  1;
  x1.getX(x1);
  1;
  x1.getX(x1);
  x1.setX(x1, 2);
  x1.setX(x1, 3);
  x1.setX(x1, 4);

  class X2 extends X {
    x2 = 2;
  }

  let x2 = new X2(); // IC: Monomorphic -> Polymorphic

  1;
  x1.getX(x2);
  1;
  x1.getX(x2);
  1;
  x1.getX(x2);
  x1.setX(x2, 2);
  x1.setX(x2, 3);
  x1.setX(x2, 4);
  let y = new class {}(); // IC: Polymorphic -> Error

  (() => x1.getX(y))();

  TypeError;

  (() => x1.getX(y))();

  TypeError;

  (() => x1.getX(y))();

  TypeError;

  (() => x1.setX(y, 2))();

  TypeError;

  (() => x1.setX(y, 3))();

  TypeError;

  (() => x1.setX(y, 4))();

  TypeError;

  class X3 extends X {
    x3 = 2;
  }

  let x3 = new X3(); // IC: Polymorphic -> Polymorphic

  1;
  x1.getX(x3);
  1;
  x1.getX(x3);
  1;
  x1.getX(x3);
  x1.setX(x3, 2);
  x1.setX(x3, 3);
  x1.setX(x3, 4);
}
{
  class X {
    x = 1;

    getX(arg) {
      return arg.x;
    }

    setX(arg, val) {
      arg.x = val;
    }

  }

  let x1 = new X(); // IC: 0 -> Monomorphic

  1;
  x1.getX(x1);
  1;
  x1.getX(x1);
  1;
  x1.getX(x1);
  x1.setX(x1, 2);
  x1.setX(x1, 3);
  x1.setX(x1, 4);

  class X2 extends X {
    x2 = 2;
  }

  let x2 = new X2(); // IC: Monomorphic -> Polymorphic

  1;
  x1.getX(x2);
  1;
  x1.getX(x2);
  1;
  x1.getX(x2);
  x1.setX(x2, 2);
  x1.setX(x2, 3);
  x1.setX(x2, 4);

  class X3 extends X {
    x3 = 2;
  }

  let x3 = new X3();
  1;
  x1.getX(x3);
  1;
  x1.getX(x3);
  1;
  x1.getX(x3);
  x1.setX(x3, 2);
  x1.setX(x3, 3);
  x1.setX(x3, 4);

  class X4 extends X {
    x4 = 2;
  }

  let x4 = new X4();
  1;
  x1.getX(x4);
  1;
  x1.getX(x4);
  1;
  x1.getX(x4);
  x1.setX(x4, 2);
  x1.setX(x4, 3);
  x1.setX(x4, 4);

  class X5 extends X {
    x5 = 2;
  }

  let x5 = new X5(); // IC: Polymorphic -> Megamorphic

  1;
  x1.getX(x5);
  1;
  x1.getX(x5);
  1;
  x1.getX(x5);
  x1.setX(x5, 2);
  x1.setX(x5, 3);
  x1.setX(x5, 4);
  let y = new class {}(); // IC: Megamorphic -> Error

  (() => x1.getX(y))();

  TypeError;

  (() => x1.getX(y))();

  TypeError;

  (() => x1.getX(y))();

  TypeError;

  (() => x1.setX(y, 2))();

  TypeError;

  (() => x1.setX(y, 3))();

  TypeError;

  (() => x1.setX(y, 4))();

  TypeError;

  class X6 extends X {
    x6 = 2;
  }

  let x6 = new X6(); // IC: Megamorphic -> Megamorphic

  1;
  x1.getX(x6);
  1;
  x1.getX(x6);
  1;
  x1.getX(x6);
  x1.setX(x6, 2);
  x1.setX(x6, 3);
  x1.setX(x6, 4);
}
{
  class C {
    a = 1;

    getA() {
      return this.a;
    }

    setA(v) {
      this.a = v;
    }

  }

  let p = new Proxy(new C(), {
    get(target, name) {
      return target[name];
    },

    set(target, name, val) {
      target[name] = val;
    }

  });

  (() => p.getA())();

  TypeError;

  (() => p.getA())();

  TypeError;

  (() => p.getA())();

  TypeError;

  (() => p.setA(2))();

  TypeError;

  (() => p.setA(3))();

  TypeError;

  (() => p.setA(4))();

  TypeError;
  let x = new Proxy(new C(), {});

  (() => x.getA())();

  TypeError;

  (() => x.getA())();

  TypeError;

  (() => x.getA())();

  TypeError;

  (() => x.setA(2))();

  TypeError;

  (() => x.setA(3))();

  TypeError;

  (() => x.setA(4))();

  TypeError;
}
{
  class A {
    constructor(arg) {
      return arg;
    }

  }

  class X extends A {
    x = 1;

    constructor(arg) {
      super(arg);
    }

    getX(arg) {
      return arg.x;
    }

    setX(arg, val) {
      arg.x = val;
    }

  }

  let proxy = new Proxy({}, {});
  let x = new X(proxy);
  1;
  X.prototype.getX(proxy);
  1;
  X.prototype.getX(proxy);
  1;
  X.prototype.getX(proxy);
  X.prototype.setX(proxy, 2);
  X.prototype.setX(proxy, 3);
  X.prototype.setX(proxy, 4);
}
