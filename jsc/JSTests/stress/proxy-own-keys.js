function assert(b) {
  ;
}

{
  let error = null;
  let target = {};
  let handler = {
    ownKeys: function () {
      ;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Object.keys(proxy);
    } catch (e) {
      threw = true;
      e === error;
    }

    threw;
  }
}
{
  let error = null;
  let target = {};
  let handler = {
    get ownKeys() {
      ;
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Object.keys(proxy);
    } catch (e) {
      threw = true;
      e === error;
    }

    threw;
  }
}
{
  let target = {
    x: 40
  };
  let called = false;
  let handler = {
    ownKeys: function (theTarget) {
      called = true;
      return ["1", 2, 3];
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Object.keys(proxy);
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy handler's 'ownKeys' method must return an array-like object containing only Strings and Symbols";
    }

    threw;
    called;
    called = false;
  }
}
{
  let target = {};
  Object.defineProperty(target, "x", {
    configurable: false,
    enumerable: true,
    value: 400
  });
  let called = false;
  let handler = {
    ownKeys: function (theTarget) {
      called = true;
      return [];
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Object.keys(proxy);
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy object's 'target' has the non-configurable property 'x' that was not in the result from the 'ownKeys' trap";
    }

    threw;
    called;
    called = false;
  }
}
{
  let target = {};
  Object.defineProperty(target, "x", {
    configurable: true,
    enumerable: true,
    value: 400
  });
  Object.preventExtensions(target);
  let called = false;
  let handler = {
    ownKeys: function (theTarget) {
      called = true;
      return [];
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Object.keys(proxy);
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy object's non-extensible 'target' has configurable property 'x' that was not in the result from the 'ownKeys' trap";
    }

    threw;
    called;
    called = false;
  }
}
{
  let target = {};
  Object.defineProperty(target, "x", {
    configurable: true,
    enumerable: true,
    value: 400
  });
  Object.preventExtensions(target);
  let called = false;
  let handler = {
    ownKeys: function (theTarget) {
      called = true;
      return ["x", "y"];
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Object.keys(proxy);
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy handler's 'ownKeys' method returned a key that was not present in its non-extensible target";
    }

    threw;
    called;
    called = false;
  }
}
{
  let target = {};
  let called1 = false;
  let called2 = false;
  Object.defineProperty(target, 'a', {
    value: 42,
    configurable: false
  });
  let p1 = new Proxy(target, {
    ownKeys() {
      called1 = true;
      return ['a', 'a'];
    }

  });
  let p2 = new Proxy(p1, {
    ownKeys() {
      called2 = true;
      return ['a'];
    }

  });

  for (let i = 0; i < 500; i++) {
    // FIXME: we may update the spec to make this test not throw.
    // see: https://github.com/tc39/ecma262/pull/594
    let threw = false;

    try {
      Reflect.ownKeys(p2);
    } catch (e) {
      e.toString() === "TypeError: Proxy object's 'target' has the non-configurable property 'a' that was not in the result from the 'ownKeys' trap";
      threw = true;
    }

    threw;
    called1;
    called2;
  }
}
{
  let target = {};
  let called1 = false;
  let called2 = false;
  Object.defineProperty(target, 'a', {
    value: 42,
    configurable: true
  });
  Object.preventExtensions(target);
  let p1 = new Proxy(target, {
    ownKeys() {
      called1 = true;
      return ['a', 'a'];
    }

  });
  let p2 = new Proxy(p1, {
    ownKeys() {
      called2 = true;
      return ['a'];
    }

  });

  for (let i = 0; i < 500; i++) {
    // FIXME: we may update the spec to make this test not throw.
    // see: https://github.com/tc39/ecma262/pull/594
    let threw = false;

    try {
      Reflect.ownKeys(p2);
    } catch (e) {
      ;
    }

    threw;
    called1;
    called2;
  }
}
{
  let target = {};
  Object.defineProperty(target, "x", {
    configurable: true,
    enumerable: true,
    value: 400
  });
  Object.preventExtensions(target);
  let called = false;
  let handler = {
    ownKeys: function (theTarget) {
      called = true;
      return ["x", "x"];
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    Object.keys(proxy);
    called;
    called = false;
  }
}
{
  let target = {};
  let handler = {
    ownKeys: 45
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Object.keys(proxy);
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: 'ownKeys' property of a Proxy's handler should be callable";
    }

    threw;
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

{
  let target = {
    x: 40
  };
  let called = false;
  let arr = ["a", "b", "c"];
  let handler = {
    ownKeys: function (theTarget) {
      called = true;
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Object.keys(proxy);
    result !== arr;
    shallowEq(result, []);
    called;
    called = false;
  }
}
{
  let target = {
    x: 40
  };
  let called = false;
  let arr = ["a", "b", "c"];
  let handler = {
    getOwnPropertyDescriptor: function (theTarget, propertyName) {
      if (arr.indexOf(propertyName) >= 0) {
        return {
          enumerable: true,
          configurable: true
        };
      }

      return Reflect.getOwnPropertyDescriptor(theTarget, propertyName);
    },
    ownKeys: function (theTarget) {
      called = true;
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Object.keys(proxy);
    result !== arr;
    shallowEq(result, arr);
    called;
    called = false;
  }
}
{
  let target = {
    x: 40
  };
  let called = false;
  let arr = ["a", "b", "c"];
  let handler = {
    ownKeys: function (theTarget) {
      called = true;
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.ownKeys(proxy);
    result !== arr;
    shallowEq(result, arr);
    called;
    called = false;
  }
}
{
  let target = {
    x: 40
  };
  let called = false;
  let s1 = Symbol();
  let s2 = Symbol();
  let arr = ["a", "b", s1, "c", s2];
  let handler = {
    ownKeys: function (theTarget) {
      called = true;
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Object.getOwnPropertySymbols(proxy);
    shallowEq(result, [s1, s2]);
    called;
    called = false;
  }
}
{
  let target = {
    x: 40
  };
  let called = false;
  let s1 = Symbol();
  let s2 = Symbol();
  let arr = ["a", "b", s1, "c", s2];
  let handler = {
    getOwnPropertyDescriptor(theTarget, propertyName) {
      if (arr.indexOf(propertyName) >= 0) {
        return {
          enumerable: true,
          configurable: true
        };
      }

      return Reflect.getOwnPropertyDescriptor(theTarget, propertyName);
    },

    ownKeys: function (theTarget) {
      called = true;
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Object.keys(proxy);
    shallowEq(result, ["a", "b", "c"]);
    called;
    called = false;
  }
}
{
  let target = {
    x: 40
  };
  let called = false;
  let s1 = Symbol();
  let s2 = Symbol();
  let arr = ["a", "b", s1, "c", s2];
  let handler = {
    ownKeys: function (theTarget) {
      called = true;
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.ownKeys(proxy);
    shallowEq(result, ["a", "b", "c", s1, s2]);
    called;
    called = false;
  }
}
{
  let target = {
    x: 40
  };
  let called = false;
  let s1 = Symbol();
  let s2 = Symbol();
  let arr = ["a", "b", s1, "c", s2];
  let handler = {
    getOwnPropertyDescriptor: () => {
      return {
        enumerable: true,
        configurable: true
      };
    },
    ownKeys: function (theTarget) {
      called = true;
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let set = new Set();

    for (let p in proxy) {
      set.add(p);
    }

    set.size === 3;
    set.has("a");
    set.has("b");
    set.has("c");
    called;
    called = false;
  }
}
{
  let target = {
    x: 40
  };
  let called = false;
  let s1 = Symbol();
  let s2 = Symbol();
  let arr = ["a", "b", s1, "c", s2];
  let handler = {
    getOwnPropertyDescriptor: () => {
      return {
        enumerable: true,
        configurable: true
      };
    },
    ownKeys: function (theTarget) {
      called = true;
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let set = new Set();

    for (let p in proxy) {
      set.add(p);
    }

    if (i === 40) {
      // Make sure we don't cache the result.
      arr.push("d");
    }

    set.size === i > 40 ? 4 : 3;
    set.has("a");
    set.has("b");
    set.has("c");

    if (i > 40) {
      set.has("d");
    }

    called;
    called = false;
  }
}
{
  let target = {
    x: 40
  };
  let called = false;
  let s1 = Symbol();
  let s2 = Symbol();
  let arr = ["a", "b", s1, "c", s2];
  let handler = {
    getOwnPropertyDescriptor: () => {
      return {
        enumerable: true,
        configurable: true
      };
    },
    ownKeys: function (theTarget) {
      called = true;
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);
  let proxyish = Object.create(proxy, {
    d: {
      enumerable: true,
      configurable: true
    }
  });

  for (let i = 0; i < 500; i++) {
    let set = new Set();

    for (let p in proxyish) {
      set.add(p);
    }

    set.size === 4;
    set.has("a");
    set.has("b");
    set.has("c");
    set.has("d");
    called;
    called = false;
  }
}
{
  let target = {
    x: 40
  };
  let called = false;
  let s1 = Symbol();
  let s2 = Symbol();
  let arr = ["a", "b", s1, "c", s2];
  let handler = {
    getOwnPropertyDescriptor: () => {
      return {
        enumerable: true,
        configurable: true
      };
    },
    ownKeys: function (theTarget) {
      called = true;
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);
  let proxyish = Object.create(proxy, {
    d: {
      enumerable: true,
      configurable: true
    }
  });

  for (let i = 0; i < 500; i++) {
    let set = new Set();

    for (let p in proxyish) {
      set.add(p);
    }

    set.size === 4;
    set.has("a");
    set.has("b");
    set.has("c");
    set.has("d");
    called;
    called = false;
  }
}
{
  let called = false;
  let target = {
    x: 20,
    y: 40
  };
  let handler = {
    ownKeys: null
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let keys = Object.keys(proxy);
    keys.indexOf("x") !== -1;
    keys.indexOf("y") !== -1;
  }
}
{
  let called = false;
  let target = new Proxy({}, {
    ownKeys: function (theTarget) {
      called = true;
      return Reflect.ownKeys(theTarget);
    }
  });
  let s1 = Symbol();
  let s2 = Symbol();
  let arr = ["a", "b", s1, "c", s2];
  let handler = {
    ownKeys: function (theTarget) {
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let keys = Object.keys(proxy);
    called;
    called = false;
  }
}
{
  let error = null;
  let target = new Proxy({}, {
    ownKeys: function (theTarget) {
      ;
    }
  });
  let s1 = Symbol();
  let s2 = Symbol();
  let arr = ["a", "b", s1, "c", s2];
  let handler = {
    ownKeys: function (theTarget) {
      return arr;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Object.keys(proxy);
    } catch (e) {
      threw = true;
      e === error;
    }

    threw;
    error = null;
  }
}
