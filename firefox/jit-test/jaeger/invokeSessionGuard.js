[1, 2, 3, 4, 5, 6, 7, 8].forEach(function (x) {
  // evalInFrame means lightweight gets call obj
  evalInFrame(0, "x");
  x;
});
