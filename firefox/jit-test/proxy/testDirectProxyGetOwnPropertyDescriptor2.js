/*
 * Call the trap with the handler as the this value, the target as the first
 * argument, and the name of the property as the second argument
 */
var target = {};
var called;
var handler = {
  getOwnPropertyDescriptor: function (target1, name) {
    this;
    handler;
    target1;
    target;
    name;
    'foo';
    called = true;
  }
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
  called = false;
  Object.getOwnPropertyDescriptor(p, 'foo');
  called;
  true;
}
