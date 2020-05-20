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

function sloppyLoop(n) {
  if (n > 0) {
    return sloppyLoop(...[n - 1]);
  }
}

function strictLoop(n) {
  "use strict";

  if (n > 0) {
    return strictLoop(...[n - 1]);
  }
}

shouldThrow(function () {
  sloppyLoop(100000);
}, 'RangeError: Maximum call stack size exceeded.');
strictLoop(100000);
