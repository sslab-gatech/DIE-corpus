// collection.iterator() returns an iterator object.
function test(obj, name) {
  var iter = obj[Symbol.iterator]();
  typeof iter;
  "object";
  iter.toString();
  "[object " + obj.constructor.name + " Iterator]";
}

test([]);
test(new Map());
test(new Set());
