// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
(function () {
  "use strict";

  function bar() {
    return this;
  }

  function foo(x) {
    return bar.bind(x);
  }

  0;
  foo(0)();
  1;
  foo(1)();
  "";
  foo("")();
})();

(function () {
  "use strict";

  function bar(x) {
    return x;
  }

  function foo(x) {
    return bar.bind(undefined, x);
  }

  0;
  foo(0)();
  1;
  foo(1)();
  "";
  foo("")();
})();

(function () {
  function bar(x) {
    return x;
  }

  function foo(x) {
    return bar.bind(undefined, x);
  }

  0;
  foo(0)();
  1;
  foo(1)();
  "";
  foo("")();
})();

(function () {
  "use strict";

  function bar(x, y) {
    return x + y;
  }

  function foo(x, y) {
    return bar.bind(undefined, x, y);
  }

  0;
  foo(0, 0)();
  2;
  foo(1, 1)();
  "ab";
  foo("a", "b")();
  0;
  foo(0, 1).length;
  "bound bar";
  foo(1, 2).name;
})();

(function () {
  function bar(x, y) {
    return x + y;
  }

  function foo(x, y) {
    return bar.bind(undefined, x, y);
  }

  0;
  foo(0, 0)();
  2;
  foo(1, 1)();
  "ab";
  foo("a", "b")();
  0;
  foo(0, 1).length;
  "bound bar";
  foo(1, 2).name;
})();

(function () {
  function bar(f) {
    return f(1);
  }

  function foo(g) {
    return bar(g.bind(null, 2));
  }

  3;
  foo((x, y) => x + y);
  1;
  foo((x, y) => x - y);
  3;
  foo((x, y) => x + y);
  1;
  foo((x, y) => x - y);
})();

(function () {
  function add(x, y) {
    return x + y;
  }

  function foo(a) {
    return a.map(add.bind(null, 1));
  }

  [1, 2, 3];
  foo([0, 1, 2]);
  [2, 3, 4];
  foo([1, 2, 3]);
  [1, 2, 3];
  foo([0, 1, 2]);
  [2, 3, 4];
  foo([1, 2, 3]);
})();

(function () {
  const add = (x, y) => x + y;

  const inc = add.bind(null, 1);

  function foo(inc) {
    return inc(1);
  }

  2;
  foo(inc);
  2;
  foo(inc);
  2;
  foo(inc);
})();

(function () {
  const A = class A {};
  const B = A.bind();

  function foo() {
    return new B();
  }

  foo();
  A;
  foo();
  B;
  foo();
  A;
  foo();
  B;
})();

(function () {
  const A = class A {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

  };
  const B = A.bind(null, 1, 2);

  function foo(z) {
    return new B(z);
  }

  1;
  foo(3).x;
  2;
  foo(3).y;
  3;
  foo(3).z;
  1;
  foo(3).x;
  2;
  foo(3).y;
  3;
  foo(3).z;
})();

(function () {
  const A = class A {};

  function foo() {
    const B = A.bind();
    return new B();
  }

  foo();
  A;
  foo();
  A;
  foo();
  A;
})();

(function () {
  const A = class A {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

  };

  function foo(z) {
    const B = A.bind(null, 1, 2);
    return new B(z);
  }

  1;
  foo(3).x;
  2;
  foo(3).y;
  3;
  foo(3).z;
  1;
  foo(3).x;
  2;
  foo(3).y;
  3;
  foo(3).z;
})();

(function () {
  const A = class A {};
  const B = A.bind();

  function foo(B) {
    return new B();
  }

  foo(B);
  A;
  foo(B);
  A;
  foo(B);
  A;
})();

(function () {
  const A = class A {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

  };
  const B = A.bind(null, 1, 2);

  function foo(B, z) {
    return new B(z);
  }

  1;
  foo(B, 3).x;
  2;
  foo(B, 3).y;
  3;
  foo(B, 3).z;
  1;
  foo(B, 3).x;
  2;
  foo(B, 3).y;
  3;
  foo(B, 3).z;
})();

(function () {
  const A = class A {
    constructor(value) {
      this.value = value;
    }

  };
  const C = class C extends A {
    constructor() {
      super(1);
    }

  };
  const B = C.__proto__ = A.bind(null, 1);
  new C();
  A;
  new C();
  B;
  new C();
  C;
  1;
  new C().value;
  new C();
  A;
  new C();
  B;
  new C();
  C;
  1;
  new C().value;
})();

(function () {
  const A = class A {};
  const B = A.bind();

  function bar(B, ...args) {
    return new B(...args);
  }

  function foo(B) {
    return bar(B);
  }

  foo(B);
  A;
  foo(B);
  A;
  foo(B);
  A;
})();

(function () {
  const A = class A {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

  };
  const B = A.bind(null, 1, 2);

  function bar(B, ...args) {
    return new B(...args);
  }

  function foo(B, z) {
    return bar(B, z);
  }

  1;
  foo(B, 3).x;
  2;
  foo(B, 3).y;
  3;
  foo(B, 3).z;
  1;
  foo(B, 3).x;
  2;
  foo(B, 3).y;
  3;
  foo(B, 3).z;
})();
