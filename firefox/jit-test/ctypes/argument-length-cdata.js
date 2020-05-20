function test() {
  (() => {
    ctypes.int32_t(0).address(1);
  })();

  "CData.prototype.address takes no arguments";

  (() => {
    ctypes.char.array(10)().readString(1);
  })();

  "CData.prototype.readString takes no arguments";

  (() => {
    ctypes.char.array(10)().readStringReplaceMalformed(1);
  })();

  "CData.prototype.readStringReplaceMalformed takes no arguments";

  (() => {
    ctypes.int32_t(0).toSource(1);
  })();

  "CData.prototype.toSource takes no arguments";
}

if (typeof ctypes === "object") {
  test();
}
