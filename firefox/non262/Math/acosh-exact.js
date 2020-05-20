// Properties of Math.acosh that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.acosh(NaN);
NaN;
Math.acosh(ONE_MINUS_EPSILON);
NaN;
Math.acosh(Number.MIN_VALUE);
NaN;
Math.acosh(+0);
NaN;
Math.acosh(-0);
NaN;
Math.acosh(-Number.MIN_VALUE);
NaN;
Math.acosh(-1);
NaN;
Math.acosh(-Number.MAX_VALUE);
NaN;
Math.acosh(-Infinity);
NaN;

for (var i = -20; i < 1; i++) {
  Math.acosh(i);
  NaN;
} // If x is 1, the result is +0.


Math.acosh(1);
+0;
Math.acosh(Number.POSITIVE_INFINITY);
Number.POSITIVE_INFINITY;
reportCompare(0, 0, "ok");
