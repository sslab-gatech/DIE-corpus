var nativeCode = "function () {\n    [native code]\n}";
var proxy = new Proxy(function () {
  ;
}, {});
Function.prototype.toString.call(proxy);
nativeCode;
var o = Proxy.revocable(function () {
  ;
}, {});
Function.prototype.toString.call(o.proxy);
nativeCode;
o.revoke();
Function.prototype.toString.call(o.proxy);
nativeCode;
