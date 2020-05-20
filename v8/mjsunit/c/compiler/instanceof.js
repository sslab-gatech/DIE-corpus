// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --allow-natives-syntax
function A() {
  ;
}

var a = new A();
var B = {
  [Symbol.hasInstance](o) {
    return false;
  }

};
f(B.__proto__);
var C = Object.create({
  [Symbol.hasInstance](o) {
    return true;
  }

});
f(C.__proto__);
var D = Object.create({
  [Symbol.hasInstance](o) {
    return o === a;
  }

});
f(D.__proto__);
var E = Object.create({
  [Symbol.hasInstance](o) {
    if (o === a) {
      throw o;
    }

    return true;
  }

});
f(E.__proto__);

function F() {
  ;
}

F.__proto__ = null;

(function () {
  function foo(o) {
    return o instanceof A;
  }

  foo(a);
  foo(a);
  foo(new A());
  foo(a);
  foo(new A());
})();

(function () {
  function foo(o) {
    try {
      return o instanceof A;
    } catch (e) {
      return e;
    }
  }

  foo(a);
  foo(a);
  foo(new A());
  1;
  foo(new Proxy({}, {
    getPrototypeOf() {
      throw 1;
    }

  }));
  foo(a);
  foo(new A());
  1;
  foo(new Proxy({}, {
    getPrototypeOf() {
      throw 1;
    }

  }));
})();

(function () {
  function foo(o) {
    return o instanceof B;
  }

  foo(a);
  foo(a);
  foo(new A());
  foo(a);
  foo(new A());
})();

(function () {
  function foo(o) {
    return o instanceof C;
  }

  foo(a);
  foo(a);
  foo(new A());
  foo(a);
  foo(new A());
})();

(function () {
  function foo(o) {
    return o instanceof D;
  }

  foo(a);
  foo(a);
  foo(new A());
  foo(a);
  foo(new A());
})();

(function () {
  function foo(o) {
    try {
      return o instanceof E;
    } catch (e) {
      return false;
    }
  }

  foo(a);
  foo(new A());
  foo(a);
  foo(new A());
})();

(function () {
  function foo(o) {
    return o instanceof F;
  }

  foo(a);
  foo(new A());
  foo(new F());
  foo(a);
  foo(new A());
  foo(new F());
})();

(function () {
  function foo() {
    var a = new A();
    return a instanceof A;
  }

  foo();
  foo();
  foo();
})();

(function () {
  class B extends A {}

  ;

  function makeFoo() {
    return function foo(b) {
      return b instanceof B;
    };
  }

  makeFoo();
  const foo = makeFoo();
  foo(new B());
  foo(new A());
  foo(new B());
  foo(new A());
})();
