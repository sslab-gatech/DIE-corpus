console.log('Tests for the descriptors of the properties implicitly defined by ES6 class syntax');

function descriptor(object, propertyName) {
  return Object.getOwnPropertyDescriptor(object, propertyName);
}

function enumeratedProperties(object) {
  var properties = [];

  for (var propertyName in object) {
    properties.push(propertyName);
  }

  return properties;
}

try {
  class A {}

  ;
  descriptor(A, "prototype").writable;
} catch (e) {
  ;
}

try {
  class A {}

  ;
  var x = A.prototype;
  A.prototype = 3;
  A.prototype;
} catch (e) {
  ;
}

try {
  class A {}

  ;
  descriptor(A, "prototype").enumerable;
} catch (e) {
  ;
}

try {
  class A {}

  ;
  A.foo = "foo";
  enumeratedProperties(A).includes("foo");
} catch (e) {
  ;
}

try {
  class A {}

  ;
  enumeratedProperties(A).includes("prototype");
} catch (e) {
  ;
}

try {
  class A {}

  ;
  descriptor(A, "prototype").configurable;
} catch (e) {
  ;
}

try {
  class A {}

  ;
  Object.defineProperty(A, "prototype", {
    value: "foo"
  });
} catch (e) {
  ;
}

try {
  class A {
    static foo() {
      ;
    }

  }

  ;
  descriptor(A, "foo").writable;
} catch (e) {
  ;
}

try {
  class A {
    static foo() {
      ;
    }

  }

  ;
  A.foo = 3;
  A.foo;
} catch (e) {
  ;
}

try {
  class A {
    static foo() {
      ;
    }

  }

  ;
  descriptor(A, "foo").enumerable;
} catch (e) {
  ;
}

try {
  class A {
    static foo() {
      ;
    }

  }

  ;
  enumeratedProperties(A).includes("foo");
} catch (e) {
  ;
}

try {
  class A {
    static foo() {
      ;
    }

  }

  ;
  descriptor(A, "foo").configurable;
} catch (e) {
  ;
}

try {
  class A {
    static foo() {
      ;
    }

  }

  ;
  Object.defineProperty(A, "foo", {
    value: "bar"
  });
  A.foo;
} catch (e) {
  ;
}

try {
  class A {
    static get foo() {
      ;
    }

  }

  ;
  descriptor(A, "foo").writable;
} catch (e) {
  ;
}

try {
  class A {
    static get foo() {
      return 5;
    }

  }

  ;
  A.foo = 3;
  A.foo;
} catch (e) {
  ;
}

try {
  class A {
    static get foo() {
      ;
    }

  }

  ;
  descriptor(A, "foo").enumerable;
} catch (e) {
  ;
}

try {
  class A {
    static get foo() {
      ;
    }

  }

  ;
  enumeratedProperties(A).includes("foo");
} catch (e) {
  ;
}

try {
  class A {
    static get foo() {
      ;
    }

  }

  ;
  enumeratedProperties(new A()).includes("foo");
} catch (e) {
  ;
}

try {
  class A {
    static get foo() {
      ;
    }

  }

  ;
  descriptor(A, "foo").configurable;
} catch (e) {
  ;
}

try {
  class A {
    static get foo() {
      ;
    }

  }

  ;
  Object.defineProperty(A, "foo", {
    value: "bar"
  });
  A.foo;
} catch (e) {
  ;
}

try {
  class A {
    foo() {
      ;
    }

  }

  ;
  descriptor(A.prototype, "foo").writable;
} catch (e) {
  ;
}

try {
  class A {
    foo() {
      ;
    }

  }

  ;
  A.prototype.foo = 3;
  A.prototype.foo;
} catch (e) {
  ;
}

try {
  class A {
    foo() {
      ;
    }

  }

  ;
  descriptor(A.prototype, "foo").enumerable;
} catch (e) {
  ;
}

try {
  class A {
    foo() {
      ;
    }

  }

  ;
  enumeratedProperties(A.prototype).includes("foo");
} catch (e) {
  ;
}

try {
  class A {
    foo() {
      ;
    }

  }

  ;
  enumeratedProperties(new A()).includes("foo");
} catch (e) {
  ;
}

try {
  class A {
    foo() {
      ;
    }

  }

  ;
  descriptor(A.prototype, "foo").configurable;
} catch (e) {
  ;
}

try {
  class A {
    foo() {
      ;
    }

  }

  ;
  Object.defineProperty(A.prototype, "foo", {
    value: "bar"
  });
  A.prototype.foo;
} catch (e) {
  ;
}

try {
  class A {
    get foo() {
      ;
    }

  }

  ;
  descriptor(A.prototype, "foo").writable;
} catch (e) {
  ;
}

try {
  class A {
    get foo() {
      return 5;
    }

  }

  ;
  A.prototype.foo = 3;
  A.prototype.foo;
} catch (e) {
  ;
}

try {
  class A {
    get foo() {
      ;
    }

  }

  ;
  descriptor(A.prototype, "foo").enumerable;
} catch (e) {
  ;
}

try {
  class A {
    get foo() {
      ;
    }

  }

  ;
  enumeratedProperties(A.prototype).includes("foo");
} catch (e) {
  ;
}

try {
  class A {
    get foo() {
      ;
    }

  }

  ;
  enumeratedProperties(new A()).includes("foo");
} catch (e) {
  ;
}

try {
  class A {
    get foo() {
      ;
    }

  }

  ;
  descriptor(A.prototype, "foo").configurable;
} catch (e) {
  ;
}

try {
  class A {
    get foo() {
      ;
    }

  }

  ;
  Object.defineProperty(A.prototype, "foo", {
    value: "bar"
  });
  A.prototype.foo;
} catch (e) {
  ;
}

try {
  class A {}

  ;
  descriptor(A.prototype, "constructor").writable;
} catch (e) {
  ;
}

try {
  class A {}

  ;
  A.prototype.constructor = 3;
  A.prototype.constructor;
} catch (e) {
  ;
}

try {
  class A {}

  ;
  x = {};

  A.prototype.constructor = function () {
    return x;
  };

  new A() instanceof A;
} catch (e) {
  ;
}

try {
  class A {}

  ;
  descriptor(A.prototype, "constructor").enumerable;
} catch (e) {
  ;
}

try {
  class A {}

  ;
  enumeratedProperties(A.prototype).includes("constructor");
} catch (e) {
  ;
}

try {
  class A {}

  ;
  enumeratedProperties(new A()).includes("constructor");
} catch (e) {
  ;
}

try {
  class A {}

  ;
  descriptor(A.prototype, "constructor").configurable;
} catch (e) {
  ;
}

try {
  class A {}

  ;
  Object.defineProperty(A.prototype, "constructor", {
    value: "bar"
  });
  A.prototype.constructor;
} catch (e) {
  ;
}

var successfullyParsed = true;
