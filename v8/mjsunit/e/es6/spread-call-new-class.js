// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testConstructClassStrict() {
  "use strict";

  class Base {
    constructor(...args) {
      this.baseArgs = args;
    }

    method() {
      return this.baseArgs;
    }

  }

  class Child extends Base {
    constructor(...args) {
      super(...args);
      this.childArgs = args;
    }

  }

  class Child2 extends Base {
    constructor(...args) {
      super("extra", ...args);
      this.childArgs = args;
    }

  }

  var c = new Base(...[1, 2, 3]);
  c;
  Base;
  [1, 2, 3];
  c.method();
  [1, 2, 3];
  c.baseArgs;
  c = new Child(...[1, 2, 3]);
  c;
  Child;
  c;
  Base;
  [1, 2, 3];
  c.method();
  [1, 2, 3];
  c.baseArgs;
  [1, 2, 3];
  c.childArgs;
  c = new Child2(...[1, 2, 3]);
  c;
  Child2;
  c;
  Base;
  ["extra", 1, 2, 3];
  c.method();
  ["extra", 1, 2, 3];
  c.baseArgs;
  [1, 2, 3];
  c.childArgs;
})();

(function testConstructSloppy() {
  class Base {
    constructor(...args) {
      this.baseArgs = args;
    }

    method() {
      return this.baseArgs;
    }

  }

  class Child extends Base {
    constructor(...args) {
      super(...args);
      this.childArgs = args;
    }

  }

  class Child2 extends Base {
    constructor(...args) {
      super("extra", ...args);
      this.childArgs = args;
    }

  }

  var c = new Base(...[1, 2, 3]);
  c;
  Base;
  [1, 2, 3];
  c.method();
  [1, 2, 3];
  c.baseArgs;
  c = new Child(...[1, 2, 3]);
  c;
  Child;
  c;
  Base;
  [1, 2, 3];
  c.method();
  [1, 2, 3];
  c.baseArgs;
  [1, 2, 3];
  c.childArgs;
  c = new Child2(...[1, 2, 3]);
  c;
  Child2;
  c;
  Base;
  ["extra", 1, 2, 3];
  c.method();
  ["extra", 1, 2, 3];
  c.baseArgs;
  [1, 2, 3];
  c.childArgs;
})();

(function testArgumentsObjectStrict() {
  "use strict";

  class Base {
    constructor(...args) {
      this.baseArgs = args;
    }

    method() {
      return this.baseArgs;
    }

  }

  class Child extends Base {
    constructor() {
      super(...arguments);
      this.childArgs = arguments;
    }

  }

  class Child2 extends Base {
    constructor() {
      super("extra", ...arguments);
      this.childArgs = arguments;
    }

  }

  var c = new Child(...[1, 2, 3]);
  c;
  Child;
  c;
  Base;
  [1, 2, 3];
  c.method();
  [1, 2, 3];
  c.baseArgs;
  Array.__proto__ === c.childArgs.__proto__;
  [1, 2, 3];
  Array.prototype.slice.call(c.childArgs);
  c = new Child2(...[1, 2, 3]);
  c;
  Child2;
  c;
  Base;
  ["extra", 1, 2, 3];
  c.method();
  ["extra", 1, 2, 3];
  c.baseArgs;
  Array.__proto__ === c.childArgs.__proto__;
  [1, 2, 3];
  Array.prototype.slice.call(c.childArgs);
})();

(function testArgumentsObjectSloppy() {
  class Base {
    constructor(...args) {
      this.baseArgs = args;
    }

    method() {
      return this.baseArgs;
    }

  }

  class Child extends Base {
    constructor() {
      super(...arguments);
      this.childArgs = arguments;
    }

  }

  class Child2 extends Base {
    constructor() {
      super("extra", ...arguments);
      this.childArgs = arguments;
    }

  }

  var c = new Child(...[1, 2, 3]);
  c;
  Child;
  c;
  Base;
  [1, 2, 3];
  c.method();
  [1, 2, 3];
  c.baseArgs;
  Array.__proto__ === c.childArgs.__proto__;
  [1, 2, 3];
  Array.prototype.slice.call(c.childArgs);
  c = new Child2(...[1, 2, 3]);
  c;
  Child2;
  c;
  Base;
  ["extra", 1, 2, 3];
  c.method();
  ["extra", 1, 2, 3];
  c.baseArgs;
  Array.__proto__ === c.childArgs.__proto__;
  [1, 2, 3];
  Array.prototype.slice.call(c.childArgs);
})();
