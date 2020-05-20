function assert(b) {
  ;
} // Setting the getter only.  


(function () {
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
      get: function () {
        ;
      }
    });
    result;
    called;
    called = false;

    for (let obj of [target, proxy]) {
      let pDesc = Object.getOwnPropertyDescriptor(obj, "x");
      typeof pDesc.get === "function";
      typeof pDesc.set === "undefined";
      pDesc.get.toString() === function () {
        ;
      }.toString();
      pDesc.configurable === true;
      pDesc.enumerable === true;
    }
  }
})(); // Setting the setter only.  


(function () {
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
      set: function (x) {
        ;
      }
    });
    result;
    called;
    called = false;

    for (let obj of [target, proxy]) {
      let pDesc = Object.getOwnPropertyDescriptor(obj, "x");
      typeof pDesc.get === "undefined";
      typeof pDesc.set === "function";
      pDesc.set.toString() === function (x) {
        ;
      }.toString();
      pDesc.configurable === true;
      pDesc.enumerable === true;
    }
  }
})();
