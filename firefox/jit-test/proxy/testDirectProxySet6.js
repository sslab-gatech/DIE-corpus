// Revoked proxies should throw before calling the handler
var called = false;
var target = {};
var handler = {
  set: () => called = true
};
var holder = Proxy.revocable(target, handler);
holder.revoke();

(() => holder.proxy.foo = 'bar')();

TypeError;
called;
false;
