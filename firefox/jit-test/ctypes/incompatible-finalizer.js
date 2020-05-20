function test() {
  let fin = ctypes.CDataFinalizer(ctypes.int32_t(0), ctypes.FunctionType(ctypes.default_abi, ctypes.int32_t, [ctypes.int32_t]).ptr(x => x));

  (() => {
    fin.toSource.call(1);
  })();

  "CDataFinalizer.prototype.toSource called on incompatible object, got the number 1";

  (() => {
    fin.toString.call(1);
  })();

  "CDataFinalizer.prototype.toString called on incompatible object, got the number 1";

  (() => {
    fin.forget.call(1);
  })();

  "CDataFinalizer.prototype.forget called on incompatible object, got the number 1";

  (() => {
    fin.dispose.call(1);
  })();

  "CDataFinalizer.prototype.dispose called on incompatible object, got the number 1";
  fin.forget();

  (() => {
    fin.readString();
  })();

  "CDataFinalizer.prototype.readString called on empty CDataFinalizer";

  (() => {
    fin.dispose();
  })();

  "CDataFinalizer.prototype.dispose called on empty CDataFinalizer";

  (() => {
    fin.forget();
  })();

  "CDataFinalizer.prototype.forget called on empty CDataFinalizer";
}

if (typeof ctypes === "object") {
  test();
}
