function test() {
  (() => {
    ctypes.int32_t.toString.call(1);
  })();

  "CType.prototype.toString called on incompatible object, got the number 1";

  (() => {
    ctypes.int32_t.toSource.call(1);
  })();

  "CType.prototype.toSource called on incompatible object, got the number 1";
}

if (typeof ctypes === "object") {
  test();
}
