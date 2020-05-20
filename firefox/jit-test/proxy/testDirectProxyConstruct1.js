// Forward to the target if the trap is undefined
var p;

var target = function (x, y) {
  new.target;
  p;
  this.foo = x + y;
};

for (p of [new Proxy(target, {}), Proxy.revocable(target, {}).proxy]) {
  var obj = new p(2, 3);
  obj.foo;
  5;
  Object.getPrototypeOf(obj);
  target.prototype;
}
