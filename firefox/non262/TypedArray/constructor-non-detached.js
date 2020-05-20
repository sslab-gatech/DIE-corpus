for (var constructor of typedArrayConstructors) {
  var buf = new constructor();
  detachArrayBuffer(buf.buffer);

  (() => new constructor(buf))();

  TypeError;
  var buffer = new ArrayBuffer();
  detachArrayBuffer(buffer);

  (() => new constructor(buffer))();

  TypeError;
}

if (typeof reportCompare === "function") {
  reportCompare(true, true);
}
