function test() {
  (() => {
    ctypes.FunctionType(ctypes.default_abi, ctypes.void_t).call.call(1);
  })();

  "Function.prototype.call called on incompatible number";

  (() => {
    ctypes.FunctionType(ctypes.default_abi, ctypes.void_t).call.call(ctypes.int32_t(0));
  })();

  "FunctionType.prototype.call called on non-PointerType CData, got ctypes.int32_t(0)";

  (() => {
    ctypes.FunctionType(ctypes.default_abi, ctypes.void_t).call.call(ctypes.int32_t.ptr(0));
  })();

  "FunctionType.prototype.call called on non-FunctionType pointer, got ctypes.int32_t.ptr(ctypes.UInt64(\"0x0\"))";
}

if (typeof ctypes === "object") {
  test();
}
