function test() {
  (() => {
    ctypes.StructType();
  })();

  "StructType takes one or two arguments";

  (() => {
    ctypes.StructType("a").define();
  })();

  "StructType.prototype.define takes one argument";

  (() => {
    ctypes.StructType("a", [])(1, 2, 3);
  })();

  "StructType constructor takes at most one argument";

  (() => {
    ctypes.StructType("a", [{
      "x": ctypes.int32_t
    }, {
      "y": ctypes.int32_t
    }, {
      "z": ctypes.int32_t
    }])(1, 2);
  })();

  "StructType constructor takes 0, 1, or 3 arguments";

  (() => {
    ctypes.StructType("a", [{
      "x": ctypes.int32_t
    }])().addressOfField();
  })();

  "StructType.prototype.addressOfField takes one argument";
}

if (typeof ctypes === "object") {
  test();
}
