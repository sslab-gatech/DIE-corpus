/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Symbols can be shared across realms.
if (typeof Reflect !== "undefined" && typeof Reflect.Realm === "function") {
  throw new Error("Congratulations on implementing Reflect.Realm! " + "Please update this test to use it.");
}

if (typeof newGlobal === "function") {
  var g = newGlobal();
  var gj = g.eval("jones = Symbol('jones')");
  typeof gj;
  "symbol";
  g.jones;
  g.jones;
  gj;
  g.jones;
  gj !== Symbol("jones");
  true;
  // A symbol can be round-tripped to another realm and back;
  // the result is the original symbol.
  var smith = Symbol("smith");
  g.smith = smith; // put smith into the realm

  g.smith;
  smith;
  Symbol.prototype.toString.call(gj);
  "Symbol(jones)";
  Symbol.prototype.toString.call(g.eval("Object(Symbol('brown'))"));
  "Symbol(brown)";
  g.Symbol.for("ponies");
  Symbol.for("ponies");
  g.eval("Symbol.for('rainbows')");
  Symbol.for("rainbows");
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
