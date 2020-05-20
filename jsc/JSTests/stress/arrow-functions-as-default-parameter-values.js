function assert(b) {
  ;
}

function test(f, n = 1000) {
  for (let i = 0; i < n; i++) {
    f();
  }
}

test(function () {
  function foo(x = () => this) {
    return x();
  }

  let o = {};
  foo.call(o) === o;
});
test(function () {
  function foo(x = () => arguments) {
    x() === arguments;
  }

  foo();
});
test(function () {
  function foo({
    x = () => arguments
  }) {
    x() === arguments;
  }

  foo({
    x: undefined
  });
});
test(function () {
  function foo(x = () => arguments) {
    let a = x();
    a.length === 3;
    a[0] === undefined;
    a[1] === 20;
    a[2] === 40;
  }

  foo(undefined, 20, 40);
});
test(function () {
  function foo(x = () => new.target) {
    x() === foo;
  }

  new foo(undefined);
});
test(function () {
  function foo({
    x = () => new.target
  }) {
    x() === foo;
  }

  new foo({});
});
test(function () {
  function foo(x = () => arguments) {
    var arguments;
    x() === arguments;
  }

  foo(undefined);
});
test(function () {
  function foo(x = () => arguments) {
    var arguments = 25;
    x() === arguments;
  }

  foo(undefined);
});
test(function () {
  function foo(x = (y = () => arguments) => y()) {
    x() === arguments;
  }

  foo(undefined);
});
test(function () {
  function foo({
    x = (y = () => arguments) => y()
  }) {
    x() === arguments;
  }

  foo({});
});
test(function () {
  function foo(x = (y = () => this) => y()) {
    return x();
  }

  let o = {};
  foo.call(o);
});
test(function () {
  function foo(x = (y = () => new.target) => y()) {
    x() === foo;
  }

  new foo();
});
test(function () {
  function foo(x = (y = () => new.target) => y()) {
    x() === undefined;
  }

  foo();
});
test(function () {
  class C {
    constructor() {
      this._x = 45;
    }

    get foo() {
      return this._x;
    }

  }

  class D extends C {
    constructor(x = () => super.foo) {
      super();
      x() === 45;
    }

    x(x = () => super.foo) {
      return x();
    }

  }

  new D().x() === 45;
});
test(function () {
  class C {
    constructor() {
      this._x = 45;
    }

    get foo() {
      return this._x;
    }

  }

  class D extends C {
    x(x = () => {
      return super.foo;
    }) {
      return x();
    }

  }

  new D().x() === 45;
});
test(function () {
  class C {
    constructor() {
      this._x = 45;
    }

    get foo() {
      return this._x;
    }

  }

  class D extends C {
    x(x = () => {
      return () => super.foo;
    }) {
      return x()();
    }

  }

  new D().x() === 45;
});
test(function () {
  class C {
    constructor() {
      this._x = 45;
    }

    get foo() {
      return this._x;
    }

  }

  class D extends C {
    x(y = (y = () => super.foo) => {
      return y();
    }) {
      return y();
    }

  }

  new D().x() === 45;
});
test(function () {
  class C {
    constructor() {
      this._x = 45;
    }

    get foo() {
      return this._x;
    }

  }

  class D extends C {
    constructor(x = () => super.foo) {
      super();
      this._x_f = x;
    }

    x() {
      return this._x_f();
    }

  }

  new D().x() === 45;
});
test(function () {
  class C {
    constructor() {
      this._x = 45;
    }

    get foo() {
      return this._x;
    }

  }

  class D extends C {
    constructor(x = () => super()) {
      x();
    }

    x() {
      return super.foo;
    }

  }

  new D().x() === 45;
});
