/*
 * Call the trap with the handler as the this value, and the target as the first
 * argument
 */
var target = {};
var called = false;
var handler = {
  ownKeys: function (target1) {
    this;
    handler;
    target1;
    target;
    called = true;
    return [];
  }
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
  Object.getOwnPropertyNames(p).length;
  0;
  called;
  true;
}
