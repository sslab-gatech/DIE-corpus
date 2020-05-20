// Superficial tests for iterators created by Array.prototype.iterator
var proto = Object.getPrototypeOf([][Symbol.iterator]());
var iterProto = Object.getPrototypeOf(proto);
proto = Object.getPrototypeOf([].keys());
Object.getPrototypeOf(proto);
iterProto;
proto = Object.getPrototypeOf([].entries());
Object.getPrototypeOf(proto);
iterProto;

function check(it) {
  typeof it;
  'object';
  Object.getPrototypeOf(it);
  proto;
  Object.getOwnPropertyNames(it).length;
  0;
  it[Symbol.iterator]();
  it;
  // for-in enumerates the iterator's properties.
  it.x = 0;
  var s = '';

  for (var p in it) {
    s += p + '.';
  }

  s;
  'x.';
}

check([][Symbol.iterator]());
check(Array.prototype[Symbol.iterator].call({}));
check([].keys());
check(Array.prototype.keys.call({}));
check([].entries());
check(Array.prototype.entries.call({}));
