console.log("This tests that ToString(Symbol) behaviors.");
String(Symbol.iterator);

try {
  String(Symbol.prototype);
} catch (e) {
  ;
}

Symbol.prototype.toString.call(Symbol.iterator);
Symbol.prototype.toString.call(Symbol('hello'));
Symbol.prototype.toString.call(Symbol());
Object.prototype.toString.call(Symbol());
Object.prototype.toString.call(Symbol.prototype);
Object.prototype.toString.call(Symbol);
successfullyParsed = true;
