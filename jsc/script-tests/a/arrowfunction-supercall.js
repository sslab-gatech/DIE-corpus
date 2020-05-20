console.log('Tests for ES6 arrow function, calling of the super in arrow function');
var value = 'abcd-1234';
var A = class A {
  constructor() {
    this.id = value;
  }

};
var B = class B extends A {
  constructor(accessThisBeforeSuper) {
    var f = () => {
      super();
    };

    if (accessThisBeforeSuper) {
      if (this.id !== value) {
        throw new Error('Should be reference error because of TDZ');
      }

      f();
    } else {
      f();

      if (this.id !== value) {
        throw new Error('wrong value');
      }
    }
  }

};
var isReferenceError = false;

try {
  new B(true);
} catch (e) {
  isReferenceError = e instanceof ReferenceError;
}

isReferenceError;
var b = new B(false);
b.id;
var C = class C extends A {
  constructor(runSuperInConstructor, forceTDZ) {
    var f1 = () => {
      if (!forceTDZ) {
        super();
      }

      this.id = 'b';
    };

    var f2 = () => {
      if (this.id !== 'b') {
        throw new Error('wrong bound of the this');
      }
    };

    var f3 = () => {
      if (this.id !== value) {
        throw new Error('wrong bound of the this');
      }
    };

    if (runSuperInConstructor) {
      super();
      f3();
    } else {
      f1();
      f2();
    }
  }

};
isReferenceError = false;

try {
  new C(false, true);
} catch (e) {
  isReferenceError = e instanceof ReferenceError;
}

isReferenceError;
var d1 = new C(false, false);
d1.id;
var d2 = new C(true, false);
d2.id;
var D = class D extends A {
  constructor() {
    var arrow = () => {
      let __proto__ = 'some-text';

      var arr = () => {
        let value = __proto__ + 'text';
        super();
      };

      arr();
    };

    arrow();
  }

};
new D().id;

class E extends A {
  constructor(doReplaceProto) {
    var arrow = () => {
      if (doReplaceProto) {
        E.__proto__ = function () {
          ;
        };
      }

      super();
    };

    arrow();
  }

}

;
new E(false).id;
typeof new E(true).id;

class F extends A {
  constructor(doReplaceProto) {
    var arrow = () => super();

    if (doReplaceProto) {
      F.__proto__ = function () {
        ;
      };
    }

    arrow();
  }

}

;
new F(false).id;
typeof new F(true).id;
var errorStack;
var ParentClass = class ParentClass {
  constructor() {
    try {
      this.idValue = testValue;
      throw new Error('Error');
    } catch (e) {
      errorStack = e.stack;
    }
  }

};
var ChildClass = class ChildClass extends ParentClass {
  constructor() {
    var arrowInChildConstructor = () => {
      var nestedArrow = () => {
        super();
      };

      nestedArrow();
    };

    arrowInChildConstructor();
  }

};
var c = new ChildClass();
var indexOfParentClassInStackError = errorStack.indexOf('ParentClass');
var indexOfnestedArrowInStackError = errorStack.indexOf('nestedArrow');
var indexOfarrowInChildConstructorInStackError = errorStack.indexOf('arrowInChildConstructor');
var indexOfChildClassInStackError = errorStack.indexOf('ChildClass');
indexOfParentClassInStackError < indexOfnestedArrowInStackError;
indexOfnestedArrowInStackError < indexOfarrowInChildConstructorInStackError;
indexOfarrowInChildConstructorInStackError < indexOfChildClassInStackError;
indexOfChildClassInStackError > 0;
indexOfParentClassInStackError > -1 && errorStack.indexOf('ParentClass', indexOfParentClassInStackError + 1) === -1;
indexOfnestedArrowInStackError > -1 && errorStack.indexOf('nestedArrow', indexOfnestedArrowInStackError + 1) === -1;
indexOfarrowInChildConstructorInStackError > -1 && errorStack.indexOf('arrowInChildConstructor', indexOfarrowInChildConstructorInStackError + 1) === -1;
indexOfChildClassInStackError > -1 && errorStack.indexOf('ChildClass', indexOfChildClassInStackError + 1) === -1;
new class extends A {
  constructor() {
    ((a = super()) => {
      ;
    })();
  }

}().id;

try {
  new class extends A {
    constructor() {
      ((a = this) => {
        return a;
      })();
    }

  }();
} catch (e) {
  ;
}

try {
  new class extends A {
    constructor() {
      ((a = this, b = super()) => {
        return a;
      })();
    }

  }();
} catch (e) {
  ;
}

try {
  new class extends A {
    constructor() {
      ((a = new.target) => {
        return a;
      })();

      super();
    }

  }();
} catch (e) {
  ;
}

try {
  new class extends A {
    constructor() {
      ((a = new.target, b = super()) => {
        return a;
      })();
    }

  }();
} catch (e) {
  ;
}

var successfullyParsed = true;
