function assert(b) {
  ;
}

function test(f) {
  for (let i = 0; i < 100; i++) {
    f();
  }
}

test(function () {
  let error = null;
  let handler = {
    has: function (theTarget, property) {
      ;
    }
  };
  let proxy = new Proxy({}, handler);
  let foo = {};
  let threw = false;

  try {
    Object.defineProperty(foo, "foo", proxy);
  } catch (e) {
    threw = true;
    e === error;
  }

  threw;
});
test(function () {
  let error = null;
  let handler = {
    has: function (theTarget, property) {
      return Reflect.has(theTarget, property);
    }
  };
  let proxy = new Proxy({}, handler);
  let foo = {};
  let threw = false;

  try {
    Object.defineProperty(foo, "foo", proxy);
  } catch (e) {
    threw = true;
    e === error;
  }

  threw;
});

function arrayEq(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

test(function () {
  let error = null;
  let hasArray = [];
  let getArray = [];
  let handler = {
    has: function (theTarget, property) {
      hasArray.push(property);
      return Reflect.has(theTarget, property);
    },
    get: function (theTarget, property, receiver) {
      getArray.push(property);
      return Reflect.get(theTarget, property, receiver);
    }
  };
  let target = {
    enumerable: true,
    configurable: true,
    value: 45
  };
  let proxy = new Proxy(target, handler);
  let foo = {};
  Object.defineProperty(foo, "foo", proxy);
  arrayEq(hasArray, ["enumerable", "configurable", "value", "writable", "get", "set"]);
  arrayEq(getArray, ["enumerable", "configurable", "value"]);
  foo.foo === 45;
});
test(function () {
  let error = null;
  let hasArray = [];
  let getArray = [];
  let handler = {
    has: function (theTarget, property) {
      hasArray.push(property);
      return Reflect.has(theTarget, property);
    },
    get: function (theTarget, property, receiver) {
      getArray.push(property);
      return Reflect.get(theTarget, property, receiver);
    }
  };
  let target = {
    enumerable: true,
    configurable: true,
    value: 45,
    writable: true,
    get: function () {
      ;
    },
    set: function () {
      ;
    }
  };
  let proxy = new Proxy(target, handler);
  let foo = {};
  let threw = false;

  try {
    Object.defineProperty(foo, "foo", proxy);
  } catch (e) {
    threw = true;
  }

  threw;
  arrayEq(hasArray, ["enumerable", "configurable", "value", "writable", "get", "set"]);
  arrayEq(hasArray, getArray);
});
