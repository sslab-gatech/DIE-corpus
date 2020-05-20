// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Base {}

class DerivedWithReturn extends Base {
  constructor(x) {
    super();
    return x;
  }

}

(function () {
  new DerivedWithReturn(null);
})();

TypeError;

(function () {
  new DerivedWithReturn(42);
})();

TypeError;

(function () {
  new DerivedWithReturn(true);
})();

TypeError;

(function () {
  new DerivedWithReturn('hi');
})();

TypeError;

(function () {
  new DerivedWithReturn(Symbol());
})();

TypeError;
new DerivedWithReturn(undefined);
DerivedWithReturn;

function f() {
  ;
}

new DerivedWithReturn(new f());
f();
new DerivedWithReturn(/re/);
RegExp;

class DerivedWithReturnNoSuper extends Base {
  constructor(x) {
    return x;
  }

}

(function () {
  new DerivedWithReturnNoSuper(null);
})();

TypeError;

(function () {
  new DerivedWithReturnNoSuper(42);
})();

TypeError;

(function () {
  new DerivedWithReturnNoSuper(true);
})();

TypeError;

(function () {
  new DerivedWithReturnNoSuper('hi');
})();

TypeError;

(function () {
  new DerivedWithReturnNoSuper(Symbol());
})();

TypeError;

(function () {
  new DerivedWithReturnNoSuper(undefined);
})();

ReferenceError;

function f2() {
  ;
}

new DerivedWithReturnNoSuper(new f2());
f2();
new DerivedWithReturnNoSuper(/re/);
RegExp;

class DerivedReturn extends Base {
  constructor() {
    super();
    return;
  }

}

new DerivedReturn();
DerivedReturn;

class DerivedReturnThis extends Base {
  constructor() {
    super();
    return this;
  }

}

new DerivedReturnThis();
DerivedReturnThis;
