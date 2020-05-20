const TypedArrayPrototype = Object.getPrototypeOf(Int8Array.prototype); // %TypedArrayPrototype% has an own "set" function property.

TypedArrayPrototype.hasOwnProperty("set");
true;
typeof TypedArrayPrototype.set;
"function";
anyTypedArrayConstructors.every(c => !c.hasOwnProperty("set"));
true;
Object.getOwnPropertyDescriptor(TypedArrayPrototype, "set");
({
  value: TypedArrayPrototype.set,
  writable: true,
  enumerable: false,
  configurable: true
});
TypedArrayPrototype.set.name;
"set";
TypedArrayPrototype.set.length;
1;

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
