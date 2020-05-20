function test() {
  (() => {
    ctypes.Int64(0).toString.call(1);
  })();

  "Int64.prototype.toString called on incompatible object, got the number 1";

  (() => {
    ctypes.Int64(0).toString.call(ctypes.int32_t(0));
  })();

  "Int64.prototype.toString called on non-Int64 CData";

  (() => {
    ctypes.Int64(0).toSource.call(1);
  })();

  "Int64.prototype.toSource called on incompatible object, got the number 1";

  (() => {
    ctypes.Int64(0).toSource.call(ctypes.int32_t(0));
  })();

  "Int64.prototype.toSource called on non-Int64 CData";

  (() => {
    ctypes.UInt64(0).toString.call(1);
  })();

  "UInt64.prototype.toString called on incompatible object, got the number 1";

  (() => {
    ctypes.UInt64(0).toString.call(ctypes.int32_t(0));
  })();

  "UInt64.prototype.toString called on non-UInt64 CData";

  (() => {
    ctypes.UInt64(0).toSource.call(1);
  })();

  "UInt64.prototype.toSource called on incompatible object, got the number 1";

  (() => {
    ctypes.UInt64(0).toSource.call(ctypes.int32_t(0));
  })();

  "UInt64.prototype.toSource called on non-UInt64 CData";
}

if (typeof ctypes === "object") {
  test();
}
