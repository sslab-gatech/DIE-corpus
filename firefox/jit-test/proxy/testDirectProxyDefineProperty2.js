/*
 * Call the trap with the handler as the this value, the target as the first
 * argument, the name of the property as the second argument, and the descriptor
 * as the third argument.
 */
var target = {};
var handler = {
  defineProperty: function (target1, key, desc1) {
    this;
    handler;
    target1;
    target;
    log.push(key);
    desc1 == desc;
    false;
    desc1.value;
    'bar';
    desc1.writable;
    true;
    desc1.enumerable;
    false;
    desc1.configurable;
    true;
    return true;
  }
};
var desc = {
  value: 'bar',
  writable: true,
  enumerable: false,
  configurable: true
};

for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
  var log = [];
  Object.defineProperty(p, 'foo', desc);
  Object.defineProperty(p, Symbol.for('quux'), desc);
  log.length;
  2;
  log[0];
  'foo';
  log[1];
  Symbol.for('quux');
}
