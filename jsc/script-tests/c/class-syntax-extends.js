console.log('Tests for ES6 class syntax "extends"');

class Base {
  constructor() {
    ;
  }

  baseMethod() {
    return 'base';
  }

  overridenMethod() {
    return 'base';
  }

  static staticBaseMethod() {
    return 'base';
  }

  static staticOverridenMethod() {
    return 'base';
  }

}

class Derived extends Base {
  constructor() {
    super();
  }

  overridenMethod() {
    return 'derived';
  }

  static staticOverridenMethod() {
    return 'derived';
  }

}

new Base() instanceof Base;
Object.getPrototypeOf(new Base());
new Derived() instanceof Derived;
Object.getPrototypeOf(new Derived());
Object.getPrototypeOf(Derived.prototype);
new Derived().baseMethod();
new Derived().overridenMethod();
Derived.staticBaseMethod();
Derived.staticOverridenMethod(); // try { x = class extends; } catch(e) {}
// try { x = class extends; } catch(e) {}
// try { x = class extends Base {; } catch(e) {}
// x = class extends Base { };
// x = class extends Base { constructor() { } }; 
// x.__proto__;
// Object.getPrototypeOf(x);
// x.prototype.__proto__;
// Object.getPrototypeOf(x.prototype);
// x = class extends null { constructor() { } }; x.__proto__;
// x.__proto__;

try {
  x = class extends 3 {
    constructor() {
      ;
    }

  };
  x.__proto__;
} catch (e) {
  ;
}

try {
  x = class extends "abc" {
    constructor() {
      ;
    }

  };
  x.__proto__;
} catch (e) {
  ;
}

try {
  baseWithBadPrototype = function () {
    ;
  };

  baseWithBadPrototype.prototype = 3;
  new baseWithBadPrototype();
} catch (e) {
  ;
}

try {
  x = class extends baseWithBadPrototype {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
}

try {
  baseWithBadPrototype.prototype = "abc";
} catch (e) {
  ;
}

try {
  x = class extends baseWithBadPrototype {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
}

try {
  baseWithBadPrototype.prototype = null;
  x = class extends baseWithBadPrototype {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
} // try { x = 1; c = class extends ++x { constructor() { } };; } catch(e) {}
// try { x = 1; c = class extends x++ { constructor() { } };; } catch(e) {}


try {
  x = 1;
  c = class extends (++x) {
    constructor() {
      ;
    }

  };
  ;
} catch (e) {
  ;
}

try {
  x = 1;
  c = class extends (x++) {
    constructor() {
      ;
    }

  };
  ;
} catch (e) {
  ;
} // x = 1; try { c = class extends (++x) { constructor() { } } } catch (e) { }; x;
// x = 1; try { c = class extends (x++) { constructor() { } } } catch (e) { }; x;


try {
  namespace = {};
  namespace.A = class {};
  namespace.B = class extends namespace.A {};
} catch (e) {
  ;
}

try {
  namespace = {};
  namespace.A = class A {};
  namespace.B = class B extends namespace.A {};
} catch (e) {
  ;
}

try {
  namespace = {};
  namespace.A = class {
    constructor() {
      ;
    }

  };
  namespace.B = class extends namespace.A {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
}

try {
  namespace = {};
  namespace.A = class A {
    constructor() {
      ;
    }

  };
  namespace.B = class B extends namespace.A {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
}

try {
  namespace = {};
  namespace.A = class {
    constructor() {
      ;
    }

  };
  namespace.B = class extends namespace.A {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
}

try {
  namespace = {};
  namespace.A = class {
    constructor() {
      ;
    }

  };
  namespace.B = class extends namespace["A"] {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
}

try {
  namespace = {};
  namespace.A = class {
    constructor() {
      ;
    }

  };

  function getClassA() {
    return namespace.A;
  }

  ;
  namespace.B = class extends getClassA() {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
}

try {
  namespace = {};
  namespace.A = class {
    constructor() {
      ;
    }

  };

  function getClass(prop) {
    return namespace[prop];
  }

  ;
  namespace.B = class extends getClass("A") {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
}

try {
  namespace = {};
  namespace.A = class {
    constructor() {
      ;
    }

  };
  namespace.B = class extends (false || null || namespace.A) {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
} // try { namespace = {}; namespace.A = class { constructor() { } }; namespace.B = class extends false||null||namespace.A { constructor() { } }; } catch(e) {}


try {
  x = 1;
  namespace = {};
  namespace.A = class {
    constructor() {
      ;
    }

  };
  namespace.B = class extends (x++, namespace.A) {
    constructor() {
      ;
    }

  };
  ;
} catch (e) {
  ;
}

try {
  x = 1;
  namespace = {};
  namespace.A = class {
    constructor() {
      ;
    }

  };
  namespace.B = class extends (namespace.A, x++) {
    constructor() {
      ;
    }

  };
  ;
} catch (e) {
  ;
}

try {
  namespace = {};
  namespace.A = class {
    constructor() {
      ;
    }

  };
  namespace.B = class extends (new namespace.A()) {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
}

try {
  namespace = {};
  namespace.A = class {
    constructor() {
      ;
    }

  };
  namespace.B = class extends (new namespace.A()) {
    constructor() {
      ;
    }

  };
} catch (e) {
  ;
} // x = 1; namespace = {}; namespace.A = class { constructor() { } }; try { namespace.B = class extends (x++, namespace.A) { constructor() { } } } catch (e) { } x;
// x = 1; namespace = {}; namespace.A = class { constructor() { } }; try { namespace.B = class extends (namespace.A, x++) { constructor() { } } } catch (e) { } x;


Object.getPrototypeOf(class {
  constructor() {
    ;
  }

}.prototype);
Object.getPrototypeOf(class extends null {
  constructor() {
    super();
  }

}.prototype);

try {
  new class extends undefined {
    constructor() {
      this;
    }

  }();
} catch (e) {
  ;
}

try {
  x = undefined;
  new class extends x {
    constructor() {
      super();
    }

  }();
} catch (e) {
  ;
}

class x {}

;
new class extends null {
  constructor() {
    return new x();
  }

}() instanceof x;

try {
  new class extends null {
    constructor() {
      this;
    }

  }();
} catch (e) {
  ;
}

try {
  new class extends null {
    constructor() {
      super();
    }

  }();
} catch (e) {
  ;
}

x = {};
new class extends null {
  constructor() {
    return x;
  }

}();

try {
  y = 12;

  class C extends null {
    constructor() {
      return y;
    }

  }

  ;
  new C();
  ;
} catch (e) {
  ;
} // class x {}; new (class extends null { constructor () { return new x; } }) instanceof x;


x = null;
Object.getPrototypeOf(class extends x {}.prototype);
Object.prototype.isPrototypeOf(class {});
Function.prototype.isPrototypeOf(class {});
var successfullyParsed = true;
