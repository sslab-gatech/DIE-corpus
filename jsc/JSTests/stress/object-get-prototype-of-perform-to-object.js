var primitives = [["string", String.prototype], [42, Number.prototype], [Symbol("symbol"), Symbol.prototype], [true, Boolean.prototype], [false, Boolean.prototype]];

for (var [primitive, expected] of primitives) {
  var ret = Object.getPrototypeOf(primitive);
}

[[null, "TypeError: null is not an object (evaluating 'Object.getPrototypeOf(value)')"], [undefined, "TypeError: undefined is not an object (evaluating 'Object.getPrototypeOf(value)')"]].forEach(function ([value, message]) {
  var error = null;

  try {
    Object.getPrototypeOf(value);
  } catch (e) {
    error = e;
  }
});
