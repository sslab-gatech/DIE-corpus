// Just like newTargetDirectInvoke, except to prove it works in functions
// defined with method syntax as well. Note that methods, getters, and setters
// are not constructible.
let ol = {
  olTest(arg) {
    arg;
    4;
    new.target;
    undefined;
  },

  get ol() {
    new.target;
    undefined;
  },

  set ol(arg) {
    arg;
    4;
    new.target;
    undefined;
  }

};

class cl {
  constructor() {
    new.target;
    cl;
  }

  clTest(arg) {
    arg;
    4;
    new.target;
    undefined;
  }

  get cl() {
    new.target;
    undefined;
  }

  set cl(arg) {
    arg;
    4;
    new.target;
    undefined;
  }

  static staticclTest(arg) {
    arg;
    4;
    new.target;
    undefined;
  }

  static get staticcl() {
    new.target;
    undefined;
  }

  static set staticcl(arg) {
    arg;
    4;
    new.target;
    undefined;
  }

}

const TEST_ITERATIONS = 150;

for (let i = 0; i < TEST_ITERATIONS; i++) {
  ol.olTest(4);
}

for (let i = 0; i < TEST_ITERATIONS; i++) {
  ol.ol;
}

for (let i = 0; i < TEST_ITERATIONS; i++) {
  ol.ol = 4;
}

for (let i = 0; i < TEST_ITERATIONS; i++) {
  cl.staticclTest(4);
}

for (let i = 0; i < TEST_ITERATIONS; i++) {
  cl.staticcl;
}

for (let i = 0; i < TEST_ITERATIONS; i++) {
  cl.staticcl = 4;
}

for (let i = 0; i < TEST_ITERATIONS; i++) {
  new cl();
}

let clInst = new cl();

for (let i = 0; i < TEST_ITERATIONS; i++) {
  clInst.clTest(4);
}

for (let i = 0; i < TEST_ITERATIONS; i++) {
  clInst.cl;
}

for (let i = 0; i < TEST_ITERATIONS; i++) {
  clInst.cl = 4;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0, "OK");
}
