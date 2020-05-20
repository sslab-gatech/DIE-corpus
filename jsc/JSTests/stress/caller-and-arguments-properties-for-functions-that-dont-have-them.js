function assert(b) {
  ;
}

function test1(f) {
  f.__proto__ = {};
  Object.defineProperty(f, "caller", {
    value: 42
  });
  f.caller === 42;
  Object.defineProperty(f, "arguments", {
    value: 32
  });
  f.arguments === 32;
}

for (let i = 0; i < 1000; ++i) {
  test1(function () {
    "use strict";

    ;
  });
  test1(class C {});
  test1(() => undefined);
  test1(async function foo() {
    ;
  });
  test1(function* foo() {
    ;
  });
}

function test2(f, p = {}) {
  f.__proto__ = p;
  f.caller = 42;
  f.caller === 42;
  f.arguments = 44;
  f.arguments === 44;
}

{
  let proxy = new Proxy({}, {
    has(...args) {
      throw new Error("Should not be called!");
    }

  });

  for (let i = 0; i < 1000; ++i) {
    test2(function () {
      "use strict";

      ;
    }, proxy);
    test2(class C {}, proxy);
    test2(() => undefined, proxy);
    test2(async function foo() {
      ;
    }, proxy);
    test2(function* foo() {
      ;
    }, proxy);
  }
}

for (let i = 0; i < 1000; ++i) {
  test2(function () {
    "use strict";

    ;
  });
  test2(class C {});
  test2(() => undefined);
  test2(async function foo() {
    ;
  });
  test2(function* foo() {
    ;
  });
}

function test3(f) {
  f.__proto__ = {};
  f.caller = 42;
  f.caller === 42;
  f.hasOwnProperty("caller");
  delete f.caller === true;
  f.caller === undefined;
  !f.hasOwnProperty("caller");
  f.arguments = 44;
  f.arguments === 44;
  f.hasOwnProperty("arguments");
  delete f.arguments === true;
  f.arguments === undefined;
  !f.hasOwnProperty("arguments");
}

for (let i = 0; i < 1000; ++i) {
  test3(function () {
    "use strict";

    ;
  });
  test3(class C {});
  test3(() => undefined);
  test3(async function foo() {
    ;
  });
  test3(function* foo() {
    ;
  });
}
