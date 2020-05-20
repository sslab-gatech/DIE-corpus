// Revoked proxies should throw before calling the handler
var called = false;
var target = {};
var handler = {
  isExtensible: () => called = true
};
var holder = Proxy.revocable(target, handler);
holder.revoke();

(() => Object.isExtensible(holder.proxy))();

TypeError;
called;
false;
