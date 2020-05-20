function assert(b) {
  ;
}

{
  let target = {};
  let error = null;
  let handler = {
    get getPrototypeOf() {
      ;
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      let threw = false;

      try {
        get();
      } catch (e) {
        e === error;
        threw = true;
      }

      threw;
    }
  }
}
{
  let target = {};
  let error = null;
  let handler = {
    getPrototypeOf: function () {
      ;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      let threw = false;

      try {
        get();
      } catch (e) {
        e === error;
        threw = true;
      }

      threw;
    }
  }
}
{
  let error = null;
  let target = new Proxy({}, {
    isExtensible: function () {
      ;
    }
  });
  let handler = {
    getPrototypeOf: function () {
      return target.__proto__;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      let threw = false;

      try {
        get();
      } catch (e) {
        e === error;
        threw = true;
      }

      threw;
    }
  }
}
{
  let target = {};
  let handler = {
    getPrototypeOf: 25
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      let threw = false;

      try {
        get();
      } catch (e) {
        e.toString() === "TypeError: 'getPrototypeOf' property of a Proxy's handler should be callable";
        threw = true;
      }

      threw;
    }
  }
}
{
  let target = {};
  let handler = {
    getPrototypeOf: function () {
      return 25;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      let threw = false;

      try {
        get();
      } catch (e) {
        e.toString() === "TypeError: Proxy handler's 'getPrototypeOf' trap should either return an object or null";
        threw = true;
      }

      threw;
    }
  }
}
{
  let target = {};
  let handler = {
    getPrototypeOf: function () {
      return Symbol();
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      let threw = false;

      try {
        get();
      } catch (e) {
        e.toString() === "TypeError: Proxy handler's 'getPrototypeOf' trap should either return an object or null";
        threw = true;
      }

      threw;
    }
  }
}
{
  let target = {};
  Reflect.preventExtensions(target);
  let handler = {
    getPrototypeOf: function () {
      return null;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      let threw = false;

      try {
        get();
      } catch (e) {
        e.toString() === "TypeError: Proxy's 'getPrototypeOf' trap for a non-extensible target should return the same value as the target's prototype";
        threw = true;
      }

      threw;
    }
  }
}
{
  let notProto = {};
  let target = {};
  Reflect.preventExtensions(target);
  let handler = {
    getPrototypeOf: function () {
      return notProto;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      let threw = false;

      try {
        get();
      } catch (e) {
        e.toString() === "TypeError: Proxy's 'getPrototypeOf' trap for a non-extensible target should return the same value as the target's prototype";
        threw = true;
      }

      threw;
    }
  }
}
{
  let target = {};
  Reflect.preventExtensions(target);
  let called = false;
  let handler = {
    getPrototypeOf: function () {
      called = true;
      return Object.prototype;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      let result = get();
      result === Object.prototype;
      called;
      called = false;
    }
  }
}
{
  let target = {};
  let theProto = {
    x: 45
  };
  target.__proto__ = theProto;
  Reflect.preventExtensions(target);
  let called = false;
  let handler = {
    getPrototypeOf: function (theTarget) {
      theTarget === target;
      called = true;
      return Reflect.getPrototypeOf(theTarget);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      let result = get();
      result === theProto;
      called;
      called = false;
    }
  }
}
{
  let target = {};
  let handler = {
    getPrototypeOf: null
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let proto = Object.prototype;
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      get() === proto;
    }
  }
}
{
  let target = {};
  let proto = {};
  let called = false;
  let handler = {
    getPrototypeOf: function (theTarget) {
      theTarget === target;
      called = true;
      return proto;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      get() === proto;
      called;
      called = false;
    }
  }
}
{
  let target = {};
  let proto = null;
  let called = false;
  let handler = {
    getPrototypeOf: function (theTarget) {
      theTarget === target;
      called = true;
      return proto;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      get() === proto;
      called;
      called = false;
    }
  }
}
{
  let target = {};
  let proto = null;
  let called = false;
  let handler = {
    getPrototypeOf: function (theTarget) {
      theTarget === target;
      called = true;
      return proto;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let getters = [() => Reflect.getPrototypeOf(proxy), () => Object.getPrototypeOf(proxy)];

    for (let get of getters) {
      get() === proto;
      called;
      called = false;
    }
  }
}
{
  let target = {};
  let proto = null;
  let called = false;
  let handler = {
    getPrototypeOf: function (theTarget) {
      theTarget === target;
      called = true;
      return proto;
    },
    has: function () {
      return false;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = "x" in proxy;
    called;
    called = false;
  }
}
{
  let target = {};
  let proto = null;
  let called = false;
  let handler = {
    getPrototypeOf: function (theTarget) {
      called = true;
      return proto;
    },
    has: function () {
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = "x" in proxy;
    !called;
  }
}
