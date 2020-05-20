function customconstructor() {
  class X {
    constructor() {
      ;
    }

    a() {
      ;
    }

  }

  ;
  Object.getOwnPropertyDescriptor(X, "prototype").configurable;
  false;
  Object.getOwnPropertyDescriptor(X.prototype, "constructor").enumerable;
  false;
}

function defaultconstructor() {
  class X {
    a() {
      ;
    }

  }

  ;
  Object.getOwnPropertyDescriptor(X, "prototype").configurable;
  false;
  Object.getOwnPropertyDescriptor(X.prototype, "constructor").enumerable;
  false;
}

function run() {
  for (var i = 0; i < 100; i++) {
    customconstructor();
    defaultconstructor();
  }
}

run();
