var global = newGlobal({
  newCompartment: true
});
var fun = global.eval("(function() {})");
var p = new Proxy(fun, {}); // Nuking should preserve IsCallable and IsConstructor.

isConstructor(p);
true;
typeof p;
"function";
isConstructor(p);
true;
typeof p;
"function";

(() => {
  p();
})();

TypeError;

(() => {
  new p();
})();

TypeError;
