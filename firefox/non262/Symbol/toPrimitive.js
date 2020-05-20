// ES6 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
// This method gets the primitive symbol from a Symbol wrapper object.
var sym = Symbol.for("truth");
var obj = Object(sym);
obj[Symbol.toPrimitive]("default");
sym;
obj[Symbol.toPrimitive]("number");
sym;
obj[Symbol.toPrimitive]("string");
sym;
obj[Symbol.toPrimitive]();
sym;
obj[Symbol.toPrimitive](Math.atan2);
sym;
sym[Symbol.toPrimitive]();
sym;
// Or a wrapper to a Symbol object in another compartment.
var obj2 = newGlobal().Object(sym);
obj2[Symbol.toPrimitive]("default");
sym;
// Otherwise a TypeError is thrown.
var symbolToPrimitive = Symbol.prototype[Symbol.toPrimitive];
var nonSymbols = [undefined, null, true, 13, NaN, "justice", {}, [sym], symbolToPrimitive, new Proxy(obj, {})];

for (var value of nonSymbols) {
  (() => symbolToPrimitive.call(value, "string"))();

  TypeError;
} // Surface features:


symbolToPrimitive.name;
"[Symbol.toPrimitive]";
var desc = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toPrimitive);
desc.configurable;
true;
desc.enumerable;
false;
desc.writable;
false;
reportCompare(0, 0);
