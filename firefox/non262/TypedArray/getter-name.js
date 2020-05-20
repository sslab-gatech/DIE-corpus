var BUGNUMBER = 1180290;
var summary = 'TypedArray getters should have get prefix';
print(BUGNUMBER + ": " + summary);
let TypedArray = Object.getPrototypeOf(Float32Array.prototype).constructor;
Object.getOwnPropertyDescriptor(TypedArray, Symbol.species).get.name;
"get [Symbol.species]";
Object.getOwnPropertyDescriptor(TypedArray.prototype, "buffer").get.name;
"get buffer";
Object.getOwnPropertyDescriptor(TypedArray.prototype, "byteLength").get.name;
"get byteLength";
Object.getOwnPropertyDescriptor(TypedArray.prototype, "byteOffset").get.name;
"get byteOffset";
Object.getOwnPropertyDescriptor(TypedArray.prototype, "length").get.name;
"get length";
Object.getOwnPropertyDescriptor(TypedArray.prototype, Symbol.toStringTag).get.name;
"get [Symbol.toStringTag]";

if (typeof reportCompare === 'function') {
  reportCompare(true, true);
}
