function assert(b) {
  ;
}

{
  let target = {
    x: 20
  };
  let error = null;
  let handler = {
    get deleteProperty() {
      error = new Error();
      throw error;
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      delete proxy.x;
    } catch (e) {
      e === error;
      threw = true;
    }

    threw;
  }
}
{
  let target = {
    x: 20
  };
  let error = null;
  let handler = {
    deleteProperty: function () {
      error = new Error();
      throw error;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      delete proxy.x;
    } catch (e) {
      e === error;
      threw = true;
    }

    threw;
  }
}
{
  let target = {
    x: 20
  };
  let error = null;
  let handler = {
    deleteProperty: 45
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      delete proxy.x;
    } catch (e) {
      e.toString() === "TypeError: 'deleteProperty' property of a Proxy's handler should be callable";
      threw = true;
    }

    threw;
  }
}
{
  let target = {};
  Object.defineProperty(target, "x", {
    configurable: false,
    value: 25
  });
  let error = null;
  let handler = {
    deleteProperty: function (theTarget, propName) {
      delete theTarget[propName];
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      delete proxy.x;
    } catch (e) {
      e.toString() === "TypeError: Proxy handler's 'deleteProperty' method should return false when the target's property is not configurable";
      threw = true;
    }

    threw;
  }
}
{
  let target = {};
  let error = null;
  let handler = {
    deleteProperty: null
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    target.x = i;
    proxy.x === i;
    let result = delete proxy.x;
    result;
    proxy.x === undefined;
  }
}
{
  let target = {};
  let error = null;
  let handler = {
    deleteProperty: undefined
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    target[i] = i;
    proxy[i] === i;
    let result = delete proxy[i];
    result;
    proxy[i] === undefined;
  }
}
{
  let target = {};
  let called = false;
  let handler = {
    deleteProperty: function (theTarget, propName) {
      called = true;
      theTarget === target;
      propName === "x";
      return delete theTarget[propName];
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    target.x = i;
    proxy.x === i;
    let result = delete proxy.x;
    result;
    proxy.x === undefined;
    target.x === undefined;
    called;
    called = false;
  }
}
{
  let target = {};
  let called = false;
  let handler = {
    deleteProperty: function (theTarget, propName) {
      called = true;
      theTarget === target;
      propName === "x";
      return delete theTarget[propName];
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    target.x = i;
    proxy.x === i;
    let result = delete proxy["x"];
    result;
    proxy.x === undefined;
    target.x === undefined;
    called;
    called = false;
  }
}
{
  let target = {};
  let called = false;
  let handler = {
    deleteProperty: function (theTarget, propName) {
      called = true;
      theTarget === target;
      return delete theTarget[propName];
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    target[i] = i;
    proxy[i] === i;
    let result = delete proxy[i];
    result;
    proxy[i] === undefined;
    target[i] === undefined;
    called;
    called = false;
  }
}
{
  let target = {};
  let called = false;
  let handler = {
    deleteProperty: function (theTarget, propName) {
      called = true;
      theTarget === target;
      delete theTarget[propName];
      return false; // We're liars.
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    target[i] = i;
    proxy[i] === i;
    let result = delete proxy[i];
    !result;
    proxy[i] === undefined;
    target[i] === undefined;
    called;
    called = false;
  }
}
{
  let target = {};
  let error = null;
  let called = false;
  let handler = {
    deleteProperty: function (theTarget, propName) {
      called = true;
      return delete theTarget[propName];
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    Object.defineProperty(target, "x", {
      configurable: true,
      writable: false,
      value: 25
    });
    target.x = 30;
    target.x === 25;
    proxy.x === 25;
    delete proxy.x;
    target.x === undefined;
    proxy.x === undefined;
    !("x" in proxy);
    !("x" in target);
    called;
    called = false;
  }
}
{
  let target = {};
  let error = null;
  Object.defineProperty(target, "x", {
    configurable: false,
    writable: false,
    value: 25
  });
  let called = false;
  let handler = {
    deleteProperty: function (theTarget, propName) {
      called = true;
      return delete theTarget[propName];
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    target.x = 30;
    target.x === 25;
    proxy.x === 25;
    let result = delete proxy.x;
    !result;
    called;
    called = false;
  }
}
