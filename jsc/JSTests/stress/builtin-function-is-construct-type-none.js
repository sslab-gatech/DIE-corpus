function shouldThrow(func, message) {
  var error = null;

  try {
    func();
  } catch (e) {
    error = e;
  }
}

for (var i = 0; i < 10000; ++i) {
  shouldThrow(function () {
    new Array.prototype.forEach(function () {
      ;
    });
  }, "TypeError: function is not a constructor (evaluating 'new Array.prototype.forEach(function () { })')");
}
