// Revoked proxies should throw before calling the handler
var called = false;
var target = {};
var handler = {
  ownKeys: () => called = true
};
var holder = Proxy.revocable(target, handler);
holder.revoke();

(() => Object.getOwnPropertyNames(holder.proxy))();

TypeError;
called;
false;
