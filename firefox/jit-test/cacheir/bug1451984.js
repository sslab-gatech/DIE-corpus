// This test case originally failed only with --enable-more-deterministic
function f(x) {
  return Math.pow(Math.fround(Math.fround()), ~(x >>> 0));
}

f(-1);
1;
f(-1);
1;
f(-1);
1;
f(-1);
1;
