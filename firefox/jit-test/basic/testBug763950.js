(function () {
  var x;

  for (let j = 0; j < 1; j = j + 1) {
    x = function () {
      return j;
    };
  }

  x();
  0;
})();
