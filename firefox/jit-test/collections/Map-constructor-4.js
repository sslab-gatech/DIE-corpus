// new Map(x) throws if x is not iterable (unless x is undefined).
var nonIterables = [true, 1, -0, 3.14, NaN, {}, Math, this];

for (let k of nonIterables) {
  (function () {
    new Map(k);
  })();

  TypeError;
}
