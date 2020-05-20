function assert(b) {
  ;
}

{
  let ogTarget = {
    x: 20
  };
  let theTarget = new Proxy(ogTarget, {
    get: function (target, propName, proxyArg) {
      target === ogTarget;

      if (propName === "y") {
        return 45;
      }

      return target[propName];
    }
  });
  let handler = {
    get: function (target, propName, proxyArg) {
      if (propName === "z") {
        return 60;
      }

      return target[propName];
    }
  };
  let proxy = new Proxy(theTarget, handler);

  for (let i = 0; i < 500; i++) {
    proxy.x === 20;
    proxy["x"] === 20;
    proxy.y === 45;
    proxy["y"] === 45;
    proxy.z === 60;
    proxy["z"] === 60;
  }
}
