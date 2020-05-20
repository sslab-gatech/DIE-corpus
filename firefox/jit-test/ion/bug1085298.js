function f(x, y) {
  return y | 0 && x ? y | 0 : 0;
}

m = [1];
f(m[0], m[0]);
1;
f(m[1], m[0]);
0;
f(m[2], m[0]);
0;
