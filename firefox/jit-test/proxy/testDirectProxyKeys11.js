// Revoked proxies should throw before calling the handler
var called = false;
var target = {};
var handler = {
  ownKeys: () => called = true
};
var holder = Proxy.revocable(target, handler);
holder.revoke();

(() => Object.keys(holder.proxy))();

TypeError;
called;
false;
