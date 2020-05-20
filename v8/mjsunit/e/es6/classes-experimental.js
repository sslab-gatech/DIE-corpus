// Copyright 2014 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

(function TestArgumentsAccess() {
  class Base {
    constructor() {
      2;
      arguments.length;
      1;
      arguments[0];
      2;
      arguments[1];
    }

  }

  let b = new Base(1, 2);

  class Subclass extends Base {
    constructor() {
      2;
      arguments.length;
      3;
      arguments[0];
      4;
      arguments[1];
      super(1, 2);
    }

  }

  let s = new Subclass(3, 4);
  0;
  Subclass.length;

  class Subclass2 extends Base {
    constructor(x, y) {
      2;
      arguments.length;
      3;
      arguments[0];
      4;
      arguments[1];
      super(1, 2);
    }

  }

  let s2 = new Subclass2(3, 4);
  2;
  Subclass2.length;
})();

(function TestThisAccessRestriction() {
  class Base {
    constructor(a, b) {
      let o = new Object();
      o.prp = a + b;
      return o;
    }

  }

  class Subclass extends Base {
    constructor(a, b) {
      var exn;

      try {
        this.prp1 = 3;
      } catch (e) {
        exn = e;
      }

      exn instanceof ReferenceError;
      super(a, b);
      a + b;
      this.prp;
      undefined;
      this.prp1;
      this.hasOwnProperty("prp1");
      return this;
    }

  }

  let b = new Base(1, 2);
  3;
  b.prp;
  let s = new Subclass(2, -1);
  1;
  s.prp;
  undefined;
  s.prp1;
  s.hasOwnProperty("prp1");

  class Subclass2 extends Base {
    constructor(x) {
      super(1, 2);

      if (x < 0) {
        return;
      }

      let called = false;

      function tmp() {
        called = true;
        return 3;
      }

      var exn = null;

      try {
        super(tmp(), 4);
      } catch (e) {
        exn = e;
      }

      exn instanceof ReferenceError;
      called;
    }

  }

  var s2 = new Subclass2(1);
  3;
  s2.prp;
  var s3 = new Subclass2(-1);
  3;
  s3.prp;

  (function () {
    Subclass.call(new Object(), 1, 2);
  })();

  TypeError;

  (function () {
    Base.call(new Object(), 1, 2);
  })();

  TypeError;

  class BadSubclass extends Base {
    constructor() {
      ;
    }

  }

  (function () {
    new BadSubclass();
  })();

  ReferenceError;
})();

(function TestThisCheckOrdering() {
  let baseCalled = 0;

  class Base {
    constructor() {
      baseCalled++;
    }

  }

  let fCalled = 0;

  function f() {
    fCalled++;
    return 3;
  }

  class Subclass1 extends Base {
    constructor() {
      baseCalled = 0;
      super();
      1;
      baseCalled;
      let obj = this;
      let exn = null;
      baseCalled = 0;
      fCalled = 0;

      try {
        super(f());
      } catch (e) {
        exn = e;
      }

      exn instanceof ReferenceError;
      1;
      fCalled;
      1;
      baseCalled;
      obj;
      this;
      exn = null;
      baseCalled = 0;
      fCalled = 0;

      try {
        super(super(), f());
      } catch (e) {
        exn = e;
      }

      exn instanceof ReferenceError;
      0;
      fCalled;
      1;
      baseCalled;
      obj;
      this;
      exn = null;
      baseCalled = 0;
      fCalled = 0;

      try {
        super(f(), super());
      } catch (e) {
        exn = e;
      }

      exn instanceof ReferenceError;
      1;
      fCalled;
      1;
      baseCalled;
      obj;
      this;
    }

  }

  new Subclass1();
})();

(function TestPrototypeWiring() {
  class Base {
    constructor(x) {
      this.foobar = x;
    }

  }

  class Subclass extends Base {
    constructor(x) {
      super(x);
    }

  }

  let s = new Subclass(1);
  1;
  s.foobar;
  Subclass.prototype;
  s.__proto__;
  let s1 = new Subclass(1, 2);
  1;
  s1.foobar;
  s1.__proto__ === Subclass.prototype;
  let s2 = new Subclass();
  undefined;
  s2.foobar;
  Subclass.prototype;
  s2.__proto__;

  (function () {
    Subclass(1);
  })();

  TypeError;

  (function () {
    Subclass(1, 2, 3, 4);
  })();

  TypeError;

  class Subclass2 extends Subclass {
    constructor() {
      super(5, 6, 7);
    }

  }

  let ss2 = new Subclass2();
  5;
  ss2.foobar;
  Subclass2.prototype;
  ss2.__proto__;

  class Subclass3 extends Base {
    constructor(x, y) {
      super(x + y);
    }

  }

  let ss3 = new Subclass3(27, 42 - 27);
  42;
  ss3.foobar;
  Subclass3.prototype;
  ss3.__proto__;
})();

(function TestSublclassingBuiltins() {
  class ExtendedUint8Array extends Uint8Array {
    constructor() {
      super(10);
      this[0] = 255;
      this[1] = 0xFFA;
    }

  }

  var eua = new ExtendedUint8Array();
  10;
  eua.length;
  10;
  eua.byteLength;
  0xFF;
  eua[0];
  0xFA;
  eua[1];
  ExtendedUint8Array.prototype;
  eua.__proto__;
  "[object Uint8Array]";
  Object.prototype.toString.call(eua);
})();

(function TestSubclassingNull() {
  let N = null;

  class Foo extends N {
    constructor(x, y) {
      1;
      x;
      2;
      y;
      return {};
    }

  }

  new Foo(1, 2);
})();

(function TestSubclassBinding() {
  class Base {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

  }

  let obj = {};

  class Subclass extends Base {
    constructor(x, y) {
      super(x, y);
      this !== obj;
    }

  }

  let f = Subclass.bind(obj);

  (function () {
    f(1, 2);
  })();

  TypeError;
  let s = new f(1, 2);
  1;
  s.x;
  2;
  s.y;
  Subclass.prototype;
  s.__proto__;
  let s1 = new f(1);
  1;
  s1.x;
  undefined;
  s1.y;
  Subclass.prototype;
  s1.__proto__;
  let g = Subclass.bind(obj, 1);

  (function () {
    g(8);
  })();

  TypeError;
  let s2 = new g(8);
  1;
  s2.x;
  8;
  s2.y;
  Subclass.prototype;
  s.__proto__;
})();

(function TestDefaultConstructor() {
  class Base1 {}

  (function () {
    Base1();
  })();

  TypeError;

  class Subclass1 extends Base1 {}

  (function () {
    Subclass1();
  })();

  TypeError;
  let s1 = new Subclass1();
  s1.__proto__;
  Subclass1.prototype;

  class Base2 {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

  }

  class Subclass2 extends Base2 {}

  ;
  let s2 = new Subclass2(1, 2);
  s2.__proto__;
  Subclass2.prototype;
  1;
  s2.x;
  2;
  s2.y;
  let f = Subclass2.bind({}, 3, 4);
  let s2prime = new f();
  s2prime.__proto__;
  Subclass2.prototype;
  3;
  s2prime.x;
  4;
  s2prime.y;
  let obj = {};

  class Base3 {
    constructor() {
      return obj;
    }

  }

  class Subclass3 extends Base3 {}

  ;
  let s3 = new Subclass3();
  obj;
  s3;

  class ExtendedUint8Array extends Uint8Array {}

  var eua = new ExtendedUint8Array(10);
  10;
  eua.length;
  10;
  eua.byteLength;
  eua[0] = 0xFF;
  eua[1] = 0xFFA;
  0xFF;
  eua[0];
  0xFA;
  eua[1];
  ExtendedUint8Array.prototype;
  eua.__proto__;
  "[object Uint8Array]";
  Object.prototype.toString.call(eua);
})();
