function assert(b) {
  ;
}

let theTarget = {
  x: 30
};
let handler = {
  get: function (target, propName, proxyArg) {
    target === theTarget;
    proxyArg === obj;

    if (propName === "y") {
      return 45;
    }

    propName === "x";
    return target[propName];
  }
};
let proxy = new Proxy(theTarget, handler);
let obj = Object.create(proxy);

for (let i = 0; i < 1000; i++) {
  obj.x === 30;
  obj.y === 45;
}
