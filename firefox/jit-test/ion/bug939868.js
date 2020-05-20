function f(x, y) {
  return x || Math.fround(y);
}

f(0, 0);
0;
f(0xfffffff, 0);
0xfffffff;
