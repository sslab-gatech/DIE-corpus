function test() {
  (() => {
    ctypes.PointerType();
  })();

  "PointerType takes one argument";

  (() => {
    ctypes.int32_t.ptr(1, 2, 3, 4);
  })();

  "PointerType constructor takes 0, 1, 2, or 3 arguments";
}

if (typeof ctypes === "object") {
  test();
}
