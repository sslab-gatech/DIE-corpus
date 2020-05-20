function test() {
  (() => {
    ctypes.void_t();
  })();

  "cannot construct from void_t";

  (() => {
    ctypes.CType();
  })();

  "cannot construct from abstract type";
}

if (typeof ctypes === "object") {
  test();
}
