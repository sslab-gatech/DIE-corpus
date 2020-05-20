function assertThrowsReferenceError(f) {
  var e = null;

  try {
    f();
  } catch (ex) {
    e = ex;
  }

  e instanceof ReferenceError;
  true;
} // TDZ is effectful, don't optimize out x.


(function () {
  x;
  let x;
})();

(function () {
  x;
  const x = undefined;
})();
