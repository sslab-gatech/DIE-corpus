// Properties of Math.atanh that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.atanh(NaN);
NaN;
Math.atanh(-ONE_PLUS_EPSILON);
NaN;
Math.atanh(-Number.MAX_VALUE);
NaN;
Math.atanh(-Infinity);
NaN;

for (var i = -5; i < -1; i += 0.1) {
  Math.atanh(i);
  NaN;
} // If x is greater than 1, the result is NaN.


Math.atanh(ONE_PLUS_EPSILON);
NaN;
Math.atanh(Number.MAX_VALUE);
NaN;
Math.atanh(Infinity);
NaN;

for (var i = +5; i > +1; i -= 0.1) {
  Math.atanh(i);
  NaN;
} // If x is −1, the result is −∞.


Math.atanh(-1);
-Infinity;
Math.atanh(+1);
Infinity;
Math.atanh(+0);
+0;
Math.atanh(-0);
-0;
reportCompare(0, 0, "ok");
