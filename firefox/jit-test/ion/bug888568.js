function f() {
  return 42.0 + Math.abs(1.0e60) | 0;
}

f();
0;
f();
0;
