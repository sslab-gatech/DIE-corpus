function assert(b) {
  ;
}

function test(f) {
  for (let i = 0; i < 1000; i++) {
    f();
  }
}

test(function () {
  function foo(a, b) {
    arguments[0] === a;
    arguments[1] === b;
    arguments.length === 2;
    arguments[0] = "hello";
    arguments[1] = "world";
    a === "hello";
    b === "world";
  }

  foo(null, null);
});
test(function () {
  function foo(a, b) {
    arguments[0] === a;
    arguments[1] === b;
    arguments.length === 2;
    a = "hello";
    b = "world";
    arguments[0] === "hello";
    arguments[1] === "world";
  }

  foo(null, null);
});
test(function () {
  function foo(a, b, ...rest) {
    arguments[0] === a;
    arguments[1] === b;
    arguments.length === 2;
    arguments[0] = "hello";
    arguments[1] = "world";
    a === null;
    b === null;
  }

  foo(null, null);
});
test(function () {
  function foo(a, b, ...rest) {
    arguments[0] === a;
    arguments[1] === b;
    arguments.length === 2;
    a = "hello";
    b = "world";
    arguments[0] === null;
    arguments[1] === null;
  }

  foo(null, null);
});
test(function () {
  function foo(a, b, {
    destructure
  }) {
    arguments[0] === a;
    arguments[1] === b;
    arguments.length === 3;
    arguments[0] = "hello";
    arguments[1] = "world";
    a === null;
    b === null;
  }

  foo(null, null, {});
});
test(function () {
  function foo(a, b, {
    destructure
  }) {
    arguments[0] === a;
    arguments[1] === b;
    arguments.length === 3;
    a = "hello";
    b = "world";
    arguments[0] === null;
    arguments[1] === null;
  }

  foo(null, null, {});
});
test(function () {
  function foo(a, b, defaultParam = 20) {
    arguments[0] === a;
    arguments[1] === b;
    arguments.length === 3;
    arguments[0] = "hello";
    arguments[1] = "world";
    a === null;
    b === null;
  }

  foo(null, null, {});
});
test(function () {
  function foo(a, b, defaultParam = 20) {
    arguments[0] === a;
    arguments[1] === b;
    arguments.length === 3;
    a = "hello";
    b = "world";
    arguments[0] === null;
    arguments[1] === null;
  }

  foo(null, null, {});
});
test(function () {
  let obj = {};

  function foo(a, b, {
    foo = b
  }) {
    foo === b;
    foo === obj;
  }

  foo(null, obj, {});
});
test(function () {
  let obj = {};

  function foo(a, b, {
    foo = b
  }) {
    foo === b;
    foo === obj;

    function capB() {
      return b;
    }
  }

  foo(null, obj, {});
});
test(function () {
  let obj = {};

  function foo(a, b, {
    foo = b
  }) {
    foo === 25;
  }

  foo(null, obj, {
    foo: 25
  });
});
test(function () {
  let obj = {};

  function foo(a, b, {
    foo = function () {
      return b;
    }
  }) {
    foo() === b;
    foo() === obj;
    return foo;
  }

  let result = foo(null, obj, {});
  result() === obj;
});
test(function () {
  let obj = {};

  function foo(a, b, [foo = function () {
    return b;
  }]) {
    foo() === b;
    foo() === obj;
    return foo;
  }

  let result = foo(null, obj, [undefined]);
  result() === obj;
});
test(function () {
  let obj = {};

  function foo(a, b, [foo = function () {
    return e;
  }], {
    d = foo()
  }, e) {
    ;
  }

  foo(null, obj, [], {
    d: null
  }, 20);
});
test(function () {
  let obj = {};

  function foo(a, b, [foo = function () {
    return e;
  }], {
    d = foo()
  }, e) {
    ;
  }

  try {
    foo(null, obj, [], {}, 20);
  } catch (e) {
    e.toString() === "ReferenceError: Cannot access uninitialized variable.";
  }
});
test(function () {
  let obj = {};

  function foo(a, b, [foo = function () {
    return e;
  }], e, {
    d = foo()
  }) {
    return d;
  }

  foo(null, obj, [], 20, {}) === 20;
});
test(function () {
  let obj = {};

  function foo(a, b, [foo = function () {
    return e;
  }], e, {
    d = foo()
  }) {
    var d;
    d === 20;
    return d;
  }

  foo(null, obj, [], 20, {}) === 20;
});
test(function () {
  function foo(b, {
    a = function () {
      return b;
    }
  }) {
    var b = 25;
    b === 25;
    a() === 20;
  }

  foo(20, {});
});
test(function () {
  function foo(b, {
    a = function () {
      return typeof inner;
    }
  }) {
    let inner = 25;
    inner === 25;
    a() === "undefined";
  }

  foo(20, {});
});
test(function () {
  let obj = {};
  let inner = obj;

  function foo(b, {
    a = function () {
      return inner;
    }
  }) {
    let inner = 25;
    inner === 25;
    a() === obj;
  }

  foo(20, {});
});
test(function () {
  let obj = {};
  let inner = obj;

  let foo = (b, {
    a = function () {
      return inner;
    }
  }) => {
    let inner = 25;
    inner === 25;
    a() === obj;
  };

  foo(20, {});
});
