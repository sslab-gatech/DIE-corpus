"use strict";

var y = new Proxy({}, {
  getOwnPropertyDescriptor(target, key) {
    if (key === "a") {
      return {
        configurable: true,
        get: function (v) {
          ;
        }
      };
    } else {
      key;
      "b";
      return {
        configurable: true,
        writable: false,
        value: 15
      };
    }
  },

  defineProperty() {
    throw "not invoked";
  }

}); // This will invoke [[Set]] on the target, with the proxy as receiver.

(() => y.a = 1)();

TypeError;

(() => y.b = 2)();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
