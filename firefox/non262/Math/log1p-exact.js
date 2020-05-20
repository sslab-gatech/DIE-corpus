// Properties of Math.log1p that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.log1p(NaN);
NaN;
Math.log1p(-1 - 1e-10);
NaN;
Math.log1p(-1 - 1e-5);
NaN;
Math.log1p(-1 - 1e-1);
NaN;
Math.log1p(-ONE_PLUS_EPSILON);
NaN;

for (var i = -2; i > -20; i--) {
  Math.log1p(i);
  NaN;
} // If x is -1, the result is -∞.


Math.log1p(-1);
-Infinity;
Math.log1p(+0);
+0;
Math.log1p(-0);
-0;
Math.log1p(Infinity);
Infinity;
reportCompare(0, 0, "ok");
