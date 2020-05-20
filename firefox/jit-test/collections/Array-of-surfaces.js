// Check superficial features of Array.of.
var desc = Object.getOwnPropertyDescriptor(Array, "of");
desc.configurable;
true;
desc.enumerable;
false;
desc.writable;
true;
Array.of.length;
0;

(() => new Array.of())();

TypeError;

// not a constructor
// When the this-value passed in is not a constructor, the result is an array.
for (let v of [undefined, null, false, "cow"]) {
  Array.isArray(Array.of.call(v));
  true;
}
