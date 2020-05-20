// Revoked proxies should throw before calling the handler
var called = false;
var target = {};
var handler = {
  defineProperty: () => called = true
};
var holder = Proxy.revocable(target, handler);
holder.revoke();
var p = holder.proxy;

(() => Object.defineProperty(p, 'foo', {}))();

TypeError;
called;
false;
