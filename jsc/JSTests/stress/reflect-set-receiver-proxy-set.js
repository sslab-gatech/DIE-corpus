function shouldBe(actual, expected) {
  ;
}

function unreachable() {
  ;
}

function assert(b) {
  ;
}

(function () {
  {
    let target = {
      x: 30
    };
    let called = false;
    let handler = {
      set: 45
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      let threw = false;

      try {
        Reflect.set(proxy, 'x', 40, theReceiver);
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
        error = new Error();
        throw error;
      }

    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      let threw = false;

      try {
        Reflect.set(proxy, 'x', 40, theReceiver);
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
      set: function (_1, _2, _3, receiver) {
        shouldBe(receiver, theReceiver);
        error = new Error();
        throw error;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      let threw = false;

      try {
        Reflect.set(proxy, 'x', 40, theReceiver);
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
    let theReceiver = {};
    let called = false;
    let handler = {
      set: function (theTarget, propName, value, receiver) {
        theTarget === target;
        shouldBe(receiver, theReceiver);
        called = true;
        theTarget[propName] = value;
        return false;
      }
    };
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(proxy, 'x', 40, theReceiver), false);
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
        shouldBe(receiver, theReceiver);
        theTarget[propName] = value;
        return true;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      let threw = false;

      try {
        Reflect.set(proxy, 'x', 40, theReceiver);
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
        shouldBe(receiver, theReceiver);
        called = true;
        theTarget[propName] = value;
        return false;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(proxy, 'x', 40, theReceiver), false);
      proxy.x === 25;
      theReceiver.x === undefined;
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
        shouldBe(receiver, theReceiver);
        called = true;
        theTarget[propName] = value;
        return true;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      let threw = false;

      try {
        Reflect.set(proxy, 'x', 40, theReceiver);
        unreachable();
      } catch (e) {
        threw = true;
        e.toString() === "TypeError: Proxy handler's 'set' method on a non-configurable accessor property without a setter should return false";
      }

      called;
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
        shouldBe(receiver, theReceiver);
        called = true;
        theTarget[propName] = value;
        return true;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(proxy, 'x', i, theReceiver), true);
      called;
      proxy.x === i;
      target.x === i;
      theReceiver.x === undefined;
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
        shouldBe(receiver, theReceiver);
        called = true;
        theTarget[propName] = value;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(proxy, 'x', i, theReceiver), false);
      called;
      proxy.x === i;
      target.x === i;
      theReceiver.x === undefined;
      called = false;
      shouldBe(Reflect.set(proxy, 'y', i, theReceiver), false);
      called;
      proxy.y === i;
      target.y === i;
      theReceiver.y === undefined;
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
        receiver === theReceiver;
        called = true;
        theTarget[propName] = value;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(proxy, 'x', i, theReceiver), false);
      called;
      proxy.x === i;
      target.x === i;
      theReceiver.x === undefined;
      called = false;
      shouldBe(Reflect.set(proxy, 'y', i, theReceiver), false);
      called;
      proxy.y === i;
      target.y === i;
      theReceiver.y === undefined;
      called = false;
    }
  }
  {
    let target = [];
    let called = false;
    let handler = {};
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(proxy, i, i, theReceiver), true);
      proxy[i] === undefined;
      target[i] === undefined;
      theReceiver[i] === i;
    }
  }
  {
    let target = [];
    let called = false;
    let handler = {
      set: function (theTarget, propName, value, receiver) {
        target === theTarget;
        receiver === theReceiver;
        called = true;
        theTarget[propName] = value;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(proxy, i, i, theReceiver), false);
      proxy[i] === i;
      target[i] === i;
      theReceiver[i] === undefined;
      called;
      called = false;
    }
  }
  {
    let throughProxy = false;
    let called = false;
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
        receiver === theReceiver;
        theTarget[propName] = value;
        return true;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(proxy, 'x', i, theReceiver), true);
      called;
      throughProxy = true;
      proxy.x === i;
      throughProxy = false;
      target.x === i;
      theReceiver.x === undefined;
      proxy._x === i;
      target._x === i;
      theReceiver._x === undefined;
      called = false;
    }
  }
  {
    let called = false;
    let target = {};
    let handler = {
      set: function (theTarget, propName, value, receiver) {
        target === theTarget;
        receiver === theReceiver;
        theTarget[propName] = value;
        called = true;
        return true;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);
    let obj = Object.create(proxy, {
      own: {
        writable: true,
        configurable: true,
        value: null
      }
    });

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(obj, 'own', i, theReceiver), true);
      !called;
      obj.own === null;
      theReceiver.own === i;
      shouldBe(Reflect.set(obj, 'notOwn', i, theReceiver), true);
      target.notOwn === i;
      proxy.notOwn === i;
      obj.notOwn === i;
      theReceiver.notOwn === undefined;
      called;
      called = false;
    }
  }
  {
    let target = {};
    let handler = {};
    let theReceiver = {};
    let proxy = new Proxy(target, handler);
    let obj = Object.create(proxy, {
      own: {
        writable: true,
        configurable: true,
        value: null
      }
    });

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(obj, 'own', i, theReceiver), true);
      obj.own === null;
      proxy.own === undefined;
      theReceiver.own === i;
      shouldBe(Reflect.set(obj, 'notOwn', i, theReceiver), true); // The receiver is always |theReceiver|.
      // obj.[[Set]](P, V, theReceiver) -> Proxy.[[Set]](P, V, theReceiver) -> target.[[Set]](P, V, theReceiver)

      target.notOwn === undefined;
      proxy.notOwn === undefined;
      obj.notOwn === undefined;
      theReceiver.notOwn === i;
    }
  }
  {
    let called = false;
    let target = {};
    let handler = {
      set: function (theTarget, propName, value, receiver) {
        target === theTarget;
        receiver === theReceiver;
        theTarget[propName] = value;
        called = true;
        return true;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);
    let obj = Object.create(proxy, {
      [0]: {
        writable: true,
        configurable: true,
        value: null
      }
    });

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(obj, 0, i, theReceiver), true);
      !called;
      obj[0] === null;
      proxy[0] === undefined;
      theReceiver[0] === i;
      shouldBe(Reflect.set(obj, 1, i, theReceiver), true);
      target[1] === i;
      proxy[1] === i;
      obj[1] === i;
      theReceiver[1] === undefined;
      called;
      called = false;
    }
  }
  {
    let target = {};
    let handler = {};
    let theReceiver = {};
    let proxy = new Proxy(target, handler);
    let obj = Object.create(proxy, {
      [0]: {
        writable: true,
        configurable: true,
        value: null
      }
    });

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(obj, 0, i, theReceiver), true);
      obj[0] === null;
      proxy[0] === undefined;
      theReceiver[0] === i;
      shouldBe(Reflect.set(obj, 1, i, theReceiver), true); // The receiver is always |theReceiver|.
      // obj.[[Set]](P, V, theReceiver) -> Proxy.[[Set]](P, V, theReceiver) -> target.[[Set]](P, V, theReceiver)

      target[1] === undefined;
      proxy[1] === undefined;
      obj[1] === undefined;
      theReceiver[1] === i;
    }
  }
  {
    let called = false;
    let target = {};
    let handler = {
      set: function (theTarget, propName, value, receiver) {
        target === theTarget;
        receiver === theReceiver;
        theTarget[propName] = value;
        called = true;
        return true;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);
    let obj = Object.create(proxy, {
      [0]: {
        writable: true,
        configurable: true,
        value: null
      }
    });

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(obj, 0, i, theReceiver), true);
      !called;
      obj[0] === null;
      proxy[0] === undefined;
      theReceiver[0] === i;
      shouldBe(Reflect.set(obj, 1, i, theReceiver), true);
      target[1] === i;
      proxy[1] === i;
      obj[1] === i;
      theReceiver[1] === undefined;
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
        receiver === theReceiver;
        theTarget[propName] = value;
        called = true;
        return true;
      }
    };
    let theReceiver = {};
    let proxy = new Proxy(target, handler);
    let obj = Object.create(proxy, {
      [0]: {
        writable: true,
        configurable: true,
        value: null
      }
    });

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(obj, 0, i, theReceiver), true);
      !called;
      obj[0] === null;
      proxy[0] === 25;
      theReceiver[0] === i;
      shouldBe(Reflect.set(obj, 1, i, theReceiver), true);
      target[1] === i;
      proxy[1] === i;
      obj[1] === i;
      theReceiver[1] === undefined;
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
        receiver === theReceiver;
        called = true;
        theTarget[propName] = value;
      }
    });
    let handler = {};
    let theReceiver = {};
    let proxy = new Proxy(target, handler);
    let obj = Object.create(proxy, {
      own: {
        writable: true,
        configurable: true,
        value: null
      }
    });

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(obj, 'own', i, theReceiver), true);
      !called;
      obj.own === null;
      proxy.own === undefined;
      theReceiver.own === i;
      shouldBe(Reflect.set(obj, 'notOwn', i, theReceiver), false);
      target.notOwn === i;
      proxy.notOwn === i;
      obj.notOwn === i;
      theReceiver.notOwn === undefined;
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
        receiver === theReceiver;
        called = true;
        theTarget[propName] = value;
      }
    });
    let handler = {};
    let theReceiver = {};
    let proxy = new Proxy(target, handler);
    let obj = Object.create(proxy, {
      [0]: {
        writable: true,
        configurable: true,
        value: null
      }
    });

    for (let i = 0; i < 1000; i++) {
      shouldBe(Reflect.set(obj, 0, i, theReceiver), true);
      !called;
      obj[0] === null;
      proxy[0] === 25;
      theReceiver[0] === i;
      shouldBe(Reflect.set(obj, 1, i, theReceiver), false);
      target[1] === i;
      proxy[1] === i;
      obj[1] === i;
      theReceiver[1] === undefined;
      called;
      called = false;
    }
  }
})();
