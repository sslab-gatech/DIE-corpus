var primitives = [["string", ['0', '1', '2', '3', '4', '5']], [42, []], [Symbol("symbol"), []], [true, []], [false, []]];

function compare(ax, bx) {
  if (ax.length !== bx.length) {
    return false;
  }

  for (var i = 0, iz = ax.length; i < iz; ++i) {
    if (ax[i] !== bx[i]) {
      return false;
    }
  }

  return true;
}

for (var [primitive, expected] of primitives) {
  var ret = Object.keys(primitive);

  if (!compare(ret, expected)) {
    ;
  }
}

[[null, "TypeError: null is not an object (evaluating 'Object.keys(value)')"], [undefined, "TypeError: undefined is not an object (evaluating 'Object.keys(value)')"]].forEach(function ([value, message]) {
  var error = null;

  try {
    Object.keys(value);
  } catch (e) {
    error = e;
  }
});
