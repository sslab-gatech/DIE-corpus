function shouldThrow(func, errorMessage) {
  var errorThrown = false;
  var error = null;

  try {
    func();
  } catch (e) {
    errorThrown = true;
    error = e;
  }
}

shouldThrow(function () {
  function* fib(flag) {
    let a = 1;
    let b = 1;
    yield 42;

    if (flag) {
      return c;
    }

    let c = 500;
  }

  let value = 0;

  for (let i = 0; i < 1e4; ++i) {
    for (let v of fib(false)) {
      ;
    }
  }

  for (let v of fib(true)) {
    ;
  }
}, `ReferenceError: Cannot access uninitialized variable.`);
