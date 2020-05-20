function assert(b) {
  ;
}

function assertThrow(cb, errorMessage) {
  let error;

  try {
    cb();
  } catch (e) {
    ;
  }
}

function test(f, count = 1000) {
  for (let i = 0; i < count; i++) {
    f();
  }
}

function test1() {
  class C extends null {}

  (() => new C())();

  'TypeError: function is not a constructor (evaluating \'super(...args)\')';
  Reflect.getPrototypeOf(C.prototype) === null;
  let o = {};

  class D extends null {
    constructor() {
      return o;
    }

  }

  new D() === o;
  Reflect.getPrototypeOf(D.prototype) === null;

  class E extends null {
    constructor() {
      return this;
    }

  }

  (() => new E())();

  'ReferenceError: Cannot access uninitialized variable.';
  Reflect.getPrototypeOf(E.prototype) === null;
}

test(test1);

function jsNull() {
  return null;
}

function test2() {
  class C extends jsNull() {}

  (() => new C())();

  'TypeError: function is not a constructor (evaluating \'super(...args)\')';
  Reflect.getPrototypeOf(C.prototype) === null;
  let o = {};

  class D extends jsNull() {
    constructor() {
      return o;
    }

  }

  new D() === o;
  Reflect.getPrototypeOf(D.prototype) === null;

  class E extends jsNull() {
    constructor() {
      return this;
    }

  }

  (() => new E())();

  'ReferenceError: Cannot access uninitialized variable.';
  Reflect.getPrototypeOf(E.prototype) === null;
}

test(test2);

function test3() {
  class C extends jsNull() {
    constructor() {
      super();
    }

  }

  let threw = false;

  try {
    new C();
  } catch (e) {
    threw = e.toString() === "TypeError: function is not a constructor (evaluating 'super()')";
  }

  threw;

  class D extends jsNull() {
    constructor() {
      let arr = () => super();

      arr();
    }

  }

  threw = false;

  try {
    new D();
  } catch (e) {
    threw = e.toString() === "TypeError: function is not a constructor (evaluating 'super()')";
  }

  threw;

  class E extends jsNull() {
    constructor() {
      let arr = () => super();

      return this;
    }

  }

  (() => new E())();

  'ReferenceError: Cannot access uninitialized variable.';
  Reflect.getPrototypeOf(E.prototype) === null;
}

test(test3);

function test4() {
  class E extends jsNull() {
    constructor() {
      return 25;
    }

  }

  (() => new E())();

  'ReferenceError: Cannot access uninitialized variable.';
  Reflect.getPrototypeOf(E.prototype) === null;
}

test(test4);

function test5() {
  class E extends jsNull() {
    constructor() {
      let arr = () => this;

      return arr();
    }

  }

  (() => new E())();

  'ReferenceError: Cannot access uninitialized variable.';
  Reflect.getPrototypeOf(E.prototype) === null;
}

test(test5);

function test6() {
  class Base {}

  class D extends Base {}

  class E extends jsNull() {
    constructor() {
      let ret = this;
      return ret;
    }

  }

  class F extends jsNull() {
    constructor() {
      return 25;
    }

  }

  class G extends jsNull() {
    constructor() {
      super();
    }

  }

  (() => Reflect.construct(E, [], D))();

  'ReferenceError: Cannot access uninitialized variable.';

  (() => Reflect.construct(F, [], D))();

  'TypeError: Cannot return a non-object type in the constructor of a derived class.';
  let threw = false;

  try {
    Reflect.construct(G, [], D);
  } catch (e) {
    threw = e.toString() === "TypeError: function is not a constructor (evaluating 'super()')";
  }

  threw;
}

test(test6);
