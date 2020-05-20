// for-of throws if the target is a typed array prototype object.
(function () {
  for (var v of Int8Array.prototype) {
    throw "FAIL";
  }
})();

TypeError;
