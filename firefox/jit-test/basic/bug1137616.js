// Accessing a name that isn't a global property is a ReferenceError,
// even if a proxy is on the global's prototype chain.
var g = newGlobal();

if (globalPrototypeChainIsMutable()) {
  g.__proto__ = {};
}

(() => g.eval("s += ''"))();

g.ReferenceError;
