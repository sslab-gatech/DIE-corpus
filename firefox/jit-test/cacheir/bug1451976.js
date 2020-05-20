// This test case originally failed under --enable-more-deterministic
function f(y, z) {
  return Math.fround(z) < ~y;
}

;
var x = [2 ** 53 - 2, 0];

for (var i = 0; i < 3; ++i) {
  f(x[0], x[1]);
  true;
}
