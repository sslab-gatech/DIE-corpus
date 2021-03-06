/*
 * Call the trap with the handler as the this value, the target as the first
 * argument, the name of the property as the second argument, the value as the
 * third argument, and the receiver as the fourth argument
 */
var target = {};

for (var key of ['foo', Symbol.for('quux')]) {
  var handler = {};

  for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
    handler.set = function (target1, name, val, receiver) {
      this;
      handler;
      target1;
      target;
      name;
      key;
      val;
      'baz';
      receiver;
      p;
      called = true;
    };

    var called = false;
    p[key] = 'baz';
    called;
    true;
  }
}
