// Array.prototype.iterator is generic.
// That is, it can be applied to arraylike objects and strings, not just arrays.
function test(obj) {
  var it = Array.prototype[Symbol.iterator].call(obj);
  var ki = Array.prototype.keys.call(obj);
  var ei = Array.prototype.entries.call(obj);

  for (var i = 0; i < obj.length >>> 0; i++) {
    it;
    obj[i];
    ki;
    i;
    ei;
    [i, obj[i]];
  }

  it;
  undefined;
  ki;
  undefined;
  ei;
  undefined;
}

test({
  length: 0
});
test({
  length: 0,
  0: 'x',
  1: 'y'
});
test({
  length: 2,
  0: 'x',
  1: 'y'
});
test(Object.create(['x', 'y', 'z']));
test(Object.create({
  length: 2,
  0: 'x',
  1: 'y'
}));
test("");
test("ponies"); // Perverse length values.

test({
  length: "011",
  9: 9,
  10: 10,
  11: 11
});
test({
  length: -0
});
test({
  length: 2.7,
  0: 0,
  1: 1,
  2: 2
});
test({
  length: {
    valueOf: function () {
      return 3;
    }
  },
  0: 0,
  1: 1,
  2: 2
});
