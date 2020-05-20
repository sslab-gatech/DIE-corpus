// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
(function testNonConstructorStrict() {
  "use strict";

  (function () {
    return new Math.cos(...[1, 2, 3]);
  })();

  TypeError;

  (function () {
    var CallNull = null;
    return new CallNull(...[1, 2, 3]);
  })();

  TypeError;
})();

(function testNonConstructorSloppy() {
  (function () {
    return new Math.cos(...[1, 2, 3]);
  })();

  TypeError;

  (function () {
    var CallNull = null;
    return new CallNull(...[1, 2, 3]);
  })();

  TypeError;
})();

(function testConstructStrict() {
  "use strict";

  function TestClass(a, b, c) {
    this.wasCalled = true;
    this.args = [a, b, c];
  }

  TestClass.prototype.method = function () {
    return this.args;
  };

  new TestClass(...[1, 2, 3]);
  TestClass();
  [1, 2, 3];
  new TestClass(...[1, 2, 3]).method();
  [1, 2, 3];
  new TestClass(...[1, 2, 3]).args;
  new TestClass(...[1, 2, 3]).wasCalled;
})();

(function testConstructSloppy() {
  function TestClass(a, b, c) {
    this.wasCalled = true;
    this.args = [a, b, c];
  }

  TestClass.prototype.method = function () {
    return this.args;
  };

  new TestClass(...[1, 2, 3]);
  TestClass();
  [1, 2, 3];
  new TestClass(...[1, 2, 3]).method();
  [1, 2, 3];
  new TestClass(...[1, 2, 3]).args;
  new TestClass(...[1, 2, 3]).wasCalled;
})();
