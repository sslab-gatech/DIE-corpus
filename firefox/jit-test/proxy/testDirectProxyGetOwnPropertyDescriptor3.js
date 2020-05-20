// Revoked proxies should throw before calling the handler
var called = false;
var target = {};
var handler = {
  getOwnPropertyDescriptor: () => called = true
};
var holder = Proxy.revocable(target, handler);
holder.revoke();

var test = function () {
  Object.getOwnPropertyDescriptor(holder.proxy, 'foo');
};

test;
TypeError;
called;
false;
