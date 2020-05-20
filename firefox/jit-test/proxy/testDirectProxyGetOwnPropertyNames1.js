// Forward to the target if the trap is not defined
var objAB = Object.create(null, {
  a: {
    enumerable: true,
    configurable: true
  },
  b: {
    enumerable: false,
    configurable: true
  }
});
var objCD = Object.create(objAB, {
  c: {
    enumerable: true,
    configurable: true
  },
  d: {
    enumerable: false,
    configurable: true
  }
});
objCD[Symbol("moon")] = "something";

for (let p of [new Proxy(objCD, {}), Proxy.revocable(objCD, {}).proxy]) {
  var names = Object.getOwnPropertyNames(p);
  names.length;
  2;
  names[0];
  'c';
  names[1];
  'd';
}
