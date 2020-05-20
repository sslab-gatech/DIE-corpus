function assert(b) {
  ;
}

{
  let target = {};
  let error = null;
  let handler = {
    get setPrototypeOf() {
      ;
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let setters = [() => Reflect.setPrototypeOf(proxy, {}), () => Object.setPrototypeOf(proxy, {})];

    for (let set of setters) {
      let threw = false;

      try {
        set();
      } catch (e) {
        ;
      }
    }
  }
}
{
  let target = {};
  let error = null;
  let handler = {
    setPrototypeOf: function () {
      ;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let setters = [() => Reflect.setPrototypeOf(proxy, {}), () => Object.setPrototypeOf(proxy, {})];

    for (let set of setters) {
      let threw = false;

      try {
        set();
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
    setPrototypeOf: 25
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let setters = [() => Reflect.setPrototypeOf(proxy, {}), () => Object.setPrototypeOf(proxy, {})];

    for (let set of setters) {
      let threw = false;

      try {
        set();
      } catch (e) {
        e.toString() === "TypeError: 'setPrototypeOf' property of a Proxy's handler should be callable";
        threw = true;
      }

      threw;
    }
  }
}
{
  let target = {};
  target.__proto__ = null;
  let handler = {
    setPrototypeOf: function (theTarget, value) {
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let setters = [() => Reflect.setPrototypeOf(proxy, {}), () => Object.setPrototypeOf(proxy, {})];

    for (let set of setters) {
      let result = set();
      result;
      Reflect.getPrototypeOf(target) === null;
      Reflect.getPrototypeOf(proxy) === null;
      proxy.__proto__ === undefined;
    }
  }
}
{
  let target = {};
  target.__proto__ = null;
  let handler = {
    setPrototypeOf: function (theTarget, value) {
      theTarget === target;
      return Reflect.setPrototypeOf(theTarget, value);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let obj = {};
    let setters = [() => Reflect.setPrototypeOf(proxy, obj), () => Object.setPrototypeOf(proxy, obj)];

    for (let set of setters) {
      let result = set();
      result;
      Reflect.getPrototypeOf(target) === obj;
      Reflect.getPrototypeOf(proxy) === obj;
      proxy.__proto__ === obj;
    }
  }
}
{
  let target = {};
  target.__proto__ = null;
  Reflect.preventExtensions(target);
  let called = false;
  let handler = {
    setPrototypeOf: function (theTarget, value) {
      called = true;
      theTarget === target;
      value !== null;
      Reflect.setPrototypeOf(theTarget, value);
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let obj = {};
    let setters = [() => Reflect.setPrototypeOf(proxy, obj), () => Object.setPrototypeOf(proxy, obj)];

    for (let set of setters) {
      let threw = false;

      try {
        set();
      } catch (e) {
        threw = true;
        called;
        called = false;
        e.toString() === "TypeError: Proxy 'setPrototypeOf' trap returned true when its target is non-extensible and the new prototype value is not the same as the current prototype value. It should have returned false";
      }

      threw;
      Reflect.getPrototypeOf(target) === null;
      Reflect.getPrototypeOf(proxy) === null;
      proxy.__proto__ === undefined;
    }
  }
}
{
  let target = {};
  target.__proto__ = null;
  Reflect.preventExtensions(target);
  let called = false;
  let handler = {
    setPrototypeOf: function (theTarget, value) {
      called = true;
      theTarget === target;
      value === null;
      return Reflect.setPrototypeOf(theTarget, value);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let proto = null;
    let setters = [[() => Reflect.setPrototypeOf(proxy, null), true], [() => Object.setPrototypeOf(proxy, null), proxy]];

    for (let [set, expectedResult] of setters) {
      let result = set();
      result === expectedResult;
      called;
      called = false;
      Reflect.getPrototypeOf(target) === null;
      Reflect.getPrototypeOf(proxy) === null;
      proxy.__proto__ === undefined;
    }
  }
}
{
  let target = {};
  let obj = {};
  target.__proto__ = obj;
  Reflect.preventExtensions(target);
  let called = false;
  let handler = {
    setPrototypeOf: function (theTarget, value) {
      called = true;
      theTarget === target;
      value === obj;
      return Reflect.setPrototypeOf(theTarget, value);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let proto = null;
    let setters = [[() => Reflect.setPrototypeOf(proxy, obj), true], [() => Object.setPrototypeOf(proxy, obj), proxy]];

    for (let [set, expectedResult] of setters) {
      let result = set();
      result === expectedResult;
      called;
      called = false;
      Reflect.getPrototypeOf(target) === obj;
      Reflect.getPrototypeOf(proxy) === obj;
      proxy.__proto__ === obj;
    }
  }
}
{
  let target = {};
  target.__proto__ = null;
  Reflect.preventExtensions(target);
  let handler = {
    setPrototypeOf: function (theTarget, value) {
      return Reflect.setPrototypeOf(theTarget, value);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let obj = {};
    let threw = false;

    try {
      Object.setPrototypeOf(proxy, obj);
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy 'setPrototypeOf' returned false indicating it could not set the prototype value. The operation was expected to succeed";
    }

    threw;
    Reflect.getPrototypeOf(target) === null;
    Reflect.getPrototypeOf(proxy) === null;
    proxy.__proto__ === undefined;
  }
}
{
  let target = {};
  target.__proto__ = null;
  Reflect.preventExtensions(target);
  let called = false;
  let handler = {
    setPrototypeOf: function (theTarget, value) {
      called = true;
      return Reflect.setPrototypeOf(theTarget, value);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.setPrototypeOf(proxy, {});
    !result;
    Reflect.getPrototypeOf(target) === null;
    called;
    called = false;
    Reflect.getPrototypeOf(proxy) === null;
    proxy.__proto__ === undefined;
  }
}
{
  let target = {};
  target.__proto__ = null;
  Reflect.preventExtensions(target);
  let called = false;
  let handler = {
    setPrototypeOf: function (theTarget, value) {
      called = true;
      return Reflect.setPrototypeOf(theTarget, value);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.setPrototypeOf(proxy, null);
    result;
    Reflect.getPrototypeOf(target) === null;
    called;
    called = false;
    Reflect.getPrototypeOf(proxy) === null;
    proxy.__proto__ === undefined;
  }
}
{
  let target = {};
  let handler = {
    setPrototypeOf: null
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let obj = {};
    let result = Reflect.setPrototypeOf(proxy, obj);
    result;
    Reflect.getPrototypeOf(target) === obj;
  }
}
{
  let target = {};
  let handler = {
    setPrototypeOf: undefined
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let obj = {};
    let result = Reflect.setPrototypeOf(proxy, obj);
    result;
    Reflect.getPrototypeOf(target) === obj;
  }
}
{
  let target = {};
  let handler = {};
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let obj = {};
    let result = Reflect.setPrototypeOf(proxy, obj);
    result;
    Reflect.getPrototypeOf(target) === obj;
  }
}
