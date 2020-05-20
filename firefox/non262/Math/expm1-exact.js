// Properties of Math.expm1 that are guaranteed by the spec.
// If x is NaN, the result is NaN.
Math.expm1(NaN);
NaN;
Math.expm1(+0);
+0;
Math.expm1(-0);
-0;
Math.expm1(Infinity);
Infinity;
Math.expm1(-Infinity);
-1;
reportCompare(0, 0, "ok");
