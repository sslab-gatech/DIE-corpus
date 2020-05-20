/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// To JSON.stringify, symbols are the same as undefined.
var symbols = [Symbol(), Symbol.for("ponies"), Symbol.iterator];

for (var sym of symbols) {
  JSON.stringify(sym);
  undefined;
  JSON.stringify([sym]);
  "[null]";
  JSON.stringify({
    x: sym
  });
  '{}';

  // However such properties are passed to the replacerFunction if any.
  var replacer = function (key, val) {
    typeof this;
    "object";

    if (typeof val === "symbol") {
      val;
      sym;
      return "ding";
    }

    return val;
  };

  JSON.stringify(sym, replacer);
  '"ding"';
  JSON.stringify({
    x: sym
  }, replacer);
  '{"x":"ding"}';
}

if (typeof reportCompare === 'function') {
  reportCompare(0, 0, 'ok');
}
