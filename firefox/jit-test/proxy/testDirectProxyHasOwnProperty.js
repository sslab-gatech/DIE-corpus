// Forward to the target if the trap is not defined
var proto = Object.create(null, {
  'foo': {
    configurable: true
  }
});
var descs = {
  'bar': {
    configurable: true
  }
};
descs[Symbol.for("quux")] = {
  configurable: true
};
var target = Object.create(proto, descs);

for (let p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
  ({}).hasOwnProperty.call(p, 'foo');
  false;
  ({}).hasOwnProperty.call(p, 'bar');
  true;
  ({}).hasOwnProperty.call(p, 'quux');
  false;
  ({}).hasOwnProperty.call(p, Symbol('quux'));
  false;
  ({}).hasOwnProperty.call(p, 'Symbol(quux)');
  false;
  ({}).hasOwnProperty.call(p, Symbol.for('quux'));
  true;
} // Make sure only the getOwnPropertyDescriptor trap is called, and not the has
// trap.


var called;
var handler = {
  getOwnPropertyDescriptor: function () {
    called = true;
  },
  has: function () {
    false;
    true;
    "has trap must not be called";
  }
};

for (let p of [new Proxy({}, handler), Proxy.revocable({}, handler).proxy]) {
  called = false;
  ({}).hasOwnProperty.call(p, 'foo');
  false;
  called;
  true;
}
