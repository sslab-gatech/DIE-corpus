function test() {
  (() => {
    ctypes.FunctionType();
  })();

  "FunctionType takes two or three arguments";

  (() => {
    ctypes.FunctionType(ctypes.default_abi, ctypes.void_t, []).ptr({}, 1);
  })();

  "FunctionType constructor takes one argument";
}

if (typeof ctypes === "object") {
  test();
}
