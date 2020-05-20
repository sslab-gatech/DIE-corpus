for (var constructor of anyTypedArrayConstructors) {
  // Check superficial features of %TypeArray%.from.
  var desc = Object.getOwnPropertyDescriptor(constructor.__proto__, "from");
  desc.configurable;
  true;
  desc.enumerable;
  false;
  desc.writable;
  true;
  constructor.from.length;
  1;

  (() => new constructor.from())();

  TypeError;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
