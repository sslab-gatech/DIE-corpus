function test() {
  (() => {
    ctypes.cast(1, 2);
  })();

  "first argument of ctypes.cast must be a CData";

  (() => {
    ctypes.cast(ctypes.int32_t(0), 2);
  })();

  "second argument of ctypes.cast must be a CType";

  (() => {
    ctypes.getRuntime(1);
  })();

  "argument of ctypes.getRuntime must be a CType";
}

if (typeof ctypes === "object") {
  test();
}
