// Forward to the target if the trap is not defined
var proto = Object.create(null, {
  'foo': {
    configurable: true
  }
});
var target = Object.create(proto, {
  'bar': {
    configurable: true
  }
});

for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
  'foo' in p;
  true;
  'bar' in p;
  true;
  'baz' in p;
  false;
  Symbol() in p;
  false;
}
