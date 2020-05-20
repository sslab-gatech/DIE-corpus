var r = Proxy.revocable({}, {});
var r2 = Proxy.revocable(function () {
  ;
}, {});
r.revoke();
r2.revoke();
var p = r.proxy;
var p2 = r2.proxy;

(() => ({}) instanceof p)();

TypeError;

(() => ({}) instanceof p2)();

TypeError;

(() => Object.prototype.toString.call(p))();

TypeError;

(() => Object.prototype.toString.call(p2))();

TypeError;

(() => RegExp.prototype.exec.call(p, ""))();

TypeError;

(() => RegExp.prototype.exec.call(p2, ""))();

TypeError;
