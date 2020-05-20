function f() {
  return 4 >>> 0 > 0 % (1 == 2) >>> 0;
}

f();
true;
f();
true;
