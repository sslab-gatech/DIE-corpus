// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
// Test Array subclass default constructor with no parameters.
(function () {
  const A = class A extends Array {};

  function foo() {
    return new A();
  }

  foo();
  A;
  0;
  foo().length;
  foo();
  A;
  0;
  foo().length;
  foo();
  A;
  0;
  foo().length;
})(); // Test Array subclass default constructor with small constant length.


(function () {
  const A = class A extends Array {};
  const L = 4;

  function foo() {
    return new A(L);
  }

  foo();
  A;
  L;
  foo().length;
  foo();
  A;
  L;
  foo().length;
  foo();
  A;
  L;
  foo().length;
})(); // Test Array subclass default constructor with large constant length.


(function () {
  const A = class A extends Array {};
  const L = 1024 * 1024;

  function foo() {
    return new A(L);
  }

  foo();
  A;
  L;
  foo().length;
  foo();
  A;
  L;
  foo().length;
  foo();
  A;
  L;
  foo().length;
})(); // Test Array subclass default constructor with known boolean.


(function () {
  const A = class A extends Array {};

  function foo() {
    return new A(true);
  }

  foo();
  A;
  1;
  foo().length;
  true;
  foo()[0];
  foo();
  A;
  1;
  foo().length;
  true;
  foo()[0];
  foo();
  A;
  1;
  foo().length;
  true;
  foo()[0];
})(); // Test Array subclass default constructor with known string.


(function () {
  const A = class A extends Array {};

  function foo() {
    return new A("");
  }

  foo();
  A;
  1;
  foo().length;
  "";
  foo()[0];
  foo();
  A;
  1;
  foo().length;
  "";
  foo()[0];
  foo();
  A;
  1;
  foo().length;
  "";
  foo()[0];
})(); // Test Array subclass default constructor with known object.


(function () {
  const A = class A extends Array {};
  const O = {
    foo: "foo"
  };

  function foo() {
    return new A(O);
  }

  foo();
  A;
  1;
  foo().length;
  O;
  foo()[0];
  foo();
  A;
  1;
  foo().length;
  O;
  foo()[0];
  foo();
  A;
  1;
  foo().length;
  O;
  foo()[0];
})(); // Test Array subclass default constructor with known small integers.


(function () {
  const A = class A extends Array {};

  function foo() {
    return new A(1, 2, 3);
  }

  foo();
  A;
  3;
  foo().length;
  1;
  foo()[0];
  2;
  foo()[1];
  3;
  foo()[2];
  foo();
  A;
  3;
  foo().length;
  1;
  foo()[0];
  2;
  foo()[1];
  3;
  foo()[2];
})(); // Test Array subclass default constructor with known numbers.


(function () {
  const A = class A extends Array {};

  function foo() {
    return new A(1.1, 2.2, 3.3);
  }

  foo();
  A;
  3;
  foo().length;
  1.1;
  foo()[0];
  2.2;
  foo()[1];
  3.3;
  foo()[2];
  foo();
  A;
  3;
  foo().length;
  1.1;
  foo()[0];
  2.2;
  foo()[1];
  3.3;
  foo()[2];
})(); // Test Array subclass default constructor with known strings.


(function () {
  const A = class A extends Array {};

  function foo() {
    return new A("a", "b", "c", "d");
  }

  foo();
  A;
  4;
  foo().length;
  "a";
  foo()[0];
  "b";
  foo()[1];
  "c";
  foo()[2];
  "d";
  foo()[3];
  foo();
  A;
  4;
  foo().length;
  "a";
  foo()[0];
  "b";
  foo()[1];
  "c";
  foo()[2];
  "d";
  foo()[3];
})(); // Test Array subclass constructor with no parameters.


(function () {
  const A = class A extends Array {
    constructor() {
      super();
      this.bar = 1;
    }

  };

  function foo() {
    return new A();
  }

  foo();
  A;
  0;
  foo().length;
  1;
  foo().bar;
  foo();
  A;
  0;
  foo().length;
  1;
  foo().bar;
  foo();
  A;
  0;
  foo().length;
  1;
  foo().bar;
})(); // Test Array subclass constructor with small constant length.


(function () {
  const A = class A extends Array {
    constructor(n) {
      super(n);
      this.bar = 1;
    }

  };
  const L = 4;

  function foo() {
    return new A(L);
  }

  foo();
  A;
  L;
  foo().length;
  1;
  foo().bar;
  foo();
  A;
  L;
  foo().length;
  1;
  foo().bar;
  foo();
  A;
  L;
  foo().length;
  1;
  foo().bar;
})(); // Test Array subclass constructor with large constant length.


(function () {
  const A = class A extends Array {
    constructor(n) {
      super(n);
      this.bar = 1;
    }

  };
  const L = 1024 * 1024;

  function foo() {
    return new A(L);
  }

  foo();
  A;
  L;
  foo().length;
  1;
  foo().bar;
  foo();
  A;
  L;
  foo().length;
  1;
  foo().bar;
  foo();
  A;
  L;
  foo().length;
  1;
  foo().bar;
})(); // Test Array subclass constructor with known boolean.


(function () {
  const A = class A extends Array {
    constructor(n) {
      super(n);
      this.bar = 1;
    }

  };

  function foo() {
    return new A(true);
  }

  foo();
  A;
  1;
  foo().length;
  true;
  foo()[0];
  1;
  foo().bar;
  foo();
  A;
  1;
  foo().length;
  true;
  foo()[0];
  1;
  foo().bar;
  foo();
  A;
  1;
  foo().length;
  true;
  foo()[0];
  1;
  foo().bar;
})(); // Test Array subclass constructor with known string.


(function () {
  const A = class A extends Array {
    constructor(n) {
      super(n);
      this.bar = 1;
    }

  };

  function foo() {
    return new A("");
  }

  foo();
  A;
  1;
  foo().length;
  "";
  foo()[0];
  1;
  foo().bar;
  foo();
  A;
  1;
  foo().length;
  "";
  foo()[0];
  1;
  foo().bar;
  foo();
  A;
  1;
  foo().length;
  "";
  foo()[0];
  1;
  foo().bar;
})(); // Test Array subclass constructor with known object.


(function () {
  const A = class A extends Array {
    constructor(n) {
      super(n);
      this.bar = 1;
    }

  };
  const O = {
    foo: "foo"
  };

  function foo() {
    return new A(O);
  }

  foo();
  A;
  1;
  foo().length;
  O;
  foo()[0];
  1;
  foo().bar;
  foo();
  A;
  1;
  foo().length;
  O;
  foo()[0];
  1;
  foo().bar;
  foo();
  A;
  1;
  foo().length;
  O;
  foo()[0];
  1;
  foo().bar;
})(); // Test Array subclass constructor with known small integers.


(function () {
  const A = class A extends Array {
    constructor(x, y, z) {
      super(x, y, z);
      this.bar = 1;
    }

  };

  function foo() {
    return new A(1, 2, 3);
  }

  foo();
  A;
  3;
  foo().length;
  1;
  foo()[0];
  2;
  foo()[1];
  3;
  foo()[2];
  1;
  foo().bar;
  foo();
  A;
  3;
  foo().length;
  1;
  foo()[0];
  2;
  foo()[1];
  3;
  foo()[2];
  1;
  foo().bar;
})(); // Test Array subclass constructor with known numbers.


(function () {
  const A = class A extends Array {
    constructor(x, y, z) {
      super(x, y, z);
      this.bar = 1;
    }

  };

  function foo() {
    return new A(1.1, 2.2, 3.3);
  }

  foo();
  A;
  3;
  foo().length;
  1.1;
  foo()[0];
  2.2;
  foo()[1];
  3.3;
  foo()[2];
  1;
  foo().bar;
  foo();
  A;
  3;
  foo().length;
  1.1;
  foo()[0];
  2.2;
  foo()[1];
  3.3;
  foo()[2];
  1;
  foo().bar;
})(); // Test Array subclass constructor with known strings.


(function () {
  const A = class A extends Array {
    constructor(a, b, c, d) {
      super(a, b, c, d);
      this.bar = 1;
    }

  };

  function foo() {
    return new A("a", "b", "c", "d");
  }

  foo();
  A;
  4;
  foo().length;
  "a";
  foo()[0];
  "b";
  foo()[1];
  "c";
  foo()[2];
  "d";
  foo()[3];
  1;
  foo().bar;
  foo();
  A;
  4;
  foo().length;
  "a";
  foo()[0];
  "b";
  foo()[1];
  "c";
  foo()[2];
  "d";
  foo()[3];
  1;
  foo().bar;
})();
