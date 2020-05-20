/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Symbol.for called twice with the same argument returns the same symbol.
Symbol.for("ponies");
Symbol.for("ponies");
// Called twice with equal strings: still the same result.
var one = Array(64 + 1).join("x");
var two = Array(8 + 1).join(Array(8 + 1).join("x"));
Symbol.for(one);
Symbol.for(two);
// Symbols created by calling Symbol() are not in the symbol registry.
var sym = Symbol("123");
Symbol.for("123") !== sym;
true;
typeof Symbol.for("");
"symbol";
Symbol.for(3);
Symbol.for("3");
Symbol.for(null);
Symbol.for("null");
Symbol.for(undefined);
Symbol.for("undefined");
Symbol.for();
Symbol.for("undefined");
// Symbol.for ignores the 'this' value.
var foo = Symbol.for("foo");
Symbol.for.call(String, "foo");
foo;
Symbol.for.call(3.14, "foo");
foo;

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
