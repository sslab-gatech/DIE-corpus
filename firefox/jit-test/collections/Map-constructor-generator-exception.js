// Iterating over the argument to Map can throw. The exception is propagated.
function* data2() {
  yield [{}, "XR22/Z"];
  yield [{}, "23D-BN"];
  throw "oops";
}

var it = data2();

(function () {
  new Map(it);
})();

"oops";
