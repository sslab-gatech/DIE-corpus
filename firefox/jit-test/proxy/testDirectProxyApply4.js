// Revoked proxies should throw before calling the handler
var called = false;

var target = function () {
  ;
};

var handler = {
  apply: () => called = true
};
var holder = Proxy.revocable(target, handler);
holder.revoke();

(() => holder.proxy())();

TypeError;
called;
false;
