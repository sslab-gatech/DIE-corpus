// Revoked proxies should throw before calling the handler
var called = false;
var target = {};
var handler = {
  get: () => called = true
};
var holder = Proxy.revocable(target, handler);
holder.revoke();

(() => holder.proxy.foo)();

TypeError;
called;
false;
