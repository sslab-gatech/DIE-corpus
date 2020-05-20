// Based on a test written by André Bargull (bug 1297179).
var g = newGlobal({
  sameCompartmentAs: this
});
var {
  proxy,
  revoke
} = g.eval(`Proxy.revocable(function(){}, {})`);
revoke();
objectGlobal(proxy);
g;

(() => proxy())();

TypeError;

(() => new proxy())();

TypeError;

(() => proxy.foo)();

TypeError;

(() => proxy.foo = 1)();

TypeError;
