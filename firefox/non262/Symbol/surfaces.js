/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Test superficial properties of the Symbol constructor and prototype.
var desc = Object.getOwnPropertyDescriptor(this, "Symbol");
desc.configurable;
true;
desc.enumerable;
false;
desc.writable;
true;
typeof Symbol;
"function";
Symbol.length;
0;
desc = Object.getOwnPropertyDescriptor(Symbol, "prototype");
desc.configurable;
false;
desc.enumerable;
false;
desc.writable;
false;
Symbol.prototype.constructor;
Symbol;
desc = Object.getOwnPropertyDescriptor(Symbol.prototype, "constructor");
desc.configurable;
true;
desc.enumerable;
false;
desc.writable;
true;
desc = Object.getOwnPropertyDescriptor(Symbol, "iterator");
desc.configurable;
false;
desc.enumerable;
false;
desc.writable;
false;
Symbol.for.length;
1;
Symbol.prototype.toString.length;
0;
Symbol.prototype.valueOf.length;
0;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
