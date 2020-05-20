// An exception thrown from a proxy trap while getting the .iterator method is propagated.
var p = new Proxy({}, {
  get(target, property) {
    if (property === Symbol.iterator) {
      throw "fit";
    }

    return undefined;
  }

});

(function () {
  for (var v of p) {
    ;
  }
})();

"fit";
