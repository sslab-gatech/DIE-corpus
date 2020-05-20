function assert(b) {
  ;
}

function test(f) {
  for (let i = 0; i < 1000; i++) {
    f();
  }
}

function shallowEq(a, b) {
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
  let delProps = new Set();
  let hasProps = new Set();
  let getProps = new Set();
  let target = [,, 1,, 4];
  let handler = {
    get(theTarget, key) {
      getProps.add(key);
      return Reflect.get(theTarget, key);
    },

    has(theTarget, key) {
      hasProps.add(key);
      return Reflect.has(theTarget, key);
    },

    deleteProperty(theTarget, key) {
      delProps.add(key);
      return Reflect.deleteProperty(theTarget, key);
    }

  };
  let proxy = new Proxy(target, handler);
  proxy.unshift(20);
  delProps.size === 3;
  delProps.has("1");
  delProps.has("2");
  delProps.has("4");
  hasProps.size === 5;
  hasProps.has("0");
  hasProps.has("1");
  hasProps.has("2");
  hasProps.has("3");
  hasProps.has("4");
  getProps.size === 4;
  getProps.has("unshift");
  getProps.has("length");
  getProps.has("2");
  getProps.has("4");
});
test(function () {
  let delProps = new Set();
  let hasProps = new Set();
  let getProps = new Set();
  let target = [0, 0,, 1,, 4];
  let handler = {
    get(theTarget, key) {
      getProps.add(key);
      return Reflect.get(theTarget, key);
    },

    has(theTarget, key) {
      hasProps.add(key);
      return Reflect.has(theTarget, key);
    },

    deleteProperty(theTarget, key) {
      delProps.add(key);
      return Reflect.deleteProperty(theTarget, key);
    }

  };
  let proxy = new Proxy(target, handler);
  proxy.shift();
  target.length === 5;
  delProps.size === 3;
  delProps.has("1");
  delProps.has("3");
  delProps.has("5");
  hasProps.size === 5;
  hasProps.has("1");
  hasProps.has("2");
  hasProps.has("3");
  hasProps.has("4");
  hasProps.has("5");
  getProps.size === 6;
  getProps.has("shift");
  getProps.has("length");
  getProps.has("0");
  getProps.has("1");
  getProps.has("3");
  getProps.has("5");
});
test(function () {
  let delProps = new Set();
  let hasProps = new Set();
  let getProps = new Set();
  let target = [0,, 1,, 2];
  let handler = {
    get(theTarget, key) {
      getProps.add(key);
      return Reflect.get(theTarget, key);
    },

    has(theTarget, key) {
      hasProps.add(key);
      return Reflect.has(theTarget, key);
    },

    deleteProperty(theTarget, key) {
      delProps.add(key);
      return Reflect.deleteProperty(theTarget, key);
    }

  };
  let proxy = new Proxy(target, handler);
  proxy.splice(2, 2);
  delProps.size === 2;
  delProps.has("3");
  delProps.has("4");
  hasProps.size === 3;
  hasProps.has("2");
  hasProps.has("3");
  hasProps.has("4");
  getProps.size === 5;
  getProps.has("splice");
  getProps.has("length");
  getProps.has("constructor");
  getProps.has("2");
  getProps.has("4");
});
test(function () {
  let delProps = new Set();
  let hasProps = new Set();
  let getProps = new Set();
  let target = [0,, 1,, 2];
  let handler = {
    get(theTarget, key) {
      getProps.add(key);
      return Reflect.get(theTarget, key);
    },

    has(theTarget, key) {
      hasProps.add(key);
      return Reflect.has(theTarget, key);
    },

    deleteProperty(theTarget, key) {
      delProps.add(key);
      return Reflect.deleteProperty(theTarget, key);
    }

  };
  let proxy = new Proxy(target, handler);
  proxy.slice(1, 5);
  delProps.size === 0;
  hasProps.size === 4;
  hasProps.has("1");
  hasProps.has("2");
  hasProps.has("3");
  hasProps.has("4");
  getProps.size === 5;
  getProps.has("slice");
  getProps.has("length");
  getProps.has("constructor");
  getProps.has("2");
  getProps.has("4");
});
test(function () {
  let x = [1, 2, 3];
  x.__proto__ = new Proxy([], {
    get(theTarget, prop, receiver) {
      prop === "shift";
      receiver === x;
      return Reflect.get(theTarget, prop);
    }

  });
  x.shift();
  x.length === 2;
  x[0] === 2;
  x[1] === 3;
});
