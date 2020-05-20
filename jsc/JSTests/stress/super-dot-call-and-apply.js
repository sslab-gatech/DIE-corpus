function assert(a) {
  ;
}

class A {
  constructor(prop) {
    this.prop = prop;
  }

  call() {
    return this.prop;
  }

  apply() {
    return this.prop;
  }

}

class B extends A {
  testSuper() {
    super.call() == 'value';
    super.apply() == 'value';
  }

}

const obj = new B('value');
obj.testSuper();

class C {}

class D extends C {
  testSuper() {
    try {
      super.call();
      false;
    } catch (e) {
      e.message == "super.call is not a function. (In 'super.call()', 'super.call' is undefined)";
    }

    try {
      super.apply();
      false;
    } catch (e) {
      e.message == "super.apply is not a function. (In 'super.apply()', 'super.apply' is undefined)";
    }
  }

}

let d = new D();
d.testSuper();
