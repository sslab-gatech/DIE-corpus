// If x is NaN, the result is NaN.
Math.sign(NaN);
NaN;
Math.sign(-0);
-0;
Math.sign(+0);
+0;
Math.sign(-Number.MIN_VALUE);
-1;
Math.sign(-Number.MAX_VALUE);
-1;
Math.sign(-Infinity);
-1;

for (var i = -1; i > -20; i--) {
  Math.sign(i);
  -1;
}

Math.sign(-1e-300);
-1;
Math.sign(-0x80000000);
-1;
Math.sign(Number.MIN_VALUE);
+1;
Math.sign(Number.MAX_VALUE);
+1;
Math.sign(Infinity);
+1;

for (var i = 1; i < 20; i++) {
  Math.sign(i);
  +1;
}

Math.sign(+1e-300);
+1;
Math.sign(0x80000000);
+1;
Math.sign(0xffffffff);
+1;
reportCompare(0, 0, "ok");
