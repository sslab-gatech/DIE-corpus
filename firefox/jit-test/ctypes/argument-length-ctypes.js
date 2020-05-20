function test() {
  (() => {
    ctypes.cast();
  })();

  "ctypes.cast takes two arguments";

  (() => {
    ctypes.getRuntime();
  })();

  "ctypes.getRuntime takes one argument";
}

if (typeof ctypes === "object") {
  test();
}
