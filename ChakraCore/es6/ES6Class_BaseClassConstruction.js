//-------------------------------------------------------------------------------------------------------
// Copyright (C) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE.txt file in the project root for full license information.
//-------------------------------------------------------------------------------------------------------
// ES6 super chain tests
function t1() {
  class Simple {
    bar() {
      return 'bar';
    }

    constructor(val) {
      this.val = val;
      this.foo = "Simple";
    }

  }

  ;
  let result = new Simple('val');
  console.log("Simple", result.foo);
  console.log("val", result.val);
  console.log("bar", result.bar());
  console.log(result instanceof Simple);
}

t1();

function t2() {
  class Simple {
    constructor(val) {
      let arrow = () => {
        this.val = val;
        this.foo = "Simple";
      };

      arrow();
    }

  }

  ;
  let result = new Simple('val');
  console.log("Simple", result.foo);
  console.log("val", result.val);
  console.log(result instanceof Simple);
}

t2();

function t3() {
  class ReturnArgumentBaseClass {
    constructor(val) {
      this.foo = 'ReturnArgumentBaseClass';
      return val;
    }

  }

  ;
  let result = new ReturnArgumentBaseClass(null);
  console.log("ReturnArgumentBaseClass", result.foo);
  console.log(result instanceof ReturnArgumentBaseClass);
  result = new ReturnArgumentBaseClass(undefined);
  console.log("ReturnArgumentBaseClass", result.foo);
  console.log(result instanceof ReturnArgumentBaseClass);
  result = new ReturnArgumentBaseClass();
  console.log("ReturnArgumentBaseClass", result.foo);
  console.log(result instanceof ReturnArgumentBaseClass);
  result = new ReturnArgumentBaseClass('string');
  console.log("ReturnArgumentBaseClass", result.foo);
  console.log(result instanceof ReturnArgumentBaseClass);
  result = new ReturnArgumentBaseClass(5);
  console.log("ReturnArgumentBaseClass", result.foo);
  console.log(result instanceof ReturnArgumentBaseClass);
}

t3();

function t4() {
  class ReturnArgumentBaseClass {
    constructor(val) {
      this.foo = 'ReturnArgumentBaseClass';
      return val;
    }

  }

  ;
  let result = new ReturnArgumentBaseClass({
    foo: 'test'
  });
  console.log("test", result.foo);
  console.log(result instanceof ReturnArgumentBaseClass);
  result = new ReturnArgumentBaseClass(new Boolean(false));
  console.log(new Boolean(false), result);
  console.log(result instanceof Boolean);
}

t4();

function t5() {
  class A extends null {}

  console.log(Function.prototype, Object.getPrototypeOf(A));
  console.log(null, Object.getPrototypeOf(A.prototype));
}

t5();

function t6() {
  class B extends null {
    constructor() {
      ;
    }

  }

  try {
    new B();
  } catch (e) {
    ;
  }
}

t6();

function t7() {
  var beforeSuper = 0;
  var afterSuper = 0;

  class C extends null {
    constructor() {
      beforeSuper++;
      super();
      afterSuper++;
    }

  }

  try {
    new C();
  } catch (e) {
    ;
  }

  console.log(1, beforeSuper);
  console.log(0, afterSuper);
}

t7();

function t8() {
  class A extends null {
    constructor() {
      return {};
    }

  }

  var a;

  try {
    a = new A();
  } catch (e) {
    ;
  }

  console.log(Object.prototype, Object.getPrototypeOf(a));
}

t8();

function t9() {
  class A extends null {
    constructor() {
      super['prop'] = 'something';
      return {};
    }

  }

  try {
    new A();
  } catch (e) {
    ;
  }

  var prop = 'prop';

  class B extends null {
    constructor() {
      super[prop] = 'something';
      return {};
    }

  }

  try {
    new B();
  } catch (e) {
    ;
  }

  class C extends null {
    constructor() {
      super['prop'];
      return {};
    }

  }

  try {
    new C();
  } catch (e) {
    ;
  }

  class D extends null {
    constructor() {
      super[prop];
      return {};
    }

  }

  try {
    new D();
  } catch (e) {
    ;
  }
}

t9();
