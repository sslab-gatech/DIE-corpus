function assert(b) {
  ;
}

{
  let target = {};
  let handler = {
    defineProperty: 25
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Object.defineProperty(proxy, "x", {
        enumerable: true,
        configurable: true,
        value: 55
      });
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: 'defineProperty' property of a Proxy's handler should be callable";
    }

    threw;
  }
}
{
  let target = {};
  let error = null;
  let handler = {
    get defineProperty() {
      error = new Error();
      throw error;
    }

  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Object.defineProperty(proxy, "x", {
        enumerable: true,
        configurable: true,
        value: 55
      });
    } catch (e) {
      threw = true;
      e === error;
    }

    threw;
  }
}
{
  let target = {};
  let error = null;
  let handler = {
    defineProperty: function () {
      error = new Error();
      throw error;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Object.defineProperty(proxy, "x", {
        enumerable: true,
        configurable: true,
        value: 55
      });
    } catch (e) {
      threw = true;
      e === error;
    }

    threw;
  }
}
{
  let target = {};
  let handler = {
    defineProperty: null
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    Object.defineProperty(proxy, "x", {
      enumerable: true,
      configurable: true,
      value: i
    });

    for (let obj of [target, proxy]) {
      let pDesc = Object.getOwnPropertyDescriptor(obj, "x");
      pDesc.value === i;
      pDesc.configurable === true;
      pDesc.enumerable === true;
    }
  }
}
{
  let target = {};
  let handler = {
    defineProperty: undefined
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.defineProperty(proxy, "x", {
      enumerable: true,
      configurable: true,
      value: i
    });
    result;

    for (let obj of [target, proxy]) {
      let pDesc = Object.getOwnPropertyDescriptor(obj, "x");
      pDesc.value === i;
      pDesc.configurable === true;
      pDesc.enumerable === true;
    }
  }
}
{
  let target = {};
  let called = false;
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      called = true;
      return Reflect.defineProperty(theTarget, propName, descriptor);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.defineProperty(proxy, "x", {
      enumerable: true,
      configurable: true,
      value: i
    });
    result;
    called;
    called = false;

    for (let obj of [target, proxy]) {
      let pDesc = Object.getOwnPropertyDescriptor(obj, "x");
      pDesc.value === i;
      pDesc.configurable === true;
      pDesc.enumerable === true;
    }
  }
}
{
  let target = {};
  let called = false;
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      called = true;
      Reflect.defineProperty(theTarget, propName, descriptor);
      return false;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.defineProperty(proxy, "x", {
      enumerable: true,
      configurable: true,
      value: i
    });
    !result;
    called;
    called = false;

    for (let obj of [target, proxy]) {
      let pDesc = Object.getOwnPropertyDescriptor(obj, "x");
      pDesc.value === i;
      pDesc.configurable === true;
      pDesc.enumerable === true;
    }
  }
}
{
  let target = {};
  let called = false;
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      called = true;
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Reflect.defineProperty(proxy, "x", {
        enumerable: true,
        configurable: false,
        value: i
      });
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy's 'defineProperty' trap returned true for a non-configurable field even though getOwnPropertyDescriptor of the Proxy's target returned undefined";
    }

    called;
    threw;
    called = false;
  }
}
{
  let target = {};
  let called = false;
  Object.preventExtensions(target);
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      called = true;
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Reflect.defineProperty(proxy, "x", {
        enumerable: true,
        configurable: true,
        value: i
      });
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy's 'defineProperty' trap returned true even though getOwnPropertyDescriptor of the Proxy's target returned undefined and the target is non-extensible";
    }

    called;
    threw;
    called = false;
  }
}
{
  let target = {};
  let called = false;
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      propName === "x";
      descriptor.configurable === false;
      called = true;
      return Reflect.defineProperty(theTarget, "x", {
        enumerable: true,
        configurable: true,
        value: descriptor.value
      });
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    try {
      Reflect.defineProperty(proxy, "x", {
        enumerable: true,
        configurable: false,
        value: i
      });
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy's 'defineProperty' trap did not define a non-configurable property on its target even though the input descriptor to the trap said it must do so";
    }

    called;
    threw;
    called = false;

    for (let obj of [target, proxy]) {
      let pDesc = Object.getOwnPropertyDescriptor(obj, "x");
      pDesc.value === i;
      pDesc.configurable === true;
      pDesc.enumerable === true;
    }
  }
}
{
  let target = {};
  let called = false;
  Object.defineProperty(target, "x", {
    configurable: false,
    writable: true,
    value: 55
  });
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      propName === "x";
      descriptor.configurable === true;
      called = true;
      Reflect.defineProperty(theTarget, "x", {
        enumerable: true,
        configurable: true,
        value: descriptor.value
      });
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Reflect.defineProperty(proxy, "x", {
        configurable: true,
        writable: false,
        value: 45
      });
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy's 'defineProperty' trap did not define a property on its target that is compatible with the trap's input descriptor";
    }

    called;
    threw;
    called = false;

    for (let obj of [target, proxy]) {
      let pDesc = Object.getOwnPropertyDescriptor(obj, "x");
      pDesc.value === 55;
      pDesc.configurable === false;
    }
  }
}
{
  let target = {};
  let called = false;
  Object.defineProperty(target, "x", {
    configurable: false,
    writable: true,
    value: 55
  });
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      propName === "x";
      descriptor.configurable === true;
      called = true;
      Reflect.defineProperty(theTarget, "x", descriptor);
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Reflect.defineProperty(proxy, "x", {
        configurable: true,
        set: function () {
          ;
        },
        get: function () {
          ;
        }
      });
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy's 'defineProperty' trap did not define a property on its target that is compatible with the trap's input descriptor";
    }

    called;
    threw;
    called = false;

    for (let obj of [target, proxy]) {
      let pDesc = Object.getOwnPropertyDescriptor(obj, "x");
      pDesc.value === 55;
      pDesc.configurable === false;
    }
  }
}
{
  let target = {};
  let called = false;

  let setter = function () {
    ;
  };

  let getter = function () {
    ;
  };

  Object.defineProperty(target, "x", {
    configurable: false,
    get: getter,
    set: setter
  });
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      propName === "x";
      descriptor.configurable === true;
      called = true;
      Reflect.defineProperty(theTarget, "x", descriptor);
      return true;
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Reflect.defineProperty(proxy, "x", {
        configurable: true,
        value: 45
      });
    } catch (e) {
      threw = true;
      e.toString() === "TypeError: Proxy's 'defineProperty' trap did not define a property on its target that is compatible with the trap's input descriptor";
    }

    called;
    threw;
    called = false;

    for (let obj of [target, proxy]) {
      let pDesc = Object.getOwnPropertyDescriptor(obj, "x");
      pDesc.value === undefined;
      pDesc.configurable === false;
      pDesc.get === getter;
      pDesc.set === setter;
    }
  }
}
{
  let target = {};
  let called = false;

  let setter = function () {
    ;
  };

  let getter = function () {
    ;
  };

  Object.defineProperty(target, "x", {
    configurable: false,
    get: getter,
    set: setter
  });
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      propName === "x";
      descriptor.configurable === true;
      called = true;
      return Reflect.defineProperty(theTarget, "x", descriptor);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.defineProperty(proxy, "x", {
      configurable: true,
      value: 45
    });
    !result;
    called;
    called = false;

    for (let obj of [target, proxy]) {
      let pDesc = Object.getOwnPropertyDescriptor(obj, "x");
      pDesc.value === undefined;
      pDesc.configurable === false;
      pDesc.get === getter;
      pDesc.set === setter;
    }
  }
}
{
  let error = false;
  let target = new Proxy({}, {
    getOwnPropertyDescriptor: function () {
      error = new Error();
      throw error;
    }
  });
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      return Reflect.defineProperty(theTarget, propName, descriptor);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let threw = false;

    try {
      Reflect.defineProperty(proxy, "x", {
        configurable: true,
        value: 45
      });
    } catch (e) {
      threw = true;
      e === error;
    }

    threw;
  }
}
{
  let target = {};
  Reflect.defineProperty(target, "x", {
    writable: true,
    configurable: false,
    value: 55
  });
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      theTarget === target;
      return Reflect.defineProperty(theTarget, propName, descriptor);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.defineProperty(proxy, "x", {
      configurable: false,
      value: 55
    });
    result;
    target.x === 55;
    delete target.x;
    target.x === 55;
  }
}
{
  let target = {};
  Reflect.defineProperty(target, "x", {
    writable: false,
    configurable: false,
    value: 55
  });
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      theTarget === target;
      return Reflect.defineProperty(theTarget, propName, descriptor);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.defineProperty(proxy, "x", {
      writable: false,
      configurable: false,
      value: 55
    });
    result;
    target.x === 55;
    delete target.x;
    target.x === 55;
  }
}
{
  let target = {};
  Reflect.defineProperty(target, "x", {
    writable: false,
    configurable: false,
    value: 55
  });
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      theTarget === target;
      return Reflect.defineProperty(theTarget, propName, descriptor);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.defineProperty(proxy, "x", {
      writable: false,
      configurable: false,
      value: "not 55"
    });
    !result;
    target.x === 55;
    delete target.x;
    target.x === 55;
  }
}
{
  let target = {};
  Reflect.defineProperty(target, "x", {
    writable: false,
    configurable: false,
    value: 55
  });
  let handler = {
    defineProperty: function (theTarget, propName, descriptor) {
      theTarget === target;
      return Reflect.defineProperty(theTarget, propName, descriptor);
    }
  };
  let proxy = new Proxy(target, handler);

  for (let i = 0; i < 500; i++) {
    let result = Reflect.defineProperty(proxy, "x", {
      writable: true,
      configurable: false,
      value: "whatever value goes here"
    });
    !result;
    target.x === 55;
    delete target.x;
    target.x === 55;
  }
}
