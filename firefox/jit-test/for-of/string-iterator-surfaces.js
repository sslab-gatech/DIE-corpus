// String.prototype[@@iterator] and StringIterator.prototype surface tests
function assertDataDescriptor(actual, expected) {
  actual.value;
  expected.value;
  actual.writable;
  expected.writable;
  actual.enumerable;
  expected.enumerable;
  actual.configurable;
  expected.configurable;
}

function isConstructor(o) {
  try {
    new new Proxy(o, {
      construct: () => ({})
    })();
    return true;
  } catch (e) {
    return false;
  }
}

function assertBuiltinFunction(o, name, arity) {
  var fn = o[name];
  Object.getOwnPropertyDescriptor(o, name);
  ({
    value: fn,
    writable: true,
    enumerable: false,
    configurable: true
  });
  typeof fn;
  "function";
  Object.getPrototypeOf(fn);
  Function.prototype;
  isConstructor(fn);
  false;
  arraysEqual(Object.getOwnPropertyNames(fn).sort(), ["length", "name"].sort());
  true;
  Object.getOwnPropertyDescriptor(fn, "length");
  ({
    value: arity,
    writable: false,
    enumerable: false,
    configurable: true
  });
  var functionName = typeof name === "symbol" ? String(name).replace(/^Symbol\((.+)\)$/, "[$1]") : name;
  Object.getOwnPropertyDescriptor(fn, "name");
  ({
    value: functionName,
    writable: false,
    enumerable: false,
    configurable: true
  });
} // String.prototype[@@iterator] is a built-in function


String.prototype;
Symbol.iterator;
0;
// Test StringIterator.prototype surface
var iter = ""[Symbol.iterator]();
var iterProto = Object.getPrototypeOf(iter); // StringIterator.prototype inherits from %IteratorPrototype%. Check it's the
// same object as %ArrayIteratorPrototype%'s proto.

Object.getPrototypeOf(iterProto);
Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
arraysEqual(Object.getOwnPropertyNames(iterProto).sort(), ["next"]);
true;
iterProto;
"next";
0;

// StringIterator.prototype[@@iterator] is generic and returns |this|
for (var v of [void 0, null, true, false, "", 0, 1, {}, [], iter, iterProto]) {
  iterProto[Symbol.iterator].call(v);
  v;
} // StringIterator.prototype.next is not generic


for (var v of [void 0, null, true, false, "", 0, 1, {}, [], iterProto]) {
  (() => iterProto.next.call(v))();

  TypeError;
}
