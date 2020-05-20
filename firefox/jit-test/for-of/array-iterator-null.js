// Array.prototype.iterator applied to undefined or null throws directly.
for (var v of [undefined, null]) {
  // ES6 draft 2013-09-05 section 22.1.5.1.
  (function () {
    Array.prototype[Symbol.iterator].call(v);
  })();

  TypeError;

  (function () {
    Array.prototype.keys.call(v);
  })();

  TypeError;

  (function () {
    Array.prototype.entries.call(v);
  })();

  TypeError;
}
