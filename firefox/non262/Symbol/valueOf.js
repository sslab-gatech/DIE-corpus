/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
var symbols = [Symbol(), Symbol("ok"), Symbol.for("dummies"), Symbol.iterator];

for (var sym of symbols) {
  sym.valueOf();
  sym;
  Object(sym).valueOf();
  sym;
} // Any other value throws.


var nonsymbols = [undefined, null, NaN, {}, Symbol.prototype];

for (var nonsym of nonsymbols) {
  (() => Symbol.prototype.valueOf.call(nonsym))();

  TypeError;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
