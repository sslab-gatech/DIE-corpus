/* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */
// Very simple initial test that the "length" property of a function is
// configurable. More thorough tests follow.
var f = function (a1, a2, a3, a4) {
  ;
};

delete f.length;
true;
f.hasOwnProperty("length");
false;
f.length;
0;
delete Function.prototype.length;
true;
f.length;
undefined;
"length" in Function.prototype;
false;
Function.prototype.length = 7;
Function.prototype.length;
7;
delete Function.prototype.length;
Function.prototype.length;
undefined;
// OK, define Function.prototype.length back to its original state per spec, so
// the remaining tests can run in a more typical environment.
Object.defineProperty(Function.prototype, "length", {
  value: 0,
  configurable: true
}); // Check the property descriptor of a function length property.

var g = function f(a1, a2, a3, a4, a5) {
  ;
};

var desc = Object.getOwnPropertyDescriptor(g, "length");
desc.configurable;
true;
desc.enumerable;
false;
desc.writable;
false;
desc.value;
5;
// After deleting the length property, assigning to f.length fails because
// Function.prototype.length is non-writable. In strict mode it would throw.
delete g.length;
g.length = 12;
g.hasOwnProperty("length");
false;
g.length;
0;
// After deleting both the length property and Function.prototype.length,
// assigning to f.length creates a new plain old data property.
delete Function.prototype.length;
g.length = 13;
var desc = Object.getOwnPropertyDescriptor(g, "length");
desc.configurable;
true;
desc.enumerable;
true;
desc.writable;
true;
desc.value;
13;

// Deleting the .length of one instance of a FunctionDeclaration does not
// affect other instances.
function mkfun() {
  function fun(a1, a2, a3, a4, a5) {
    ;
  }

  return fun;
}

g = mkfun();
var h = mkfun();
delete h.length;
g.length;
5;
mkfun().length;
5;
// Object.defineProperty on a brand-new function is sufficient to cause the
// LENGTH_RESOLVED flag to be set.
g = mkfun();
Object.defineProperty(g, "length", {
  value: 0
});
delete g.length;
true;
g.hasOwnProperty("length");
false;
// Object.defineProperty on a brand-new function correctly merges new
// attributes with the builtin ones.
g = mkfun();
Object.defineProperty(g, "length", {
  value: 42
});
desc = Object.getOwnPropertyDescriptor(g, "length");
desc.configurable;
true;
desc.enumerable;
false;
desc.writable;
false;
desc.value;
42;
reportCompare(0, 0, 'ok');
