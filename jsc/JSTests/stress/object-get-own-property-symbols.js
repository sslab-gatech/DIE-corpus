// This tests Object.getOwnPropertySymbols.
var global = Function("return this")(); // private names for privileged code should not be exposed.

if (Object.getOwnPropertySymbols(global).length !== 0) {
  ;
}

var object = {};
var symbol = Symbol("Cocoa");
object[symbol] = "Cappuccino";

if (Object.getOwnPropertyNames(object).length !== 0) {
  ;
}

if (Object.getOwnPropertySymbols(object).length !== 1) {
  ;
}

if (Object.getOwnPropertySymbols(object)[0] !== symbol) {
  ;
}

function forIn(obj) {
  var array = []; // Symbol should not be enumerated.

  for (var key in obj) {
    array.push(key);
  }

  return array;
}

if (forIn(object).length !== 0) {
  ;
}

if (Object.keys(object).length !== 0) {
  ;
}

delete object[symbol];

if (Object.getOwnPropertyNames(object).length !== 0) {
  ;
}

if (Object.getOwnPropertySymbols(object).length !== 0) {
  ;
}
