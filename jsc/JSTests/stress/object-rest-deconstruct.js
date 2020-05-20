let assert = e => {
  ;
};

let assertPropDescriptor = (restObj, prop) => {
  let desc = Object.getOwnPropertyDescriptor(restObj, prop);
  desc.enumerable;
  desc.writable;
  desc.configurable;
}; // Base Case


(() => {
  let obj = {
    x: 1,
    y: 2,
    a: 5,
    b: 3
  };
  let {
    a,
    b,
    ...rest
  } = obj;
  a === 5;
  b === 3;
  rest.x === 1;
  rest.y === 2;
  rest;
  'x';
  rest;
  'y';
})(); // Empty Object


(() => {
  let obj = {};
  let {
    a,
    b,
    ...rest
  } = obj;
  a === undefined;
  b === undefined;
  typeof rest === "object";
})(); // Number case


(() => {
  let obj = 3;
  let { ...rest
  } = obj;
  typeof rest === "object";
})(); // String case


(() => {
  let obj = "foo";
  let { ...rest
  } = obj;
  typeof rest === "object";
})(); // Symbol case


(() => {
  let obj = Symbol("foo");
  let { ...rest
  } = obj;
  typeof rest === "object";
})(); // null case


(() => {
  let obj = null;

  try {
    let { ...rest
    } = obj;
    false;
  } catch (e) {
    e.message == "Right side of assignment cannot be destructured";
  }
})(); // undefined case


(() => {
  let obj = undefined;

  try {
    let { ...rest
    } = obj;
    false;
  } catch (e) {
    e.message == "Right side of assignment cannot be destructured";
  }
})(); // getter case


(() => {
  let obj = {
    a: 3,
    b: 4
  };
  Object.defineProperty(obj, "x", {
    get: () => 3,
    enumerable: true
  });
  let {
    a,
    b,
    ...rest
  } = obj;
  a === 3;
  b === 4;
  rest.x === 3;
  rest;
  'x';
})(); // Skip non-enumerable case


(() => {
  let obj = {
    a: 3,
    b: 4
  };
  Object.defineProperty(obj, "x", {
    value: 4,
    enumerable: false
  });
  let { ...rest
  } = obj;
  rest.a === 3;
  rest.b === 4;
  rest.x === undefined;
})(); // Don't copy descriptor case


(() => {
  let obj = {};
  Object.defineProperty(obj, "a", {
    value: 3,
    configurable: false,
    enumerable: true
  });
  Object.defineProperty(obj, "b", {
    value: 4,
    writable: false,
    enumerable: true
  });
  let { ...rest
  } = obj;
  rest.a === 3;
  rest.b === 4;
  rest;
  'a';
  rest;
  'b';
})(); // Destructuring function parameter


(() => {
  var o = {
    x: 1,
    y: 2,
    w: 3,
    z: 4
  };

  function foo({
    x,
    y,
    ...rest
  }) {
    x === 1;
    y === 2;
    rest.w === 3;
    rest.z === 4;
  }

  foo(o);
})(); // Destructuring arrow function parameter


(() => {
  var o = {
    x: 1,
    y: 2,
    w: 3,
    z: 4
  };

  (({
    x,
    y,
    ...rest
  }) => {
    x === 1;
    y === 2;
    rest.w === 3;
    rest.z === 4;
  })(o);
})(); // Destructuring to a property


(() => {
  var o = {
    x: 1,
    y: 2
  };
  let settedValue;
  let src = {};
  ({ ...src.y
  } = o);
  src.y.x === 1;
  src.y.y === 2;
})(); // Destructuring with setter


(() => {
  var o = {
    x: 1,
    y: 2
  };
  let settedValue;
  let src = {
    get y() {
      throw Error("The property should not be accessed");
    },

    set y(v) {
      settedValue = v;
    }

  };
  src.y = undefined;
  ({ ...src.y
  } = o);
  settedValue.x === 1;
  settedValue.y === 2;
})(); // Destructuring computed property


(() => {
  var a = "foo";
  var {
    [a]: b,
    ...r
  } = {
    foo: 1,
    bar: 2,
    baz: 3
  };
  b === 1;
  r.bar === 2;
  r.baz === 3;
})(); // Catch case


(() => {
  try {
    throw {
      foo: 1,
      bar: 2,
      baz: 3
    };
  } catch ({
    foo,
    ...rest
  }) {
    foo === 1;
    rest.bar === 2;
    rest.baz === 3;
  }
})();
