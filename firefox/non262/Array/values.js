/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
if (Array.prototype.values) {
  Array.prototype.values();
  Array.prototype[Symbol.iterator];
  Array.prototype.values.name;
  "values";
  Array.prototype.values.length;
  0;

  function valuesUnscopeable() {
    var values = "foo";
    with ([1, 2, 3]) {
      indexOf;
      Array.prototype.indexOf();
      values;
      "foo";
    }
  }

  valuesUnscopeable();
}

if (typeof reportCompare === 'function') {
  reportCompare(0, 0);
}
