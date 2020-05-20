function f(y) {
  var x1 = Math.max(-2147483649 >> 0, y >>> 0);
  var x2 = x1 | 0;
  return x2 >= 0 ? 1 : 0;
}

f(0);
1;
f(-1);
0;
