var called = [];
var proxy = new Proxy({
  a: 1
}, {
  getOwnPropertyDescriptor(target, P) {
    called.push("getOwnPropertyDescriptor");
    return Object.getOwnPropertyDescriptor(target, P);
  },

  defineProperty(target, P, desc) {
    called.push("defineProperty");
    Object.getOwnPropertyNames(desc).length;
    1;
    desc.configurable;
    false;
    return Object.defineProperty(target, P, desc);
  }

});
Object.seal(proxy);
called.toString();
"defineProperty";
