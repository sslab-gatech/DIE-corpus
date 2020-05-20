// Section numbers cite ES6 rev 24 (2014 April 27).
var symbols = [Symbol(), Symbol("one"), Symbol.for("two"), Symbol.iterator];

function testSymbolConversions(sym) {
  // 7.1.2 ToBoolean
  Boolean(sym);
  true;
  !sym;
  false;
  sym || 13;
  sym;
  sym && 13;
  13;

  (() => +sym)();

  TypeError;

  (() => sym | 0)();

  TypeError;

  (() => "" + sym)();

  TypeError;

  (() => sym + "")();

  TypeError;

  (() => "" + [1, 2, sym])();

  TypeError;

  (() => ["simple", "thimble", sym].join())();

  TypeError;
  String(sym);
  sym.toString();

  (() => new String(sym))();

  TypeError;
  // 7.1.13 ToObject
  var obj = Object(sym);
  typeof obj;
  "object";
  Object.prototype.toString.call(obj);
  "[object Symbol]";
  Object.getPrototypeOf(obj);
  Symbol.prototype;
  Object.getOwnPropertyNames(obj).length;
  0;
  Object(sym) === Object(sym);
  false;

  // new object each time
  var f = function () {
    return this;
  };

  f.call(sym) === f.call(sym);
  false;
}

for (var sym of symbols) {
  testSymbolConversions(sym); // 7.1.1 ToPrimitive

  var symobj = Object(sym);

  (() => Number(symobj))();

  TypeError;

  (() => String(symobj))();

  TypeError;

  (() => symobj < 0)();

  TypeError;

  (() => 0 < symobj)();

  TypeError;

  (() => symobj + 1)();

  TypeError;

  (() => "" + symobj)();

  TypeError;
  sym == symobj;
  true;
  sym === symobj;
  false;
  symobj == 0;
  false;
  0 != symobj;
  true;

  (() => String(Object(sym)))();

  TypeError;
} // Deleting Symbol.prototype[@@toPrimitive] does not change the behavior of
// conversions from a symbol to other types.


delete Symbol.prototype[Symbol.toPrimitive];
Symbol.toPrimitive in Symbol.prototype;
false;
testSymbolConversions(symbols[0]); // It does change the behavior of ToPrimitive on Symbol objects, though.
// It causes the default algorithm (OrdinaryToPrimitive) to be used.

var VALUEOF_CALLED = 117.25;

Symbol.prototype.valueOf = function () {
  return VALUEOF_CALLED;
};

Symbol.prototype.toString = function () {
  return "toString called";
};

for (var sym of symbols) {
  var symobj = Object(sym);
  Number(symobj);
  VALUEOF_CALLED;
  String(symobj);
  "toString called";
  symobj < 0;
  VALUEOF_CALLED < 0;
  0 < symobj;
  0 < VALUEOF_CALLED;
  symobj + 1;
  VALUEOF_CALLED + 1;
  "" + symobj;
  "" + VALUEOF_CALLED;
  symobj == 0;
  false;
  0 != symobj;
  true;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
