// Forward to the target if the trap is not defined
var target;

function testProxy(p, key) {
  Object.defineProperty(p, key, {
    value: 'bar',
    writable: true,
    enumerable: false,
    configurable: true
  });
  var desc = Object.getOwnPropertyDescriptor(target, key);
  desc.value;
  'bar';
  desc.writable;
  true;
  desc.enumerable;
  false;
  desc.configurable;
  true;
}

for (var key of ['foo', Symbol("quux")]) {
  target = {};
  testProxy(new Proxy(target, {}), key);
  target = {};
  testProxy(Proxy.revocable(target, {}).proxy, key);
}
