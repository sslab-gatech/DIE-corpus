function t() {
  var a = arguments;
  Object.defineProperty(a, "length", {
    value: 0
  });

  for (var i = 0; i < 5; i++) {
    a.length;
    0;
  }

  var desc = Object.getOwnPropertyDescriptor(a, "length");
  desc.value;
  0;
  desc.writable;
  true;
  desc.enumerable;
  false;
  desc.configurable;
  true;
}

t();
