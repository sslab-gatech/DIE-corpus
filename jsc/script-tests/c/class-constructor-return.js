console.log('Tests for ES6 class constructor return values'); // ES6
// - 9.2.2 [[Construct]] (ECMAScript Function Objects)
// - 12.3.5.1 Runtime Semantics: Evaluation (The super Keyword)
// - 14.5.14 Runtime Semantics: ClassDefinitionEvaluation (Default Constructor)

var globalVariable = {
  name: "globalVariable"
};
var globalSymbol = Symbol();
console.log('Base class');

class BaseNoReturn {
  constructor() {
    ;
  }

}

;

class BaseReturnImplicit {
  constructor() {
    return;
  }

}

;

class BaseReturnUndefined {
  constructor() {
    return undefined;
  }

}

;

class BaseReturnThis {
  constructor() {
    return this;
  }

}

;

class BaseReturnObject {
  constructor() {
    return {
      a: 1
    };
  }

}

;

class BaseReturnObject2 {
  constructor() {
    return globalVariable;
  }

}

;

class BaseReturnString {
  constructor() {
    return "test";
  }

}

;

class BaseReturnNumber {
  constructor() {
    return 1;
  }

}

;

class BaseReturnNull {
  constructor() {
    return null;
  }

}

;

class BaseReturnSymbol {
  constructor() {
    return Symbol();
  }

}

;

class BaseThrow {
  constructor() {
    throw "Thrown Exception String";
  }

}

; // Base - Implicit => return this.

new BaseNoReturn() instanceof BaseNoReturn; // Base - Early return => return this.

new BaseReturnImplicit() instanceof BaseReturnImplicit;
new BaseReturnImplicit() !== undefined;
new BaseReturnUndefined() instanceof BaseReturnUndefined;
new BaseReturnUndefined() !== undefined; // Base - return this => return this.

new BaseReturnThis() instanceof BaseReturnThis; // Base - return Object => return object, not instance.

new BaseReturnObject() instanceof BaseReturnObject;
typeof new BaseReturnObject() === "object";
new BaseReturnObject2() instanceof BaseReturnObject;
new BaseReturnObject2() === globalVariable; // Base - return non-Object => return this.

new BaseReturnString() instanceof BaseReturnString;
typeof new BaseReturnString() !== "string";
new BaseReturnNumber() instanceof BaseReturnNumber;
typeof new BaseReturnNumber() !== "number";
new BaseReturnNull() instanceof BaseReturnNull;
new BaseReturnNull() !== null;
new BaseReturnSymbol() instanceof BaseReturnSymbol;
new BaseReturnSymbol() !== globalSymbol; // Base - throw => throw

try {
  new BaseThrow();
} catch (e) {
  ;
} // Same behavior for Functions.


console.log('');
console.log('Function constructor (non-class)');

function FunctionNoReturn() {
  ;
}

;

function FunctionReturnImplicit() {
  return;
}

;

function FunctionReturnUndefined() {
  return undefined;
}

;

function FunctionReturnThis() {
  return this;
}

;

function FunctionReturnObject() {
  return {
    a: 1
  };
}

;

function FunctionReturnObject2() {
  return globalVariable;
}

;

function FunctionReturnString() {
  return "test";
}

;

function FunctionReturnNumber() {
  return 1;
}

;

function FunctionReturnNull() {
  return null;
}

;

function FunctionReturnSymbol() {
  return Symbol();
}

;

function FunctionThrow() {
  throw "Thrown Exception String";
}

;
new FunctionNoReturn() instanceof FunctionNoReturn;
new FunctionReturnImplicit() instanceof FunctionReturnImplicit;
new FunctionReturnImplicit() !== undefined;
new FunctionReturnUndefined() instanceof FunctionReturnUndefined;
new FunctionReturnUndefined() !== undefined;
new FunctionReturnThis() instanceof FunctionReturnThis;
new FunctionReturnObject() instanceof FunctionReturnObject;
typeof new FunctionReturnObject() === "object";
new FunctionReturnObject2() instanceof FunctionReturnObject;
new FunctionReturnObject2() === globalVariable;
new FunctionReturnString() instanceof FunctionReturnString;
typeof new FunctionReturnString() !== "string";
new FunctionReturnNumber() instanceof FunctionReturnNumber;
typeof new FunctionReturnNumber() !== "number";
new FunctionReturnNull() instanceof FunctionReturnNull;
new FunctionReturnNull() !== null;
new FunctionReturnSymbol() instanceof FunctionReturnSymbol;
new FunctionReturnSymbol() !== globalSymbol;

try {
  new FunctionThrow();
} catch (e) {
  ;
}

console.log('');
console.log('Derived class calling super()');

class DerivedNoReturn extends BaseNoReturn {
  constructor() {
    super();
  }

}

;

class DerivedReturnImplicit extends BaseNoReturn {
  constructor() {
    super();
    return;
  }

}

;

class DerivedReturnUndefined extends BaseNoReturn {
  constructor() {
    super();
    return undefined;
  }

}

;

class DerivedReturnThis extends BaseNoReturn {
  constructor() {
    super();
    return this;
  }

}

;

class DerivedReturnObject extends BaseNoReturn {
  constructor() {
    super();
    return {
      a: 1
    };
  }

}

;

class DerivedReturnObject2 extends BaseNoReturn {
  constructor() {
    super();
    return globalVariable;
  }

}

;

class DerivedReturnString extends BaseNoReturn {
  constructor() {
    super();
    return "test";
  }

}

;

class DerivedReturnNumber extends BaseNoReturn {
  constructor() {
    super();
    return 1;
  }

}

;

class DerivedReturnNull extends BaseNoReturn {
  constructor() {
    super();
    return null;
  }

}

;

class DerivedReturnSymbol extends BaseNoReturn {
  constructor() {
    super();
    return globalSymbol;
  }

}

;

class DerivedThrow extends BaseNoReturn {
  constructor() {
    super();
    throw "Thrown Exception String";
  }

}

; // Derived - Implicit => return this.

new DerivedNoReturn() instanceof DerivedNoReturn; // Derived - Early return => return this.

new DerivedReturnImplicit() instanceof DerivedReturnImplicit;
new DerivedReturnImplicit() !== undefined;
new DerivedReturnUndefined() instanceof DerivedReturnUndefined;
new DerivedReturnUndefined() !== undefined; // Derived - return this => return this.

new DerivedReturnThis() instanceof DerivedReturnThis; // Derived - return Object => return object, not instance.

new DerivedReturnObject() instanceof DerivedReturnObject;
typeof new DerivedReturnObject() === "object";
new DerivedReturnObject2() instanceof DerivedReturnObject2;
new DerivedReturnObject2() === globalVariable; // Derived - return non-Object => exception.

try {
  new DerivedReturnString();
} catch (e) {
  ;
}

try {
  new DerivedReturnNumber();
} catch (e) {
  ;
}

try {
  new DerivedReturnNull();
} catch (e) {
  ;
}

try {
  new DerivedReturnSymbol();
} catch (e) {
  ;
}

try {
  new DerivedThrow();
} catch (e) {
  ;
}

console.log('');
console.log('Derived class not calling super()');

class DerivedNoSuperNoReturn extends BaseNoReturn {
  constructor() {
    ;
  }

}

;

class DerivedNoSuperReturn extends BaseNoReturn {
  constructor() {
    return;
  }

}

;

class DerivedNoSuperReturnUndefined extends BaseNoReturn {
  constructor() {
    return undefined;
  }

}

;

class DerivedNoSuperReturnObject extends BaseNoReturn {
  constructor() {
    return {
      a: 1
    };
  }

}

;

class DerivedNoSuperReturnObject2 extends BaseNoReturn {
  constructor() {
    return globalVariable;
  }

}

;

class DerivedNoSuperReturnThis extends BaseNoReturn {
  constructor() {
    return this;
  }

}

;

class DerivedNoSuperReturnString extends BaseNoReturn {
  constructor() {
    return "test";
  }

}

;

class DerivedNoSuperReturnNumber extends BaseNoReturn {
  constructor() {
    return 1;
  }

}

;

class DerivedNoSuperReturnNull extends BaseNoReturn {
  constructor() {
    return null;
  }

}

;

class DerivedNoSuperReturnSymbol extends BaseNoReturn {
  constructor() {
    return globalSymbol;
  }

}

;

class DerivedNoSuperThrow extends BaseNoReturn {
  constructor() {
    throw "Thrown Exception String";
  }

}

; // Derived without super() - Implicit => return this => TDZ.

try {
  new DerivedNoSuperNoReturn();
} catch (e) {
  ;
} // Derived without super() - Early return => return this => TDZ.


try {
  new DerivedNoSuperReturnImplicit();
} catch (e) {
  ;
}

try {
  new DerivedNoSuperReturnUndefined();
} catch (e) {
  ;
} // Derived without super() - return this => return this => TDZ


try {
  new DerivedNoSuperReturnThis();
} catch (e) {
  ;
} // Derived without super() - return Object => no this access => return object, not instance


try {
  new DerivedNoSuperReturnObject();
} catch (e) {
  ;
}

try {
  new DerivedNoSuperReturnObject2();
} catch (e) {
  ;
} // Derived without super() - return non-Object => exception


try {
  new DerivedNoSuperReturnString();
} catch (e) {
  ;
}

try {
  new DerivedNoSuperReturnNumber();
} catch (e) {
  ;
}

try {
  new DerivedNoSuperReturnNull();
} catch (e) {
  ;
}

try {
  new DerivedNoSuperReturnSymbol();
} catch (e) {
  ;
}

try {
  new DerivedNoSuperThrow();
} catch (e) {
  ;
}

console.log('');
console.log('Derived class with default constructor and base class returning different values');

class DerivedDefaultConstructorWithBaseNoReturn extends BaseNoReturn {}

;

class DerivedDefaultConstructorWithBaseReturnImplicit extends BaseReturnImplicit {}

;

class DerivedDefaultConstructorWithBaseReturnUndefined extends BaseReturnUndefined {}

;

class DerivedDefaultConstructorWithBaseReturnThis extends BaseReturnThis {}

;

class DerivedDefaultConstructorWithBaseReturnObject extends BaseReturnObject {}

;

class DerivedDefaultConstructorWithBaseReturnObject2 extends BaseReturnObject2 {}

;

class DerivedDefaultConstructorWithBaseReturnString extends BaseReturnString {}

;

class DerivedDefaultConstructorWithBaseReturnNumber extends BaseReturnNumber {}

;

class DerivedDefaultConstructorWithBaseReturnNull extends BaseReturnNull {}

;

class DerivedDefaultConstructorWithBaseReturnSymbol extends BaseReturnSymbol {}

;

class DerivedDefaultConstructorWithBaseThrow extends BaseThrow {}

; // Derived default constructor - implicit "super(...arguments)" return the result of the base (Object or this).

new DerivedDefaultConstructorWithBaseNoReturn() instanceof DerivedDefaultConstructorWithBaseNoReturn;
new DerivedDefaultConstructorWithBaseReturnImplicit() instanceof DerivedDefaultConstructorWithBaseReturnImplicit;
new DerivedDefaultConstructorWithBaseReturnUndefined() instanceof DerivedDefaultConstructorWithBaseReturnUndefined;
new DerivedDefaultConstructorWithBaseReturnObject() instanceof DerivedDefaultConstructorWithBaseReturnObject;
typeof new DerivedDefaultConstructorWithBaseReturnObject() === "object";
new DerivedDefaultConstructorWithBaseReturnObject2() instanceof DerivedDefaultConstructorWithBaseReturnObject2;
new DerivedDefaultConstructorWithBaseReturnObject2() === globalVariable;
new DerivedDefaultConstructorWithBaseReturnThis() instanceof DerivedDefaultConstructorWithBaseReturnThis;
new DerivedDefaultConstructorWithBaseReturnString() instanceof DerivedDefaultConstructorWithBaseReturnString;
new DerivedDefaultConstructorWithBaseReturnNumber() instanceof DerivedDefaultConstructorWithBaseReturnNumber;
new DerivedDefaultConstructorWithBaseReturnNull() instanceof DerivedDefaultConstructorWithBaseReturnNull;
new DerivedDefaultConstructorWithBaseReturnSymbol() instanceof DerivedDefaultConstructorWithBaseReturnSymbol;

try {
  new DerivedDefaultConstructorWithBaseThrow();
} catch (e) {
  ;
}

var successfullyParsed = true;
