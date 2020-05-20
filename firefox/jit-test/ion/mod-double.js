function test1() {
  function mod(x, y) {
    return x % y;
  }

  for (var i = 0; i < 60; i++) {
    mod(4, 2);
    0;
    mod(5.5, 2.5);
    0.5;
    mod(10.3, 0);
    NaN;
    mod(-0, -3);
    -0;
  }
}

test1();
