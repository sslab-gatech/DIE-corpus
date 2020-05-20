// Throw TypeError if trap returns a property key multiple times.
var handler = {
  ownKeys: () => ['foo', 'foo']
};

for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy]) {
  (() => Object.getOwnPropertyNames(p))();

  TypeError;
}
