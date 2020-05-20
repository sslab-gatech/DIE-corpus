// Deleting String.prototype.iterator makes for-of stop working on strings.
delete String.prototype[Symbol.iterator];

(function () {
  for (var v of "abc") {
    ;
  }
})();

TypeError;

(function () {
  for (var v of new String("abc")) {
    ;
  }
})();

TypeError;
