console.log("This tests Symbol object behaviors."); // Symbol constructor cannot be called with `new` style.
// To create Symbol object, call `Object(symbol)`.

try {
  new Symbol();
} catch (e) {
  ;
}

try {
  new Symbol('Cappuccino');
} catch (e) {
  ;
}

var symbolObject = Object(Symbol.iterator);
symbolObject instanceof Symbol; // Since Symbol object's @@toPrimitive returns Symbol value,
// ToString(symbol) will be called.

try {
  String(symbolObject);
} catch (e) {
  ;
}

symbolObject.toString();
var object = {};
object[symbolObject] = 42; // ToPropertyKey(symbolObject) will call toPrimitive(symbolObject), and toPrimitive(symbolObject) will return symbol primitive value. As a result, object[symbolObject] equals to object[symbol in the symbolObject].

object[symbolObject];
object['Symbol(Symbol.iterator)'];
object[Symbol.iterator];
var symbol = Symbol("Matcha");
object[symbol] = 'Cocoa';
object[symbol];
object[symbol.valueOf()];
object[Object(symbol)];
object['Matcha']; // ToObject will be called.

Symbol.iterator.hello;
successfullyParsed = true;
