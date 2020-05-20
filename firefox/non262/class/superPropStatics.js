class base {
  constructor() {
    ;
  }

  static found() {
    this.foundCalled = true;
  }

  static get accessor() {
    this;
    derived;
    return 45;
  }

  notFound() {
    ;
  }

}

class derived extends base {
  constructor() {
    ;
  }

  static found() {
    throw "NO!";
  }

  static get accessor() {
    throw "NO!";
  }

  static test() {
    super["notFound"];
    undefined;
    super.found(); // foundCalled is set on |derived| specifically.

    let calledDesc = Object.getOwnPropertyDescriptor(derived, "foundCalled");
    calledDesc.value;
    true;
    super.accessor;
    45;
  }

}

derived.test();

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
