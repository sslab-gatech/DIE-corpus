console.log('Tests for ES6 class syntax expressions');
var constructorCallCount = 0;
var staticMethodValue = [1];
var instanceMethodValue = [2];
var getterValue = [3];
var setterValue = undefined;
var A = class {
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

};
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
A.prototype.constructor; // try { x = class; } catch(e) {}
// try { x = class {; } catch(e) {}
// try { x = class { ( }; } catch(e) {}

try {
  x = class {};
} catch (e) {
  ;
} // try { x = class { constructor() {} constructor() {} }; } catch(e) {}
// try { x = class { get constructor() {} }; } catch(e) {}
// try { x = class { set constructor() {} }; } catch(e) {}


try {
  x = class {
    constructor() {
      ;
    }

    static constructor() {
      return staticMethodValue;
    }

  };
} catch (e) {
  ;
}

x = class {
  constructor() {
    ;
  }

  static constructor() {
    return staticMethodValue;
  }

};
x.constructor(); // try { x = class { constructor() {} static prototype() {} }; } catch(e) {}
// try { x = class { constructor() {} static get prototype() {} }; } catch(e) {}
// try { x = class { constructor() {} static set prototype() {} }; } catch(e) {}

try {
  x = class {
    constructor() {
      ;
    }

    prototype() {
      return instanceMethodValue;
    }

  };
} catch (e) {
  ;
}

x = class {
  constructor() {
    ;
  }

  prototype() {
    return instanceMethodValue;
  }

};
new x().prototype();

try {
  x = class {
    constructor() {
      ;
    }

    set foo(a) {
      ;
    }

  };
} catch (e) {
  ;
}

try {
  x = class {
    constructor() {
      ;
    }

    set foo({
      x,
      y
    }) {
      ;
    }

  };
} catch (e) {
  ;
} // try { x = class { constructor() {} set foo() {} }; } catch(e) {}
// try { x = class { constructor() {} set foo(a, b) {} }; } catch(e) {}


try {
  x = class {
    constructor() {
      ;
    }

    get foo() {
      ;
    }

  };
} catch (e) {
  ;
} // try { x = class { constructor() {} get foo(x) {} }; } catch(e) {}
// try { x = class { constructor() {} get foo({x, y}) {} }; } catch(e) {}


var successfullyParsed = true;
