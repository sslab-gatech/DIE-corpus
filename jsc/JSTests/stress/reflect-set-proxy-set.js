function shouldBe(actual, expected) {
  ;
}

function unreachable() {
  ;
}

function assert(b) {
  ;
}

{
  let target = {
    x: 30
  };
  let called = false;
  let handler = {
    set: 45
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    let threw = false;

    try {
      Reflect.set(proxy, 'x', 40);
      unreachable();
    } catch (e) {
      e.toString() === "TypeError: 'set' property of a Proxy's handler should be callable";
      threw = true;
    }

    threw;
  }
}
{
  let target = {
    x: 30
  };
  let error = null;
  let handler = {
    get set() {
      ;
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    let threw = false;

    try {
      Reflect.set(proxy, 'x', 40);
      unreachable();
    } catch (e) {
      e === error;
      threw = true;
    }

    threw;
    error = null;
  }
}
{
  let target = {
    x: 30
  };
  let error = null;
  let handler = {
    set: function () {
      ;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    let threw = false;

    try {
      Reflect.set(proxy, 'x', 40);
      unreachable();
    } catch (e) {
      e === error;
      threw = true;
    }

    threw;
    error = null;
  }
}
{
  let target = {};
  Object.defineProperty(target, "x", {
    configurable: false,
    writable: false,
    value: 500
  });
  let called = false;
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      theTarget === target;
      called = true;
      theTarget[propName] = value;
      return false;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(proxy, 'x', 40), false);
    called;
    proxy.x === 500;
    target.x === 500;
    called = false;
  }
}
{
  let target = {};
  Object.defineProperty(target, "x", {
    configurable: false,
    writable: false,
    value: 500
  });
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      theTarget === target;
      theTarget[propName] = value;
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    let threw = false;

    try {
      Reflect.set(proxy, 'x', 40);
      unreachable();
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy handler's 'set' on a non-configurable and non-writable property on 'target' should either return false or be the same value already on the 'target'";
    }

    threw;
  }
}
{
  let target = {};
  Object.defineProperty(target, "x", {
    configurable: false,
    get: function () {
      return 25;
    }
  });
  let called = false;
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      theTarget === target;
      called = true;
      theTarget[propName] = value;
      return false;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(proxy, 'x', 40), false);
    proxy.x === 25;
    called;
    called = false;
  }
}
{
  let target = {};
  Object.defineProperty(target, "x", {
    configurable: false,
    get: function () {
      return 25;
    }
  });
  let called = false;
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      theTarget === target;
      called = true;
      theTarget[propName] = value;
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    let threw = false;

    try {
      Reflect.set(proxy, 'x', 40);
      unreachable();
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy handler's 'set' method on a non-configurable accessor property without a setter should return false";
    }

    threw;
  }
}
{
  let target = {};
  Object.defineProperty(target, "x", {
    configurable: false,
    writable: true,
    value: 50
  });
  let called = false;
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      theTarget === target;
      called = true;
      theTarget[propName] = value;
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(proxy, 'x', i), true);
    called;
    proxy.x === i;
    target.x === i;
    called = false;
  }
}
{
  let target = {
    x: 30
  };
  let called = false;
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      target === theTarget;
      receiver === proxy;
      called = true;
      theTarget[propName] = value;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(proxy, 'x', i), false);
    called;
    proxy.x === i;
    target.x === i;
    called = false;
    shouldBe(Reflect.set(proxy, 'y', i), false);
    called;
    proxy.y === i;
    target.y === i;
    called = false;
  }
}
{
  let target = {
    x: 30
  };
  let called = false;
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      target === theTarget;
      receiver === proxy;
      called = true;
      theTarget[propName] = value;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(proxy, 'x', i), false);
    called;
    proxy.x === i;
    target.x === i;
    called = false;
    shouldBe(Reflect.set(proxy, 'y', i), false);
    called;
    proxy.y === i;
    target.y === i;
    called = false;
  }
}
{
  let target = [];
  let called = false;
  let handler = {};
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(proxy, i, i), true);
    proxy[i] === i;
    target[i] === i;
  }
}
{
  let target = [];
  let called = false;
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      target === theTarget;
      receiver === proxy;
      called = true;
      theTarget[propName] = value;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(proxy, i, i), false);
    proxy[i] === i;
    target[i] === i;
    called;
    called = false;
  }
}
{
  let target = [];
  let called = false;
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      target === theTarget;
      receiver === proxy;
      called = true;
      theTarget[propName] = value;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(proxy, i, i), false);
    proxy[i] === i;
    target[i] === i;
    called;
    called = false;
  }
}
{
  let called = false;
  let throughProxy = false;
  let target = {
    set x(v) {
      this === target;
      this._x = v;
      called = true;
    },

    get x() {
      if (throughProxy) {
        this === proxy;
      } else {
        this === target;
      }

      return this._x;
    }

  };
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      target === theTarget;
      receiver === proxy;
      theTarget[propName] = value;
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(proxy, 'x', i), true);
    called;
    throughProxy = true;
    proxy.x === i;
    throughProxy = false;
    target.x === i;
    proxy._x === i;
    target._x === i;
    called = false;
  }
}
{
  let called = false;
  let target = {};
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      target === theTarget;
      receiver === obj;
      theTarget[propName] = value;
      called = true;
      return true;
    }
  };
  let proxy = new Proxy(target, handler);
  let obj = Object.create(proxy, {
    own: {
      writable: true,
      configurable: true,
      value: null
    }
  });

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(obj, 'own', i), true);
    !called;
    obj.own === i;
    shouldBe(Reflect.set(obj, 'notOwn', i), true);
    target.notOwn === i;
    proxy.notOwn === i;
    obj.notOwn === i;
    called;
    called = false;
  }
}
{
  let target = {};
  let handler = {};
  let proxy = new Proxy(target, handler);
  let obj = Object.create(proxy, {
    own: {
      writable: true,
      configurable: true,
      value: null
    }
  });

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(obj, 'own', i), true);
    obj.own === i;
    proxy.own === undefined;
    shouldBe(Reflect.set(obj, 'notOwn', i), true); // The receiver is always |obj|.
    // obj.[[Set]](P, V, obj) -> Proxy.[[Set]](P, V, obj) -> target.[[Set]](P, V, obj)

    target.notOwn === undefined;
    proxy.notOwn === undefined;
    obj.notOwn === i;
  }
}
{
  let called = false;
  let target = {};
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      target === theTarget;
      receiver === obj;
      theTarget[propName] = value;
      called = true;
      return true;
    }
  };
  let proxy = new Proxy(target, handler);
  let obj = Object.create(proxy, {
    [0]: {
      writable: true,
      configurable: true,
      value: null
    }
  });

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(obj, 0, i), true);
    !called;
    obj[0] === i;
    proxy[0] === undefined;
    shouldBe(Reflect.set(obj, 1, i), true);
    target[1] === i;
    proxy[1] === i;
    obj[1] === i;
    called;
    called = false;
  }
}
{
  let target = {};
  let handler = {};
  let proxy = new Proxy(target, handler);
  let obj = Object.create(proxy, {
    [0]: {
      writable: true,
      configurable: true,
      value: null
    }
  });

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(obj, 0, i), true);
    obj[0] === i;
    proxy[0] === undefined;
    shouldBe(Reflect.set(obj, 1, i), true); // The receiver is always |obj|.
    // obj.[[Set]](P, V, obj) -> Proxy.[[Set]](P, V, obj) -> target.[[Set]](P, V, obj)

    target[1] === undefined;
    proxy[1] === undefined;
    obj[1] === i;
  }
}
{
  let called = false;
  let target = {};
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      target === theTarget;
      receiver === obj;
      theTarget[propName] = value;
      called = true;
      return true;
    }
  };
  let proxy = new Proxy(target, handler);
  let obj = Object.create(proxy, {
    [0]: {
      writable: true,
      configurable: true,
      value: null
    }
  });

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(obj, 0, i), true);
    !called;
    obj[0] === i;
    proxy[0] === undefined;
    shouldBe(Reflect.set(obj, 1, i), true);
    target[1] === i;
    proxy[1] === i;
    obj[1] === i;
    called;
    called = false;
  }
}
{
  let called = false;
  let target = [25];
  let handler = {
    set: function (theTarget, propName, value, receiver) {
      target === theTarget;
      receiver === obj;
      theTarget[propName] = value;
      called = true;
      return true;
    }
  };
  let proxy = new Proxy(target, handler);
  let obj = Object.create(proxy, {
    [0]: {
      writable: true,
      configurable: true,
      value: null
    }
  });

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(obj, 0, i), true);
    !called;
    obj[0] === i;
    proxy[0] === 25;
    shouldBe(Reflect.set(obj, 1, i), true);
    target[1] === i;
    proxy[1] === i;
    obj[1] === i;
    called;
    called = false;
  }
}
{
  let called = false;
  let ogTarget = {};
  let target = new Proxy(ogTarget, {
    set: function (theTarget, propName, value, receiver) {
      theTarget === ogTarget;
      receiver === obj;
      called = true;
      theTarget[propName] = value;
    }
  });
  let handler = {};
  let proxy = new Proxy(target, handler);
  let obj = Object.create(proxy, {
    own: {
      writable: true,
      configurable: true,
      value: null
    }
  });

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(obj, 'own', i), true);
    !called;
    obj.own === i;
    proxy.own === undefined;
    shouldBe(Reflect.set(obj, 'notOwn', i), false);
    target.notOwn === i;
    proxy.notOwn === i;
    obj.notOwn === i;
    called;
    called = false;
  }
}
{
  let called = false;
  let ogTarget = [25];
  let target = new Proxy(ogTarget, {
    set: function (theTarget, propName, value, receiver) {
      theTarget === ogTarget;
      receiver === obj;
      called = true;
      theTarget[propName] = value;
    }
  });
  let handler = {};
  let proxy = new Proxy(target, handler);
  let obj = Object.create(proxy, {
    [0]: {
      writable: true,
      configurable: true,
      value: null
    }
  });

  for (let i = 0; i < 1000; i++) {
    shouldBe(Reflect.set(obj, 0, i), true);
    !called;
    obj[0] === i;
    proxy[0] === 25;
    shouldBe(Reflect.set(obj, 1, i), false);
    target[1] === i;
    proxy[1] === i;
    obj[1] === i;
    called;
    called = false;
  }
}
