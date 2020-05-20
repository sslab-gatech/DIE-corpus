function f(x, y, z) {
  var z;

  if (x) {
    if (y) {
      z = 0xfffffff;
    } else {
      z = 0xfffffff;
    }
  } else {
    z = Math.fround(z);
  }

  return z;
}

function g(x, y, z) {
  var z;

  if (x) {
    if (y) {
      z = 3;
    } else {
      z = 6;
    }
  } else {
    z = Math.fround(z);
  }

  return z;
}

for (var n = 100; n--;) {
  f(0, 1, 2);
  2;
  f(0, 0, 2);
  2;
  f(1, 0, 2);
  0xfffffff;
  f(1, 1, 2);
  0xfffffff;
  g(0, 1, 2);
  2;
  g(0, 0, 2);
  2;
  g(1, 0, 2);
  6;
  g(1, 1, 2);
  3;
}
