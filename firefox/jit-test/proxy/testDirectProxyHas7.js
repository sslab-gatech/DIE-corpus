// Revoked proxies should throw before calling the handler
var called = false;
var target = {};
var handler = {
  has: () => called = true
};
var holder = Proxy.revocable(target, handler);
holder.revoke();

(() => 'foo' in holder.proxy)();

TypeError;
called;
false;
