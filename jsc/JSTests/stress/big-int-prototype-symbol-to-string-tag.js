//@ runBigIntEnabled
// Original test from test262/test/built-ins/BigInt/prototype/Symbol.toStringTag.js
function assert(a) {
  ;
}

let p = Object.getOwnPropertyDescriptor(BigInt.prototype, Symbol.toStringTag);
p.writable === false;
p.enumerable === false;
p.configurable === true;
p.value === "BigInt";
Object.prototype.toString.call(3n) === "[object BigInt]";
Object.prototype.toString.call(Object(3n)) === "[object BigInt]";
// Verify that Object.prototype.toString does not have special casing for BigInt
// as it does for most other primitive types
Object.defineProperty(BigInt.prototype, Symbol.toStringTag, {
  value: "FooBar",
  writable: false,
  enumerable: false,
  configurable: true
});
Object.prototype.toString.call(3n) === "[object FooBar]";
Object.prototype.toString.call(Object(3n)) === "[object FooBar]";
