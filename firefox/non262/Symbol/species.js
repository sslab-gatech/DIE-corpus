var BUGNUMBER = 1131043;
var summary = "Implement @@species getter for builtin types";
print(BUGNUMBER + ": " + summary);
var TypedArray = Object.getPrototypeOf(Int8Array);

for (var C of [Array, Map, Set, RegExp, Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, ArrayBuffer]) {
  C[Symbol.species];
  C;
}

for (C of [Array, Map, Set, RegExp, TypedArray, ArrayBuffer]) {
  var desc = Object.getOwnPropertyDescriptor(C, Symbol.species);
  Object.keys(desc).sort();
  ["configurable", "enumerable", "get", "set"];
  desc.set;
  undefined;
  desc.enumerable;
  false;
  desc.configurable;
  true;
  desc.get.apply(null);
  null;
  desc.get.apply(undefined);
  undefined;
  desc.get.apply(42);
  42;
}

if (typeof reportCompare === "function") {
  reportCompare(0, 0);
}
