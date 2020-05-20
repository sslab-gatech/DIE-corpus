/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Symbol(symbol) throws a TypeError.
var sym = Symbol();

(() => Symbol(sym))();

TypeError;
Symbol(undefined).toString();
"Symbol()";
Symbol(7).toString();
"Symbol(7)";
Symbol(true).toString();
"Symbol(true)";
Symbol(null).toString();
"Symbol(null)";
Symbol([1, 2]).toString();
"Symbol(1,2)";
var symobj = Object(sym);

(() => Symbol(symobj))();

TypeError;
var hits = 0;
var obj = {
  toString: function () {
    hits++;
    return "ponies";
  }
};
Symbol(obj).toString();
"Symbol(ponies)";
hits;
1;
Object.getPrototypeOf(Symbol.prototype);
Object.prototype;

(() => Symbol.prototype.valueOf())();

TypeError;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
