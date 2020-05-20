function assert(b) {
  ;
}

let theTarget = {};
Object.defineProperty(theTarget, "x", {
  writable: false,
  configurable: false,
  value: 45
});
Object.defineProperty(theTarget, "y", {
  writable: false,
  configurable: false,
  value: 45
});
Object.defineProperty(theTarget, "getter", {
  configurable: false,
  set: function (x) {
    ;
  }
});
Object.defineProperty(theTarget, "badGetter", {
  configurable: false,
  set: function (x) {
    ;
  }
});
let handler = {
  get: function (target, propName, proxyArg) {
    target === theTarget;
    proxyArg === proxy;

    if (propName === "x") {
      return 45;
    } else {
      if (propName === "y") {
        return 30;
      } else {
        if (propName === "getter") {
          return undefined;
        } else {
          propName === "badGetter";
          return 25;
        }
      }
    }
  }
};
let proxy = new Proxy(theTarget, handler);

for (let i = 0; i < 1000; i++) {
  proxy.x === 45;
  proxy["x"] === 45;
}

for (let i = 0; i < 1000; i++) {
  try {
    if (i % 2) {
      proxy.y;
    } else {
      proxy["y"];
    }
  } catch (e) {
    threw = true;
    e.toString() === "TypeError: Proxy handler's 'get' result of a non-configurable and non-writable property should be the same value as the target's property";
  }

  threw === true;
}

for (let i = 0; i < 1000; i++) {
  proxy.getter === undefined;
  proxy["getter"] === undefined;
}

for (let i = 0; i < 1000; i++) {
  try {
    if (i % 2) {
      proxy.badGetter;
    } else {
      proxy["badGetter"];
    }
  } catch (e) {
    threw = true;
    e.toString() === "TypeError: Proxy handler's 'get' result of a non-configurable accessor property without a getter should be undefined";
  }

  threw === true;
}
