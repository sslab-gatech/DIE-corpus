function t() {
  var a = arguments;
  Object.defineProperty(a, Symbol.iterator, {
    writable: false,
    enumerable: true,
    configurable: false
  });

  for (var i = 0; i < 5; i++) {
    a[Symbol.iterator];
    Array.prototype[Symbol.iterator];
  }

  var desc = Object.getOwnPropertyDescriptor(a, Symbol.iterator);
  desc.value;
  Array.prototype[Symbol.iterator];
  desc.writable;
  false;
  desc.enumerable;
  true;
  desc.configurable;
  false;
}

t();
