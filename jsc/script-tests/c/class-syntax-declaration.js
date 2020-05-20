console.log('Tests for ES6 class syntax declarations');
var constructorCallCount = 0;
var staticMethodValue = [1];
var instanceMethodValue = [2];
var getterValue = [3];
var setterValue = undefined;

class A {
  constructor() {
    constructorCallCount++;
  }

  static someStaticMethod() {
    return staticMethodValue;
  }

  static get someStaticGetter() {
    return getterValue;
  }

  static set someStaticSetter(value) {
    setterValue = value;
  }

  someInstanceMethod() {
    return instanceMethodValue;
  }

  get someGetter() {
    return getterValue;
  }

  set someSetter(value) {
    setterValue = value;
  }

}

constructorCallCount;
A.someStaticMethod();
A.someStaticGetter;
setterValue = undefined;
A.someStaticSetter = 123;
setterValue;
new A().someInstanceMethod();
constructorCallCount;
new A().someGetter;
constructorCallCount;
new A().someGetter;
setterValue = undefined;
new A().someSetter = 789;
setterValue;
new A().__proto__;
A.prototype.constructor; // try { class; } catch(e) {}
// try { class [; } catch(e) {}
// try { class {; } catch(e) {}
// try { class X {; } catch(e) {}
// try { class X { ( }; } catch(e) {}

try {
  class X {}

  ;
} catch (e) {
  ;
} // try { class X { constructor() {} constructor() {} }; } catch(e) {}
// try { class X { get constructor() {} }; } catch(e) {}
// try { class X { set constructor() {} }; } catch(e) {}


try {
  class X {
    ['constructor']() {
      ;
    }

  }

  ;
} catch (e) {
  ;
}

try {
  class X {
    ['constructor']() {
      throw 'unreached';
    }

  }

  ;
  new X();
} catch (e) {
  ;
}

try {
  class X {
    constructor() {
      ;
    }

    static constructor() {
      return staticMethodValue;
    }

  }

  ;
} catch (e) {
  ;
}

class X {
  constructor() {
    ;
  }

  static constructor() {
    return staticMethodValue;
  }

}

;
X.constructor();

try {
  class X {
    constructor() {
      ;
    }

    static get constructor() {
      return staticMethodValue;
    }

  }

  ;
} catch (e) {
  ;
} // class X { constructor() {} static get constructor() { return staticMethodValue; } }; X.constructor;
// try { class X { constructor() {} static prototype() {} }; } catch(e) {}
// try { class X { constructor() {} static get prototype() {} }; } catch(e) {}
// try { class X { constructor() {} static set prototype() {} }; } catch(e) {}


try {
  class X {
    constructor() {
      ;
    }

    static get ['prototype']() {
      ;
    }

  }

  ;
} catch (e) {
  ;
}

try {
  class X {
    constructor() {
      ;
    }

    static set ['prototype'](x) {
      ;
    }

  }

  ;
} catch (e) {
  ;
}

try {
  class X {
    constructor() {
      ;
    }

    prototype() {
      return instanceMethodValue;
    }

  }

  ;
} catch (e) {
  ;
}

try {
  class X {
    constructor() {
      ;
    }

    get prototype() {
      return instanceMethodValue;
    }

  }

  ;
} catch (e) {
  ;
}

try {
  class X {
    constructor() {
      ;
    }

    set prototype(x) {
      ;
    }

  }

  ;
} catch (e) {
  ;
} // class X { constructor() {} prototype() { return instanceMethodValue; } }; (new X).prototype();


try {
  class X {
    constructor() {
      ;
    }

    set foo(a) {
      ;
    }

  }

  ;
} catch (e) {
  ;
}

try {
  class X {
    constructor() {
      ;
    }

    set foo({
      x,
      y
    }) {
      ;
    }

  }

  ;
} catch (e) {
  ;
} // try { class X { constructor() {} set foo() {} }; } catch(e) {}
// try { class X { constructor() {} set foo(a, b) {} }; } catch(e) {}


try {
  class X {
    constructor() {
      ;
    }

    get foo() {
      ;
    }

  }

  ;
} catch (e) {
  ;
} // try { class X { constructor() {} get foo(x) {} }; } catch(e) {}
// try { class X { constructor() {} get foo({x, y}) {} }; } catch(e) {}


var successfullyParsed = true;
