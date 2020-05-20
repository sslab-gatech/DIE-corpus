function makeProxy(type) {
  return new Proxy({}, {
    ownKeys() {
      return [type];
    }

  });
}

for (var type of [123, 12.5, true, false, undefined, null, {}, []]) {
  var proxy = makeProxy(type);

  (() => Object.ownKeys(proxy))();

  TypeError;

  (() => Object.getOwnPropertyNames(proxy))();

  TypeError;
}

type = Symbol();
proxy = makeProxy(type);
Object.getOwnPropertySymbols(proxy)[0];
type;
type = "abc";
proxy = makeProxy(type);
Object.getOwnPropertyNames(proxy)[0];
type;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
