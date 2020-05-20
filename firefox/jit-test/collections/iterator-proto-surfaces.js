// Iterator prototype surfaces.
var iterProto = null;

function test(constructor) {
  var iter = new constructor()[Symbol.iterator]();
  Reflect.ownKeys(iter);
  [];
  // Iterator prototypes only have a .next and @@toStringTag property.
  var proto1 = Object.getPrototypeOf(iter);
  Reflect.ownKeys(proto1);
  ['next', Symbol.toStringTag];
  var desc = Object.getOwnPropertyDescriptor(proto1, 'next');
  desc.configurable;
  true;
  desc.enumerable;
  false;
  desc.writable;
  true;
  // %IteratorPrototype%
  var proto2 = Object.getPrototypeOf(proto1);
  Object.getPrototypeOf(proto2);
  Object.prototype;
  Object.prototype.toString.call(proto2);
  "[object Object]";
  Reflect.ownKeys(proto2);
  [Symbol.iterator];
  proto2[Symbol.iterator]();
  proto2;

  // Check there's a single %IteratorPrototype% object.
  if (iterProto === null) {
    iterProto = proto2;
  } else {
    iterProto;
    proto2;
  }
}

test(Array);
test(String);
test(Map);
test(Set);
