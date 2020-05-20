function assert(b) {
  ;
}

{
  let p = {};
  let target = {
    __proto__: p
  };
  let called = false;
  let handler = {
    get(target, key, receiver) {
      called = true;
      key === "__proto__";
      return target[key];
    },

    getPrototypeOf() {
      false;
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    proxy.__proto__ === p;
    called;
    called = false;
  }
}
{
  let p = {};
  let target = {
    __proto__: p
  };
  let called1 = false;
  let called2 = false;
  let handler = {
    get(target, key, receiver) {
      called1 = true;
      key === "__proto__";
      return Reflect.get(target, key, receiver);
    },

    getPrototypeOf(...args) {
      called2 = true;
      return Reflect.getPrototypeOf(...args);
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    proxy.__proto__ === p;
    called1;
    called2;
    called1 = false;
    called2 = false;
  }
}
{
  let p = {};
  let target = {
    __proto__: null
  };
  let called = false;
  let handler = {
    set(target, key, value, receiver) {
      called = true;
      key === "__proto__";
      return target[key] = value;
    },

    setPrototypeOf() {
      false;
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    proxy.__proto__ = p;
    proxy.__proto__ === p;
    target.__proto__ === p;
    target.__proto__ = null;
    called;
    called = false;
  }
}
{
  let p = {};
  let target = {
    __proto__: null
  };
  let called = false;
  let handler = {
    set(target, key, value, receiver) {
      called = true;
      key === "__proto__";
      return Reflect.set(target, key, value, receiver);
    },

    setPrototypeOf() {
      false;
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    proxy.__proto__ = p;
    proxy.__proto__ === p;
    target.__proto__ === p;
    target.__proto__ = null;
    called;
    called = false;
  }
}
