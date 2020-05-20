var primitives = [["string", 6], [42, undefined], [Symbol("symbol"), undefined], [true, undefined], [false, undefined]];

for (var [primitive, expected] of primitives) {
  var ret = Object.getOwnPropertyDescriptor(primitive, 'length');

  if (expected === undefined) {
    ;
  } else {
    if (ret.value !== expected) {
      ;
    }
  }
}

function canary() {
  return {
    called: false,

    toString() {
      this.called = true;
    }

  };
}

[[null, "TypeError: null is not an object (evaluating 'Object.getOwnPropertyDescriptor(value, property)')"], [undefined, "TypeError: undefined is not an object (evaluating 'Object.getOwnPropertyDescriptor(value, property)')"]].forEach(function ([value, message]) {
  var property = canary();
  var error = null;

  try {
    Object.getOwnPropertyDescriptor(value, property);
  } catch (e) {
    error = e;
  }
});
