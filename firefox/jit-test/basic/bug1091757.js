try {
  (function () {
    let a = 3;
    let XY = XY;
    return function () {
      return a;
    };
  })();

  0;
  1;
} catch (e) {
  e instanceof ReferenceError;
  true;
  e.message.includes("XY");
  true;
}
