for (var constructor of anyTypedArrayConstructors) {
  (() => constructor())();

  TypeError;

  (() => constructor(1))();

  TypeError;

  (() => constructor.call(null))();

  TypeError;

  (() => constructor.apply(null, []))();

  TypeError;

  (() => Reflect.apply(constructor, null, []))();

  TypeError;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
