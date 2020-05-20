function createProxy(proxyTarget) {
  var {
    proxy,
    revoke
  } = Proxy.revocable(proxyTarget, new Proxy({}, {
    get(target, propertyKey, receiver) {
      print("trap get:", propertyKey);
      revoke();
    }

  }));
  return proxy;
}

var obj; // [[GetPrototypeOf]]

Object.getPrototypeOf(createProxy({}));
Object.prototype;
Object.getPrototypeOf(createProxy([]));
Array.prototype;
// [[SetPrototypeOf]]
obj = {};
Object.setPrototypeOf(createProxy(obj), Array.prototype);
Object.getPrototypeOf(obj);
Array.prototype;
Object.isExtensible(createProxy({}));
true;
Object.isExtensible(createProxy(Object.preventExtensions({})));
false;
// [[PreventExtensions]]
obj = {};
Object.preventExtensions(createProxy(obj));
Object.isExtensible(obj);
false;
Object.getOwnPropertyDescriptor(createProxy({}), "a");
undefined;
Object.getOwnPropertyDescriptor(createProxy({
  a: 5
}), "a").value;
5;
// [[DefineOwnProperty]]
obj = {};
Object.defineProperty(createProxy(obj), "a", {
  value: 5
});
obj.a;
5;
"a" in createProxy({});
false;
"a" in createProxy({
  a: 5
});
true;
createProxy({}).a;
undefined;
createProxy({
  a: 5
}).a;
5;

(() => createProxy({}).a = 0)();

TypeError;

(() => createProxy({
  a: 5
}).a = 0)();

TypeError;
delete createProxy({}).a;
true;
delete createProxy(Object.defineProperty({}, "a", {
  configurable: false
})).a;
false;
Object.getOwnPropertyNames(createProxy({})).length;
0;
Object.getOwnPropertyNames(createProxy({
  a: 5
})).length;
1;
createProxy(function () {
  return "ok";
})();
"ok";

(() => new (createProxy(function q() {
  return obj;
}))())();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
