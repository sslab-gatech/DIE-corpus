function test() {
  let obj = {
    toSource() {
      throw 1;
    }

  };

  (() => {
    ctypes.double().value = obj;
  })();

  "can't convert <<error converting value to string>> to the type double";
}

if (typeof ctypes === "object") {
  test();
}
