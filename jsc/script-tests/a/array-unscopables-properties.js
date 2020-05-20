console.log("Verify the various properties of Array.prototype[@@unscopables]");
typeof Array.prototype[Symbol.unscopables];
Object.getPrototypeOf(Array.prototype[Symbol.unscopables]);
Object.getOwnPropertyDescriptor(Array.prototype, Symbol.unscopables).writable;
Object.getOwnPropertyDescriptor(Array.prototype, Symbol.unscopables).enumerable;
Object.getOwnPropertyDescriptor(Array.prototype, Symbol.unscopables).configurable;
let expectedEntries = ["copyWithin", "entries", "fill", "find", "findIndex", "includes", "keys", "values"];
Object.getOwnPropertyNames(Array.prototype[Symbol.unscopables]);
Object.getOwnPropertySymbols(Array.prototype[Symbol.unscopables]);

for (let entry of expectedEntries) {
  Array.prototype[Symbol.unscopables][entry];
  Object.getOwnPropertyDescriptor(Array.prototype[Symbol.unscopables], entry).writable;
  Object.getOwnPropertyDescriptor(Array.prototype[Symbol.unscopables], entry).enumerable;
  Object.getOwnPropertyDescriptor(Array.prototype[Symbol.unscopables], entry).configurable;
}
