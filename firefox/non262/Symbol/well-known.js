/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
var names = ["isConcatSpreadable", "iterator", "match", "replace", "search", "species", "hasInstance", "split", "toPrimitive", "unscopables", "asyncIterator"];

for (var name of names) {
  // Well-known symbols exist.
  typeof Symbol[name];
  "symbol";
  Symbol[name] !== Symbol.for("Symbol." + name);
  true;

  // They are shared across realms.
  if (typeof Realm === 'function') {
    throw new Error("please update this test to use Realms");
  }

  if (typeof newGlobal === 'function') {
    var g = newGlobal();
    Symbol[name];
    g.Symbol[name];
  } // Descriptor is all false.


  var desc = Object.getOwnPropertyDescriptor(Symbol, name);
  typeof desc.value;
  "symbol";
  desc.writable;
  false;
  desc.enumerable;
  false;
  desc.configurable;
  false;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
