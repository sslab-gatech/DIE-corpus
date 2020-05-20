function f() {
  var [[x], e] = ["*", "/", "%"];

  function h() {
    for (var i = 0; i < 5; ++i) {
      x = i * 2;
    }
  }

  h();
  x;
  8;
}

f();
