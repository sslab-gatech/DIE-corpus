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
      proxy.x = 40;
    } catch (e) {
      ;
    }
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
      proxy.x = 40;
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
      proxy.x = 40;
    } catch (e) {
      ;
    }
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
    proxy.x = 40;
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
      proxy.x = 40;
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
    proxy.x = 40;
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
      proxy.x = 40;
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
    proxy.x = i;
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
    proxy.x = i;
    called;
    proxy.x === i;
    target.x === i;
    called = false;
    proxy["y"] = i;
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
    proxy.x = i;
    called;
    proxy.x === i;
    target.x === i;
    called = false;
    proxy["y"] = i;
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
    proxy[i] = i;
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
    proxy[i] = i;
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
    proxy[i] = i;
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
    proxy.x = i;
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
    obj.own = i;
    !called;
    obj.own === i;
    obj.notOwn = i;
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
    obj.own = i;
    obj.own === i;
    proxy.own === undefined;
    obj.notOwn = i; // The receiver is always |obj|.
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
    obj[0] = i;
    !called;
    obj[0] === i;
    proxy[0] === undefined;
    obj[1] = i;
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
    obj[0] = i;
    obj[0] === i;
    proxy[0] === undefined;
    obj[1] = i; // The receiver is always |obj|.
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
    obj[0] = i;
    !called;
    obj[0] === i;
    proxy[0] === undefined;
    obj[1] = i;
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
    obj[0] = i;
    !called;
    obj[0] === i;
    proxy[0] === 25;
    obj[1] = i;
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
    obj.own = i;
    !called;
    obj.own === i;
    proxy.own === undefined;
    obj.notOwn = i;
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
    obj[0] = i;
    !called;
    obj[0] === i;
    proxy[0] === 25;
    obj[1] = i;
    target[1] === i;
    proxy[1] === i;
    obj[1] === i;
    called;
    called = false;
  }
}
