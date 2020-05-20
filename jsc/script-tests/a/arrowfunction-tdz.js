console.log('Tests for ES6 arrow function test tdz');
var A = class A {
  constructor() {
    this.id = 'a';
  }

};
var B = class B extends A {
  constructor(accessThisBeforeSuper) {
    var f = () => this;

    if (accessThisBeforeSuper) {
      f();
      super();
    } else {
      super();
      f();
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
var a = new B(false);
var D = class D extends A {
  constructor(accessThisBeforeSuper, returnThis) {
    var f = () => returnThis ? this : {};

    if (accessThisBeforeSuper) {
      let val = f();
      super();
    } else {
      super();
      let val = f();
    }
  }

};
isReferenceError = false;

try {
  new D(true, true);
} catch (e) {
  isReferenceError = e instanceof ReferenceError;
}

isReferenceError;
var d = new D(false, true);
d.id;
var e = new D(false, false);
e.id;
var f = new D(true, false);
f.id;
var G = class G extends A {
  constructor(accessThisBeforeSuper, returnThis) {
    var f = () => returnThis ? () => this : () => {
      ;
    };

    let af = f();

    if (accessThisBeforeSuper) {
      let result = af();
      super();
    } else {
      super();
      let result = af();
    }
  }

};

try {
  new G(true, true);
} catch (e) {
  exception = e;
  isReferenceError = e instanceof ReferenceError;
}

isReferenceError;
var g = new G(false, true);
g.id;
var h = new G(false, false);
h.id;
var i = new G(true, false);
i.id;
var successfullyParsed = true;
