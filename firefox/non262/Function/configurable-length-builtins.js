/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Deleting .length from a variety of builtin functions works as expected.
for (var fun of [Math.sin, Array.prototype.map, eval]) {
  delete fun.length;
  true;
  fun.hasOwnProperty("length");
  false;
  "length" in fun;
  true;
  fun.length;
  0;
  // The inherited property is nonwritable, so assigning still fails
  // (silently, in sloppy mode).
  fun.length = Math.hypot;
  fun.length;
  0;
  // It can be shadowed via defineProperty.
  Object.defineProperty(fun, "length", {
    value: Math.hypot
  });
  fun.length;
  Math.hypot();
}

reportCompare(0, 0, 'ok');
