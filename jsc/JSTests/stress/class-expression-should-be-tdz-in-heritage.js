function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    ;
  }
}

shouldThrow(function () {
  class A extends A {}
}, `ReferenceError: Cannot access uninitialized variable.`);
