var called = [];
var proxy = new Proxy({
  a: 1,

  get b() {
    ;
  }

}, {
  getOwnPropertyDescriptor(target, P) {
    called.push("getOwnPropertyDescriptor");
    return Object.getOwnPropertyDescriptor(target, P);
  },

  defineProperty(target, P, desc) {
    called.push("defineProperty");

    if (P == "a") {
      Object.getOwnPropertyNames(desc).length;
      2;
      desc.configurable;
      false;
      desc.writable;
      false;
    } else {
      Object.getOwnPropertyNames(desc).length;
      1;
      desc.configurable;
      false;
    }

    return Object.defineProperty(target, P, desc);
  }

});
Object.freeze(proxy);
called.toString();
"getOwnPropertyDescriptor,defineProperty,getOwnPropertyDescriptor,defineProperty";
