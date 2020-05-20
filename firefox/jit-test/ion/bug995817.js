let r;

(function () {
  function f() {
    return 1 + -1 / 0 << null;
  }

  f();
  0;
  f();
  0;

  function g(x, y) {
    var a = x | 0;
    var b = y | 0;
    return a / b + a / b | 0;
  }

  g(3, 4);
  1;
  g(3, 4);
  1;
})();
