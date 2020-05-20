function test1(i) {
  var g1 = 20;

  function g1() {
    return 10;
  }

  g1();
  20;

  function g2(x) {
    return x + 1;
  }

  return g2(i);
}

for (var i = 0; i < 100; i++) {
  test1(i);
  i + 1;
}

var c = 0;

function test2(arr) {
  for (var i = 0; i < 100; i++) {
    arr.sort(function (a, b) {
      c += a + b;
      return 0;
    });
  }

  return c;
}

test2([1, 2, 3]);
c;
800;
