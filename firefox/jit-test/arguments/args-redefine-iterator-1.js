function t() {
  var a = arguments;
  Object.defineProperty(a, Symbol.iterator, {});

  for (var i = 0; i < 5; i++) {
    a[Symbol.iterator];
    Array.prototype[Symbol.iterator];
  }

  var desc = Object.getOwnPropertyDescriptor(a, Symbol.iterator);
  desc.value;
  Array.prototype[Symbol.iterator];
  desc.writable;
  true;
  desc.enumerable;
  false;
  desc.configurable;
  true;
}

t();
