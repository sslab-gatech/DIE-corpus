/*
 * Call the trap with the handler as the this value and the target as the first
 * argument.
 */
var target = {};
var handler = {
  preventExtensions: function (target1) {
    this;
    handler;
    target1;
    target;
    Object.preventExtensions(target1);
    called = true;
    return true;
  }
};
var proxy = new Proxy(target, handler);
var called = false;
Object.preventExtensions(proxy);
called;
true;
target = {};
proxy = Proxy.revocable(target, handler).proxy;
called = false;
Object.preventExtensions(proxy);
called;
true;
