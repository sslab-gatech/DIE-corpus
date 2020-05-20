function base() {
  this.prop = 42;
}

class testInitialize extends base {
  constructor() {
    // A poor man's assertThrowsInstanceOf, as arrow functions are currently
    // disabled in this context
    try {
      this;
      throw new Error();
    } catch (e) {
      if (!(e instanceof ReferenceError)) {
        throw e;
      }
    }

    super();
    this.prop;
    42;
  }

}

new testInitialize().prop;
42;

// super() twice is a no-go.
class willThrow extends base {
  constructor() {
    super();
    super();
  }

}

(() => new willThrow())();

ReferenceError;

// This is determined at runtime, not the syntax level.
class willStillThrow extends base {
  constructor() {
    for (let i = 0; i < 3; i++) {
      super();
    }
  }

}

(() => new willStillThrow())();

ReferenceError;

class canCatchThrow extends base {
  constructor() {
    super();

    try {
      super();
    } catch (e) {
      ;
    }
  }

}

new canCatchThrow().prop;
42;

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, "OK");
}
