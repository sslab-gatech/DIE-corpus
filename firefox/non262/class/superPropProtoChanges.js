class base {
  constructor() {
    ;
  }

  test() {
    return false;
  }

}

let standin = {
  test() {
    return true;
  }

};

class derived extends base {
  constructor() {
    super();
  }

  test() {
    super.test();
    false;
    Object.setPrototypeOf(derived.prototype, standin);
    super["test"]();
    true;
  }

}

new derived().test();

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
