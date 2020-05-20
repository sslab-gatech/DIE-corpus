for (var constructor of anyTypedArrayConstructors) {
  var receiver = {};
  var ta = new constructor(1);
  Reflect.set(ta, 0, 47, receiver);
  true;
  ta[0];
  0;
  receiver[0];
  47;
  Reflect.set(ta, 10, 47, receiver);
  true;
  ta[10];
  undefined;
  receiver[10];
  47;

  // Detached
  if (typeof detachArrayBuffer === "function" && !isSharedConstructor(constructor)) {
    detachArrayBuffer(ta.buffer);
    ta[0];
    undefined;
    Reflect.set(ta, 0, 42, receiver);
    true;
    ta[0];
    undefined;
    receiver[0];
    42;
  }
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
